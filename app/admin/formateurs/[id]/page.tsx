"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import DashboardLayout from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"
import { ArrowLeft, Trash } from "lucide-react"

type Formateur = {
  id_formateur: number
  nom: string
  prenom: string
  email: string
  referentiel: string
}

export default function FormateurDetails({ params }: { params: { id: string } }) {
  const id = params.id
  const [formateur, setFormateur] = useState<Formateur | null>(null)
  const [loading, setLoading] = useState(true)
  const [deleting, setDeleting] = useState(false)
  const router = useRouter()
  const { toast } = useToast()
  const API_URL = process.env.NEXT_PUBLIC_API_URL

  useEffect(() => {
    const fetchFormateur = async () => {
      try {
        const token = localStorage.getItem("adminToken")
        if (!token) {
          router.push("/login/administrateur")
          return
        }

        const response = await fetch(`${API_URL}/formateur/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        if (response.ok) {
          const data = await response.json()
          setFormateur(data)
        } else {
          toast({
            variant: "destructive",
            title: "Erreur",
            description: "Impossible de charger les détails du formateur.",
          })
          router.push("/formateurs")
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

    fetchFormateur()
  }, [API_URL, id, router, toast])

  const handleDelete = async () => {
    if (!confirm("Êtes-vous sûr de vouloir supprimer ce formateur ?")) {
      return
    }

    setDeleting(true)
    try {
      const token = localStorage.getItem("adminToken")
      if (!token) {
        router.push("/login/administrateur")
        return
      }

      const response = await fetch(`${API_URL}/formateur/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (response.ok) {
        toast({
          title: "Formateur supprimé",
          description: "Le formateur a été supprimé avec succès.",
        })
        router.push("/formateurs")
      } else {
        throw new Error("Erreur lors de la suppression")
      }
    } catch (error) {
      console.error("Erreur:", error)
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Une erreur est survenue lors de la suppression du formateur.",
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
          <h1 className="text-2xl font-bold tracking-tight">Détails du formateur</h1>
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
        ) : formateur ? (
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <span className="font-bold text-secondary text-lg">
                    {formateur.prenom.charAt(0)}
                    {formateur.nom.charAt(0)}
                  </span>
                </div>
                <span>
                  {formateur.prenom} {formateur.nom}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Nom</p>
                  <p>{formateur.nom}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Prénom</p>
                  <p>{formateur.prenom}</p>
                </div>
              </div>

              <div>
                <p className="text-sm font-medium text-muted-foreground">Email</p>
                <p>{formateur.email}</p>
              </div>

              <div>
                <p className="text-sm font-medium text-muted-foreground">Référentiel</p>
                <div className="inline-block mt-1 px-3 py-1 bg-secondary/10 text-secondary rounded-full">
                  {formateur.referentiel}
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={() => router.push(`/admin/formateurs/${id}/modifier`)}>
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
            <p className="text-muted-foreground">Formateur non trouvé.</p>
            <Button variant="link" onClick={() => router.push("/formateurs")}>
              Retour à la liste des formateurs
            </Button>
          </div>
        )}
      </div>
    </DashboardLayout>
  )
}
