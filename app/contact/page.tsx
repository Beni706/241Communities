"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function ContactPage() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    dateNaissance: "",
    email: "",
    telephone: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
  const res = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  })

  const data = await res.json()

  if (!res.ok) throw new Error(data.message)

  toast({
    title: "Message envoyé",
    description: data.message,
  })

  setFormData({
    nom: "",
    prenom: "",
    dateNaissance: "",
    email: "",
    telephone: "",
    message: "",
  })
} catch (error: any) {
  toast({
    variant: "destructive",
    title: "Erreur",
    description: error.message || "Une erreur est survenue",
  })
}

     finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-muted/10 flex flex-col">
      <header className="border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold">école {241} communities</span>
            </Link>
          </div>
          <nav className="flex items-center gap-4">
            <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Accueil
            </Link>
            <Link href="/login/apprenant" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Connexion
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 container py-12">
        <div className="max-w-2xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour à l'accueil
          </Link>

          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="text-2xl">Nous contacter</CardTitle>
              <CardDescription>
                Remplissez le formulaire ci-dessous pour nous envoyer un message. Nous vous répondrons dans les plus
                brefs délais.
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="nom">Nom</Label>
                    <Input id="nom" placeholder="Votre nom" required value={formData.nom} onChange={handleChange} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="prenom">Prénom</Label>
                    <Input
                      id="prenom"
                      placeholder="Votre prénom"
                      required
                      value={formData.prenom}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dateNaissance">Date de naissance</Label>
                  <Input
                    id="dateNaissance"
                    type="date"
                    required
                    value={formData.dateNaissance}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Adresse email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="votre@email.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="telephone">Numéro de téléphone</Label>
                  <Input
                    id="telephone"
                    type="tel"
                    placeholder="+241 XX XX XX XX"
                    required
                    value={formData.telephone}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Expliquez-nous pourquoi vous nous contactez..."
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </div>
      </main>

      <footer className="border-t py-6 bg-white">
        <div className="container text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} école {241} communities. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  )
}
