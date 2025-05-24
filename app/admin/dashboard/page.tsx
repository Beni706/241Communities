"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Plus, Users } from "lucide-react"
import DashboardLayout from "@/components/dashboard-layout"

type Apprenant = {
  id_apprenant: number
  nom: string
  prenom: string
  email: string
  referentiel: string
}

type Formateur = {
  id_formateur: number
  nom: string
  prenom: string
  email: string
  referentiel: string
}

type Cours = {
  id_cours: number
  titre: string
  categorie: string
  description: string
  formateur: {
    nom: string
    prenom: string
  }
}

export default function AdminDashboard() {
  const [apprenants, setApprenants] = useState<Apprenant[]>([])
  const [formateurs, setFormateurs] = useState<Formateur[]>([])
  const [cours, setCours] = useState<Cours[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const API_URL = process.env.NEXT_PUBLIC_API_URL

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        setError(null)

        const token = localStorage.getItem("adminToken")
        if (!token) {
          setError("Vous n'êtes pas authentifié")
          setLoading(false)
          return
        }

        // Fetch apprenants
        const apprenantsResponse = await fetch(`${API_URL}/apprenant`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        // Fetch formateurs
        const formateursResponse = await fetch(`${API_URL}/formateur`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        // Fetch cours
        const coursResponse = await fetch(`${API_URL}/cours`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        if (apprenantsResponse.ok) {
          const apprenantsData = await apprenantsResponse.json()
          setApprenants(apprenantsData)
        }

        if (formateursResponse.ok) {
          const formateursData = await formateursResponse.json()
          setFormateurs(formateursData)
        }

        if (coursResponse.ok) {
          const coursData = await coursResponse.json()
          setCours(coursData)
        }
      } catch (error) {
        console.error("Error fetching data:", error)
        setError("Une erreur est survenue lors de la récupération des données")
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [API_URL])

  // Get recent apprenants
  const recentApprenants = [...apprenants].slice(0, 5)

  // Get recent formateurs
  const recentFormateurs = [...formateurs].slice(0, 5)

  // Get recent cours
  const recentCours = [...cours].sort((a, b) => b.id_cours - a.id_cours).slice(0, 5)

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Tableau de bord administrateur</h1>
            <p className="text-muted-foreground">Bienvenue ! Gérez les utilisateurs et les cours de la plateforme.</p>
          </div>
          <div className="flex gap-2">
            <Link href="/admin/apprenants/creer">
              <Button variant="outline" className="gap-2">
                <Plus className="h-4 w-4" />
                Nouvel apprenant
              </Button>
            </Link>
            <Link href="/admin/formateurs/creer">
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                Nouveau formateur
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
        ) : error ? (
          <div className="text-center py-10">
            <p className="text-red-500">{error}</p>
            <p className="text-muted-foreground mt-2">Vérifiez votre connexion et essayez de rafraîchir la page.</p>
          </div>
        ) : (
          <>
            {/* Stats Cards */}
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-0 shadow-sm">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Apprenants</CardTitle>
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="h-4 w-4 text-primary" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{apprenants.length}</div>
                  <p className="text-xs text-muted-foreground">Apprenants inscrits sur la plateforme</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Formateurs</CardTitle>
                  <div className="h-8 w-8 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Users className="h-4 w-4 text-secondary" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{formateurs.length}</div>
                  <p className="text-xs text-muted-foreground">Formateurs inscrits sur la plateforme</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Cours</CardTitle>
                  <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
                    <BookOpen className="h-4 w-4 text-purple-600" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{cours.length}</div>
                  <p className="text-xs text-muted-foreground">Cours disponibles sur la plateforme</p>
                </CardContent>
              </Card>
            </div>

            {/* Tabs for different sections */}
            <Tabs defaultValue="apprenants" className="space-y-4">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="apprenants">Apprenants</TabsTrigger>
                <TabsTrigger value="formateurs">Formateurs</TabsTrigger>
                <TabsTrigger value="cours">Cours</TabsTrigger>
              </TabsList>

              <TabsContent value="apprenants">
                <Card className="border-0 shadow-sm">
                  <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                      <CardTitle>Apprenants récents</CardTitle>
                      <CardDescription>Liste des derniers apprenants inscrits</CardDescription>
                    </div>
                    <Link href="/admin/apprenants">
                      <Button variant="outline" size="sm">
                        Voir tous
                      </Button>
                    </Link>
                  </CardHeader>
                  <CardContent>
                    {recentApprenants.length > 0 ? (
                      <div className="space-y-4">
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
                                <div className="flex items-center gap-2">
                                  <p className="text-xs text-muted-foreground">{apprenant.email}</p>
                                  <span className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded-full">
                                    {apprenant.referentiel}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <Link
                              href={`/admin/apprenants/${apprenant.id_apprenant}`}
                              className="text-sm text-primary hover:underline"
                            >
                              Gérer
                            </Link>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-muted-foreground">Aucun apprenant inscrit.</p>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Section Formateurs */}
              <TabsContent value="formateurs">
                <Card className="border-0 shadow-sm">
                  <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                      <CardTitle>Formateurs récents</CardTitle>
                      <CardDescription>Liste des derniers formateurs inscrits</CardDescription>
                    </div>
                    <Link href="/admin/formateurs">
                      <Button variant="outline" size="sm">
                        Voir tous
                      </Button>
                    </Link>
                  </CardHeader>
                  <CardContent>
                    {recentFormateurs.length > 0 ? (
                      <div className="space-y-4">
                        {recentFormateurs.map((formateur) => (
                          <div
                            key={formateur.id_formateur}
                            className="flex items-center justify-between p-2 rounded-md hover:bg-muted"
                          >
                            <div className="flex items-center gap-2">
                              <div className="h-8 w-8 rounded-full bg-secondary/10 flex items-center justify-center">
                                <span className="font-bold text-secondary text-xs">
                                  {formateur.prenom.charAt(0)}
                                  {formateur.nom.charAt(0)}
                                </span>
                              </div>
                              <div>
                                <p className="font-medium">
                                  {formateur.prenom} {formateur.nom}
                                </p>
                                <div className="flex items-center gap-2">
                                  <p className="text-xs text-muted-foreground">{formateur.email}</p>
                                  <span className="text-xs px-2 py-0.5 bg-secondary/10 text-secondary rounded-full">
                                    {formateur.referentiel}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <Link
                              href={`/admin/formateurs/${formateur.id_formateur}`}
                              className="text-sm text-primary hover:underline"
                            >
                              Gérer
                            </Link>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-muted-foreground">Aucun formateur inscrit.</p>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
              
              {/* Section Cours */}
              <TabsContent value="cours">
                <Card className="border-0 shadow-sm">
                  <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                      <CardTitle>Cours récents</CardTitle>
                      <CardDescription>Liste des derniers cours créés</CardDescription>
                    </div>
                    <Link href="/admin/cours">
                      <Button variant="outline" size="sm">
                        Voir tous
                      </Button>
                    </Link>
                  </CardHeader>
                  <CardContent>
                    {recentCours.length > 0 ? (
                      <div className="space-y-4">
                        {recentCours.map((cours) => (
                          <div
                            key={cours.id_cours}
                            className="flex items-center justify-between p-2 rounded-md hover:bg-muted"
                          >
                            <div>
                              <p className="font-medium">{cours.titre}</p>
                              <div className="flex items-center gap-2">
                                <p className="text-xs text-muted-foreground">{cours.categorie}</p>
                                <p className="text-xs text-muted-foreground">
                                  Par {cours.formateur?.prenom} {cours.formateur?.nom}
                                </p>
                              </div>
                            </div>
                            <Link
                              href={`/admin/cours/${cours.id_cours}`}
                              className="text-sm text-primary hover:underline"
                            >
                              Voir
                            </Link>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-muted-foreground">Aucun cours créé.</p>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </>
        )}
      </div>
    </DashboardLayout>
  )
}
