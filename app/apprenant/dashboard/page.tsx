"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Clock, GraduationCap, Users } from "lucide-react"

export default function ApprenantDashboard() {
  const [isLoading, setIsLoading] = useState(true)
  const [stats, setStats] = useState({
    coursInscrits: 0,
    coursTermines: 0,
    chapitresCompletes: 0,
    tempsApprentissage: 0,
  })

  useEffect(() => {
    // Simuler le chargement des données
    const timer = setTimeout(() => {
      setStats({
        coursInscrits: 5,
        coursTermines: 2,
        chapitresCompletes: 12,
        tempsApprentissage: 24,
      })
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Tableau de bord</h1>
        <p className="text-muted-foreground">Bienvenue sur votre espace apprenant</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Cours inscrits</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.coursInscrits}</div>
            <p className="text-xs text-muted-foreground">Cours auxquels vous êtes inscrit</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Cours terminés</CardTitle>
            <GraduationCap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.coursTermines}</div>
            <p className="text-xs text-muted-foreground">Cours que vous avez complétés</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Chapitres complétés</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.chapitresCompletes}</div>
            <p className="text-xs text-muted-foreground">Chapitres que vous avez terminés</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Temps d'apprentissage</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.tempsApprentissage}h</div>
            <p className="text-xs text-muted-foreground">Temps passé à apprendre</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Cours récents</CardTitle>
            <CardDescription>Les derniers cours auxquels vous avez accédé</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-9 h-9 rounded bg-primary/10 flex items-center justify-center mr-3">
                  <BookOpen className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Introduction au développement web</p>
                  <p className="text-xs text-muted-foreground">Dernière activité: Hier</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-9 h-9 rounded bg-primary/10 flex items-center justify-center mr-3">
                  <BookOpen className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">JavaScript avancé</p>
                  <p className="text-xs text-muted-foreground">Dernière activité: Il y a 3 jours</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-9 h-9 rounded bg-primary/10 flex items-center justify-center mr-3">
                  <BookOpen className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Bases de données SQL</p>
                  <p className="text-xs text-muted-foreground">Dernière activité: La semaine dernière</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Prochaines échéances</CardTitle>
            <CardDescription>Vos prochaines échéances de cours</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-9 h-9 rounded bg-orange-100 flex items-center justify-center mr-3">
                  <Clock className="h-5 w-5 text-orange-500" />
                </div>
                <div>
                  <p className="text-sm font-medium">Projet JavaScript à rendre</p>
                  <p className="text-xs text-muted-foreground">Dans 2 jours</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-9 h-9 rounded bg-orange-100 flex items-center justify-center mr-3">
                  <Clock className="h-5 w-5 text-orange-500" />
                </div>
                <div>
                  <p className="text-sm font-medium">Quiz sur les bases de données</p>
                  <p className="text-xs text-muted-foreground">Dans 5 jours</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-9 h-9 rounded bg-orange-100 flex items-center justify-center mr-3">
                  <Clock className="h-5 w-5 text-orange-500" />
                </div>
                <div>
                  <p className="text-sm font-medium">Présentation de projet</p>
                  <p className="text-xs text-muted-foreground">Dans 2 semaines</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
