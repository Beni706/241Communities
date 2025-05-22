"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Clock, GraduationCap, Users } from "lucide-react"

export default function FormateurDashboard() {
  const [isLoading, setIsLoading] = useState(true)
  const [stats, setStats] = useState({
    coursActifs: 0,
    apprenants: 0,
    chapitres: 0,
    veilles: 0,
  })

  useEffect(() => {
    // Simuler le chargement des données
    const timer = setTimeout(() => {
      setStats({
        coursActifs: 4,
        apprenants: 25,
        chapitres: 18,
        veilles: 7,
      })
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-secondary"></div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Tableau de bord</h1>
        <p className="text-muted-foreground">Bienvenue sur votre espace formateur</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Cours actifs</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.coursActifs}</div>
            <p className="text-xs text-muted-foreground">Cours que vous enseignez actuellement</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Apprenants</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.apprenants}</div>
            <p className="text-xs text-muted-foreground">Apprenants inscrits à vos cours</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Chapitres</CardTitle>
            <GraduationCap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.chapitres}</div>
            <p className="text-xs text-muted-foreground">Chapitres créés dans vos cours</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Veilles</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.veilles}</div>
            <p className="text-xs text-muted-foreground">Veilles technologiques publiées</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Cours récents</CardTitle>
            <CardDescription>Les derniers cours que vous avez créés ou modifiés</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-9 h-9 rounded bg-secondary/10 flex items-center justify-center mr-3">
                  <BookOpen className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Développement web avancé</p>
                  <p className="text-xs text-muted-foreground">Dernière modification: Hier</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-9 h-9 rounded bg-secondary/10 flex items-center justify-center mr-3">
                  <BookOpen className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Frameworks JavaScript</p>
                  <p className="text-xs text-muted-foreground">Dernière modification: Il y a 3 jours</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-9 h-9 rounded bg-secondary/10 flex items-center justify-center mr-3">
                  <BookOpen className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Bases de données NoSQL</p>
                  <p className="text-xs text-muted-foreground">Dernière modification: La semaine dernière</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Activité récente des apprenants</CardTitle>
            <CardDescription>Dernières activités de vos apprenants</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-9 h-9 rounded bg-green-100 flex items-center justify-center mr-3">
                  <Users className="h-5 w-5 text-green-500" />
                </div>
                <div>
                  <p className="text-sm font-medium">Jean Dupont a terminé un chapitre</p>
                  <p className="text-xs text-muted-foreground">Il y a 2 heures</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-9 h-9 rounded bg-green-100 flex items-center justify-center mr-3">
                  <Users className="h-5 w-5 text-green-500" />
                </div>
                <div>
                  <p className="text-sm font-medium">Marie Martin a soumis un projet</p>
                  <p className="text-xs text-muted-foreground">Il y a 1 jour</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-9 h-9 rounded bg-green-100 flex items-center justify-center mr-3">
                  <Users className="h-5 w-5 text-green-500" />
                </div>
                <div>
                  <p className="text-sm font-medium">5 nouveaux apprenants inscrits</p>
                  <p className="text-xs text-muted-foreground">Cette semaine</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
