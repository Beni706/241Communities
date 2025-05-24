"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { LinkIcon } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface GooglePickerProps {
  onSelect: (fileUrl: string, fileName: string) => void
  buttonText?: string
  initialUrl?: string
  initialName?: string
}

export function GooglePicker({
  onSelect,
  buttonText = "Sélectionner un document",
  initialUrl = "",
  initialName = "",
}: GooglePickerProps) {
  const [manualUrl, setManualUrl] = useState(initialUrl)
  const [manualName, setManualName] = useState(initialName)
  const [showManualInput, setShowManualInput] = useState(false)
  const { toast } = useToast()

  // Fonction pour valider une URL
  const isValidUrl = (url: string) => {
    try {
      new URL(url)
      return true
    } catch (e) {
      return false
    }
  }

  // Fonction pour extraire le nom du document à partir de l'URL (si possible)
  const extractNameFromUrl = (url: string) => {
    try {
      // Pour les URLs Google Docs/Sheets/Slides
      if (url.includes("docs.google.com") || url.includes("sheets.google.com") || url.includes("slides.google.com")) {
        const urlObj = new URL(url)
        const pathParts = urlObj.pathname.split("/")
        // Essayer de trouver un identifiant ou un nom dans l'URL
        for (const part of pathParts) {
          if (part && part !== "d" && part !== "edit" && part.length > 5) {
            return `Document Google (${part.substring(0, 10)}...)`
          }
        }
      }
      return "Document externe"
    } catch (e) {
      return "Document externe"
    }
  }

  // Fonction pour gérer la soumission manuelle d'URL
  const handleManualSubmit = () => {
    if (!manualUrl) {
      toast({
        variant: "destructive",
        title: "URL manquante",
        description: "Veuillez entrer une URL valide.",
      })
      return
    }

    if (!isValidUrl(manualUrl)) {
      toast({
        variant: "destructive",
        title: "URL invalide",
        description: "Veuillez entrer une URL valide (commençant par http:// ou https://).",
      })
      return
    }

    const name = manualName || extractNameFromUrl(manualUrl)
    onSelect(manualUrl, name)

    toast({
      title: "Document ajouté",
      description: `"${name}" a été ajouté avec succès.`,
    })

    setShowManualInput(false)
  }

  // Fonction pour basculer l'affichage du formulaire manuel
  const toggleManualInput = () => {
    setShowManualInput(!showManualInput)
  }

  return (
    <div className="w-full space-y-4">
      {!showManualInput ? (
        <div className="flex flex-col space-y-2">
          <Button
            type="button"
            variant="outline"
            onClick={toggleManualInput}
            className="w-full flex items-center justify-center gap-2"
          >
            <LinkIcon className="h-4 w-4" />
            {buttonText}
          </Button>
          <p className="text-xs text-gray-500 text-center">
            Cliquez pour ajouter manuellement un lien vers un document
          </p>
        </div>
      ) : (
        <div className="border p-4 rounded-md space-y-4">
          <div className="space-y-2">
            <Label htmlFor="document-url">URL du document</Label>
            <Input
              id="document-url"
              type="url"
              placeholder="https://docs.google.com/..."
              value={manualUrl}
              onChange={(e) => setManualUrl(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="document-name">Nom du document (optionnel)</Label>
            <Input
              id="document-name"
              type="text"
              placeholder="Mon document"
              value={manualName}
              onChange={(e) => setManualName(e.target.value)}
            />
            <p className="text-xs text-gray-500">Si non renseigné, un nom sera généré automatiquement</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2">
            <Button type="button" variant="default" onClick={handleManualSubmit} className="flex-1">
              Ajouter
            </Button>
            <Button type="button" variant="outline" onClick={toggleManualInput} className="flex-1">
              Annuler
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
