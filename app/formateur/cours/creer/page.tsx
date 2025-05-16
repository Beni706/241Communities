"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import DashboardLayout from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { useAuth } from "@/components/auth-provider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, Trash } from "lucide-react"

export default function CreerCours() {
  const { user } = useAuth()
  const router = useRouter()
  const { toast } = useToast()

  // Étape 1: Informations du cours
  const [titre, setTitre] = useState("")
  const [categorie, setCategorie] = useState("")
  const [description, setDescription] = useState("")
  const [photoCours, setPhotoCours] = useState("")

  // Étape 2: Chapitres
  const [chapitres, setChapitres] = useState<Array<{ titre: string; numeroOrdre: number }>>([])
  const [nouveauChapitreTitre, setNouveauChapitreTitre] = useState("")
  const [nouveauChapitreOrdre, setNouveauChapitreOrdre] = useState(1)

  // Étape 3: Leçons
  const [lecons, setLecons] = useState<
    Array<{ titre: string; contenuTextuel: string; contenuVideo: string; numeroOrdre: number; id_chapitre: number }>
  >([])
  const [nouveauLeconTitre, setNouveauLeconTitre] = useState("")
  const [nouveauLeconContenuTextuel, setNouveauLeconContenuTextuel] = useState("")
  const [nouveauLeconContenuVideo, setNouveauLeconContenuVideo] = useState("")
  const [nouveauLeconOrdre, setNouveauLeconOrdre] = useState(1)
  const [chapitreSelectionne, setChapitreSelectionne] = useState<number | null>(null)

  const [currentStep, setCurrentStep] = useState("etape1")
  const [isLoading, setIsLoading] = useState(false)
  const [coursId, setCoursId] = useState<number | null>(null)

  const ajouterChapitre = () => {
    if (!nouveauChapitreTitre) {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Veuillez saisir un titre pour le chapitre.",
      })
      return
    }

    setChapitres([...chapitres, { titre: nouveauChapitreTitre, numeroOrdre: nouveauChapitreOrdre }])
    setNouveauChapitreTitre("")
    setNouveauChapitreOrdre(nouveauChapitreOrdre + 1)
  }

  const supprimerChapitre = (index: number) => {
    setChapitres(chapitres.filter((_, i) => i !== index))
  }

  const ajouterLecon = () => {
    if (!nouveauLeconTitre || chapitreSelectionne === null) {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Veuillez saisir un titre pour la leçon et sélectionner un chapitre.",
      })
      return
    }

    setLecons([
      ...lecons,
      {
        titre: nouveauLeconTitre,
        contenuTextuel: nouveauLeconContenuTextuel,
        contenuVideo: nouveauLeconContenuVideo,
        numeroOrdre: nouveauLeconOrdre,
        id_chapitre: chapitreSelectionne,
      },
    ])
    setNouveauLeconTitre("")
    setNouveauLeconContenuTextuel("")
    setNouveauLeconContenuVideo("")
    setNouveauLeconOrdre(nouveauLeconOrdre + 1)
  }

  const supprimerLecon = (index: number) => {
    setLecons(lecons.filter((_, i) => i !== index))
  }

  const handleSubmitCours = async () => {
    if (!titre || !categorie || !description) {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Veuillez remplir tous les champs obligatoires.",
      })
      return
    }

    setIsLoading(true)

    try {
      const token = localStorage.getItem("token")

      if (!token) {
        throw new Error("Non authentifié")
      }

      const response = await fetch("/api/cours", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          titre,
          categorie,
          description,
          photoCours,
          dateCreation: new Date().toISOString(),
          id_formateur: user?.id,
        }),
      })

      if (!response.ok) {
        throw new Error("Erreur lors de la création du cours")
      }

      const data = await response.json()
      setCoursId(data.newCours.id_cours)

      toast({
        title: "Cours créé",
        description: "Le cours a été créé avec succès. Vous pouvez maintenant ajouter des chapitres.",
      })

      setCurrentStep("etape2")
    } catch (error) {
      console.error("Error creating course:", error)
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Une erreur est survenue lors de la création du cours.",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmitChapitres = async () => {
    if (chapitres.length === 0) {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Veuillez ajouter au moins un chapitre.",
      })
      return
    }

    setIsLoading(true)

    try {
      const token = localStorage.getItem("token")

      if (!token || !coursId) {
        throw new Error("Non authentifié ou cours non créé")
      }

      // Créer tous les chapitres
      const chapitresPromises = chapitres.map((chapitre) =>
        fetch("/api/chapitre", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            titre: chapitre.titre,
            numeroOrdre: chapitre.numeroOrdre,
            id_cours: coursId,
          }),
        }),
      )

      const responses = await Promise.all(chapitresPromises)
      const chapitresData = await Promise.all(responses.map((res) => res.json()))

      // Mettre à jour les IDs des chapitres pour les leçons
      const chapitresAvecId = chapitresData.map((data, index) => ({
        ...chapitres[index],
        id_chapitre: data.newChapitre.id_chapitre,
      }))

      toast({
        title: "Chapitres créés",
        description: "Les chapitres ont été créés avec succès. Vous pouvez maintenant ajouter des leçons.",
      })

      // Mettre à jour le state avec les IDs des chapitres
      setChapitres(chapitresAvecId)
      setCurrentStep("etape3")
    } catch (error) {
      console.error("Error creating chapters:", error)
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Une erreur est survenue lors de la création des chapitres.",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmitLecons = async () => {
    if (lecons.length === 0) {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Veuillez ajouter au moins une leçon.",
      })
      return
    }

    setIsLoading(true)

    try {
      const token = localStorage.getItem("token")

      if (!token) {
        throw new Error("Non authentifié")
      }

      // Créer toutes les leçons
      const leconsPromises = lecons.map((lecon) =>
        fetch("/api/lecon", {
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
            id_chapitre: lecon.id_chapitre,
          }),
        }),
      )

      await Promise.all(leconsPromises)

      toast({
        title: "Cours complet",
        description: "Le cours, les chapitres et les leçons ont été créés avec succès.",
      })

      router.push(`/formateur/cours/${coursId}`)
    } catch (error) {
      console.error("Error creating lessons:", error)
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Une erreur est survenue lors de la création des leçons.",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Créer un nouveau cours</h1>
          <p className="text-muted-foreground">
            Suivez les étapes pour créer un cours complet avec chapitres et leçons.
          </p>
        </div>

        <Tabs value={currentStep} className="space-y-4">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="etape1" onClick={() => !isLoading && setCurrentStep("etape1")}>
              1. Informations du cours
            </TabsTrigger>
            <TabsTrigger
              value="etape2"
              onClick={() => !isLoading && coursId && setCurrentStep("etape2")}
              disabled={!coursId}
            >
              2. Chapitres
            </TabsTrigger>
            <TabsTrigger
              value="etape3"
              onClick={() => !isLoading && chapitres.length > 0 && setCurrentStep("etape3")}
              disabled={chapitres.length === 0}
            >
              3. Leçons
            </TabsTrigger>
          </TabsList>

          <TabsContent value="etape1">
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle>Informations du cours</CardTitle>
                <CardDescription>Entrez les informations de base du cours.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="titre">Titre du cours *</Label>
                  <Input
                    id="titre"
                    value={titre}
                    onChange={(e) => setTitre(e.target.value)}
                    placeholder="Ex: Introduction au développement web"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="categorie">Catégorie *</Label>
                  <Input
                    id="categorie"
                    value={categorie}
                    onChange={(e) => setCategorie(e.target.value)}
                    placeholder="Ex: Développement web, Design, Marketing"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description *</Label>
                  <Textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Décrivez le contenu et les objectifs du cours..."
                    rows={5}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="photoCours">URL de l'image du cours (optionnel)</Label>
                  <Input
                    id="photoCours"
                    value={photoCours}
                    onChange={(e) => setPhotoCours(e.target.value)}
                    placeholder="https://exemple.com/image.jpg"
                  />
                  <p className="text-xs text-muted-foreground">Laissez vide pour utiliser une image par défaut.</p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button type="button" variant="outline" onClick={() => router.back()} disabled={isLoading}>
                  Annuler
                </Button>
                <Button type="button" onClick={handleSubmitCours} disabled={isLoading}>
                  {isLoading ? "Création en cours..." : "Continuer vers les chapitres"}
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="etape2">
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle>Chapitres du cours</CardTitle>
                <CardDescription>Ajoutez les chapitres qui composeront votre cours.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="chapitreTitre">Titre du chapitre</Label>
                    <Input
                      id="chapitreTitre"
                      value={nouveauChapitreTitre}
                      onChange={(e) => setNouveauChapitreTitre(e.target.value)}
                      placeholder="Ex: Introduction aux bases du HTML"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="chapitreOrdre">Ordre</Label>
                    <Input
                      id="chapitreOrdre"
                      type="number"
                      value={nouveauChapitreOrdre}
                      onChange={(e) => setNouveauChapitreOrdre(Number.parseInt(e.target.value))}
                      min={1}
                    />
                  </div>
                </div>
                <Button type="button" onClick={ajouterChapitre} variant="outline" className="gap-2">
                  <Plus className="h-4 w-4" /> Ajouter ce chapitre
                </Button>

                {chapitres.length > 0 && (
                  <div className="mt-6">
                    <h3 className="text-sm font-medium mb-2">Chapitres ajoutés</h3>
                    <div className="space-y-2">
                      {chapitres.map((chapitre, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-md">
                          <div>
                            <p className="font-medium">{chapitre.titre}</p>
                            <p className="text-xs text-muted-foreground">Ordre: {chapitre.numeroOrdre}</p>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => supprimerChapitre(index)}
                            className="h-8 w-8 text-destructive"
                          >
                            <Trash className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button type="button" variant="outline" onClick={() => setCurrentStep("etape1")} disabled={isLoading}>
                  Retour
                </Button>
                <Button type="button" onClick={handleSubmitChapitres} disabled={isLoading || chapitres.length === 0}>
                  {isLoading ? "Enregistrement..." : "Continuer vers les leçons"}
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="etape3">
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle>Leçons du cours</CardTitle>
                <CardDescription>Ajoutez les leçons pour chaque chapitre de votre cours.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="chapitreSelect">Sélectionner un chapitre</Label>
                  <select
                    id="chapitreSelect"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    value={chapitreSelectionne || ""}
                    onChange={(e) => setChapitreSelectionne(Number.parseInt(e.target.value))}
                  >
                    <option value="" disabled>
                      Choisir un chapitre
                    </option>
                    {chapitres.map((chapitre, index) => (
                      <option key={index} value={chapitre.id_chapitre || index}>
                        {chapitre.titre}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="leconTitre">Titre de la leçon</Label>
                  <Input
                    id="leconTitre"
                    value={nouveauLeconTitre}
                    onChange={(e) => setNouveauLeconTitre(e.target.value)}
                    placeholder="Ex: Structure de base d'une page HTML"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="leconContenuTextuel">Contenu textuel (optionnel)</Label>
                  <Textarea
                    id="leconContenuTextuel"
                    value={nouveauLeconContenuTextuel}
                    onChange={(e) => setNouveauLeconContenuTextuel(e.target.value)}
                    placeholder="Contenu textuel de la leçon..."
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="leconContenuVideo">Lien vidéo (optionnel)</Label>
                  <Input
                    id="leconContenuVideo"
                    value={nouveauLeconContenuVideo}
                    onChange={(e) => setNouveauLeconContenuVideo(e.target.value)}
                    placeholder="https://youtube.com/watch?v=..."
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="leconOrdre">Ordre</Label>
                  <Input
                    id="leconOrdre"
                    type="number"
                    value={nouveauLeconOrdre}
                    onChange={(e) => setNouveauLeconOrdre(Number.parseInt(e.target.value))}
                    min={1}
                  />
                </div>

                <Button type="button" onClick={ajouterLecon} variant="outline" className="gap-2">
                  <Plus className="h-4 w-4" /> Ajouter cette leçon
                </Button>

                {lecons.length > 0 && (
                  <div className="mt-6">
                    <h3 className="text-sm font-medium mb-2">Leçons ajoutées</h3>
                    <div className="space-y-2">
                      {lecons.map((lecon, index) => {
                        const chapitre = chapitres.find((c) => c.id_chapitre === lecon.id_chapitre)
                        return (
                          <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-md">
                            <div>
                              <p className="font-medium">{lecon.titre}</p>
                              <p className="text-xs text-muted-foreground">
                                Chapitre: {chapitre?.titre} | Ordre: {lecon.numeroOrdre}
                              </p>
                            </div>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => supprimerLecon(index)}
                              className="h-8 w-8 text-destructive"
                            >
                              <Trash className="h-4 w-4" />
                            </Button>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button type="button" variant="outline" onClick={() => setCurrentStep("etape2")} disabled={isLoading}>
                  Retour
                </Button>
                <Button type="button" onClick={handleSubmitLecons} disabled={isLoading || lecons.length === 0}>
                  {isLoading ? "Finalisation..." : "Terminer la création du cours"}
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="text-sm text-muted-foreground">
          <p>* Champs obligatoires</p>
        </div>
      </div>
    </DashboardLayout>
  )
}
