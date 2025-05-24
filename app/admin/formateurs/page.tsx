"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import DashboardLayout from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Plus, Search } from "lucide-react"

type Formateur = {
  id_formateur: number
  nom: string
  prenom: string
  email: string
  referentiel: string
}

export default function FormateursList() {
  const [formateurs, setFormateurs] = useState<Formateur[]>([])
  const [filteredFormateurs, setFilteredFormateurs] = useState<Formateur[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const API_URL = process.env.NEXT_PUBLIC_API_URL

  useEffect(() => {
    const fetchFormateurs = async () => {
      try {
        const token = localStorage.getItem("adminToken")
        if (!token) {
          router.push("/login/administrateur")
          return
        }

        const response = await fetch(`${API_URL}/formateur`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        if (response.ok) {
          const data = await response.json()
          setFormateurs(data)
          setFilteredFormateurs(data)
        } else {
          console.error("Erreur lors de la récupération des formateurs")
        }
      } catch (error) {
        console.error("Erreur:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchFormateurs()
  }, [API_URL, router])

  useEffect(() => {
    if (searchTerm) {
      const filtered = formateurs.filter(
        (formateur) =>
          formateur.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
          formateur.prenom.toLowerCase().includes(searchTerm.toLowerCase()) ||
          formateur.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          formateur.referentiel.toLowerCase().includes(searchTerm.toLowerCase()),
      )
      setFilteredFormateurs(filtered)
    } else {
      setFilteredFormateurs(formateurs)
    }
  }, [searchTerm, formateurs])

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Gestion des formateurs</h1>
            <p className="text-muted-foreground">Consultez et gérez tous les formateurs inscrits sur la plateforme.</p>
          </div>
          <Link href="/admin/formateurs/creer">
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Nouveau formateur
            </Button>
          </Link>
        </div>

        <Card className="border-0 shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle>Liste des formateurs</CardTitle>
            <div className="relative mt-2">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Rechercher un formateur..."
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
            ) : filteredFormateurs.length > 0 ? (
              <div className="space-y-2">
                {filteredFormateurs.map((formateur) => (
                  <div
                    key={formateur.id_formateur}
                    className="flex items-center justify-between p-4 rounded-md hover:bg-muted/40"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center">
                        <span className="font-bold text-secondary text-sm">
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
                      className="text-sm font-medium text-primary hover:underline"
                    >
                      Gérer
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-10">
                <p className="text-muted-foreground">Aucun formateur trouvé.</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
