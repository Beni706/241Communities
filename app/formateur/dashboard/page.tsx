"use client"

import { useEffect, useState } from "react"
import DashboardLayout from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, FileText, Plus, Users } from "lucide-react"
import Link from "next/link"

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

type Apprenant = {
  id_apprenant: number
  nom: string
  prenom: string
  email: string
  referentiel: string
}

type UserInfo = {
  id: number
  nom: string
  prenom: string
  email: string
  role: string
  referentiel: string
}

export default function FormateurDashboard() {
  const [user, setUser] = useState<UserInfo | null>(null)
  const [cours, setCours] = useState<Cours[]>([])
  const [veilles, setVeilles] = useState<Veille[]>([])
  const [apprenants, setApprenants] = useState<Apprenant[]>([])
  const [loading, setLoading] = useState(true)
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api"

  useEffect(() => {
    // Récupérer les informations de l'utilisateur depuis le localStorage
    const storedUser = localStorage.getItem("user")
    const token = localStorage.getItem("formateurToken")

    if (!token) {
      window.location.href = "/login/formateur"
      return
    }

    if (storedUser) {
      const userInfo = JSON.parse(storedUser)
      setUser(userInfo)
    }
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!user) return
        const token = localStorage.getItem("formateurToken")

        if (!token) return

        // Fetch courses created by the formateur
        const coursResponse = await fetch(`${API_BASE_URL}/cours?id_formateur=${user.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        // Fetch veilles created by the formateur
        const veillesResponse = await fetch(`${API_BASE_URL}/veille?id_formateur=${user.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        // Fetch apprenants with the same referential
        const apprenantsResponse = await fetch(`${API_BASE_URL}/apprenant`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        if (coursResponse.ok) {
          const coursData = await coursResponse.json()
          // Filtrer les cours par référentiel du formateur
          const filteredCours = coursData.filter((cours: Cours) => cours.referentiel === user.referentiel)
          setCours(filteredCours)
        }

        if (veillesResponse.ok) {
          const veillesData = await veillesResponse.json()
          // Filtrer les veilles par référentiel du formateur
          const filteredVeilles = veillesData.filter((veille: Veille) => veille.referentiel === user.referentiel)
          setVeilles(filteredVeilles)
        }

        if (apprenantsResponse.ok) {
          const apprenantsData = await apprenantsResponse.json()
          // Filtrer les apprenants par référentiel du formateur
          const filteredApprenants = apprenantsData.filter(
            (apprenant: Apprenant) => apprenant.referentiel === user.referentiel,
          )
          setApprenants(filteredApprenants)
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

  // Get recent courses
  const recentCours = [...cours].sort((a, b) => b.id_cours - a.id_cours).slice(0, 3)

  // Get recent veilles
  const recentVeilles = [...veilles]
    .sort((a, b) => new Date(b.date_fin).getTime() - new Date(a.date_fin).getTime())
    .slice(0, 3)

  // Get recent apprenants
  const recentApprenants = [...apprenants].slice(0, 5)

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Tableau de bord</h1>
            <p className="text-muted-foreground">
              Bienvenue, {user?.prenom} ! Gérez vos cours et veilles pour le référentiel {user?.referentiel}.
            </p>
          </div>
          <div className="flex gap-2">
            <Link href="/formateur/cours/creer">
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                Nouveau cours
              </Button>
            </Link>
            <Link href="/formateur/veilles/creer">
              <Button variant="outline" className="gap-2">
                <Plus className="h-4 w-4" />
                Nouvelle veille
              </Button>
            </Link>
          </div>
        </div>

        {loading ? (
          <div className="grid gap-4 md:grid-cols-3">
            {[...Array(3)].map((_, i) => (
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
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-0 shadow-sm">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Cours créés</CardTitle>
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <BookOpen className="h-4 w-4 text-primary" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{cours.length}</div>
                  <p className="text-xs text-muted-foreground">
                    Cours que vous avez créés pour le référentiel {user?.referentiel}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Veilles créées</CardTitle>
                  <div className="h-8 w-8 rounded-full bg-secondary/10 flex items-center justify-center">
                    <FileText className="h-4 w-4 text-secondary" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{veilles.length}</div>
                  <p className="text-xs text-muted-foreground">
                    Veilles que vous avez créées pour le référentiel {user?.referentiel}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Apprenants</CardTitle>
                  <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
                    <Users className="h-4 w-4 text-purple-600" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{apprenants.length}</div>
                  <p className="text-xs text-muted-foreground">Apprenants dans votre référentiel {user?.referentiel}</p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Courses */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Cours récents</h2>
                <Link href="/formateur/cours">
                  <Button variant="link">Voir tous les cours</Button>
                </Link>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                {recentCours.length > 0 ? (
                  recentCours.map((cours) => (
                    <Card key={cours.id_cours} className="border-0 shadow-sm overflow-hidden">
                      <div className="h-2 bg-primary"></div>
                      <CardHeader>
                        <CardTitle className="text-lg">{cours.titre}</CardTitle>
                        <CardDescription>
                          {cours.categorie} - {cours.referentiel}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{cours.description}</p>
                        <Link
                          href={`/formateur/cours/${cours.id_cours}`}
                          className="text-sm text-primary hover:underline"
                        >
                          Voir le cours
                        </Link>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <Card className="col-span-full border-0 shadow-sm">
                    <CardHeader>
                      <CardTitle>Aucun cours créé</CardTitle>
                      <CardDescription>
                        Vous n'avez pas encore créé de cours pour le référentiel {user?.referentiel}.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Link href="/formateur/cours/creer">
                        <Button size="sm">Créer un cours</Button>
                      </Link>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>

            {/* Recent Veilles */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Veilles récentes</h2>
                <Link href="/formateur/veilles">
                  <Button variant="link">Voir toutes les veilles</Button>
                </Link>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                {recentVeilles.length > 0 ? (
                  recentVeilles.map((veille) => (
                    <Card key={veille.id_veille} className="border-0 shadow-sm overflow-hidden">
                      <div className="h-2 bg-secondary"></div>
                      <CardHeader>
                        <CardTitle className="text-lg">{veille.titre}</CardTitle>
                        <CardDescription>
                          Date limite: {new Date(veille.date_fin).toLocaleDateString()} - {veille.referentiel}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Link
                          href={`/formateur/veilles/${veille.id_veille}`}
                          className="text-sm text-primary hover:underline"
                        >
                          Voir la veille
                        </Link>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <Card className="col-span-full border-0 shadow-sm">
                    <CardHeader>
                      <CardTitle>Aucune veille créée</CardTitle>
                      <CardDescription>
                        Vous n'avez pas encore créé de veilles pour le référentiel {user?.referentiel}.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Link href="/formateur/veilles/creer">
                        <Button size="sm">Créer une veille</Button>
                      </Link>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>

            {/* Recent Apprenants */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Apprenants récents</h2>
                <Link href="/formateur/apprenants">
                  <Button variant="link">Voir tous les apprenants</Button>
                </Link>
              </div>
              <Card className="border-0 shadow-sm">
                <CardHeader>
                  <CardTitle>Liste des apprenants</CardTitle>
                  <CardDescription>Apprenants dans votre référentiel {user?.referentiel}</CardDescription>
                </CardHeader>
                <CardContent>
                  {recentApprenants.length > 0 ? (
                    <div className="space-y-2">
                      {recentApprenants.map((apprenant) => (
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
                          <Link
                            href={`/formateur/apprenants/${apprenant.id_apprenant}`}
                            className="text-sm text-primary hover:underline"
                          >
                            Détails
                          </Link>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-muted-foreground">Aucun apprenant dans votre référentiel {user?.referentiel}.</p>
                  )}
                </CardContent>
              </Card>
            </div>
          </>
        )}
      </div>
    </DashboardLayout>
  )
}
