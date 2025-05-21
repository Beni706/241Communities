"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import DashboardLayout from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { BookOpen, Plus, Search } from "lucide-react"

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

export default function CoursList() {
  const [cours, setCours] = useState<Cours[]>([])
  const [filteredCours, setFilteredCours] = useState<Cours[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const API_URL = process.env.NEXT_PUBLIC_API_URL

  useEffect(() => {
    const fetchCours = async () => {
      try {
        const token = localStorage.getItem("adminToken")
        if (!token) {
          router.push("/login/administrateur")
          return
        }

        const response = await fetch(`${API_URL}/cours`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        if (response.ok) {
          const data = await response.json()
          setCours(data)
          setFilteredCours(data)
        } else {
          console.error("Erreur lors de la récupération des cours")
        }
      } catch (error) {
        console.error("Erreur:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchCours()
  }, [API_URL, router])

  useEffect(() => {
    if (searchTerm) {
      const filtered = cours.filter(
        (cours) =>
          cours.titre.toLowerCase().includes(searchTerm.toLowerCase()) ||
          cours.categorie.toLowerCase().includes(searchTerm.toLowerCase()) ||
          cours.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          `${cours.formateur?.prenom} ${cours.formateur?.nom}`.toLowerCase().includes(searchTerm.toLowerCase()),
      )
      setFilteredCours(filtered)
    } else {
      setFilteredCours(cours)
    }
  }, [searchTerm, cours])

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Gestion des cours</h1>
            <p className="text-muted-foreground">Consultez et gérez tous les cours disponibles sur la plateforme.</p>
          </div>
          <Link href="/cours/creer">
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Nouveau cours
            </Button>
          </Link>
        </div>

        <Card className="border-0 shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle>Liste des cours</CardTitle>
            <div className="relative mt-2">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Rechercher un cours..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="space-y-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="animate-pulse p-4 rounded-md bg-muted/40">
                    <div className="space-y-2">
                      <div className="h-5 w-48 bg-muted rounded"></div>
                      <div className="h-4 w-full bg-muted rounded"></div>
                      <div className="flex gap-2">
                        <div className="h-3 w-20 bg-muted rounded"></div>
                        <div className="h-3 w-32 bg-muted rounded"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : filteredCours.length > 0 ? (
              <div className="space-y-4">
                {filteredCours.map((cours) => (
                  <div key={cours.id_cours} className="p-4 rounded-md hover:bg-muted/40">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-medium">{cours.titre}</h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">{cours.description}</p>
                        <div className="flex items-center gap-3 mt-1">
                          <span className="text-xs px-2 py-0.5 bg-purple-100 text-purple-600 rounded-full">
                            {cours.categorie}
                          </span>
                          <p className="text-xs text-muted-foreground">
                            Par {cours.formateur?.prenom} {cours.formateur?.nom}
                          </p>
                        </div>
                      </div>
                      <Link
                        href={`/admin/cours/${cours.id_cours}`}
                        className="text-sm font-medium text-primary hover:underline self-start"
                      >
                        Voir
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-10">
                <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Aucun cours trouvé.</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
