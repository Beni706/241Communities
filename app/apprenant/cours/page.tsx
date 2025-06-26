"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { BookOpen, Search } from "lucide-react"
import { useAuth } from "@/components/auth-provider"
import { useToast } from "@/hooks/use-toast"

type Cours = {
  id_cours: number
  titre: string
  categorie: string
  description: string
  referentiel?: string
  id_formateur: number
  photoCours?: string
}

export default function ApprenantCoursPage() {
  const { user } = useAuth()
  const router = useRouter()
  const { toast } = useToast()
  const [coursList, setCoursList] = useState<Cours[]>([])
  const [filteredCours, setFilteredCours] = useState<Cours[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [loading, setLoading] = useState(true)
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "/api"

  useEffect(() => {
    const fetchCours = async () => {
      if (!user) {
        toast({ variant: "destructive", title: "Erreur", description: "Utilisateur non authentifié." })
        router.push("/login/apprenant")
        return
      }

      try {
        const token = localStorage.getItem("apprenantToken") || localStorage.getItem("token")
        if (!token) {
          router.push("/login/apprenant")
          return
        }

        const response = await fetch(`${API_BASE_URL}/cours`, {
          headers: { Authorization: `Bearer ${token}` },
        })

        if (response.ok) {
          const allCours: Cours[] = await response.json()
          // Filtrer les cours par le référentiel de l'apprenant
          const apprenantReferentiel = user?.referentiel
          const relevantCours = apprenantReferentiel
            ? allCours.filter((c) => c.referentiel === apprenantReferentiel || !c.referentiel) // Inclure les cours sans référentiel spécifique
            : allCours // Si l'apprenant n'a pas de référentiel, montrer tous les cours (ou ajuster la logique)
          
          setCoursList(relevantCours)
          setFilteredCours(relevantCours)
        } else {
          toast({ variant: "destructive", title: "Erreur", description: "Impossible de charger les cours." })
        }
      } catch (error) {
        console.error("Error fetching cours:", error)
        toast({ variant: "destructive", title: "Erreur", description: "Une erreur est survenue." })
      } finally {
        setLoading(false)
      }
    }

    fetchCours()
  }, [user, router, toast, API_BASE_URL])

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredCours(coursList)
    } else {
      const filtered = coursList.filter(
        (c) =>
          c.titre.toLowerCase().includes(searchTerm.toLowerCase()) ||
          c.categorie.toLowerCase().includes(searchTerm.toLowerCase())
      )
      setFilteredCours(filtered)
    }
  }, [searchTerm, coursList])

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Mes Cours</h1>
        <p className="text-muted-foreground">
          Découvrez et accédez aux cours disponibles pour votre formation.
        </p>
      </div>

      <div className="relative flex-1">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Rechercher un cours..."
          className="pl-8"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {loading ? (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(3)].map((_, i) => (
            <Card key={i} className="animate-pulse"><CardHeader className="pb-2"><div className="h-4 bg-muted rounded w-3/4"></div></CardHeader><CardContent><div className="h-20 bg-muted rounded"></div><div className="h-4 bg-muted rounded w-1/2 mt-2"></div></CardContent></Card>
          ))}
        </div>
      ) : filteredCours.length > 0 ? (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredCours.map((cours) => (
            <Card key={cours.id_cours} className="border-0 shadow-sm overflow-hidden">
              {cours.photoCours ? (
                <div className="relative w-full h-40"><Image src={cours.photoCours || "/placeholder.svg"} alt={cours.titre} fill className="object-cover" /></div>
              ) : (
                <div className="h-2 bg-primary"></div>
              )}
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{cours.titre}</CardTitle>
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center"><BookOpen className="h-4 w-4 text-primary" /></div>
                </div>
                <CardDescription>{cours.categorie} {cours.referentiel && `- ${cours.referentiel}`}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{cours.description}</p>
                <Link href={`/apprenant/cours/${cours.id_cours}`} className="text-sm text-primary hover:underline">
                  Accéder au cours
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="border-0 shadow-sm"><CardHeader><CardTitle>Aucun cours trouvé</CardTitle><CardDescription>{searchTerm ? "Aucun cours ne correspond à votre recherche." : "Aucun cours n'est actuellement disponible pour votre référentiel."}</CardDescription></CardHeader></Card>
      )}
    </div>
  )
}