"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import Image from "next/image"
import DashboardLayout from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { BookOpen, Plus, Search } from "lucide-react"
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

export default function CoursPage() {
  const { user } = useAuth()
  const router = useRouter()
  const { toast } = useToast()
  const [cours, setCours] = useState<Cours[]>([])
  const [filteredCours, setFilteredCours] = useState<Cours[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [loading, setLoading] = useState(true)
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "/api"

  useEffect(() => {
    const fetchCours = async () => {
      try {
        console.log("Tentative de récupération des cours...")

        // Récupérer le token
        const token = localStorage.getItem("formateurToken") || localStorage.getItem("token")

        if (!token) {
          console.error("Aucun token trouvé")
          toast({
            variant: "destructive",
            title: "Erreur d'authentification",
            description: "Veuillez vous reconnecter.",
          })
          router.push("/login/formateur")
          return
        }

        console.log("Token trouvé, envoi de la requête API")

        // Faire la requête API
        const response = await fetch(`${API_BASE_URL}/cours`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        console.log("Réponse API reçue:", response.status)

        if (response.ok) {
          const coursData = await response.json()
          console.log("Cours reçus:", coursData)

          // Récupérer l'ID du formateur connecté
          let formateurId
          if (user) {
            // @ts-ignore - Accepte différentes structures possibles
            formateurId = user.id_formateur || user.id
            console.log("ID du formateur connecté:", formateurId)
          } else {
            // Si pas d'utilisateur dans le contexte, essayer de le récupérer du localStorage
            const storedUser = localStorage.getItem("user")
            if (storedUser) {
              try {
                const userData = JSON.parse(storedUser)
                // @ts-ignore - Accepte différentes structures possibles
                formateurId = userData.id_formateur || userData.id
                console.log("ID du formateur récupéré du localStorage:", formateurId)
              } catch (error) {
                console.error("Erreur lors du parsing des données utilisateur:", error)
              }
            }
          }

          if (!formateurId) {
            console.error("Impossible de déterminer l'ID du formateur")
            toast({
              variant: "destructive",
              title: "Erreur d'identification",
              description: "Impossible de déterminer votre identifiant de formateur.",
            })
            return
          }

          // Convertir l'ID en nombre pour la comparaison
          const formateurIdNum = Number(formateurId)

          // Afficher tous les cours pour le débogage
          console.log("Tous les cours disponibles:", coursData)

          // Filtrer les cours par formateur
          // IMPORTANT: Ne pas filtrer par referentiel pour l'instant pour voir tous les cours
          const filteredData = coursData.filter((cours: Cours) => Number(cours.id_formateur) === formateurIdNum)

          console.log("Cours filtrés pour ce formateur:", filteredData)

          setCours(filteredData)
          setFilteredCours(filteredData)
        } else {
          console.error("Échec de la récupération des cours:", response.statusText)
          const errorText = await response.text()
          console.error("Détails de l'erreur:", errorText)

          toast({
            variant: "destructive",
            title: "Erreur de chargement",
            description: "Impossible de charger vos cours. Veuillez réessayer.",
          })
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des cours:", error)
        toast({
          variant: "destructive",
          title: "Erreur",
          description: "Une erreur est survenue lors du chargement des cours.",
        })
      } finally {
        setLoading(false)
      }
    }

    fetchCours()
  }, [router, toast, user, API_BASE_URL])

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredCours(cours)
    } else {
      const filtered = cours.filter(
        (cours) =>
          cours.titre.toLowerCase().includes(searchTerm.toLowerCase()) ||
          cours.categorie.toLowerCase().includes(searchTerm.toLowerCase()) ||
          cours.description.toLowerCase().includes(searchTerm.toLowerCase()),
      )
      setFilteredCours(filtered)
    }
  }, [searchTerm, cours])

  return (
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Mes Cours</h1>
            <p className="text-muted-foreground">
              Gérez les cours que vous avez créés
              {user?.referentiel && ` pour le référentiel ${user.referentiel}`}.
            </p>
          </div>
          <Link href="/formateur/cours/creer">
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Nouveau cours
            </Button>
          </Link>
        </div>

        <div className="flex items-center gap-2">
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
            {filteredCours.length > 0 ? (
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {filteredCours.map((cours) => (
                  <Card key={cours.id_cours} className="border-0 shadow-sm overflow-hidden">
                    {cours.photoCours ? (
                      <div className="relative w-full h-40">
                        <Image
                          src={cours.photoCours || "/placeholder.svg"}
                          alt={cours.titre}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div className="h-2 bg-primary"></div>
                    )}
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{cours.titre}</CardTitle>
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <BookOpen className="h-4 w-4 text-primary" />
                        </div>
                      </div>
                      <CardDescription>
                        {cours.categorie}
                        {cours.referentiel && ` - ${cours.referentiel}`}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{cours.description}</p>
                      <Link
                        href={`/formateur/cours/${cours.id_cours}`}
                        className="text-sm text-primary hover:underline"
                      >
                        Voir le cours
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="border-0 shadow-sm">
                <CardHeader>
                  <CardTitle>Aucun cours trouvé</CardTitle>
                  <CardDescription>
                    {searchTerm
                      ? "Aucun cours ne correspond à votre recherche."
                      : "Vous n'avez pas encore créé de cours."}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href="/formateur/cours/creer">
                    <Button size="sm">Créer un cours</Button>
                  </Link>
                </CardContent>
              </Card>
            )}
          </>
        )}
      </div>
   
  )
}
