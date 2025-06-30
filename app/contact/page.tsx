"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, Mail, MapPin, Phone } from "lucide-react"
import Header from "@/components/header"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    sujet: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, sujet: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        cache: 'no-cache',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Erreur lors de l'envoi")
      }

      setSubmitted(true)
      setFormData({ nom: "", prenom: "", email: "", sujet: "", message: "" })

      // Reset after display
      setTimeout(() => {
        setSubmitted(false)
      }, 3000)
    } catch (error) {
      console.error("Erreur:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div >
      <Header />
      <main className="flex-1">
        <section className="relative w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contactez-nous</h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Nous sommes là pour répondre à toutes vos questions.
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-6xl gap-6 py-12 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="h-full  shadow-lg">
                  <CardHeader>
                    <CardTitle>Formulaire de contact</CardTitle>
                    <CardDescription>
                      Remplissez ce formulaire, nous vous répondrons rapidement.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {submitted ? (
                      <div className="flex flex-col items-center justify-center space-y-4 py-12">
                        <CheckCircle className="h-16 w-16 text-green-500" />
                        <h3 className="text-xl font-semibold">Message envoyé !</h3>
                        <p className="text-center text-muted-foreground">
                          Merci pour votre message.
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="nom">Nom</Label>
                          <Input
                            id="nom"
                            name="nom"
                            placeholder="Votre nom"
                            value={formData.nom}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="nom">Prenom</Label>
                          <Input
                            id="prenom"
                            name="prenom"
                            placeholder="Votre prenom"
                            value={formData.prenom}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="votre@email.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="sujet">Sujet</Label>
                          <Select value={formData.sujet} onValueChange={handleSelectChange} required>
                            <SelectTrigger id="sujet">
                              <SelectValue placeholder="Sélectionnez un sujet" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="information">Demande d'information</SelectItem>
                              <SelectItem value="inscription">Inscription</SelectItem>
                              <SelectItem value="partenariat">Partenariat</SelectItem>
                              <SelectItem value="technique">Support technique</SelectItem>
                              <SelectItem value="autre">Autre</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="message">Message</Label>
                          <Textarea
                            id="message"
                            name="message"
                            placeholder="Votre message..."
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <Button type="submit" className="w-full bg-red-500 hover:bg-red-300" disabled={loading}>
                          {loading ? "Envoi en cours..." : "Envoyer le message"}
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col gap-6"
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Informations de contact</CardTitle>
                    <CardDescription>Vous pouvez également nous contacter via :</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-primary/10 p-3">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Email</h3>
                        <p className="text-muted-foreground">241communities@email.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-primary/10 p-3">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Téléphone</h3>
                        <p className="text-muted-foreground">+241 00 00 00 00</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-primary/10 p-3">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Adresse</h3>
                        <p className="text-muted-foreground">
                          Ancienne Sobraga<br />Libreville, Gabon
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
