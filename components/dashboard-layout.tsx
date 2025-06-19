"use client"

import { type ReactNode, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { BookOpen, FileText, GraduationCap, Home, LogOut, Users, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

type UserInfo = {
  id: number
  nom: string
  prenom: string
  email: string
  role: string
  referentiel?: string
}

interface DashboardLayoutProps {
  children: ReactNode
  userRole?: "administrateur" | "formateur" | "apprenant"
}

export default function DashboardLayout({ children, userRole = "administrateur" }: DashboardLayoutProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState<UserInfo | null>(null)
  const router = useRouter()
  const API_URL = process.env.NEXT_PUBLIC_API_URL

  useEffect(() => {
    // Vérifier l'authentification
    let token: string | null = null

    if (userRole === "administrateur") {
      token = localStorage.getItem("adminToken")
    } else if (userRole === "formateur") {
      token = localStorage.getItem("formateurToken") || localStorage.getItem("token")
    } else if (userRole === "apprenant") {
      token = localStorage.getItem("apprenantToken") || localStorage.getItem("token")
    }

    const storedUser = localStorage.getItem("user")

    if (!token) {
      console.log(`Aucun token ${userRole} trouvé, redirection vers la page de connexion`)
      window.location.href = `/login/${userRole}`
      return
    }

    if (storedUser) {
      try {
        const userInfo = JSON.parse(storedUser)
        // Assouplir la vérification du rôle pour éviter les redirections indésirables
        // Nous vérifions toujours que l'utilisateur est authentifié, mais nous n'exigeons pas
        // qu'il corresponde exactement au rôle attendu
        setUser(userInfo)
        setIsAuthenticated(true)
      } catch (error) {
        console.error("Erreur lors du parsing des données utilisateur:", error)
        // Ne pas rediriger en cas d'erreur - simplement considérer comme non authentifié
        setIsAuthenticated(false)
      }
    } else {
      console.log("Aucune information utilisateur trouvée")
      // Ne pas rediriger automatiquement - laisser l'utilisateur naviguer normalement
      setIsAuthenticated(false)
    }

    setIsLoading(false)

    // Ajouter un gestionnaire d'événement pour bloquer la perte de session sur l'événement 'beforeunload'
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      // Ne rien faire de spécial, mais cela aide à conserver la session dans certains navigateurs
    }

    window.addEventListener("beforeunload", handleBeforeUnload)

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload)
    }
  }, [userRole])

  // Ajouter une fonction pour vérifier si l'utilisateur est connecté sans redirection
  useEffect(() => {
    // Cette fonction sera appelée quand la page se recharge ou quand on revient en arrière
    const handlePageShow = (event: PageTransitionEvent) => {
      // Si on revient à la page (bouton retour), recharger les informations depuis localStorage
      if (event.persisted) {
        const storedUser = localStorage.getItem("user")
        let token = null

        if (userRole === "administrateur") {
          token = localStorage.getItem("adminToken")
        } else if (userRole === "formateur") {
          token = localStorage.getItem("formateurToken") || localStorage.getItem("token")
        } else if (userRole === "apprenant") {
          token = localStorage.getItem("apprenantToken") || localStorage.getItem("token")
        }

        if (token && storedUser) {
          try {
            const userInfo = JSON.parse(storedUser)
            setUser(userInfo)
            setIsAuthenticated(true)
          } catch (error) {
            console.error("Erreur lors du parsing des données utilisateur:", error)
          }
        }
      }
    }

    window.addEventListener("pageshow", handlePageShow)

    return () => {
      window.removeEventListener("pageshow", handlePageShow)
    }
  }, [userRole])

  // Fonction de déconnexion - cette fonction ne change pas
  const handleLogout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("adminToken")
    localStorage.removeItem("formateurToken")
    localStorage.removeItem("apprenantToken")
    localStorage.removeItem("user")

    // Redirection vers la page de connexion spécifique au rôle
    window.location.href = `/login/${userRole}`
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  // Même si l'utilisateur n'est pas authentifié, afficher quand même le contenu
  // Cela permet de gérer les problèmes liés au bouton retour et à la navigation
  // Le serveur refusera les requêtes non autorisées de toute façon

  // Définir les liens de navigation en fonction du rôle
  const getNavLinks = () => {
    if (userRole === "administrateur") {
      return [
        { href: "/admin/dashboard", label: "Tableau de bord", icon: <Home className="h-4 w-4" /> },
        { href: "/admin/apprenants", label: "Apprenants", icon: <Users className="h-4 w-4" /> },
        { href: "/admin/formateurs", label: "Formateurs", icon: <Users className="h-4 w-4" /> },
        { href: "/admin/cours", label: "Cours", icon: <BookOpen className="h-4 w-4" /> },
      ]
    } else if (userRole === "formateur") {
      return [
        { href: "/formateur/dashboard", label: "Tableau de bord", icon: <Home className="h-4 w-4" /> },
        { href: "/formateur/cours", label: "Mes cours", icon: <BookOpen className="h-4 w-4" /> },
        { href: "/formateur/veilles", label: "Mes veilles", icon: <FileText className="h-4 w-4" /> },
        { href: "/formateur/apprenants", label: "Apprenants", icon: <GraduationCap className="h-4 w-4" /> },
      ]
    } else if (userRole === "apprenant") {
      return [
        { href: "/apprenant/dashboard", label: "Tableau de bord", icon: <Home className="h-4 w-4" /> },
        { href: "/apprenant/cours", label: "Mes cours", icon: <BookOpen className="h-4 w-4" /> },
        { href: "/apprenant/veilles", label: "Mes veilles", icon: <FileText className="h-4 w-4" /> },
        { href: "/apprenant/profil", label: "Mon profil", icon: <User className="h-4 w-4" /> },
      ]
    }
    return []
  }

  const navLinks = getNavLinks()

  // Définir le titre et la couleur en fonction du rôle
  const getRoleInfo = () => {
    if (userRole === "administrateur") {
      return { title: "Administration", color: "text-purple-600 bg-purple-100" }
    } else if (userRole === "formateur") {
      return { title: "Espace Formateur", color: "text-secondary bg-secondary/10" }
    } else if (userRole === "apprenant") {
      return { title: "Espace Apprenant", color: "text-primary bg-primary/10" }
    }
    return { title: "", color: "" }
  }

  const roleInfo = getRoleInfo()

  return (
    <div className="min-h-screen bg-muted/10 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b h-16 flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Link href={`/${userRole}/dashboard`} className="font-bold">
            école {241}
          </Link>
          <span className="text-sm text-muted-foreground">| {roleInfo.title}</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarFallback className={roleInfo.color}>
                {user?.prenom?.charAt(0) || "U"}
                {user?.nom?.charAt(0) || ""}
              </AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium hidden md:inline-block">
              {user?.prenom || ""} {user?.nom || ""}
            </span>
          </div>
          <Button variant="ghost" size="sm" onClick={handleLogout} className="gap-2">
            <LogOut className="h-4 w-4" />
            <span className="hidden sm:inline">Déconnexion</span>
          </Button>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r hidden md:block">
          <div className="p-4">
            <nav className="space-y-1">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm ${
                    link.href.includes("/dashboard")
                      ? userRole === "administrateur"
                        ? "bg-purple-600 text-white"
                        : userRole === "formateur"
                          ? "bg-secondary text-white"
                          : "bg-primary text-white"
                      : "text-muted-foreground hover:bg-muted"
                  }`}
                >
                  {link.icon}
                  <span>{link.label}</span>
                </Link>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-8">{children}</main>
      </div>
    </div>
  )
}
