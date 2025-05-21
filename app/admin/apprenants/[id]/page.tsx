"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import DashboardLayout from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"
import { ArrowLeft, Trash } from "lucide-react"

type Apprenant = {
  id_apprenant: number
  nom: string
  prenom: string
  email: string
  referentiel: string
}

export default function ApprenantDetails({ params }: { params: { id: string } }) {
  // Utiliser React.use pour déballer les params
  const id = params.id

  const [apprenant, setApprenant] = useState<Apprenant | null>(null)
  const [loading, setLoading] = useState(true)
  const [deleting, setDeleting] = useState(false)
  const router = useRouter()
  const { toast } = useToast()
  const API_URL = process.env.NEXT_PUBLIC_API_URL

  useEffect(() => {
    const fetchApprenant = async () => {
      try {
        const token = localStorage.getItem("adminToken")
        if (!token) {
          router.push("/admin/login/administrateur")
          return
        }

        console.log(`Fetching apprenant with ID: ${id}`)
        const response = await fetch(`${API_URL}/apprenant/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        if (response.ok) {
          const data = await response.json()
          console.log("Apprenant data:", data)
          setApprenant(data)
        } else {
          console.error(`Error fetching apprenant: ${response.status}`)
          toast({
            variant: "destructive",
            title: "Erreur",
            description: "Impossible de charger les détails de l'apprenant.",
          })
          router.push("/admin/apprenants")
        }
      } catch (error) {
        console.error("Erreur:", error)
        toast({
          variant: "destructive",
          title: "Erreur",
          description: "Une erreur est survenue lors du chargement des données.",
        })
      } finally {
        setLoading(false)
      }
    }

    fetchApprenant()
  }, [API_URL, id, router, toast])

  const handleDelete = async () => {
    if (!confirm("Êtes-vous sûr de vouloir supprimer cet apprenant ?")) {
      return
    }

    setDeleting(true)
    try {
      const token = localStorage.getItem("adminToken")
      if (!token) {
        router.push("/admin/login/administrateur")
        return
      }

      const response = await fetch(`${API_URL}/apprenant/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (response.ok) {
        toast({
          title: "Apprenant supprimé",
          description: "L'apprenant a été supprimé avec succès.",
        })
        router.push("/admin/apprenants")
      } else {
        throw new Error("Erreur lors de la suppression")
      }
    } catch (error) {
      console.error("Erreur:", error)
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Une erreur est survenue lors de la suppression de l'apprenant.",
      })
    } finally {
      setDeleting(false)
    }
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" onClick={() => router.back()}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour
          </Button>
          <h1 className="text-2xl font-bold tracking-tight">Détails de l'apprenant</h1>
        </div>

        {loading ? (
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <div className="h-6 w-48 bg-muted rounded animate-pulse"></div>
            </CardHeader>
            <CardContent className="space-y-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="space-y-2">
                  <div className="h-4 w-24 bg-muted rounded animate-pulse"></div>
                  <div className="h-8 bg-muted rounded animate-pulse"></div>
                </div>
              ))}
            </CardContent>
          </Card>
        ) : apprenant ? (
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-bold text-primary text-lg">
                    {apprenant.prenom.charAt(0)}
                    {apprenant.nom.charAt(0)}
                  </span>
                </div>
                <span>
                  {apprenant.prenom} {apprenant.nom}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Nom</p>
                  <p>{apprenant.nom}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Prénom</p>
                  <p>{apprenant.prenom}</p>
                </div>
              </div>

              <div>
                <p className="text-sm font-medium text-muted-foreground">Email</p>
                <p>{apprenant.email}</p>
              </div>

              <div>
                <p className="text-sm font-medium text-muted-foreground">Référentiel</p>
                <div className="inline-block mt-1 px-3 py-1 bg-primary/10 text-primary rounded-full">
                  {apprenant.referentiel}
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={() => router.push(`/admin/apprenants/${id}/modifier`)}>
                Modifier
              </Button>
              <Button variant="destructive" onClick={handleDelete} disabled={deleting}>
                <Trash className="h-4 w-4 mr-2" />
                {deleting ? "Suppression..." : "Supprimer"}
              </Button>
            </CardFooter>
          </Card>
        ) : (
          <div className="text-center py-10">
            <p className="text-muted-foreground">Apprenant non trouvé.</p>
            <Button variant="link" onClick={() => router.push("/admin/apprenants")}>
              Retour à la liste des apprenants
            </Button>
          </div>
        )}
      </div>
    </DashboardLayout>
  )
}
