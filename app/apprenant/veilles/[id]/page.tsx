"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import DashboardLayout from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"
import { useAuth } from "@/components/auth-provider"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

type Veille = {
  id_veille: number
  titre: string
  lien_docDonnee: string
  lien_docRendu: string | null
  date_creation: string
  date_fin: string
  formateur: {
    nom: string
    prenom: string
  }
}

export default function VeilleDetail() {
  const { id } = useParams()
  const { user } = useAuth()
  const router = useRouter()
  const { toast } = useToast()

  const [veille, setVeille] = useState<Veille | null>(null)
  const [lienDocRendu, setLienDocRendu] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    const fetchVeille = async () => {
      try {
        const token = localStorage.getItem("token")

        if (!token) {
          router.push("/login")
          return
        }

        const response = await fetch(`/api/veille/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        if (!response.ok) {
          throw new Error("Erreur lors de la récupération de la veille")
        }

        const data = await response.json()
        setVeille(data)

        if (data.lien_docRendu) {
          setLienDocRendu(data.lien_docRendu)
        }
      } catch (error) {
        console.error("Error fetching veille:", error)
        toast({
          variant: "destructive",
          title: "Erreur",
          description: "Impossible de charger les détails de la veille.",
        })
      } finally {
        setIsLoading(false)
      }
    }

    fetchVeille()
  }, [id, router, toast])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!lienDocRendu) {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Veuillez fournir un lien vers votre document.",
      })
      return
    }

    setIsSubmitting(true)

    try {
      const token = localStorage.getItem("token")

      if (!token) {
        throw new Error("Non authentifié")
      }

      const response = await fetch(`/api/veille/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          ...veille,
          lien_docRendu: lienDocRendu,
          id_apprenant: user?.id,
        }),
      })

      if (!response.ok) {
        throw new Error("Erreur lors de la soumission de la veille")
      }

      toast({
        title: "Veille soumise",
        description: "Votre travail a été soumis avec succès.",
      })

      // Refresh veille data
      const updatedVeille = await response.json()
      setVeille(updatedVeille.veille)
    } catch (error) {
      console.error("Error submitting veille:", error)
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Une erreur est survenue lors de la soumission de votre travail.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const isExpired = veille ? new Date(veille.date_fin) < new Date() : false
  const canSubmit = veille && !isExpired && (!veille.lien_docRendu || veille.lien_docRendu === "")

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <Button variant="outline" onClick={() => router.back()} className="mb-4">
          Retour
        </Button>

        {isLoading ? (
          <Card className="animate-pulse border-0 shadow-sm">
            <CardHeader>
              <div className="h-6 bg-muted rounded w-1/3 mb-2"></div>
              <div className="h-4 bg-muted rounded w-1/4"></div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="h-4 bg-muted rounded w-full"></div>
                <div className="h-4 bg-muted rounded w-full"></div>
                <div className="h-4 bg-muted rounded w-2/3"></div>
              </div>
            </CardContent>
          </Card>
        ) : veille ? (
          <>
            <Card className="border-0 shadow-sm overflow-hidden">
              <div className="h-2 bg-secondary"></div>
              <CardHeader>
                <CardTitle className="text-2xl">{veille.titre}</CardTitle>
                <CardDescription>
                  Créée par {veille.formateur?.prenom} {veille.formateur?.nom} le{" "}
                  {new Date(veille.date_creation).toLocaleDateString()}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-medium mb-1">Document à consulter</h3>
                  <Link
                    href={veille.lien_docDonnee}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-primary hover:underline"
                  >
                    Ouvrir le document <ExternalLink className="h-4 w-4" />
                  </Link>
                </div>

                <div>
                  <h3 className="font-medium mb-1">Date limite de rendu</h3>
                  <p className={`${isExpired ? "text-destructive" : ""}`}>
                    {new Date(veille.date_fin).toLocaleDateString()} à {new Date(veille.date_fin).toLocaleTimeString()}
                    {isExpired && " (Expirée)"}
                  </p>
                </div>

                <div>
                  <h3 className="font-medium mb-1">Statut</h3>
                  {veille.lien_docRendu ? (
                    <div className="flex flex-col gap-2">
                      <p className="text-green-600 font-medium">Travail soumis</p>
                      <Link
                        href={veille.lien_docRendu}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-primary hover:underline"
                      >
                        Voir votre document <ExternalLink className="h-4 w-4" />
                      </Link>
                    </div>
                  ) : (
                    <p className={`${isExpired ? "text-destructive" : "text-amber-600"} font-medium`}>
                      {isExpired ? "Non soumis (délai dépassé)" : "En attente de soumission"}
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>

            {canSubmit && (
              <form onSubmit={handleSubmit}>
                <Card className="border-0 shadow-sm">
                  <CardHeader>
                    <CardTitle>Soumettre votre travail</CardTitle>
                    <CardDescription>Fournissez le lien vers votre document Google Doc ou Slide.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <Label htmlFor="lien_docRendu">Lien vers votre document</Label>
                      <Input
                        id="lien_docRendu"
                        value={lienDocRendu}
                        onChange={(e) => setLienDocRendu(e.target.value)}
                        placeholder="https://docs.google.com/document/d/..."
                        required
                      />
                      <p className="text-xs text-muted-foreground">
                        Assurez-vous que le document est accessible en lecture.
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button type="submit" disabled={isSubmitting}>
                      {isSubmitting ? "Soumission en cours..." : "Soumettre le travail"}
                    </Button>
                  </CardFooter>
                </Card>
              </form>
            )}
          </>
        ) : (
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle>Veille non trouvée</CardTitle>
              <CardDescription>
                La veille que vous recherchez n'existe pas ou vous n'avez pas les droits pour y accéder.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" onClick={() => router.push("/apprenant/veilles")}>
                Retour aux veilles
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </DashboardLayout>
  )
}
