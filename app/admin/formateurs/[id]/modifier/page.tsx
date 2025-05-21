"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import DashboardLayout from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"
import { ArrowLeft, Loader2 } from "lucide-react"

type Formateur = {
  id_formateur: number
  nom: string
  prenom: string
  email: string
  referentiel: string
}

export default function ModifierFormateur({ params }: { params: { id: string } }) {
  const id = params.id
  const [formateur, setFormateur] = useState<Formateur | null>(null)
  const [nom, setNom] = useState("")
  const [prenom, setPrenom] = useState("")
  const [email, setEmail] = useState("")
  const [referentiel, setReferentiel] = useState("")
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const router = useRouter()
  const { toast } = useToast()
  const API_URL = process.env.NEXT_PUBLIC_API_URL

  useEffect(() => {
    const fetchFormateur = async () => {
      try {
        const token = localStorage.getItem("adminToken")
        if (!token) {
          router.push("/admin/login/administrateur")
          return
        }

        const response = await fetch(`${API_URL}/formateur/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        if (response.ok) {
          const data = await response.json()
          setFormateur(data)
          setNom(data.nom)
          setPrenom(data.prenom)
          setEmail(data.email)
          setReferentiel(data.referentiel)
        } else {
          toast({
            variant: "destructive",
            title: "Erreur",
            description: "Impossible de charger les détails du formateur.",
          })
          router.push("/admin/formateurs")
        }
      } catch (error) {
        console.error("Erreur:", error)
        toast({
          variant: "destructive",
          title: "Erreur",
          description: "Une erreur est survenue lors du chargement des données.",
        })
      } finally {
        setLoading(false)
      }
    }

    fetchFormateur()
  }, [API_URL, id, router, toast])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)

    try {
      const token = localStorage.getItem("adminToken")
      if (!token) {
        router.push("/admin/login/administrateur")
        return
      }

      const response = await fetch(`${API_URL}/formateur/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          nom,
          prenom,
          email,
          referentiel,
        }),
      })

      if (response.ok) {
        toast({
          title: "Formateur modifié",
          description: "Les informations du formateur ont été mises à jour avec succès.",
        })
        router.push(`/admin/formateurs/${id}`)
      } else {
        const errorData = await response.json()
        throw new Error(errorData.message || "Erreur lors de la modification")
      }
    } catch (error) {
      console.error("Erreur:", error)
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Une erreur est survenue lors de la modification du formateur.",
      })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" onClick={() => router.back()}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour
          </Button>
          <h1 className="text-2xl font-bold tracking-tight">Modifier le formateur</h1>
        </div>

        {loading ? (
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <div className="h-6 w-48 bg-muted rounded animate-pulse"></div>
            </CardHeader>
            <CardContent className="space-y-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="space-y-2">
                  <div className="h-4 w-24 bg-muted rounded animate-pulse"></div>
                  <div className="h-8 bg-muted rounded animate-pulse"></div>
                </div>
              ))}
            </CardContent>
          </Card>
        ) : formateur ? (
          <Card className="border-0 shadow-sm">
            <form onSubmit={handleSubmit}>
              <CardHeader>
                <CardTitle>Informations du formateur</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="nom">Nom</Label>
                    <Input id="nom" value={nom} onChange={(e) => setNom(e.target.value)} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="prenom">Prénom</Label>
                    <Input id="prenom" value={prenom} onChange={(e) => setPrenom(e.target.value)} required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="referentiel">Référentiel</Label>
                  <Select value={referentiel} onValueChange={setReferentiel} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionner un référentiel" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="DWWM">Développeur Web et Web Mobile</SelectItem>
                      <SelectItem value="CDA">Concepteur Développeur d'Applications</SelectItem>
                      <SelectItem value="CDUI">Concepteur Designer UI</SelectItem>
                      <SelectItem value="TSSR">Technicien Supérieur Systèmes et Réseaux</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" type="button" onClick={() => router.push(`/admin/formateurs/${id}`)}>
                  Annuler
                </Button>
                <Button type="submit" disabled={submitting}>
                  {submitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  {submitting ? "Enregistrement..." : "Enregistrer les modifications"}
                </Button>
              </CardFooter>
            </form>
          </Card>
        ) : (
          <div className="text-center py-10">
            <p className="text-muted-foreground">Formateur non trouvé.</p>
            <Button variant="link" onClick={() => router.push("/admin/formateurs")}>
              Retour à la liste des formateurs
            </Button>
          </div>
        )}
      </div>
    </DashboardLayout>
  )
}
