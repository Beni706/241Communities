"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import DashboardLayout from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, BookOpen, FileText, Mail, Phone, User } from "lucide-react"

type Apprenant = {
  id_apprenant: number
  nom: string
  prenom: string
  email: string
  telephone?: string
  referentiel: string
}

type Cours = {
  id_cours: number
  titre: string
  categorie: string
  description: string
  referentiel: string
}

type Veille = {
  id_veille: number
  titre: string
  date_fin: string
  referentiel: string
}

type Soumission = {
  id_soumission: number
  id_apprenant: number
  id_veille: number
  lien_soumission: string
  date_soumission: string
  veille: {
    titre: string
    date_fin: string
  }
}

export default function ApprenantDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [apprenant, setApprenant] = useState<Apprenant | null>(null)
  const [cours, setCours] = useState<Cours[]>([])
  const [veilles, setVeilles] = useState<Veille[]>([])
  const [soumissions, setSoumissions] = useState<Soumission[]>([])
  const [loading, setLoading] = useState(true)
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL

  useEffect(() => {
    const fetchApprenant = async () => {
      try {
        const token = localStorage.getItem("formateurToken") || localStorage.getItem("token")
        if (!token) {
          router.push("/login/formateur")
          return
        }

        const apprenantResponse = await fetch(`${API_BASE_URL}/apprenant/${params.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        if (apprenantResponse.ok) {
          const apprenantData = await apprenantResponse.json()
          setApprenant(apprenantData)

          // Fetch cours for this referential
          const coursResponse = await fetch(`${API_BASE_URL}/cours`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })

          if (coursResponse.ok) {
            const coursData = await coursResponse.json()
            // Filtrer les cours par référentiel de l'apprenant
            const filteredCours = coursData.filter((cours: Cours) => cours.referentiel === apprenantData.referentiel)
            setCours(filteredCours)
          }

          // Fetch veilles for this referential
          const veillesResponse = await fetch(`${API_BASE_URL}/veille`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })

          if (veillesResponse.ok) {
            const veillesData = await veillesResponse.json()
            // Filtrer les veilles par référentiel de l'apprenant
            const filteredVeilles = veillesData.filter(
              (veille: Veille) => veille.referentiel === apprenantData.referentiel,
            )
            setVeilles(filteredVeilles)
          }

          // Fetch soumissions for this apprenant
          const soumissionsResponse = await fetch(`${API_BASE_URL}/soumission/apprenant/${params.id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })

          if (soumissionsResponse.ok) {
            const soumissionsData = await soumissionsResponse.json()
            setSoumissions(soumissionsData)
          }
        } else {
          console.error("Failed to fetch apprenant")
          router.push("/formateur/apprenants")
        }
      } catch (error) {
        console.error("Error fetching apprenant:", error)
        router.push("/formateur/apprenants")
      } finally {
        setLoading(false)
      }
    }

    fetchApprenant()
  }, [params.id, router, API_BASE_URL])

  const isVeilleActive = (dateFin: string) => {
    const now = new Date()
    const endDate = new Date(dateFin)
    return endDate > now
  }

  if (loading) {
    return (
      <DashboardLayout userRole="formateur">
        <div className="space-y-6 animate-pulse">
          <div className="h-8 bg-muted rounded w-64"></div>
          <div className="h-4 bg-muted rounded w-96"></div>
          <div className="h-64 bg-muted rounded"></div>
        </div>
      </DashboardLayout>
    )
  }

  if (!apprenant) {
    return (
      <DashboardLayout userRole="formateur">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <Link href="/formateur/apprenants">
              <Button variant="outline" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Retour aux apprenants
              </Button>
            </Link>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Apprenant non trouvé</CardTitle>
              <CardDescription>L'apprenant que vous recherchez n'existe pas ou a été supprimé.</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/formateur/apprenants">
                <Button>Voir tous les apprenants</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </DashboardLayout>
    )
  }

  return (
    <DashboardLayout userRole="formateur">
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <Link href="/formateur/apprenants">
            <Button variant="outline" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour aux apprenants
            </Button>
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-1 space-y-6">
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <div className="flex flex-col items-center">
                  <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <User className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="text-xl">
                    {apprenant.prenom} {apprenant.nom}
                  </CardTitle>
                  <CardDescription>Apprenant</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-center">
                  <Badge variant="outline">{apprenant.referentiel}</Badge>
                </div>

                <Separator />

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{apprenant.email}</span>
                  </div>
                  {apprenant.telephone && (
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{apprenant.telephone}</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg">Statistiques</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Cours disponibles</span>
                  </div>
                  <Badge variant="outline">{cours.length}</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Veilles disponibles</span>
                  </div>
                  <Badge variant="outline">{veilles.length}</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-secondary" />
                    <span className="text-sm">Veilles soumises</span>
                  </div>
                  <Badge variant="secondary">{soumissions.length}</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-2 space-y-6">
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  Soumissions de veilles
                </CardTitle>
                <CardDescription>
                  {soumissions.length} soumission(s) sur {veilles.length} veilles
                </CardDescription>
              </CardHeader>
              <CardContent>
                {soumissions.length > 0 ? (
                  <div className="space-y-4">
                    {soumissions.map((soumission) => (
                      <div
                        key={soumission.id_soumission}
                        className="flex items-center justify-between p-3 rounded-md border"
                      >
                        <div>
                          <p className="font-medium">{soumission.veille.titre}</p>
                          <p className="text-xs text-muted-foreground">
                            Soumis le {new Date(soumission.date_soumission).toLocaleDateString()} à{" "}
                            {new Date(soumission.date_soumission).toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge
                            variant={
                              new Date(soumission.date_soumission) <= new Date(soumission.veille.date_fin)
                                ? "secondary"
                                : "destructive"
                            }
                          >
                            {new Date(soumission.date_soumission) <= new Date(soumission.veille.date_fin)
                              ? "À temps"
                              : "En retard"}
                          </Badge>
                          <a
                            href={soumission.lien_soumission}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                          >
                            Voir
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground">Aucune soumission pour cet apprenant.</p>
                )}
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  Veilles à réaliser
                </CardTitle>
                <CardDescription>Veilles disponibles pour le référentiel {apprenant.referentiel}</CardDescription>
              </CardHeader>
              <CardContent>
                {veilles.length > 0 ? (
                  <div className="space-y-4">
                    {veilles.map((veille) => {
                      const hasSoumission = soumissions.some((s) => s.id_veille === veille.id_veille)
                      return (
                        <div key={veille.id_veille} className="flex items-center justify-between p-3 rounded-md border">
                          <div>
                            <p className="font-medium">{veille.titre}</p>
                            <p className="text-xs text-muted-foreground">
                              Date limite: {new Date(veille.date_fin).toLocaleDateString()}
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            {hasSoumission ? (
                              <Badge variant="secondary">Soumis</Badge>
                            ) : (
                              <Badge variant={isVeilleActive(veille.date_fin) ? "outline" : "destructive"}>
                                {isVeilleActive(veille.date_fin) ? "À faire" : "En retard"}
                              </Badge>
                            )}
                            <Link
                              href={`/formateur/veilles/${veille.id_veille}`}
                              className="text-primary hover:underline"
                            >
                              Voir
                            </Link>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                ) : (
                  <p className="text-muted-foreground">Aucune veille disponible pour ce référentiel.</p>
                )}
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  Cours disponibles
                </CardTitle>
                <CardDescription>Cours disponibles pour le référentiel {apprenant.referentiel}</CardDescription>
              </CardHeader>
              <CardContent>
                {cours.length > 0 ? (
                  <div className="space-y-4">
                    {cours.map((cours) => (
                      <div key={cours.id_cours} className="flex items-center justify-between p-3 rounded-md border">
                        <div>
                          <p className="font-medium">{cours.titre}</p>
                          <p className="text-xs text-muted-foreground">{cours.categorie}</p>
                        </div>
                        <Link href={`/formateur/cours/${cours.id_cours}`} className="text-primary hover:underline">
                          Voir
                        </Link>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground">Aucun cours disponible pour ce référentiel.</p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
