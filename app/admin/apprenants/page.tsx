"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import DashboardLayout from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Plus, Search } from "lucide-react"

type Apprenant = {
  id_apprenant: number
  nom: string
  prenom: string
  email: string
  referentiel: string
}

export default function ApprenantsList() {
  const [apprenants, setApprenants] = useState<Apprenant[]>([])
  const [filteredApprenants, setFilteredApprenants] = useState<Apprenant[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const API_URL = process.env.NEXT_PUBLIC_API_URL

  useEffect(() => {
    const fetchApprenants = async () => {
      try {
        setLoading(true)
        setError(null)

        const token = localStorage.getItem("adminToken")
        if (!token) {
          setError("Vous n'êtes pas authentifié")
          setLoading(false)
          return
        }

        console.log("Fetching apprenants from:", `${API_URL}/apprenant`)

        const response = await fetch(`${API_URL}/apprenant`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        if (response.ok) {
          const data = await response.json()
          console.log("Apprenants data:", data)
          setApprenants(data)
          setFilteredApprenants(data)
        } else {
          console.error("Erreur lors de la récupération des apprenants:", response.status)
          setError(`Erreur lors de la récupération des apprenants: ${response.status}`)
        }
      } catch (error) {
        console.error("Erreur:", error)
        setError("Une erreur est survenue lors de la récupération des données")
      } finally {
        setLoading(false)
      }
    }

    fetchApprenants()
  }, [API_URL])

  useEffect(() => {
    if (searchTerm) {
      const filtered = apprenants.filter(
        (apprenant) =>
          apprenant.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
          apprenant.prenom.toLowerCase().includes(searchTerm.toLowerCase()) ||
          apprenant.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          apprenant.referentiel.toLowerCase().includes(searchTerm.toLowerCase()),
      )
      setFilteredApprenants(filtered)
    } else {
      setFilteredApprenants(apprenants)
    }
  }, [searchTerm, apprenants])

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Gestion des apprenants</h1>
            <p className="text-muted-foreground">Consultez et gérez tous les apprenants inscrits sur la plateforme.</p>
          </div>
          <Link href="/apprenants/creer">
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Nouvel apprenant
            </Button>
          </Link>
        </div>

        <Card className="border-0 shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle>Liste des apprenants</CardTitle>
            <div className="relative mt-2">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Rechercher un apprenant..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="space-y-2">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="animate-pulse flex items-center justify-between p-4 rounded-md bg-muted/40">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-muted"></div>
                      <div className="space-y-2">
                        <div className="h-4 w-32 bg-muted rounded"></div>
                        <div className="h-3 w-48 bg-muted rounded"></div>
                      </div>
                    </div>
                    <div className="h-8 w-16 bg-muted rounded"></div>
                  </div>
                ))}
              </div>
            ) : error ? (
              <div className="text-center py-10">
                <p className="text-red-500">{error}</p>
                <p className="text-muted-foreground mt-2">Vérifiez votre connexion et essayez de rafraîchir la page.</p>
              </div>
            ) : filteredApprenants.length > 0 ? (
              <div className="space-y-2">
                {filteredApprenants.map((apprenant) => (
                  <div
                    key={apprenant.id_apprenant}
                    className="flex items-center justify-between p-4 rounded-md hover:bg-muted/40"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="font-bold text-primary text-sm">
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
                      className="text-sm font-medium text-primary hover:underline"
                    >
                      Gérer
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-10">
                <p className="text-muted-foreground">Aucun apprenant trouvé.</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
