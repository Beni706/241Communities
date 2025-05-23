"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
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
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

type Chapitre = {
  id_chapitre: number
  titre: string
  numeroOrdre: number
  id_cours: number
  lecons?: Lecon[]
}

type Lecon = {
  id_lecon: number
  titre: string
  contenuTextuel: string
  contenuVideo: string
  numeroOrdre: number
  id_chapitre: number
}

type Cours = {
  id_cours: number
  titre: string
  categorie: string
  description: string
  photoCours: string
  dateCreation: string
  id_formateur: number
  referentiel?: string // Ajouter cette propriété optionnelle
  chapitre: Chapitre[]
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
  const [chapitres, setChapitres] = useState<Chapitre[]>([])
  const [apprenants, setApprenants] = useState<Apprenant[]>([])
  const [loading, setLoading] = useState(true)
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL 

  useEffect(() => {
    const fetchCours = async () => {
      try {
        const token = localStorage.getItem("formateurToken") || localStorage.getItem("token")
        if (!token) {
          router.push("/login/formateur")
          return
        }

        // 1. Récupérer les informations du cours
        const coursResponse = await fetch(`${API_BASE_URL}/cours/${params.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        if (!coursResponse.ok) {
          throw new Error("Failed to fetch course")
        }

        const coursData: Cours = await coursResponse.json()
        setCours(coursData)

        // 2. Récupérer les chapitres avec leurs leçons
        const chapitresAvecLecons: Chapitre[] = []

        if (coursData.chapitre && coursData.chapitre.length > 0) {
          // Trier les chapitres par numéro d'ordre
          const chapitresTries = [...coursData.chapitre].sort((a, b) => a.numeroOrdre - b.numeroOrdre)

          for (const chapitre of chapitresTries) {
            // Récupérer les leçons pour ce chapitre
            const leconsResponse = await fetch(`${API_BASE_URL}/chapitre/lecon/${chapitre.id_chapitre}`, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            })

            if (leconsResponse.ok) {
              const leconsData: Lecon[] = await leconsResponse.json()
              // Trier les leçons par numéro d'ordre
              const leconsTries = leconsData.sort((a, b) => a.numeroOrdre - b.numeroOrdre)
              chapitresAvecLecons.push({
                ...chapitre,
                lecons: leconsTries,
              })
            } else {
              chapitresAvecLecons.push({
                ...chapitre,
                lecons: [],
              })
            }
          }
        }

        setChapitres(chapitresAvecLecons)

        // 3. Récupérer les apprenants (si nécessaire)
        if (coursData.referentiel) {
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
        }
      } catch (error) {
        console.error("Error fetching course:", error)
        toast({
          variant: "destructive",
          title: "Erreur",
          description: "Impossible de récupérer les informations du cours.",
        })
        router.push("/formateur/cours")
      } finally {
        setLoading(false)
      }
    }

    fetchCours()
  }, [params.id, router, toast, API_BASE_URL])

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem("formateurToken") || localStorage.getItem("token")
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

  // Fonction pour formater l'URL YouTube pour l'intégration
  const formatYouTubeUrl = (url: string) => {
    if (!url) return null

    // Extraire l'ID de la vidéo YouTube
    let videoId = null

    // Format: https://www.youtube.com/watch?v=VIDEO_ID
    const watchMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/)
    if (watchMatch) {
      videoId = watchMatch[1]
    }

    // Format: https://www.youtube.com/embed/VIDEO_ID
    const embedMatch = url.match(/youtube\.com\/embed\/([^&\s]+)/)
    if (embedMatch) {
      videoId = embedMatch[1]
    }

    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}`
    }

    return null
  }

  if (loading) {
    return (
        <div className="space-y-6 animate-pulse">
          <div className="h-8 bg-muted rounded w-64"></div>
          <div className="h-4 bg-muted rounded w-96"></div>
          <div className="h-64 bg-muted rounded"></div>
        </div>

    )
  }

  if (!cours) {
    return (

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
    )
  }

  return (
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
              {cours.photoCours ? (
                <div className="relative w-full h-64">
                  <Image src={cours.photoCours || "/placeholder.svg"} alt={cours.titre} fill className="object-cover" />
                </div>
              ) : (
                <div className="h-2 bg-primary"></div>
              )}
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
                  {cours.referentiel && (
                    <>
                      <span>{cours.referentiel}</span>
                      <span>•</span>
                    </>
                  )}
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {new Date(cours.dateCreation).toLocaleDateString()}
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
                  <h3 className="font-medium mb-4">Contenu du cours</h3>

                  {chapitres.length > 0 ? (
                    <Accordion type="single" collapsible className="w-full">
                      {chapitres.map((chapitre) => (
                        <AccordionItem key={chapitre.id_chapitre} value={`chapitre-${chapitre.id_chapitre}`}>
                          <AccordionTrigger className="hover:bg-muted/50 px-4 py-2 rounded-md">
                            <div className="flex items-center gap-2">
                              <span className="font-medium">Chapitre {chapitre.numeroOrdre}:</span>
                              <span>{chapitre.titre}</span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="px-4">
                            {chapitre.lecons && chapitre.lecons.length > 0 ? (
                              <div className="space-y-4 pl-4">
                                {chapitre.lecons.map((lecon) => (
                                  <div key={lecon.id_lecon} className="border-l-2 pl-4 py-2 border-muted">
                                    <h4 className="font-medium mb-2">
                                      Leçon {lecon.numeroOrdre}: {lecon.titre}
                                    </h4>

                                    {lecon.contenuTextuel && (
                                      <div className="mb-3">
                                        <h5 className="text-sm font-medium text-muted-foreground mb-1 flex items-center">
                                          <FileText className="h-3 w-3 mr-1" /> Contenu textuel
                                        </h5>
                                        <p className="text-sm text-muted-foreground">{lecon.contenuTextuel}</p>
                                      </div>
                                    )}

                                    {(() => {
                                      const embedUrl = formatYouTubeUrl(lecon.contenuVideo);
                                      if (lecon.contenuVideo && embedUrl) {
                                        return (
                                      <div className="mt-3">
                                        <h5 className="text-sm font-medium text-muted-foreground mb-2">Vidéo</h5>
                                        <div className="relative w-full h-0 pb-[56.25%]">
                                          <iframe
                                            className="absolute top-0 left-0 w-full h-full rounded-md"
                                            src={embedUrl}
                                            title={lecon.titre}
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                          ></iframe>
                                        </div>
                                      </div>
                                        );
                                      }
                                      return null;
                                    })()}
                                  </div>
                                ))}
                              </div>
                            ) : (
                              <p className="text-sm text-muted-foreground">Aucune leçon dans ce chapitre.</p>
                            )}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  ) : (
                    <p className="text-muted-foreground">Aucun chapitre n'a été créé pour ce cours.</p>
                  )}
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
                  {cours.referentiel
                    ? `Apprenants du référentiel ${cours.referentiel} qui ont accès à ce cours`
                    : "Apprenants ayant accès à ce cours"}
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
  )
}
