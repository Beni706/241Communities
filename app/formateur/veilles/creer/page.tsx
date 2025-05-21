"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import DashboardLayout from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"
import { useAuth } from "@/components/auth-provider"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { fr } from "date-fns/locale"

const API_URL = process.env.NEXT_PUBLIC_API_URL 

export default function CreerVeille() {
  const { user } = useAuth()
  const router = useRouter()
  const { toast } = useToast()

  const [titre, setTitre] = useState("")
  const [lien_docDonnee, setLienDocDonnee] = useState("")
  const [date_fin, setDateFin] = useState<Date | undefined>(undefined)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!titre || !lien_docDonnee || !date_fin) {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Veuillez remplir tous les champs obligatoires.",
      })
      return
    }

    setIsLoading(true)

    try {
      const token = localStorage.getItem("token")

      if (!token) {
        throw new Error("Non authentifié")
      }

      const response = await fetch(`${API_URL}/veille`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          titre,
          lien_docDonnee,
          date_creation: new Date().toISOString(),
          date_fin: date_fin?.toISOString(),
          id_formateur: user?.id,
        }),
      })

      if (!response.ok) {
        throw new Error("Erreur lors de la création de la veille")
      }

      const data = await response.json()

      toast({
        title: "Veille créée",
        description: "La veille a été créée avec succès.",
      })

      router.push("/formateur/veilles")
    } catch (error) {
      console.error("Error creating veille:", error)
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Une erreur est survenue lors de la création de la veille.",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Créer une nouvelle veille</h1>
          <p className="text-muted-foreground">Remplissez le formulaire ci-dessous pour créer une nouvelle veille.</p>
        </div>

        <form onSubmit={handleSubmit}>
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle>Informations de la veille</CardTitle>
              <CardDescription>Entrez les informations de la veille à assigner aux apprenants.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="titre">Titre de la veille *</Label>
                <Input
                  id="titre"
                  value={titre}
                  onChange={(e) => setTitre(e.target.value)}
                  placeholder="Ex: Veille sur les frameworks JavaScript"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="lien_docDonnee">Lien vers le document Google *</Label>
                <Input
                  id="lien_docDonnee"
                  value={lien_docDonnee}
                  onChange={(e) => setLienDocDonnee(e.target.value)}
                  placeholder="https://docs.google.com/document/d/..."
                  required
                />
                <p className="text-xs text-muted-foreground">
                  Lien vers un document Google Doc ou Slide contenant les instructions.
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="date_fin">Date limite de rendu *</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start text-left font-normal" id="date_fin">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date_fin ? format(date_fin, "PPP", { locale: fr }) : <span>Sélectionner une date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date_fin}
                      onSelect={setDateFin}
                      initialFocus
                      disabled={(date) => date < new Date()}
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button type="button" variant="outline" onClick={() => router.back()} disabled={isLoading}>
                Annuler
              </Button>
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "Création en cours..." : "Créer la veille"}
              </Button>
            </CardFooter>
          </Card>
        </form>

        <div className="text-sm text-muted-foreground">
          <p>* Champs obligatoires</p>
          <p>Les apprenants pourront soumettre leur travail jusqu'à la date limite.</p>
        </div>
      </div>
    </DashboardLayout>
  )
}
