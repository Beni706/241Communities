"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import DashboardLayout from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useToast } from "@/components/ui/use-toast"

const API_URL = process.env.NEXT_PUBLIC_API_URL

export default function CreerApprenant() {
  const router = useRouter()
  const { toast } = useToast()

  const [nom, setNom] = useState("")
  const [prenom, setPrenom] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("1234") // Default password
  const [referentiel, setReferentiel] = useState("DEVELOPPEUR")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!nom || !prenom || !email || !referentiel) {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Veuillez remplir tous les champs obligatoires.",
      })
      return
    }

    setIsLoading(true)

    try {
      const token = localStorage.getItem("adminToken")

      if (!token) {
        throw new Error("Non authentifié")
      }

      // Créer l'apprenant
      const response = await fetch(`${API_URL}/apprenant`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          nom,
          prenom,
          email,
          password,
          referentiel,
        }),
      })

      if (!response.ok) {
        throw new Error("Erreur lors de la création de l'apprenant")
      }

      toast({
        title: "Apprenant créé",
        description: "L'apprenant a été créé avec succès.",
      })

      router.push("/admin/dashboard")
    } catch (error) {
      console.error("Error creating apprenant:", error)
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Une erreur est survenue lors de la création de l'apprenant.",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Créer un nouvel apprenant</h1>
          <p className="text-muted-foreground">Remplissez le formulaire ci-dessous pour créer un compte apprenant.</p>
        </div>

        <form onSubmit={handleSubmit}>
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle>Informations de l'apprenant</CardTitle>
              <CardDescription>Entrez les informations personnelles de l'apprenant.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="nom">Nom *</Label>
                  <Input
                    id="nom"
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                    placeholder="Nom de famille"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="prenom">Prénom *</Label>
                  <Input
                    id="prenom"
                    value={prenom}
                    onChange={(e) => setPrenom(e.target.value)}
                    placeholder="Prénom"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email@exemple.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Mot de passe</Label>
                <Input
                  id="password"
                  type="text"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Mot de passe"
                />
                <p className="text-xs text-muted-foreground">
                  Laissez le mot de passe par défaut (1234) ou définissez-en un personnalisé.
                </p>
              </div>

              <div className="space-y-2">
                <Label>Référentiel *</Label>
                <RadioGroup value={referentiel} onValueChange={setReferentiel} className="flex flex-col space-y-1">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="DEVELOPPEUR" id="developpeur" />
                    <Label htmlFor="developpeur">Développeur</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="DIGITAL_CREATOR" id="digital_creator" />
                    <Label htmlFor="digital_creator">Digital Creator</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="REFERENT_DIGITAL" id="referent_digital" />
                    <Label htmlFor="referent_digital">Référent Digital</Label>
                  </div>
                </RadioGroup>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button type="button" variant="outline" onClick={() => router.back()} disabled={isLoading}>
                Annuler
              </Button>
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "Création en cours..." : "Créer l'apprenant"}
              </Button>
            </CardFooter>
          </Card>
        </form>

        <div className="text-sm text-muted-foreground">
          <p>* Champs obligatoires</p>
          <p>L'apprenant pourra se connecter avec l'email et le mot de passe définis.</p>
        </div>
      </div>
    </DashboardLayout>
  )
}
