"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import DashboardLayout from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, BookOpen, Calendar, Edit, FileText, Trash2, Users } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

type Cours = {
  id_cours: number
  titre: string
  categorie: string
  description: string
  referentiel: string
  lien_cours: string
  date_creation: string
}

type Apprenant = {
  id_apprenant: number
  nom: string
  prenom: string
  email: string
  referentiel: string
}

export default function CoursDetailPage() {
  const params = useParams()
  const router = useRouter()
  const { toast } = useToast()
  const [cours, setCours] = useState<Cours | null>(null)
  const [apprenants, setApprenants] = useState<Apprenant[]>([])
  const [loading, setLoading] = useState(true)
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL

  useEffect(() => {
    const fetchCours = async () => {
      try {
        const token = localStorage.getItem("formateurToken")
        if (!token) {
          router.push("/login/formateur")
          return
        }

        const coursResponse = await fetch(`${API_BASE_URL}/cours/${params.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        if (coursResponse.ok) {
          const coursData = await coursResponse.json()
          setCours(coursData)

          // Fetch apprenants with the same referential
          const apprenantsResponse = await fetch(`${API_BASE_URL}/apprenant`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })

          if (apprenantsResponse.ok) {
            const apprenantsData = await apprenantsResponse.json()
            // Filtrer les apprenants par référentiel du cours
            const filteredApprenants = apprenantsData.filter(
              (apprenant: Apprenant) => apprenant.referentiel === coursData.referentiel,
            )
            setApprenants(filteredApprenants)
          }
        } else {
          console.error("Failed to fetch course")
          router.push("/formateur/cours")
        }
      } catch (error) {
        console.error("Error fetching course:", error)
        router.push("/formateur/cours")
      } finally {
        setLoading(false)
      }
    }

    fetchCours()
  }, [params.id, router, API_BASE_URL])

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem("formateurToken")
      if (!token) {
        router.push("/login/formateur")
        return
      }

      const response = await fetch(`${API_BASE_URL}/cours/${params.id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (response.ok) {
        toast({
          title: "Cours supprimé",
          description: "Le cours a été supprimé avec succès.",
        })
        router.push("/formateur/cours")
      } else {
        throw new Error("Failed to delete course")
      }
    } catch (error) {
      console.error("Error deleting course:", error)
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Une erreur est survenue lors de la suppression du cours.",
      })
    }
  }

  if (loading) {
    return (
      <DashboardLayout>
        <div className="space-y-6 animate-pulse">
          <div className="h-8 bg-muted rounded w-64"></div>
          <div className="h-4 bg-muted rounded w-96"></div>
          <div className="h-64 bg-muted rounded"></div>
        </div>
      </DashboardLayout>
    )
  }

  if (!cours) {
    return (
      <DashboardLayout>
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <Link href="/formateur/cours">
              <Button variant="outline" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Retour aux cours
              </Button>
            </Link>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Cours non trouvé</CardTitle>
              <CardDescription>Le cours que vous recherchez n'existe pas ou a été supprimé.</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/formateur/cours">
                <Button>Voir tous les cours</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </DashboardLayout>
    )
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-2">
            <Link href="/formateur/cours">
              <Button variant="outline" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Retour aux cours
              </Button>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Link href={`/formateur/cours/${params.id}/modifier`}>
              <Button variant="outline" size="sm">
                <Edit className="h-4 w-4 mr-2" />
                Modifier
              </Button>
            </Link>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive" size="sm">
                  <Trash2 className="h-4 w-4 mr-2" />
                  Supprimer
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Êtes-vous sûr de vouloir supprimer ce cours ?</AlertDialogTitle>
                  <AlertDialogDescription>
                    Cette action est irréversible. Le cours sera définitivement supprimé.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Annuler</AlertDialogCancel>
                  <AlertDialogAction onClick={handleDelete} className="bg-destructive text-destructive-foreground">
                    Supprimer
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2 space-y-6">
            <Card className="border-0 shadow-sm overflow-hidden">
              <div className="h-2 bg-primary"></div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">{cours.titre}</CardTitle>
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <BookOpen className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <CardDescription className="flex items-center gap-2">
                  <span className="font-medium">{cours.categorie}</span>
                  <span>•</span>
                  <span>{cours.referentiel}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {new Date(cours.date_creation).toLocaleDateString()}
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Description</h3>
                  <p className="text-muted-foreground">{cours.description}</p>
                </div>

                <Separator />

                <div>
                  <h3 className="font-medium mb-2">Lien du cours</h3>
                  <a
                    href={cours.lien_cours}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline flex items-center gap-1"
                  >
                    <FileText className="h-4 w-4" />
                    {cours.lien_cours}
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Apprenants
                </CardTitle>
                <CardDescription>
                  Apprenants du référentiel {cours.referentiel} qui ont accès à ce cours
                </CardDescription>
              </CardHeader>
              <CardContent>
                {apprenants.length > 0 ? (
                  <div className="space-y-2">
                    {apprenants.map((apprenant) => (
                      <div
                        key={apprenant.id_apprenant}
                        className="flex items-center justify-between p-2 rounded-md hover:bg-muted"
                      >
                        <div className="flex items-center gap-2">
                          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <span className="font-bold text-primary text-xs">
                              {apprenant.prenom.charAt(0)}
                              {apprenant.nom.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <p className="font-medium">
                              {apprenant.prenom} {apprenant.nom}
                            </p>
                            <p className="text-xs text-muted-foreground">{apprenant.email}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground">Aucun apprenant dans ce référentiel.</p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
