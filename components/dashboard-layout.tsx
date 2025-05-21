"use client"

import { type ReactNode, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { BookOpen, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

type Apprenant = {
  id_apprenant: number
  nom: string
  prenom: string
  email: string
  referentiel: string
}

type Formateur = {
  id_formateur: number
  nom: string
  prenom: string
  email: string
  referentiel: string
}

type Cours = {
  id_cours: number
  titre: string
  categorie: string
  description: string
  formateur: {
    nom: string
    prenom: string
  }
}

type AdminInfo = {
  id: number
  nom: string
  prenom: string
  email: string
}

interface DashboardLayoutProps {
  children: ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [admin, setAdmin] = useState<AdminInfo | null>(null)
  const [apprenants, setApprenants] = useState<Apprenant[]>([])
  const [formateurs, setFormateurs] = useState<Formateur[]>([])
  const [cours, setCours] = useState<Cours[]>([])
  const router = useRouter()
  const API_URL = process.env.NEXT_PUBLIC_API_URL

  useEffect(() => {
    // Vérifier l'authentification
    const token = localStorage.getItem("adminToken")
    if (!token) {
      router.push("/login/administrateur")
    } else {
      setIsAuthenticated(true)
    }
    setIsLoading(false)

    // Fetch data if authenticated
    if (token) {
      const fetchData = async () => {
        try {
          // Fetch apprenants
          const apprenantsResponse = await fetch(`${API_URL}/apprenant`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })

          // Fetch formateurs
          const formateursResponse = await fetch(`${API_URL}/formateur`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })

          // Fetch cours
          const coursResponse = await fetch(`${API_URL}/cours`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })

          if (apprenantsResponse.ok) {
            const apprenantsData = await apprenantsResponse.json()
            setApprenants(apprenantsData)
          }

          if (formateursResponse.ok) {
            const formateursData = await formateursResponse.json()
            setFormateurs(formateursData)
          }

          if (coursResponse.ok) {
            const coursData = await coursResponse.json()
            setCours(coursData)
          }

          // Récupérer les informations de l'administrateur
          const adminInfoString = localStorage.getItem("adminInfo")
          const adminInfo = adminInfoString ? JSON.parse(adminInfoString) : { prenom: "Admin", nom: "" }
          setAdmin(adminInfo)
        } catch (error) {
          console.error("Error fetching data:", error)
        }
      }

      fetchData()
    }
  }, [router])

  // Fonction de déconnexion
  const handleLogout = () => {
    localStorage.removeItem("adminToken")
    localStorage.removeItem("adminInfo")
    router.push("/login/administrateur")
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null
  }

  // Get recent apprenants
  const recentApprenants = [...apprenants].slice(0, 5)

  // Get recent formateurs
  const recentFormateurs = [...formateurs].slice(0, 5)

  // Get recent cours
  const recentCours = [...cours].sort((a, b) => b.id_cours - a.id_cours).slice(0, 5)

  return (
    <div className="min-h-screen bg-muted/10 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b h-16 flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Link href="/admin/dashboard" className="font-bold">
            école {241}
          </Link>
          <span className="text-sm text-muted-foreground">| Administration</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
              <span className="font-bold text-purple-600 text-xs">
                {admin?.prenom?.charAt(0) || "A"}
                {admin?.nom?.charAt(0) || "D"}
              </span>
            </div>
            <span className="text-sm font-medium hidden md:inline-block">
              {admin?.prenom || ""} {admin?.nom || ""}
            </span>
          </div>
          <Button variant="ghost" size="sm" onClick={handleLogout}>
            Déconnexion
          </Button>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r hidden md:block">
          <div className="p-4">
            <nav className="space-y-1">
              <Link
                href="/admin/dashboard"
                className="flex items-center gap-3 px-3 py-2 rounded-md text-sm bg-primary text-white"
              >
                <BookOpen className="h-4 w-4" />
                <span>Tableau de bord</span>
              </Link>
              <Link
                href="/admin/apprenants"
                className="flex items-center gap-3 px-3 py-2 rounded-md text-sm text-muted-foreground hover:bg-muted"
              >
                <Users className="h-4 w-4" />
                <span>Apprenants</span>
              </Link>
              <Link
                href="/admin/formateurs"
                className="flex items-center gap-3 px-3 py-2 rounded-md text-sm text-muted-foreground hover:bg-muted"
              >
                <Users className="h-4 w-4" />
                <span>Formateurs</span>
              </Link>
              <Link
                href="/admin/cours"
                className="flex items-center gap-3 px-3 py-2 rounded-md text-sm text-muted-foreground hover:bg-muted"
              >
                <BookOpen className="h-4 w-4" />
                <span>Cours</span>
              </Link>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-8">{children}</main>
      </div>
    </div>
  )
}
