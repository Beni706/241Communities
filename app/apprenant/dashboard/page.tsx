"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Clock, GraduationCap, Users, Eye } from "lucide-react"
import { useAuth } from "@/components/auth-provider"
import { useToast } from "@/hooks/use-toast"

type Cours = {
  id_cours: number
  titre: string
  // autres champs si nécessaire
}

type Veille = {
  id_veille: number
  titre: string
  date_fin: string
  lien_docRendu?: string | null
  id_apprenant?: number | null
}

type SuiviCours = {
  id_suiviCours: number
  id_cours: number
  pourcentage: number
  // autres champs si nécessaire
}

export default function ApprenantDashboard() {
  const { user } = useAuth()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(true)
  const [stats, setStats] = useState({
    coursInscrits: 0,
    coursTermines: 0,
    progressionMoyenne: 0, // en pourcentage
    veillesAFaire: 0,
  })
  const [coursRecents, setCoursRecents] = useState<Cours[]>([])
  const [prochainesEcheances, setProchainesEcheances] = useState<Veille[]>([])

  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "/api"

  useEffect(() => {
    const fetchData = async () => {
      if (!user?.id) {
        setIsLoading(false)
        return
      }
      try {
        const token = localStorage.getItem("apprenantToken") || localStorage.getItem("token")
        if (!token) {
          setIsLoading(false)
          return
        }

        // Fetch cours (pour cours inscrits et récents)
        const coursRes = await fetch(`${API_BASE_URL}/cours`, { headers: { Authorization: `Bearer ${token}` } })
        const allCours: Cours[] = coursRes.ok ? await coursRes.json() : []
        const apprenantCours = user.referentiel ? allCours.filter((c: any) => c.referentiel === user.referentiel || !c.referentiel) : allCours
        setCoursRecents(apprenantCours.slice(0, 3)) // Simplement les 3 premiers pour l'exemple

        // Fetch suiviCours pour les stats
        const suiviRes = await fetch(`${API_BASE_URL}/suiviCours?apprenantId=${user.id}`, { headers: { Authorization: `Bearer ${token}` } })
        const suivis: SuiviCours[] = suiviRes.ok ? await suiviRes.json() : []
        
        const coursInscrits = apprenantCours.length // Ou basé sur les suivis si un suivi est créé à l'inscription
        const coursTermines = suivis.filter(s => s.pourcentage === 100).length
        const totalPourcentage = suivis.reduce((acc, s) => acc + s.pourcentage, 0)
        const progressionMoyenne = suivis.length > 0 ? Math.round(totalPourcentage / suivis.length) : 0

        // Fetch veilles pour les échéances
        const veillesRes = await fetch(`${API_BASE_URL}/veille`, { headers: { Authorization: `Bearer ${token}` } })
        const allVeilles: Veille[] = veillesRes.ok ? await veillesRes.json() : []
        const apprenantVeilles = user.referentiel ? allVeilles.filter((v: any) => v.referentiel === user.referentiel || !v.referentiel) : allVeilles
        
        const veillesAFaire = apprenantVeilles.filter(v => !(v.lien_docRendu && v.id_apprenant === user.id) && new Date(v.date_fin) >= new Date()).length
        setProchainesEcheances(apprenantVeilles.filter(v => !(v.lien_docRendu && v.id_apprenant === user.id) && new Date(v.date_fin) >= new Date()).sort((a,b) => new Date(a.date_fin).getTime() - new Date(b.date_fin).getTime()).slice(0,3))

        setStats({ coursInscrits, coursTermines, progressionMoyenne, veillesAFaire })

      } catch (error) {
        console.error("Error fetching dashboard data:", error)
        toast({ variant: "destructive", title: "Erreur", description: "Impossible de charger les données du tableau de bord." })
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [user, toast, API_BASE_URL])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }
  if (!user) {
    return <div className="text-center py-10">Veuillez vous connecter pour accéder à votre tableau de bord.</div>;
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
            <CardTitle className="text-sm font-medium">Progression Moyenne</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.progressionMoyenne}%</div>
            <p className="text-xs text-muted-foreground">Sur les cours commencés</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Veilles à faire</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.veillesAFaire}</div>
            <p className="text-xs text-muted-foreground">Veilles technologiques en attente</p>
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
              {coursRecents.length > 0 ? coursRecents.map(cours => (
                <Link href={`/apprenant/cours/${cours.id_cours}`} key={cours.id_cours} className="block hover:bg-muted/50 p-2 rounded-md">
                  <div className="flex items-center">
                    <div className="w-9 h-9 rounded bg-primary/10 flex items-center justify-center mr-3">
                      <BookOpen className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{cours.titre}</p>
                      {/* <p className="text-xs text-muted-foreground">Dernière activité: Hier</p> */}
                    </div>
                  </div>
                </Link>
              )) : (
                <p className="text-sm text-muted-foreground italic">Aucun cours récent.</p>
              )}
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
              {prochainesEcheances.length > 0 ? prochainesEcheances.map(veille => (
                <Link href={`/apprenant/veilles/${veille.id_veille}`} key={veille.id_veille} className="block hover:bg-muted/50 p-2 rounded-md">
                  <div className="flex items-center">
                    <div className="w-9 h-9 rounded bg-orange-100 flex items-center justify-center mr-3">
                      <Clock className="h-5 w-5 text-orange-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{veille.titre}</p>
                      <p className="text-xs text-muted-foreground">Date limite: {new Date(veille.date_fin).toLocaleDateString()}</p>
                    </div>
                  </div>
                </Link>
              )) : (
                <p className="text-sm text-muted-foreground italic">Aucune échéance à venir.</p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
