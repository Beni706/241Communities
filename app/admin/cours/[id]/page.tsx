"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import DashboardLayout from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"
import { ArrowLeft, BookOpen, Trash } from "lucide-react"

type Cours = {
  id_cours: number
  titre: string
  categorie: string
  description: string
  formateur: {
    id_formateur: number
    nom: string
    prenom: string
  }
}

export default function CoursDetails({ params }: { params: { id: string } }) {
  const id = params.id

  const [cours, setCours] = useState<Cours | null>(null)
  const [loading, setLoading] = useState(true)
  const [deleting, setDeleting] = useState(false)
  const router = useRouter()
  const { toast } = useToast()
  const API_URL = process.env.NEXT_PUBLIC_API_URL

  useEffect(() => {
    const fetchCours = async () => {
      try {
        const token = localStorage.getItem("adminToken")
        if (!token) {
          router.push("/admin/login/administrateur")
          return
        }

        console.log(`Fetching cours with ID: ${id}`)
        const response = await fetch(`${API_URL}/cours/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        if (response.ok) {
          const data = await response.json()
          console.log("Cours data:", data)
          setCours(data)
        } else {
          console.error(`Error fetching cours: ${response.status}`)
          toast({
            variant: "destructive",
            title: "Erreur",
            description: "Impossible de charger les détails du cours.",
          })
          router.push("/admin/cours")
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

    fetchCours()
  }, [API_URL, id, router, toast])

  const handleDelete = async () => {
    if (!confirm("Êtes-vous sûr de vouloir supprimer ce cours ?")) {
      return
    }

    setDeleting(true)
    try {
      const token = localStorage.getItem("adminToken")
      if (!token) {
        router.push("/admin/login/administrateur")
        return
      }

      const response = await fetch(`${API_URL}/cours/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (response.ok) {
        toast({
          title: "Cours supprimé",
          description: "Le cours a été supprimé avec succès.",
        })
        router.push("/admin/cours")
      } else {
        throw new Error("Erreur lors de la suppression")
      }
    } catch (error) {
      console.error("Erreur:", error)
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Une erreur est survenue lors de la suppression du cours.",
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
          <h1 className="text-2xl font-bold tracking-tight">Détails du cours</h1>
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
        ) : cours ? (
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-purple-600" />
                </div>
                <span>{cours.titre}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Catégorie</p>
                <div className="inline-block mt-1 px-3 py-1 bg-purple-100 text-purple-600 rounded-full">
                  {cours.categorie}
                </div>
              </div>

              <div>
                <p className="text-sm font-medium text-muted-foreground">Description</p>
                <p className="mt-1">{cours.description}</p>
              </div>

              <div>
                <p className="text-sm font-medium text-muted-foreground">Formateur</p>
                <div className="flex items-center gap-2 mt-1">
                  <div className="h-8 w-8 rounded-full bg-secondary/10 flex items-center justify-center">
                    <span className="font-bold text-secondary text-xs">
                      {cours.formateur?.prenom.charAt(0)}
                      {cours.formateur?.nom.charAt(0)}
                    </span>
                  </div>
                  <p>
                    {cours.formateur?.prenom} {cours.formateur?.nom}
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button variant="destructive" onClick={handleDelete} disabled={deleting}>
                <Trash className="h-4 w-4 mr-2" />
                {deleting ? "Suppression..." : "Supprimer"}
              </Button>
            </CardFooter>
          </Card>
        ) : (
          <div className="text-center py-10">
            <p className="text-muted-foreground">Cours non trouvé.</p>
            <Button variant="link" onClick={() => router.push("/admin/cours")}>
              Retour à la liste des cours
            </Button>
          </div>
        )}
      </div>
    </DashboardLayout>
  )
}
