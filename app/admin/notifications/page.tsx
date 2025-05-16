"use client"

import type React from "react"

import { useState } from "react"
import DashboardLayout from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"
import type { NotificationType } from "@/types/notification"

export default function AdminNotificationsPage() {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    message: "",
    type: "info" as NotificationType,
    role: "all",
    link: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const token = localStorage.getItem("token")
      if (!token) {
        throw new Error("Non authentifié")
      }

      const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api"
      const response = await fetch(`${API_BASE_URL}/notifications`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          ...formData,
          createdAt: new Date().toISOString(),
        }),
      })

      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`)
      }

      toast({
        title: "Notification créée",
        description: "La notification a été envoyée avec succès aux utilisateurs.",
      })

      // Réinitialiser le formulaire
      setFormData({
        title: "",
        message: "",
        type: "info",
        role: "all",
        link: "",
      })
    } catch (error) {
      console.error("Erreur lors de la création de la notification:", error)
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi de la notification.",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Gestion des notifications</h1>
          <p className="text-muted-foreground">Créez et envoyez des notifications aux utilisateurs de la plateforme.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle>Créer une notification</CardTitle>
              <CardDescription>
                Remplissez le formulaire pour envoyer une notification aux utilisateurs.
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Titre</Label>
                  <Input
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Titre de la notification"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Contenu de la notification"
                    rows={4}
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="type">Type</Label>
                    <Select value={formData.type} onValueChange={(value) => handleSelectChange("type", value)}>
                      <SelectTrigger id="type">
                        <SelectValue placeholder="Sélectionner un type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="info">Information</SelectItem>
                        <SelectItem value="success">Succès</SelectItem>
                        <SelectItem value="warning">Avertissement</SelectItem>
                        <SelectItem value="error">Erreur</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="role">Destinataires</Label>
                    <Select value={formData.role} onValueChange={(value) => handleSelectChange("role", value)}>
                      <SelectTrigger id="role">
                        <SelectValue placeholder="Sélectionner les destinataires" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Tous les utilisateurs</SelectItem>
                        <SelectItem value="apprenant">Apprenants</SelectItem>
                        <SelectItem value="formateur">Formateurs</SelectItem>
                        <SelectItem value="administrateur">Administrateurs</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="link">Lien (optionnel)</Label>
                  <Input
                    id="link"
                    name="link"
                    value={formData.link}
                    onChange={handleChange}
                    placeholder="https://... ou /chemin/vers/page"
                  />
                  <p className="text-xs text-muted-foreground">
                    Ajoutez un lien vers une page ou une ressource externe.
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Envoi en cours..." : "Envoyer la notification"}
                </Button>
              </CardFooter>
            </form>
          </Card>

          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle>Aperçu de la notification</CardTitle>
              <CardDescription>Voici à quoi ressemblera votre notification.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg border p-4">
                <div className="mb-4 flex items-start gap-3">
                  <div
                    className={`mt-1 h-2 w-2 rounded-full ${
                      formData.type === "success"
                        ? "bg-green-500"
                        : formData.type === "warning"
                          ? "bg-yellow-500"
                          : formData.type === "error"
                            ? "bg-red-500"
                            : "bg-blue-500"
                    }`}
                  />
                  <div>
                    <h3 className="font-medium">{formData.title || "Titre de la notification"}</h3>
                    <p className="text-sm text-muted-foreground">
                      {formData.message || "Contenu de la notification..."}
                    </p>
                    {formData.link && (
                      <a href="#" className="mt-1 text-xs text-primary hover:underline">
                        Voir plus
                      </a>
                    )}
                  </div>
                </div>

                <div className="text-xs text-muted-foreground">
                  <p>
                    <strong>Destinataires:</strong>{" "}
                    {formData.role === "all"
                      ? "Tous les utilisateurs"
                      : formData.role === "apprenant"
                        ? "Apprenants"
                        : formData.role === "formateur"
                          ? "Formateurs"
                          : "Administrateurs"}
                  </p>
                  <p>
                    <strong>Date:</strong> {new Date().toLocaleDateString()}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
