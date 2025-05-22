"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import DashboardLayout from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, User } from "lucide-react"
import { useAuth } from "@/components/auth-provider"

type Apprenant = {
  id_apprenant: number
  nom: string
  prenom: string
  email: string
  referentiel: string
}

export default function ApprenantsPage() {
  const { user } = useAuth()
  const router = useRouter()
  const [apprenants, setApprenants] = useState<Apprenant[]>([])
  const [filteredApprenants, setFilteredApprenants] = useState<Apprenant[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [loading, setLoading] = useState(true)
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL

  useEffect(() => {
    const fetchApprenants = async () => {
      try {
        const token = localStorage.getItem("formateurToken") || localStorage.getItem("token")
        if (!token) {
          router.push("/login/formateur")
          return
        }

        const response = await fetch(`${API_BASE_URL}/apprenant`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        if (response.ok) {
          const apprenantsData = await response.json()
          // Filtrer les apprenants par référentiel du formateur
          const filteredData = apprenantsData.filter(
            (apprenant: Apprenant) => apprenant.referentiel === user?.referentiel,
          )
          setApprenants(filteredData)
          setFilteredApprenants(filteredData)
        } else {
          console.error("Failed to fetch apprenants")
        }
      } catch (error) {
        console.error("Error fetching apprenants:", error)
      } finally {
        setLoading(false)
      }
    }

    if (user) {
      fetchApprenants()
    }
  }, [user, router, API_BASE_URL])

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredApprenants(apprenants)
    } else {
      const filtered = apprenants.filter(
        (apprenant) =>
          apprenant.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
          apprenant.prenom.toLowerCase().includes(searchTerm.toLowerCase()) ||
          apprenant.email.toLowerCase().includes(searchTerm.toLowerCase()),
      )
      setFilteredApprenants(filtered)
    }
  }, [searchTerm, apprenants])

  return (
    
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Mes Apprenants</h1>
          <p className="text-muted-foreground">
            Liste des apprenants du référentiel {user?.referentiel} que vous encadrez.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Rechercher un apprenant..."
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
            {filteredApprenants.length > 0 ? (
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {filteredApprenants.map((apprenant) => (
                  <Card key={apprenant.id_apprenant} className="border-0 shadow-sm">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <User className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">
                            {apprenant.prenom} {apprenant.nom}
                          </CardTitle>
                          <CardDescription>{apprenant.email}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline">{apprenant.referentiel}</Badge>
                        <Link
                          href={`/formateur/apprenants/${apprenant.id_apprenant}`}
                          className="text-sm text-primary hover:underline"
                        >
                          Voir le profil
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="border-0 shadow-sm">
                <CardHeader>
                  <CardTitle>Aucun apprenant trouvé</CardTitle>
                  <CardDescription>
                    {searchTerm
                      ? "Aucun apprenant ne correspond à votre recherche."
                      : "Il n'y a pas d'apprenants dans votre référentiel."}
                  </CardDescription>
                </CardHeader>
              </Card>
            )}
          </>
        )}
      </div>
    
  )
}
