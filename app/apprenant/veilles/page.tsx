"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Calendar, Eye, Search } from "lucide-react"
import { useAuth } from "@/components/auth-provider"
import { useToast } from "@/hooks/use-toast"

type Veille = {
  id_veille: number
  titre: string
  date_creation: string
  date_fin: string
  referentiel: string
  lien_docRendu: string | null // Pour savoir si l'apprenant a soumis
  id_apprenant: number | null // Pour savoir si la soumission est de cet apprenant
}

export default function ApprenantVeillesPage() {
  const { user } = useAuth()
  const router = useRouter()
  const { toast } = useToast()
  const [veillesList, setVeillesList] = useState<Veille[]>([])
  const [filteredVeilles, setFilteredVeilles] = useState<Veille[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [loading, setLoading] = useState(true)
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "/api"

  useEffect(() => {
    const fetchVeilles = async () => {
      try {
        const token = localStorage.getItem("apprenantToken") || localStorage.getItem("token")
        if (!token) {
          toast({ variant: "destructive", title: "Erreur", description: "Session expirée. Veuillez vous reconnecter." })
          router.push("/login/apprenant")
          return
        }

        const apprenantReferentiel = user?.referentiel
        if (!apprenantReferentiel) {
          toast({ variant: "destructive", title: "Erreur", description: "Votre compte n'a pas de référentiel assigné." })
          setVeillesList([])
          setFilteredVeilles([])
          setLoading(false)
          return
        }

        // Construire l'URL avec le paramètre de requête pour le référentiel
        const url = new URL(`${API_BASE_URL}/veille`)
        url.searchParams.append("referentiel", apprenantReferentiel)

        const response = await fetch(url.toString(), {
          headers: { Authorization: `Bearer ${token}` },
        })

        if (response.ok) {
          const veillesData: Veille[] = await response.json()
          // Le filtrage est maintenant fait par l'API, on peut directement utiliser les données
          setVeillesList(veillesData)
          setFilteredVeilles(veillesData)
        } else {
          toast({ variant: "destructive", title: "Erreur", description: "Impossible de charger les veilles." })
        }
      } catch (error) {
        console.error("Error fetching veilles:", error)
        toast({ variant: "destructive", title: "Erreur", description: "Une erreur est survenue." })
      } finally {
        setLoading(false)
      }
    }
    // Lancer la récupération des données uniquement si l'utilisateur est chargé
    if (user) {
      fetchVeilles()
    }
  }, [user, router, toast, API_BASE_URL])

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredVeilles(veillesList)
    } else {
      const filtered = veillesList.filter((v) => v.titre.toLowerCase().includes(searchTerm.toLowerCase()))
      setFilteredVeilles(filtered)
    }
  }, [searchTerm, veillesList])

  const getVeilleStatus = (veille: Veille): { text: string; variant: "secondary" | "outline" | "destructive" | "default" } => {
    if (veille.lien_docRendu && veille.id_apprenant === user?.id) return { text: "Soumise", variant: "default" }
    if (new Date(veille.date_fin) < new Date()) return { text: "Expirée", variant: "destructive" }
    return { text: "À faire", variant: "secondary" }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Mes Veilles</h1>
        <p className="text-muted-foreground">Consultez et soumettez vos travaux de veille.</p>
      </div>

      <div className="relative flex-1">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input type="search" placeholder="Rechercher une veille..." className="pl-8" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      </div>

      {loading ? (
         <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{[...Array(3)].map((_, i) => (<Card key={i} className="animate-pulse"><CardHeader className="pb-2"><div className="h-4 bg-muted rounded w-3/4"></div></CardHeader><CardContent><div className="h-4 bg-muted rounded w-1/2 mt-2"></div><div className="h-4 bg-muted rounded w-1/4 mt-1"></div></CardContent></Card>))}</div>
      ) : filteredVeilles.length > 0 ? (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredVeilles.map((veille) => {
            const status = getVeilleStatus(veille)
            return (
              <Card key={veille.id_veille} className="border-0 shadow-sm overflow-hidden">
                <div className={`h-2 ${status.variant === "default" ? "bg-green-500" : status.variant === "destructive" ? "bg-red-500" : "bg-secondary"}`}></div>
                <CardHeader>
                  <div className="flex items-center justify-between"><CardTitle className="text-lg">{veille.titre}</CardTitle><div className="h-8 w-8 rounded-full bg-secondary/10 flex items-center justify-center"><Eye className="h-4 w-4 text-secondary" /></div></div>
                  <CardDescription><div className="flex items-center gap-1 mb-1"><Calendar className="h-3 w-3" /><span>Date limite: {new Date(veille.date_fin).toLocaleDateString()}</span></div><Badge variant={status.variant}>{status.text}</Badge></CardDescription>
                </CardHeader>
                <CardContent><Link href={`/apprenant/veilles/${veille.id_veille}`} className="text-sm text-primary hover:underline">Voir les détails</Link></CardContent>
              </Card>
            )
          })}
        </div>
      ) : (
        <Card className="border-0 shadow-sm"><CardHeader><CardTitle>Aucune veille trouvée</CardTitle><CardDescription>{searchTerm ? "Aucune veille ne correspond à votre recherche." : "Aucune veille n'est actuellement assignée."}</CardDescription></CardHeader></Card>
      )}
    </div>
  )
}