"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"
import Link from "next/link"
import { ArrowLeft, BookOpen } from "lucide-react"
import Image from "next/image"

export default function LoginFormateurPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const { toast } = useToast()
  const router = useRouter()
  const API_URL = process.env.NEXT_PUBLIC_API_URL

  // Vérifier si l'utilisateur est déjà connecté
  useEffect(() => {
    // Nettoyer le localStorage pour éviter les conflits
    localStorage.removeItem("token")
    localStorage.removeItem("formateurToken")
    localStorage.removeItem("adminToken")
    localStorage.removeItem("apprenantToken")
    localStorage.removeItem("user")
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch(`${API_URL}/formateur/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || "Email ou mot de passe incorrect")
      }

      const data = await response.json()

      // Stocker le token formateur
      localStorage.setItem("token", data.token)
      localStorage.setItem("formateurToken", data.token)

      // Récupérer les informations du formateur
      try {
        const formateurResponse = await fetch(`${API_URL}/formateur/${data.id}`, {
          headers: { Authorization: `Bearer ${data.token}` },
        })

        if (formateurResponse.ok) {
          const formateurData = await formateurResponse.json()

          // Stocker les informations utilisateur dans un format cohérent
          const userData = {
            id: formateurData.id_formateur,
            nom: formateurData.nom,
            prenom: formateurData.prenom,
            email: formateurData.email,
            role: "formateur",
            referentiel: formateurData.referentiel,
          }

          localStorage.setItem("user", JSON.stringify(userData))
        } else {
          // Fallback si la récupération du profil échoue
          const userData = {
            id: data.id || 0,
            nom: data.nom || "",
            prenom: data.prenom || "",
            email: email,
            role: "formateur",
            referentiel: data.referentiel || "",
          }

          localStorage.setItem("user", JSON.stringify(userData))
        }
      } catch (error) {
        // Fallback en cas d'erreur
        const userData = {
          id: data.id || 0,
          nom: data.nom || "",
          prenom: data.prenom || "",
          email: email,
          role: "formateur",
          referentiel: data.referentiel || "",
        }

        localStorage.setItem("user", JSON.stringify(userData))
      }

      toast({
        title: "Connexion réussie",
        description: "Vous êtes maintenant connecté en tant que formateur.",
      })

      // Redirection vers le tableau de bord formateur
      window.location.href = "/formateur/dashboard"
    } catch (err: any) {
      setError(err.message || "Une erreur est survenue. Veuillez réessayer.")

      toast({
        variant: "destructive",
        title: "Erreur de connexion",
        description: err.message || "Identifiants incorrects. Veuillez réessayer.",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-muted/30 p-4">
      {/* Decorative shapes */}
      <div className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 transform">
        <div className="h-64 w-64 rounded-full bg-secondary/20 opacity-70 blur-3xl"></div>
      </div>
      <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 transform">
        <div className="h-80 w-80 rounded-full bg-secondary/20 opacity-70 blur-3xl"></div>
      </div>

      <div className="w-full max-w-md relative z-10">
        <div className="text-center mb-8">
          <Link href="/" className="inline-block mb-4">
            <Image src="/logo.png" alt="Logo Ecole 241" width={100} height={100} className="mx-auto" />
          </Link>
        </div>

        <Card className="border-0 shadow-lg overflow-hidden">
          <div className="h-2 bg-secondary"></div>
          <CardHeader>
            <div className="flex items-center justify-center mb-2">
              <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-secondary" />
              </div>
            </div>
            <CardTitle>Connexion Formateur</CardTitle>
            <CardDescription>Entrez vos identifiants pour accéder à votre espace formateur</CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Adresse email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="votre@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Mot de passe</Label>
                </div>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {error && <div className="text-red-500 text-sm">{error}</div>}
            </CardContent>
            <CardFooter className="flex-col space-y-4">
              <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90" disabled={isLoading}>
                {isLoading ? "Connexion en cours..." : "Se connecter"}
              </Button>

              <div className="flex justify-center w-full">
                <Link href="/" className="text-sm text-muted-foreground hover:text-secondary flex items-center gap-1">
                  <ArrowLeft className="h-3 w-3" />
                  Retour à l'accueil
                </Link>
              </div>
            </CardFooter>
          </form>
        </Card>

        <div className="mt-4 text-center flex justify-center gap-4">
          <Link href="/login/apprenant" className="text-sm text-muted-foreground hover:text-primary">
            Espace Apprenant
          </Link>
          <Link href="/login/administrateur" className="text-sm text-muted-foreground hover:text-primary">
            Espace Admin
          </Link>
        </div>
      </div>
    </div>
  )
}
