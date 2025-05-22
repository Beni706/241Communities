"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import DashboardLayout from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Calendar, FileText, Plus, Search } from "lucide-react"
import { useAuth } from "@/components/auth-provider"

type Veille = {
  id_veille: number
  titre: string
  date_creation: string
  date_fin: string
  lien_docDonnee: string
  referentiel: string
}

export default function VeillesPage() {
  const { user } = useAuth()
  const router = useRouter()
  const [veilles, setVeilles] = useState<Veille[]>([])
  const [filteredVeilles, setFilteredVeilles] = useState<Veille[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [loading, setLoading] = useState(true)
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL

  useEffect(() => {
    const fetchVeilles = async () => {
      try {
        const token = localStorage.getItem("formateurToken") || localStorage.getItem("token")
        if (!token) {
          router.push("/login/formateur")
          return
        }

        const response = await fetch(`${API_BASE_URL}/veille`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        if (response.ok) {
          const veillesData = await response.json()
          // Filtrer les veilles par référentiel du formateur
          const filteredData = veillesData.filter((veille: Veille) => veille.referentiel === user?.referentiel)
          setVeilles(filteredData)
          setFilteredVeilles(filteredData)
        } else {
          console.error("Failed to fetch veilles")
        }
      } catch (error) {
        console.error("Error fetching veilles:", error)
      } finally {
        setLoading(false)
      }
    }

    if (user) {
      fetchVeilles()
    }
  }, [user, router, API_BASE_URL])

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredVeilles(veilles)
    } else {
      const filtered = veilles.filter((veille) => veille.titre.toLowerCase().includes(searchTerm.toLowerCase()))
      setFilteredVeilles(filtered)
    }
  }, [searchTerm, veilles])

  const isVeilleActive = (dateFin: string) => {
    const now = new Date()
    const endDate = new Date(dateFin)
    return endDate > now
  }

  return (
 
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Mes Veilles</h1>
            <p className="text-muted-foreground">
              Gérez les veilles que vous avez créées pour le référentiel {user?.referentiel}.
            </p>
          </div>
          <Link href="/formateur/veilles/creer">
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Nouvelle veille
            </Button>
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Rechercher une veille..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {loading ? (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
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
            {filteredVeilles.length > 0 ? (
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {filteredVeilles.map((veille) => (
                  <Card key={veille.id_veille} className="border-0 shadow-sm overflow-hidden">
                    <div className="h-2 bg-secondary"></div>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{veille.titre}</CardTitle>
                        <div className="h-8 w-8 rounded-full bg-secondary/10 flex items-center justify-center">
                          <FileText className="h-4 w-4 text-secondary" />
                        </div>
                      </div>
                      <CardDescription>
                        <div className="flex items-center gap-1 mb-1">
                          <Calendar className="h-3 w-3" />
                          <span>Date limite: {new Date(veille.date_fin).toLocaleDateString()}</span>
                        </div>
                        <Badge variant={isVeilleActive(veille.date_fin) ? "secondary" : "outline"}>
                          {isVeilleActive(veille.date_fin) ? "En cours" : "Terminée"}
                        </Badge>
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
                ))}
              </div>
            ) : (
              <Card className="border-0 shadow-sm">
                <CardHeader>
                  <CardTitle>Aucune veille trouvée</CardTitle>
                  <CardDescription>
                    {searchTerm
                      ? "Aucune veille ne correspond à votre recherche."
                      : "Vous n'avez pas encore créé de veilles pour ce référentiel."}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href="/formateur/veilles/creer">
                    <Button size="sm">Créer une veille</Button>
                  </Link>
                </CardContent>
              </Card>
            )}
          </>
        )}
      </div>

  )
}
