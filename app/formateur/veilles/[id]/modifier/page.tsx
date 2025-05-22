"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import DashboardLayout from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { ArrowLeft, Calendar } from "lucide-react"
import { format } from "date-fns"
import { fr } from "date-fns/locale"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"

type Veille = {
  id_veille: number
  titre: string
  lien_docDonnee: string
  date_creation: string
  date_fin: string
  referentiel: string
}

export default function ModifierVeillePage() {
  const params = useParams()
  const router = useRouter()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Formulaire
  const [titre, setTitre] = useState("")
  const [lienDoc, setLienDoc] = useState("")
  const [dateFin, setDateFin] = useState<Date | undefined>(undefined)
  const [referentiel, setReferentiel] = useState("")

  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL

  useEffect(() => {
    const fetchVeille = async () => {
      try {
        const token = localStorage.getItem("formateurToken") || localStorage.getItem("token")

        if (!token) {
          router.push("/login/formateur")
          return
        }

        const response = await fetch(`${API_BASE_URL}/veille/${params.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        if (!response.ok) {
          throw new Error("Veille non trouvée")
        }

        const veilleData: Veille = await response.json()

        setTitre(veilleData.titre)
        setLienDoc(veilleData.lien_docDonnee)
        setDateFin(new Date(veilleData.date_fin))
        setReferentiel(veilleData.referentiel)
      } catch (error) {
        console.error("Erreur lors de la récupération de la veille:", error)
        toast({
          variant: "destructive",
          title: "Erreur",
          description: "Impossible de récupérer les informations de la veille.",
        })
        router.push("/formateur/veilles")
      } finally {
        setIsLoading(false)
      }
    }

    fetchVeille()
  }, [params.id, router, toast, API_BASE_URL])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validation
    if (!titre || !lienDoc || !dateFin || !referentiel) {
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

      if (!token) {
        throw new Error("Non authentifié")
      }

      const response = await fetch(`${API_BASE_URL}/veille/${params.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          titre,
          lien_docDonnee: lienDoc,
          date_fin: dateFin.toISOString(),
          referentiel,
        }),
      })

      if (!response.ok) {
        throw new Error("Erreur lors de la modification de la veille")
      }

      toast({
        title: "Veille modifiée",
        description: "La veille a été modifiée avec succès.",
      })

      router.push(`/formateur/veilles/${params.id}`)
    } catch (error) {
      console.error("Erreur:", error)
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Une erreur est survenue lors de la modification de la veille.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isLoading) {
    return (
      <DashboardLayout userRole="formateur">
        <div className="flex items-center justify-center h-[500px]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      </DashboardLayout>
    )
  }

  return (
    <DashboardLayout userRole="formateur">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Modifier la veille</h1>
            <p className="text-muted-foreground">Modifiez les informations de la veille.</p>
          </div>
          <Link href={`/formateur/veilles/${params.id}`}>
            <Button variant="outline" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour
            </Button>
          </Link>
        </div>

        <form onSubmit={handleSubmit}>
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle>Informations de la veille</CardTitle>
              <CardDescription>Modifiez les détails de la veille.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="titre">Titre de la veille *</Label>
                <Input
                  id="titre"
                  value={titre}
                  onChange={(e) => setTitre(e.target.value)}
                  placeholder="Ex: Veille sur les frameworks JavaScript modernes"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="lienDoc">Lien vers le document *</Label>
                <Input
                  id="lienDoc"
                  value={lienDoc}
                  onChange={(e) => setLienDoc(e.target.value)}
                  placeholder="https://docs.google.com/document/d/..."
                  required
                />
                <p className="text-xs text-muted-foreground">
                  Lien vers un document contenant les instructions de la veille (Google Docs, Notion, etc.)
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="dateFin">Date limite de rendu *</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start text-left font-normal" id="dateFin">
                      <Calendar className="mr-2 h-4 w-4" />
                      {dateFin ? format(dateFin, "PPP", { locale: fr }) : <span>Sélectionner une date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <CalendarComponent mode="single" selected={dateFin} onSelect={setDateFin} initialFocus />
                  </PopoverContent>
                </Popover>
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
                onClick={() => router.push(`/formateur/veilles/${params.id}`)}
                disabled={isSubmitting}
              >
                Annuler
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Enregistrement..." : "Enregistrer les modifications"}
              </Button>
            </CardFooter>
          </Card>
        </form>

        <div className="text-sm text-muted-foreground">
          <p>* Champs obligatoires</p>
        </div>
      </div>
    </DashboardLayout>
  )
}
