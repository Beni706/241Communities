"use client"

import { useEffect, useState } from "react"
import DashboardLayout from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Clock, FileText } from "lucide-react"
import Link from "next/link"

type Cours = {
  id_cours: number
  titre: string
  categorie: string
  description: string
  referentiel: string
  formateur: {
    nom: string
    prenom: string
  }
}

type Veille = {
  id_veille: number
  titre: string
  date_fin: string
  referentiel: string
  formateur: {
    nom: string
    prenom: string
  }
}

type SuiviCours = {
  id_suiviCours: number
  id_cours: number
  pourcentage: number
  cours: Cours
}

type UserInfo = {
  id: number
  nom: string
  prenom: string
  email: string
  role: string
  referentiel: string
}

export default function ApprenantDashboard() {
  const [user, setUser] = useState<UserInfo | null>(null)
  const [cours, setCours] = useState<Cours[]>([])
  const [veilles, setVeilles] = useState<Veille[]>([])
  const [suiviCours, setSuiviCours] = useState<SuiviCours[]>([])
  const [loading, setLoading] = useState(true)
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api"

  useEffect(() => {
    // Récupérer les informations de l'utilisateur depuis le localStorage
    const storedUser = localStorage.getItem("user")
    const token = localStorage.getItem("apprenantToken") || localStorage.getItem("token")

    if (!token) {
      console.log("Aucun token trouvé, redirection vers la page de connexion")
      window.location.href = "/login/apprenant"
      return
    }

    if (storedUser) {
      try {
        const userInfo = JSON.parse(storedUser)
        if (userInfo.role !== "apprenant") {
          console.log("L'utilisateur n'est pas un apprenant, redirection vers la page de connexion appropriée")
          window.location.href = `/login/${userInfo.role}`
          return
        }
        setUser(userInfo)
      } catch (error) {
        console.error("Erreur lors du parsing des données utilisateur:", error)
        window.location.href = "/login/apprenant"
        return
      }
    } else {
      console.log("Aucune information utilisateur trouvée, redirection vers la page de connexion")
      window.location.href = "/login/apprenant"
      return
    }
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!user) return
        const token = localStorage.getItem("apprenantToken") || localStorage.getItem("token")

        if (!token) return

        // Récupérer tous les cours
        const coursResponse = await fetch(`${API_BASE_URL}/cours`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        // Récupérer les veilles de l'apprenant
        const veillesResponse = await fetch(`${API_BASE_URL}/veille?id_apprenant=${user.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        // Récupérer le suivi des cours de l'apprenant
        const suiviResponse = await fetch(`${API_BASE_URL}/suiviCours?id_apprenant=${user.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        if (coursResponse.ok) {
          const coursData = await coursResponse.json()
          // Filtrer les cours par référentiel
          const filteredCours = coursData.filter((cours: Cours) => cours.referentiel === user.referentiel)
          setCours(filteredCours)
        }

        if (veillesResponse.ok) {
          const veillesData = await veillesResponse.json()
          // Filtrer les veilles par référentiel
          const filteredVeilles = veillesData.filter((veille: Veille) => veille.referentiel === user.referentiel)
          setVeilles(filteredVeilles)
        }

        if (suiviResponse.ok) {
          const suiviData = await suiviResponse.json()
          // Filtrer le suivi des cours pour n'inclure que les cours du référentiel de l'apprenant
          const filteredSuivi = suiviData.filter((suivi: SuiviCours) => suivi.cours.referentiel === user.referentiel)
          setSuiviCours(filteredSuivi)
        }
      } catch (error) {
        console.error("Error fetching data:", error)
      } finally {
        setLoading(false)
      }
    }

    if (user) {
      fetchData()
    }
  }, [user, API_BASE_URL])

  // Calculate stats
  const totalCours = cours.length
  const coursEnCours = suiviCours.filter((s) => s.pourcentage > 0 && s.pourcentage < 100).length
  const coursTermines = suiviCours.filter((s) => s.pourcentage === 100).length
  const veillesEnCours = veilles.filter((v) => new Date(v.date_fin) > new Date()).length

  // Get upcoming veilles
  const upcomingVeilles = veilles
    .filter((v) => new Date(v.date_fin) > new Date())
    .sort((a, b) => new Date(a.date_fin).getTime() - new Date(b.date_fin).getTime())
    .slice(0, 3)

  // Get recent courses
  const recentCours = suiviCours.sort((a, b) => b.id_suiviCours - a.id_suiviCours).slice(0, 3)

  return (
    <DashboardLayout userRole="apprenant">
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Tableau de bord</h1>
          <p className="text-muted-foreground">
            Bienvenue, {user?.prenom} ! Voici un aperçu de votre progression dans le référentiel {user?.referentiel}.
          </p>
        </div>

        {loading ? (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[...Array(4)].map((_, i) => (
              <Card key={i} className="animate-pulse">
                <CardHeader className="pb-2">
                  <div className="h-4 bg-muted rounded w-24"></div>
                </CardHeader>
                <CardContent>
                  <div className="h-8 bg-muted rounded w-16"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <>
            {/* Stats Cards */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card className="border-0 shadow-sm">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Total des cours</CardTitle>
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <BookOpen className="h-4 w-4 text-primary" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{totalCours}</div>
                  <p className="text-xs text-muted-foreground">
                    Cours disponibles pour votre référentiel {user?.referentiel}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Cours en cours</CardTitle>
                  <div className="h-8 w-8 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Clock className="h-4 w-4 text-secondary" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{coursEnCours}</div>
                  <p className="text-xs text-muted-foreground">Cours que vous êtes en train de suivre</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Cours terminés</CardTitle>
                  <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                    <BookOpen className="h-4 w-4 text-green-600" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{coursTermines}</div>
                  <p className="text-xs text-muted-foreground">Cours que vous avez complétés</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Veilles en cours</CardTitle>
                  <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
                    <FileText className="h-4 w-4 text-purple-600" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{veillesEnCours}</div>
                  <p className="text-xs text-muted-foreground">Veilles à rendre prochainement</p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Courses */}
            <div>
              <h2 className="text-xl font-bold mb-4">Cours récents</h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {recentCours.length > 0 ? (
                  recentCours.map((suivi) => (
                    <Card key={suivi.id_suiviCours} className="border-0 shadow-sm overflow-hidden">
                      <div className="h-2 bg-primary"></div>
                      <CardHeader>
                        <CardTitle className="text-lg">{suivi.cours.titre}</CardTitle>
                        <CardDescription>
                          Par {suivi.cours.formateur?.prenom} {suivi.cours.formateur?.nom}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Progression</span>
                            <span>{suivi.pourcentage}%</span>
                          </div>
                          <Progress value={suivi.pourcentage} className="h-2" />
                          <Link
                            href={`/apprenant/cours/${suivi.id_cours}`}
                            className="text-sm text-primary hover:underline inline-block mt-2"
                          >
                            Continuer le cours
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <Card className="col-span-full border-0 shadow-sm">
                    <CardHeader>
                      <CardTitle>Aucun cours suivi</CardTitle>
                      <CardDescription>
                        Vous n'avez pas encore commencé de cours dans votre référentiel {user?.referentiel}.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Link href="/apprenant/cours" className="text-sm text-primary hover:underline">
                        Découvrir les cours disponibles
                      </Link>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>

            {/* Upcoming Veilles */}
            <div>
              <h2 className="text-xl font-bold mb-4">Veilles à rendre prochainement</h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {upcomingVeilles.length > 0 ? (
                  upcomingVeilles.map((veille) => (
                    <Card key={veille.id_veille} className="border-0 shadow-sm overflow-hidden">
                      <div className="h-2 bg-secondary"></div>
                      <CardHeader>
                        <CardTitle className="text-lg">{veille.titre}</CardTitle>
                        <CardDescription>
                          Par {veille.formateur?.prenom} {veille.formateur?.nom}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Date limite</span>
                            <span className="font-medium">{new Date(veille.date_fin).toLocaleDateString()}</span>
                          </div>
                          <Link
                            href={`/apprenant/veilles/${veille.id_veille}`}
                            className="text-sm text-primary hover:underline inline-block mt-2"
                          >
                            Voir la veille
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <Card className="col-span-full border-0 shadow-sm">
                    <CardHeader>
                      <CardTitle>Aucune veille en cours</CardTitle>
                      <CardDescription>
                        Vous n'avez pas de veilles à rendre pour le moment dans votre référentiel {user?.referentiel}.
                      </CardDescription>
                    </CardHeader>
                  </Card>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </DashboardLayout>
  )
}
