"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import DashboardLayout from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { ArrowLeft } from "lucide-react"

export default function CreerCoursPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Formulaire
  const [titre, setTitre] = useState("")
  const [categorie, setCategorie] = useState("")
  const [description, setDescription] = useState("")
  const [lienCours, setLienCours] = useState("")
  const [referentiel, setReferentiel] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validation
    if (!titre || !categorie || !description || !lienCours || !referentiel) {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Veuillez remplir tous les champs obligatoires.",
      })
      return
    }

    setIsSubmitting(true)

    try {
      const token = localStorage.getItem("formateurToken") || localStorage.getItem("token")
      const user = JSON.parse(localStorage.getItem("user") || "{}")

      if (!token) {
        throw new Error("Non authentifié")
      }

      const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL

      const response = await fetch(`${API_BASE_URL}/cours`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          titre,
          categorie,
          description,
          lien_cours: lienCours,
          date_creation: new Date().toISOString(),
          referentiel: referentiel || user.referentiel,
          id_formateur: user.id,
        }),
      })

      if (!response.ok) {
        throw new Error("Erreur lors de la création du cours")
      }

      toast({
        title: "Cours créé",
        description: "Le cours a été créé avec succès.",
      })

      router.push("/formateur/cours")
    } catch (error) {
      console.error("Erreur:", error)
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Une erreur est survenue lors de la création du cours.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Créer un nouveau cours</h1>
            <p className="text-muted-foreground">Remplissez le formulaire ci-dessous pour créer un nouveau cours.</p>
          </div>
          <Link href="/formateur/cours">
            <Button variant="outline" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour
            </Button>
          </Link>
        </div>

        <form onSubmit={handleSubmit}>
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle>Informations du cours</CardTitle>
              <CardDescription>Entrez les détails du cours que vous souhaitez créer.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="titre">Titre du cours *</Label>
                <Input
                  id="titre"
                  value={titre}
                  onChange={(e) => setTitre(e.target.value)}
                  placeholder="Ex: Développement web avec React"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="categorie">Catégorie *</Label>
                <Select value={categorie} onValueChange={setCategorie}>
                  <SelectTrigger id="categorie">
                    <SelectValue placeholder="Sélectionner une catégorie" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Développement Web">Développement Web</SelectItem>
                    <SelectItem value="Développement Mobile">Développement Mobile</SelectItem>
                    <SelectItem value="Base de données">Base de données</SelectItem>
                    <SelectItem value="DevOps">DevOps</SelectItem>
                    <SelectItem value="Intelligence Artificielle">Intelligence Artificielle</SelectItem>
                    <SelectItem value="Cybersécurité">Cybersécurité</SelectItem>
                    <SelectItem value="Réseau">Réseau</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description *</Label>
                <Textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Décrivez le contenu et les objectifs du cours..."
                  rows={4}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="lienCours">Lien du cours *</Label>
                <Input
                  id="lienCours"
                  value={lienCours}
                  onChange={(e) => setLienCours(e.target.value)}
                  placeholder="https://example.com/cours"
                  required
                />
                <p className="text-xs text-muted-foreground">
                  Lien vers le contenu du cours (Google Docs, Notion, site web, etc.)
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="referentiel">Référentiel *</Label>
                <Select value={referentiel} onValueChange={setReferentiel}>
                  <SelectTrigger id="referentiel">
                    <SelectValue placeholder="Sélectionner un référentiel" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="DWWM">Développeur Web et Web Mobile (DWWM)</SelectItem>
                    <SelectItem value="CDA">Concepteur Développeur d'Applications (CDA)</SelectItem>
                    <SelectItem value="CDUI">Concepteur Designer UI (CDUI)</SelectItem>
                    <SelectItem value="TIS">Technicien d'Infrastructure Sécurisée (TIS)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button
                type="button"
                variant="outline"
                onClick={() => router.push("/formateur/cours")}
                disabled={isSubmitting}
              >
                Annuler
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Création en cours..." : "Créer le cours"}
              </Button>
            </CardFooter>
          </Card>
        </form>

        <div className="text-sm text-muted-foreground">
          <p>* Champs obligatoires</p>
        </div>
      </div>
  )
}
