"use client"

import type React from "react"

import { useState, useEffect, useRef, useCallback } from "react"
import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { ArrowLeft, ArrowRight, Plus, Trash2, FileVideo, FileText } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"

type Chapitre = {
  id_chapitre: number
  titre: string
  numeroOrdre: number
  id_cours: number
}

type Lecon = {
  id_lecon: number
  titre: string
  contenuTextuel: string
  contenuVideo: string
  numeroOrdre: number
  id_chapitre: number
}

type Cours = {
  id_cours: number
  titre: string
  categorie: string
  description: string
  photoCours: string
  dateCreation: string
  id_formateur: number
  chapitre: Chapitre[]
}

export default function ModifierCoursPage() {
  const params = useParams()
  // Accéder directement à l'ID depuis params.
  // params.id sera une chaîne de caractères si l'ID est présent dans l'URL.
  const coursId = typeof params?.id === "string" ? params.id : null
  const router = useRouter()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [user, setUser] = useState<any>(null)

  // Étape 1: Informations du cours
  const [coursInfo, setCoursInfo] = useState({
    titre: "",
    categorie: "",
    description: "",
    photoCours: "",
  })
  const [photoFile, setPhotoFile] = useState<File | null>(null)
  const [photoPreview, setPhotoPreview] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Étape 2: Chapitres
  const [chapitres, setChapitres] = useState<{ id_chapitre?: number; titre: string; numeroOrdre: number }[]>([])

  // Étape 3: Leçons pour chaque chapitre
  const [lecons, setLecons] = useState<{
    [chapitreIndex: number]: Array<{
      id_lecon?: number
      titre: string
      contenuTextuel: string
      contenuVideo: string
      numeroOrdre: number
    }>
  }>({})

  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || process.env.NEXT_PUBLIC_API_URL || "/api"

  // Fonction pour gérer l'erreur d'authentification - stabilisée avec useCallback
  const handleAuthError = useCallback(() => {
    console.error("Aucune donnée utilisateur trouvée dans localStorage")
    toast({
      variant: "destructive",
      title: "Erreur d'authentification",
      description: "Veuillez vous reconnecter.",
    })
    router.push("/login/formateur")
  }, [toast, router])

  // Chargement des données utilisateur
  useEffect(() => {
    // Récupérer les informations de l'utilisateur depuis le localStorage
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      try {
        const userData = JSON.parse(storedUser)
        console.log("Données utilisateur complètes:", userData)
        setUser(userData)
      } catch (error) {
        console.error("Erreur lors du parsing des données utilisateur:", error)
        handleAuthError()
      }
    } else {
      handleAuthError()
    }
  }, [handleAuthError])

  // Chargement des données du cours
  useEffect(() => {
    const fetchCours = async () => {
      if (!coursId) {
        toast({ variant: "destructive", title: "Erreur", description: "ID du cours manquant." })
        router.push("/formateur/cours")
        return
      }
      try {
        const token = localStorage.getItem("formateurToken") || localStorage.getItem("token")

        if (!token) {
          router.push("/login/formateur")
          return
        }
        console.log("Récupération du cours avec ID:", coursId)
        const response = await fetch(`${API_BASE_URL}/cours/${coursId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        if (!response.ok) {
          throw new Error("Cours non trouvé")
        }

        const coursData: Cours = await response.json()
        console.log("Données du cours récupérées:", coursData)

        // Initialiser les informations du cours
        setCoursInfo({
          titre: coursData.titre,
          categorie: coursData.categorie,
          description: coursData.description,
          photoCours: coursData.photoCours || "",
        })

        // Initialiser la prévisualisation de l'image si elle existe
        if (coursData.photoCours) {
          setPhotoPreview(coursData.photoCours)
        }

        // Initialiser les chapitres
        if (coursData.chapitre && coursData.chapitre.length > 0) {
          const chapitresTriés = [...coursData.chapitre].sort((a, b) => a.numeroOrdre - b.numeroOrdre)
          setChapitres(chapitresTriés)

          // Récupérer les leçons pour chaque chapitre
          const leconsParChapitre: {
            [chapitreIndex: number]: Array<{
              id_lecon?: number
              titre: string
              contenuTextuel: string
              contenuVideo: string
              numeroOrdre: number
            }>
          } = {}

          for (let i = 0; i < chapitresTriés.length; i++) {
            const chapitre = chapitresTriés[i]
            const leconsResponse = await fetch(`${API_BASE_URL}/chapitre/lecon/${chapitre.id_chapitre}`, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            })

            if (leconsResponse.ok) {
              const leconsData: Lecon[] = await leconsResponse.json()
              const leconsTriées = [...leconsData].sort((a, b) => a.numeroOrdre - b.numeroOrdre)
              leconsParChapitre[i] = leconsTriées
            } else {
              // Si pas de leçons, initialiser avec une leçon vide
              leconsParChapitre[i] = [{ titre: "", contenuTextuel: "", contenuVideo: "", numeroOrdre: 1 }]
            }
          }

          setLecons(leconsParChapitre)
        } else {
          // Si pas de chapitres, initialiser avec un chapitre vide
          setChapitres([{ titre: "", numeroOrdre: 1 }])
          setLecons({
            0: [{ titre: "", contenuTextuel: "", contenuVideo: "", numeroOrdre: 1 }],
          })
        }
      } catch (error) {
        console.error("Erreur lors de la récupération du cours:", error)
        toast({
          variant: "destructive",
          title: "Erreur",
          description: "Impossible de récupérer les informations du cours.",
        })
        router.push("/formateur/cours")
      } finally {
        setIsLoading(false)
      }
    }

    fetchCours()
  }, [coursId, router, toast, API_BASE_URL])

  // Gestion des changements pour les informations du cours
  const handleCoursChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setCoursInfo((prev) => ({ ...prev, [name]: value }))
  }

  const handleCategorieChange = (value: string) => {
    setCoursInfo((prev) => ({ ...prev, categorie: value }))
  }

  // Gestion des changements pour les chapitres
  const handleChapitreChange = (index: number, field: string, value: string) => {
    const newChapitres = [...chapitres]
    newChapitres[index] = { ...newChapitres[index], [field]: value }
    setChapitres(newChapitres)
  }

  const addChapitre = () => {
    setChapitres([...chapitres, { titre: "", numeroOrdre: chapitres.length + 1 }])
    // Initialiser les leçons pour ce nouveau chapitre
    setLecons((prev) => ({
      ...prev,
      [chapitres.length]: [{ titre: "", contenuTextuel: "", contenuVideo: "", numeroOrdre: 1 }],
    }))
  }

  const removeChapitre = (index: number) => {
    if (chapitres.length > 1) {
      const newChapitres = chapitres.filter((_, i) => i !== index)
      // Réorganiser les numéros d'ordre
      const reorderedChapitres = newChapitres.map((chapitre, i) => ({
        ...chapitre,
        numeroOrdre: i + 1,
      }))
      setChapitres(reorderedChapitres)

      // Mettre à jour les leçons
      const newLecons = { ...lecons }
      delete newLecons[index]

      // Réorganiser les clés des leçons
      const reorderedLecons: typeof lecons = {}
      Object.keys(newLecons).forEach((key, i) => {
        const numKey = Number.parseInt(key)
        if (numKey > index) {
          reorderedLecons[i] = newLecons[numKey]
        } else {
          reorderedLecons[i] = newLecons[numKey]
        }
      })

      setLecons(reorderedLecons)
    } else {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Vous devez avoir au moins un chapitre.",
      })
    }
  }

  // Gestion des changements pour les leçons
  const handleLeconChange = (chapitreIndex: number, leconIndex: number, field: string, value: string) => {
    const chapitreLecons = [...lecons[chapitreIndex]]
    chapitreLecons[leconIndex] = { ...chapitreLecons[leconIndex], [field]: value }
    setLecons({ ...lecons, [chapitreIndex]: chapitreLecons })
  }

  const addLecon = (chapitreIndex: number) => {
    const chapitreLecons = lecons[chapitreIndex] || []
    const newLecons = {
      ...lecons,
      [chapitreIndex]: [
        ...chapitreLecons,
        {
          titre: "",
          contenuTextuel: "",
          contenuVideo: "",
          numeroOrdre: chapitreLecons.length + 1,
        },
      ],
    }
    setLecons(newLecons)
  }

  const removeLecon = (chapitreIndex: number, leconIndex: number) => {
    const chapitreLecons = [...lecons[chapitreIndex]]
    if (chapitreLecons.length > 1) {
      const newChapitreLecons = chapitreLecons.filter((_, i) => i !== leconIndex)
      // Réorganiser les numéros d'ordre
      const reorderedLecons = newChapitreLecons.map((lecon, i) => ({
        ...lecon,
        numeroOrdre: i + 1,
      }))
      setLecons({ ...lecons, [chapitreIndex]: reorderedLecons })
    } else {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Vous devez avoir au moins une leçon par chapitre.",
      })
    }
  }

  // Navigation entre les étapes
  const nextStep = () => {
    if (currentStep === 1) {
      // Validation de l'étape 1
      if (!coursInfo.titre || !coursInfo.categorie || !coursInfo.description) {
        toast({
          variant: "destructive",
          title: "Erreur",
          description: "Veuillez remplir tous les champs obligatoires.",
        })
        return
      }
    } else if (currentStep === 2) {
      // Validation de l'étape 2
      const invalidChapitres = chapitres.some((chapitre) => !chapitre.titre)
      if (invalidChapitres) {
        toast({
          variant: "destructive",
          title: "Erreur",
          description: "Veuillez remplir tous les titres des chapitres.",
        })
        return
      }
    }

    setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    setCurrentStep(currentStep - 1)
  }

  // Ajouter cette fonction pour gérer la sélection de fichier
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      console.log("Fichier sélectionné:", file.name, "type:", file.type, "taille:", file.size)

      // Vérifier le type et la taille du fichier
      const validTypes = ["image/jpeg", "image/png", "image/gif", "image/svg+xml"]
      const maxSize = 2 * 1024 * 1024 // 2MB

      if (!validTypes.includes(file.type)) {
        toast({
          variant: "destructive",
          title: "Type de fichier non valide",
          description: "Veuillez sélectionner une image (JPG, PNG, GIF ou SVG).",
        })
        return
      }

      if (file.size > maxSize) {
        toast({
          variant: "destructive",
          title: "Fichier trop volumineux",
          description: "La taille du fichier ne doit pas dépasser 2MB.",
        })
        return
      }

      setPhotoFile(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string)
        console.log("Aperçu de l'image généré")
      }
      reader.readAsDataURL(file)
    }
  }

  // Ajouter cette fonction pour déclencher le clic sur l'input file
  const triggerFileInput = () => {
    fileInputRef.current?.click()
  }

  // Fonction pour sauvegarder uniquement les informations du cours (étape 1)
  const handleSubmitInfosOnly = async () => {
    console.log("=== Sauvegarde des informations du cours uniquement ===")

    // Validation de l'étape 1
    if (!coursInfo.titre || !coursInfo.categorie || !coursInfo.description) {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Veuillez remplir tous les champs obligatoires.",
      })
      return
    }

    setIsSubmitting(true)

    try {
      const token = localStorage.getItem("formateurToken") || localStorage.getItem("token")

      if (!token || !user) {
        throw new Error("Non authentifié")
      }

      // Créer FormData pour l'upload de fichier
      const formData = new FormData()
      formData.append("titre", coursInfo.titre)
      formData.append("categorie", coursInfo.categorie)
      formData.append("description", coursInfo.description)
      formData.append("id_formateur", user.id_formateur || user.id)

      // Gestion de l'image
      if (photoFile) {
        console.log("Ajout du fichier photo:", photoFile.name, "taille:", photoFile.size)
        formData.append("photoCours", photoFile)
      } else if (photoPreview && !photoPreview.startsWith("data:")) {
        // Si on a un photoPreview qui n'est pas une data URL, c'est une URL existante
        console.log("Utilisation de l'URL d'image existante:", photoPreview)
        formData.append("photoCoursUrl", photoPreview)
      }

      // Log du contenu du FormData
      console.log("Contenu du FormData:")
      for (const pair of formData.entries()) {
        console.log(pair[0], pair[1] instanceof File ? `[File: ${pair[1].name}]` : pair[1])
      }

      console.log("Envoi de la requête de modification du cours...")

      if (!coursId) {
        throw new Error("ID du cours non défini pour la sauvegarde.")
      }

      const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL || process.env.NEXT_PUBLIC_API_URL || "/api"
      console.log("URL de l'API:", API_URL)

      const coursResponse = await fetch(`${API_URL}/cours/${coursId}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      })

      console.log("Statut de la réponse:", coursResponse.status)

      if (!coursResponse.ok) {
        const errorText = await coursResponse.text()
        console.error("Erreur de la réponse:", errorText)
        throw new Error("Erreur lors de la modification du cours")
      }

      const coursData = await coursResponse.json()
      console.log("Cours modifié:", coursData)

      toast({
        title: "Cours modifié",
        description: "Les informations du cours ont été modifiées avec succès.",
      })

      // Rafraîchir la page pour voir les changements
      router.refresh()

      // Rediriger vers la page du cours
      router.push(`/formateur/cours/${coursId}`)
    } catch (error) {
      console.error("Erreur:", error)
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Une erreur est survenue lors de la modification du cours.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Soumission du formulaire
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    console.log("=== Début de la soumission du formulaire de modification ===")

    // Validation finale
    const invalidLecons = Object.values(lecons).some((chapitreLecons) => chapitreLecons.some((lecon) => !lecon.titre))

    if (invalidLecons) {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Veuillez remplir tous les titres des leçons.",
      })
      return
    }

    setIsSubmitting(true)

    try {
      const token = localStorage.getItem("formateurToken") || localStorage.getItem("token")

      if (!token || !user) {
        throw new Error("Non authentifié")
      }

      console.log("Token:", token ? "Présent" : "Absent")
      console.log("User:", user)

      // Créer FormData pour l'upload de fichier
      const formData = new FormData()
      formData.append("titre", coursInfo.titre)
      formData.append("categorie", coursInfo.categorie)
      formData.append("description", coursInfo.description)
      formData.append("id_formateur", user.id_formateur || user.id)

      if (photoFile) {
        console.log("Ajout du fichier photo:", photoFile.name)
        formData.append("photoCours", photoFile)
      }

      console.log("Envoi de la requête de modification du cours...")

      // 1. Mettre à jour le cours
      if (!coursId) {
        throw new Error("ID du cours non défini pour la soumission.")
      }

      const coursResponse = await fetch(`${API_BASE_URL}/cours/${coursId}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      })

      if (!coursResponse.ok) {
        const errorText = await coursResponse.text()
        console.error("Erreur de la réponse:", errorText)
        throw new Error("Erreur lors de la modification du cours")
      }

      const coursData = await coursResponse.json()
      console.log("Cours modifié:", coursData)

      // 2. Mettre à jour les chapitres
      for (const chapitre of chapitres) {
        if (chapitre.id_chapitre) {
          // Mettre à jour un chapitre existant
          await fetch(`${API_BASE_URL}/chapitre/${chapitre.id_chapitre}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              titre: chapitre.titre,
              numeroOrdre: chapitre.numeroOrdre,
            }),
          })
        } else {
          // Créer un nouveau chapitre
          const chapitreResponse = await fetch(`${API_BASE_URL}/chapitre`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              titre: chapitre.titre,
              numeroOrdre: chapitre.numeroOrdre,
              id_cours: Number(coursId),
            }),
          })

          if (chapitreResponse.ok) {
            const chapitreData = await chapitreResponse.json()
            chapitre.id_chapitre = chapitreData.newChapitre.id_chapitre
          }
        }

        // 3. Mettre à jour les leçons pour ce chapitre
        const chapitreIndex = chapitre.numeroOrdre - 1
        const chapitreLecons = lecons[chapitreIndex] || []

        for (const lecon of chapitreLecons) {
          if (lecon.id_lecon) {
            // Mettre à jour une leçon existante
            await fetch(`${API_BASE_URL}/lecon/${lecon.id_lecon}`, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
              body: JSON.stringify({
                titre: lecon.titre,
                contenuTextuel: lecon.contenuTextuel,
                contenuVideo: lecon.contenuVideo,
                numeroOrdre: lecon.numeroOrdre,
              }),
            })
          } else if (chapitre.id_chapitre) {
            // Créer une nouvelle leçon
            await fetch(`${API_BASE_URL}/lecon`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
              body: JSON.stringify({
                titre: lecon.titre,
                contenuTextuel: lecon.contenuTextuel,
                contenuVideo: lecon.contenuVideo,
                numeroOrdre: lecon.numeroOrdre,
                id_chapitre: chapitre.id_chapitre,
              }),
            })
          }
        }
      }

      toast({
        title: "Cours modifié",
        description: "Le cours, ses chapitres et ses leçons ont été modifiés avec succès.",
      })

      router.push(`/formateur/cours/${coursId}`)
    } catch (error) {
      console.error("Erreur:", error)
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Une erreur est survenue lors de la modification du cours.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Rendu des étapes
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle>Informations du cours</CardTitle>
              <CardDescription>Modifiez les détails du cours.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="titre">Titre du cours *</Label>
                <Input
                  id="titre"
                  name="titre"
                  value={coursInfo.titre}
                  onChange={handleCoursChange}
                  placeholder="Ex: Développement web avec React"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="categorie">Catégorie *</Label>
                <Select value={coursInfo.categorie} onValueChange={handleCategorieChange}>
                  <SelectTrigger id="categorie">
                    <SelectValue placeholder="Sélectionner une catégorie" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Développement Web">Développement Web</SelectItem>
                    <SelectItem value="Développement Mobile">Développement Mobile</SelectItem>
                    <SelectItem value="Base de données">Base de données</SelectItem>
                    <SelectItem value="DevOps">DevOps</SelectItem>
                    <SelectItem value="Intelligence Artificielle">Intelligence Artificielle</SelectItem>
                    <SelectItem value="Cybersécurité">Cybersécurité</SelectItem>
                    <SelectItem value="Réseau">Réseau</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description *</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={coursInfo.description}
                  onChange={handleCoursChange}
                  placeholder="Décrivez le contenu et les objectifs du cours..."
                  rows={4}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="photoCours">Photo du cours</Label>
                <div className="flex flex-col items-center space-y-4">
                  {photoPreview ? (
                    <div className="relative w-full h-48 rounded-md overflow-hidden border">
                      <Image
                        src={photoPreview.startsWith("data:") ? photoPreview : photoPreview || "/placeholder.svg"}
                        alt="Aperçu de la photo du cours"
                        fill
                        className="object-cover"
                      />
                      <Button
                        type="button"
                        variant="secondary"
                        size="sm"
                        className="absolute bottom-2 right-2"
                        onClick={triggerFileInput}
                      >
                        Changer
                      </Button>
                    </div>
                  ) : (
                    <div
                      onClick={triggerFileInput}
                      className="w-full h-48 border-2 border-dashed rounded-md flex flex-col items-center justify-center cursor-pointer hover:bg-muted transition-colors"
                    >
                      <div className="flex flex-col items-center justify-center space-y-2">
                        <div className="p-2 rounded-full bg-muted">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-image"
                          >
                            <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                            <circle cx="9" cy="9" r="2" />
                            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                          </svg>
                        </div>
                        <div className="text-sm text-center">
                          <p className="font-medium">Cliquez pour ajouter une photo</p>
                          <p className="text-xs text-muted-foreground">SVG, PNG, JPG ou GIF (max. 2MB)</p>
                        </div>
                      </div>
                    </div>
                  )}
                  <input
                    ref={fileInputRef}
                    type="file"
                    id="photoCours"
                    accept="image/*"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button
                type="button"
                variant="outline"
                onClick={() => router.push(coursId ? `/formateur/cours/${coursId}` : "/formateur/cours")}
              >
                Annuler
              </Button>
              <div className="flex gap-2">
                <Button type="button" variant="secondary" onClick={handleSubmitInfosOnly} disabled={isSubmitting}>
                  {isSubmitting ? "Sauvegarde..." : "Sauvegarder les infos"}
                </Button>
                <Button type="button" onClick={nextStep}>
                  Suivant <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardFooter>
          </Card>
        )
      case 2:
        return (
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle>Chapitres du cours</CardTitle>
              <CardDescription>Modifiez les chapitres qui composent votre cours.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {chapitres.map((chapitre, index) => (
                <div key={index} className="space-y-4 p-4 border rounded-lg">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium">Chapitre {chapitre.numeroOrdre}</h3>
                    <Button type="button" variant="ghost" size="sm" onClick={() => removeChapitre(index)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`chapitre-titre-${index}`}>Titre du chapitre *</Label>
                    <Input
                      id={`chapitre-titre-${index}`}
                      value={chapitre.titre}
                      onChange={(e) => handleChapitreChange(index, "titre", e.target.value)}
                      placeholder="Ex: Introduction à React"
                      required
                    />
                  </div>
                </div>
              ))}

              <Button type="button" variant="outline" className="w-full" onClick={addChapitre}>
                <Plus className="mr-2 h-4 w-4" /> Ajouter un chapitre
              </Button>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button type="button" variant="outline" onClick={prevStep}>
                <ArrowLeft className="mr-2 h-4 w-4" /> Précédent
              </Button>
              <Button type="button" onClick={nextStep}>
                Suivant <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        )
      case 3:
        return (
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle>Leçons par chapitre</CardTitle>
              <CardDescription>Modifiez les leçons pour chaque chapitre de votre cours.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Tabs defaultValue="0" className="w-full">
                <TabsList className="mb-4 flex flex-wrap">
                  {chapitres.map((chapitre, index) => (
                    <TabsTrigger key={index} value={index.toString()} className="mb-1">
                      Chapitre {chapitre.numeroOrdre}: {chapitre.titre.substring(0, 15)}
                      {chapitre.titre.length > 15 ? "..." : ""}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {chapitres.map((chapitre, chapitreIndex) => (
                  <TabsContent key={chapitreIndex} value={chapitreIndex.toString()} className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-medium">{chapitre.titre}</h3>
                    </div>

                    {(lecons[chapitreIndex] || []).map((lecon, leconIndex) => (
                      <div key={leconIndex} className="space-y-4 p-4 border rounded-lg">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium">Leçon {lecon.numeroOrdre}</h4>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => removeLecon(chapitreIndex, leconIndex)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor={`lecon-titre-${chapitreIndex}-${leconIndex}`}>Titre de la leçon *</Label>
                          <Input
                            id={`lecon-titre-${chapitreIndex}-${leconIndex}`}
                            value={lecon.titre}
                            onChange={(e) => handleLeconChange(chapitreIndex, leconIndex, "titre", e.target.value)}
                            placeholder="Ex: Les composants React"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor={`lecon-contenu-${chapitreIndex}-${leconIndex}`}>
                            <FileText className="h-4 w-4 inline mr-1" /> Contenu textuel
                          </Label>
                          <Textarea
                            id={`lecon-contenu-${chapitreIndex}-${leconIndex}`}
                            value={lecon.contenuTextuel}
                            onChange={(e) =>
                              handleLeconChange(chapitreIndex, leconIndex, "contenuTextuel", e.target.value)
                            }
                            placeholder="Contenu détaillé de la leçon..."
                            rows={4}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor={`lecon-video-${chapitreIndex}-${leconIndex}`}>
                            <FileVideo className="h-4 w-4 inline mr-1" /> Lien vidéo
                          </Label>
                          <Input
                            id={`lecon-video-${chapitreIndex}-${leconIndex}`}
                            value={lecon.contenuVideo}
                            onChange={(e) =>
                              handleLeconChange(chapitreIndex, leconIndex, "contenuVideo", e.target.value)
                            }
                            placeholder="https://youtube.com/watch?v=..."
                          />
                          <p className="text-xs text-muted-foreground">
                            Lien vers une vidéo YouTube, Vimeo ou autre plateforme
                          </p>
                        </div>
                      </div>
                    ))}

                    <Button type="button" variant="outline" className="w-full" onClick={() => addLecon(chapitreIndex)}>
                      <Plus className="mr-2 h-4 w-4" /> Ajouter une leçon
                    </Button>
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button type="button" variant="outline" onClick={prevStep}>
                <ArrowLeft className="mr-2 h-4 w-4" /> Précédent
              </Button>
              <Button type="submit" onClick={handleSubmit} disabled={isSubmitting}>
                {isSubmitting ? "Modification en cours..." : "Enregistrer les modifications"}
              </Button>
            </CardFooter>
          </Card>
        )
      default:
        return null
    }
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-[500px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Modifier le cours</h1>
          <p className="text-muted-foreground">Modifiez les informations, chapitres et leçons du cours.</p>
        </div>
        <Link href={coursId ? `/formateur/cours/${coursId}` : "/formateur/cours"}>
          <Button variant="outline" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour
          </Button>
        </Link>
      </div>

      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-2">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= 1 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}
          >
            1
          </div>
          <Separator className="w-12" />
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= 2 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}
          >
            2
          </div>
          <Separator className="w-12" />
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= 3 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}
          >
            3
          </div>
        </div>
        <div className="text-sm font-medium">Étape {currentStep} sur 3</div>
      </div>

      <form>{renderStep()}</form>

      <div className="text-sm text-muted-foreground">
        <p>* Champs obligatoires</p>
      </div>
    </div>
  )
}
