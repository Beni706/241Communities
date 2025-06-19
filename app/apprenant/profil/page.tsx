"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"

interface ApprenantData {
  id_apprenant: number;
  nom: string;
  prenom: string;
  email: string;
  referentiel: "DEVELOPPEUR" | "DIGITAL_CREATOR" | "REFERENT_DIGITAL";
  photoProfilUrl?: string; // Assurez-vous que ce nom de champ correspond à votre modèle Prisma / API
  // Ajoutez d'autres champs si nécessaire
}


const ProfileForm = () => {
  const [apprenant, setApprenant] = useState<ApprenantData | null>(null)
  const [nom, setNom] = useState("")
  const [prenom, setPrenom] = useState("")
  const [email, setEmail] = useState("")
  const [referentiel, setReferentiel] = useState<"DEVELOPPEUR" | "DIGITAL_CREATOR" | "REFERENT_DIGITAL">("DEVELOPPEUR")
  const [photoProfil, setPhotoProfil] = useState<File | null>(null)
  const [photoProfilPreview, setPhotoProfilPreview] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  const ReferentielLabels = {
    DEVELOPPEUR: "Développeur Web et Mobile",
    DIGITAL_CREATOR: "Créateur de Contenu Digital",
    REFERENT_DIGITAL: "Référent Digital",
  }

  useEffect(() => {
    const fetchApprenant = async () => {
      const token = localStorage.getItem("token")
      const storedUserString = localStorage.getItem("user")

      if (!token || !storedUserString) {
        router.push("/login/apprenant")
        return
      }

      try {
        const storedUser = JSON.parse(storedUserString)
        if (!storedUser || !storedUser.id) {
          toast({
            title: "Erreur",
            description: "Impossible de récupérer l'ID de l'utilisateur.",
            variant: "destructive",
          })
          router.push("/login/apprenant")
          return
        }

        const userId = storedUser.id; // Cet ID est id_apprenant stocké par AuthProvider

        const response = await fetch(`/api/apprenant/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        if (!response.ok) {
          if (response.status === 401) {
            localStorage.removeItem("token");
            router.push("/login/apprenant");
            // Optionally, show a toast message before redirecting
            toast({
              title: "Session expirée",
              description: "Veuillez vous reconnecter.",
              variant: "destructive",
            });
          }
          // Try to parse the error message from the API response
          let errorMessage = "Échec de la récupération des données de l'apprenant";
          const errorData = await response.json().catch(() => null);
          if (errorData && errorData.message) {
            errorMessage = errorData.message;
          }
          throw new Error(errorMessage);
        }
        
        const data: ApprenantData = await response.json()
        setApprenant(data)
        setNom(data.nom)
        setPrenom(data.prenom)
        setEmail(data.email)
        setReferentiel(data.referentiel as "DEVELOPPEUR" | "DIGITAL_CREATOR" | "REFERENT_DIGITAL")
        if (data.photoProfilUrl) {
          setPhotoProfilPreview(data.photoProfilUrl)
        }
      } catch (error) {
        console.error("Error fetching apprenant:", error)
        toast({
          title: "Erreur",
          description: (error as Error).message || "Impossible de charger les informations du profil.",
          variant: "destructive",
        })
      } finally {
        setLoading(false)
      }
    }

    fetchApprenant()
  }, [router, toast])

  const handlePhotoProfilChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setPhotoProfil(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setPhotoProfilPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)

    if (!apprenant || !apprenant.id_apprenant) {
      toast({
        title: "Erreur",
        description: "Données de l'apprenant non chargées.",
        variant: "destructive",
      })
      setIsSubmitting(false)
      return
    }

    const token = localStorage.getItem("token")
    if (!token) {
      router.push("/login/apprenant")
      setIsSubmitting(false)
      return
    }

    const formData = new FormData()
    formData.append("nom", nom)
    formData.append("prenom", prenom)
    formData.append("email", email)
    formData.append("referentiel", referentiel)
    if (photoProfil) {
      formData.append("photoProfil", photoProfil)
    }

    try {
      const response = await fetch(`/api/apprenant/${apprenant.id_apprenant}`, {
        method: "PUT", // Or PATCH
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData.message || "Échec de la mise à jour du profil.")
      }

      const apiResponse = await response.json()
      const updatedApprenantData: ApprenantData = apiResponse.apprenant; // L'API retourne { message: "...", apprenant: ApprenantData }
      // Optionally update local state with the new data
      setApprenant(updatedApprenantData)
      if (updatedApprenantData.photoProfilUrl) {
        setPhotoProfilPreview(updatedApprenantData.photoProfilUrl)
      }

      toast({
        title: "Succès",
        description: "Votre profil a été mis à jour avec succès.",
      })
    } catch (error) {
      console.error("Error updating profile:", error)
      toast({
        title: "Erreur",
        description: (error as Error).message || "Impossible de mettre à jour le profil.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (loading) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Mon profil</CardTitle>
          <CardDescription>Gérez vos informations personnelles</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col items-center space-y-4">
            <div className="h-24 w-24 bg-muted rounded-full animate-pulse"></div>
            <div className="h-4 w-24 bg-muted rounded animate-pulse"></div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <div className="h-4 w-16 bg-muted rounded animate-pulse"></div>
              <div className="h-10 w-full bg-muted rounded animate-pulse"></div>
            </div>
            <div className="space-y-2">
              <div className="h-4 w-16 bg-muted rounded animate-pulse"></div>
              <div className="h-10 w-full bg-muted rounded animate-pulse"></div>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Mon profil</CardTitle>
        <CardDescription>Mettez à jour vos informations personnelles</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Photo de profil */}
          <div className="flex flex-col items-center space-y-4">
            <Avatar className="h-24 w-24">
              <AvatarImage src={photoProfilPreview || undefined} />
              <AvatarFallback className="text-lg">
                {prenom?.[0] || ""}
                {nom?.[0] || ""}
              </AvatarFallback>
            </Avatar>
            <div className="flex items-center gap-2">
              <Label htmlFor="photoProfil" className="cursor-pointer text-sm text-primary hover:underline">
                Changer la photo
              </Label>
              <Input
                id="photoProfil"
                type="file"
                accept="image/*"
                onChange={handlePhotoProfilChange}
                className="hidden"
              />
            </div>
          </div>

          {/* Informations personnelles */}
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="prenom">Prénom *</Label>
              <Input
                id="prenom"
                value={prenom}
                onChange={(e) => setPrenom(e.target.value)}
                required
                placeholder="Votre prénom"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="nom">Nom *</Label>
              <Input id="nom" value={nom} onChange={(e) => setNom(e.target.value)} required placeholder="Votre nom" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="votre.email@ecole241.org"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="referentiel">Référentiel *</Label>
            <Select
              value={referentiel}
              onValueChange={(value: "DEVELOPPEUR" | "DIGITAL_CREATOR" | "REFERENT_DIGITAL") => setReferentiel(value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Sélectionnez votre référentiel" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="DEVELOPPEUR">{ReferentielLabels.DEVELOPPEUR}</SelectItem>
                <SelectItem value="DIGITAL_CREATOR">{ReferentielLabels.DIGITAL_CREATOR}</SelectItem>
                <SelectItem value="REFERENT_DIGITAL">{ReferentielLabels.REFERENT_DIGITAL}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Mise à jour en cours..." : "Mettre à jour le profil"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

export default ProfileForm