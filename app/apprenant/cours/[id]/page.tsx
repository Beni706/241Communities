"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, BookOpen, Calendar, CheckCircle, FileText, PlayCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useAuth } from "@/components/auth-provider"

type Chapitre = {
  id_chapitre: number
  titre: string
  numeroOrdre: number
  lecons?: Lecon[]
}

type Lecon = {
  id_lecon: number
  titre: string
  contenuTextuel: string | null
  contenuVideo: string | null
  numeroOrdre: number
  estCompletee?: boolean // Pour le suivi de progression
}

type Cours = {
  id_cours: number
  titre: string
  categorie: string
  description: string
  photoCours: string | null
  dateCreation: string
  referentiel?: string
  chapitre: Chapitre[]
}

export default function ApprenantCoursDetailPage() {
  const params = useParams()
  const router = useRouter()
  const { toast } = useToast()
  const { user } = useAuth()
  const [cours, setCours] = useState<Cours | null>(null)
  const [loading, setLoading] = useState(true)
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "/api"

  // Fonction pour formater l'URL YouTube pour l'intégration
  const formatYouTubeUrl = (url: string | null) => {
    if (!url) return null
    let videoId = null
    const watchMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/)
    if (watchMatch) videoId = watchMatch[1]
    const embedMatch = url.match(/youtube\.com\/embed\/([^&\s]+)/)
    if (embedMatch) videoId = embedMatch[1]
    return videoId ? `https://www.youtube.com/embed/${videoId}` : null
  }

  useEffect(() => {
    const fetchCoursDetails = async () => {
      if (!params.id) return
      try {
        const token = localStorage.getItem("apprenantToken") || localStorage.getItem("token")
        if (!token) {
          router.push("/login/apprenant")
          return
        }

        const coursResponse = await fetch(`${API_BASE_URL}/cours/${params.id}`, {
          headers: { Authorization: `Bearer ${token}` },
        })

        if (!coursResponse.ok) throw new Error("Cours non trouvé")
        const coursData: Cours = await coursResponse.json()

        const chapitresAvecLecons: Chapitre[] = []
        if (coursData.chapitre && coursData.chapitre.length > 0) {
          const chapitresTries = [...coursData.chapitre].sort((a, b) => a.numeroOrdre - b.numeroOrdre)
          for (const chap of chapitresTries) {
            const leconsResponse = await fetch(`${API_BASE_URL}/chapitre/lecon/${chap.id_chapitre}`, {
              headers: { Authorization: `Bearer ${token}` },
            })
            if (leconsResponse.ok) {
              const leconsData: Lecon[] = await leconsResponse.json()
              chap.lecons = leconsData.sort((a, b) => a.numeroOrdre - b.numeroOrdre)
            }
            chapitresAvecLecons.push(chap)
          }
        }
        coursData.chapitre = chapitresAvecLecons
        setCours(coursData)

      } catch (error) {
        console.error("Error fetching course details:", error)
        toast({ variant: "destructive", title: "Erreur", description: "Impossible de charger les détails du cours." })
        router.push("/apprenant/cours")
      } finally {
        setLoading(false)
      }
    }
    fetchCoursDetails()
  }, [params.id, router, toast, API_BASE_URL])

  // TODO: Implémenter la fonction pour marquer une leçon comme complétée
  const handleToggleLeconComplete = (leconId: number) => {
    console.log(`Marquer/Démarquer leçon ${leconId} comme complétée`)
    // Mettre à jour l'état local et appeler l'API /api/suiviCours
    toast({ title: "Fonctionnalité à venir", description: "Le suivi de progression sera bientôt disponible."})
  }

  if (loading) return <div className="flex justify-center items-center h-screen"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div></div>
  if (!cours) return <div className="text-center py-10">Cours non trouvé. <Link href="/apprenant/cours" className="text-primary hover:underline">Retour aux cours</Link></div>

  return (
    <div className="space-y-6">
      <Link href="/apprenant/cours">
        <Button variant="outline" size="sm"><ArrowLeft className="h-4 w-4 mr-2" />Retour aux cours</Button>
      </Link>

      <Card className="border-0 shadow-sm overflow-hidden">
        {cours.photoCours && (
          <div className="relative w-full h-48 md:h-64"><Image src={cours.photoCours} alt={cours.titre} fill className="object-cover" /></div>
        )}
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl">{cours.titre}</CardTitle>
          <CardDescription className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
            <span><BookOpen className="h-4 w-4 inline mr-1" />{cours.categorie}</span>
            {cours.referentiel && <span>{cours.referentiel}</span>}
            <span><Calendar className="h-4 w-4 inline mr-1" />Créé le {new Date(cours.dateCreation).toLocaleDateString()}</span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-6">{cours.description}</p>
          <Separator className="my-6" />
          <h3 className="text-xl font-semibold mb-4">Contenu du cours</h3>
          {cours.chapitre && cours.chapitre.length > 0 ? (
            <Accordion type="single" collapsible className="w-full" defaultValue={`chapitre-${cours.chapitre[0].id_chapitre}`}>
              {cours.chapitre.map((chap) => (
                <AccordionItem key={chap.id_chapitre} value={`chapitre-${chap.id_chapitre}`}>
                  <AccordionTrigger className="hover:bg-muted/50 px-4 py-3 rounded-md text-left">
                    <span className="font-medium">Chapitre {chap.numeroOrdre}: {chap.titre}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pt-3 pb-1">
                    {chap.lecons && chap.lecons.length > 0 ? (
                      <ul className="space-y-4">
                        {chap.lecons.map((lecon) => (
                          <li key={lecon.id_lecon} className="border-l-2 pl-4 py-2 border-muted hover:border-primary transition-colors group">
                            <div className="flex justify-between items-center mb-2">
                              <h4 className="font-medium">Leçon {lecon.numeroOrdre}: {lecon.titre}</h4>
                              <Button variant="ghost" size="sm" onClick={() => handleToggleLeconComplete(lecon.id_lecon)} className="opacity-0 group-hover:opacity-100 transition-opacity">
                                <CheckCircle className={`h-5 w-5 ${lecon.estCompletee ? 'text-green-500' : 'text-muted-foreground'}`} />
                              </Button>
                            </div>
                            {lecon.contenuTextuel && (
                              <div className="prose prose-sm max-w-none text-muted-foreground mb-3">
                                <FileText className="h-4 w-4 inline mr-1 mb-1" />
                                {lecon.contenuTextuel}
                              </div>
                            )}
                            {formatYouTubeUrl(lecon.contenuVideo) && (
                              <div className="aspect-video rounded-md overflow-hidden">
                                <iframe
                                  className="w-full h-full"
                                  src={formatYouTubeUrl(lecon.contenuVideo)!}
                                  title={lecon.titre}
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                  allowFullScreen
                                ></iframe>
                              </div>
                            )}
                            {!lecon.contenuTextuel && !lecon.contenuVideo && (
                                <p className="text-sm text-muted-foreground italic">Aucun contenu pour cette leçon.</p>
                            )}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm text-muted-foreground italic">Aucune leçon dans ce chapitre.</p>
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            <p className="text-muted-foreground italic">Aucun chapitre défini pour ce cours.</p>
          )}
        </CardContent>
      </Card>
    </div>
  )
}