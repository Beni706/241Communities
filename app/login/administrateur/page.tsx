"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"
import Link from "next/link"
import { ArrowLeft, ShieldAlert } from "lucide-react"

export default function LoginAdminPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const { toast } = useToast()
  const router = useRouter()
  const API_URL = process.env.NEXT_PUBLIC_API_URL

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch(`${API_URL}/admin/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      })

      if (!response.ok) {
        throw new Error("Email ou mot de passe incorrect")
      }

      const data = await response.json()

      // Stocker le token administrateur
      localStorage.setItem("adminToken", data.token)

      // Stocker les informations de base de l'administrateur
      // Pas besoin de stocker un rôle explicite puisque c'est un administrateur
      localStorage.setItem(
        "adminInfo",
        JSON.stringify({
          id: data.id || 0,
          nom: data.nom || "",
          prenom: data.prenom || "",
          email: email,
        }),
      )

      toast({
        title: "Connexion réussie",
        description: "Vous êtes maintenant connecté en tant qu'administrateur.",
      })

      // Redirection vers le tableau de bord administrateur
      router.push("/admin/dashboard")
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
        <div className="shape-blob h-64 w-64 bg-purple-200"></div>
      </div>
      <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 transform">
        <div className="shape-blob-2 h-80 w-80 bg-purple-200"></div>
      </div>

      <div className="w-full max-w-md relative z-10">
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <span className="text-2xl font-bold">école {241}</span>
          </Link>
          <p className="text-muted-foreground mt-2">Espace Administrateur</p>
        </div>

        <Card className="border-0 shadow-lg overflow-hidden">
          <div className="h-2 bg-purple-600"></div>
          <CardHeader>
            <div className="flex items-center justify-center mb-2">
              <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                <ShieldAlert className="h-6 w-6 text-purple-600" />
              </div>
            </div>
            <CardTitle>Connexion Administrateur</CardTitle>
            <CardDescription>Entrez vos identifiants pour accéder à l'espace d'administration</CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Adresse email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="admin@ecole241.com"
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
              <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700" disabled={isLoading}>
                {isLoading ? "Connexion en cours..." : "Se connecter"}
              </Button>

              <div className="flex justify-center w-full">
                <Link href="/" className="text-sm text-muted-foreground hover:text-purple-600 flex items-center gap-1">
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
          <Link href="/login/formateur" className="text-sm text-muted-foreground hover:text-primary">
            Espace Formateur
          </Link>
        </div>
      </div>
    </div>
  )
}
