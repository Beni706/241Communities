"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { useRouter } from "next/navigation"

type User = {
  id: number
  nom: string
  prenom: string
  email: string
  role: "apprenant" | "formateur" | "administrateur"
  referentiel?: "DEVELOPPEUR" | "DIGITAL_CREATOR" | "REFERENT_DIGITAL"
}

type AuthContextType = {
  user: User | null
  loading: boolean
  login: (email: string, password: string, role: string) => Promise<boolean>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api"

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem("token")
    const storedUser = localStorage.getItem("user")

    if (token && storedUser) {
      setUser(JSON.parse(storedUser))
    }

    setLoading(false)
  }, [])

  const login = async (email: string, password: string, role: string): Promise<boolean> => {
    try {
      setLoading(true)

      let endpoint = ""

      switch (role) {
        case "apprenant":
          endpoint = "/apprenant/login"
          break
        case "formateur":
          endpoint = "/formateur/login"
          break
        case "administrateur":
          endpoint = "/admin/login"
          break
        default:
          throw new Error("Rôle invalide")
      }

      // Appel API pour se connecter
      const loginResponse = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })

      if (!loginResponse.ok) {
        throw new Error(`Erreur HTTP: ${loginResponse.status}`)
      }

      const data = await loginResponse.json()

      // Stocker le token
      localStorage.setItem("token", data.token)

      // Récupérer les informations de l'utilisateur
      let userEndpoint = ""
      switch (role) {
        case "apprenant":
          userEndpoint = `/apprenant/${data.id}`
          break
        case "formateur":
          userEndpoint = `/formateur/${data.id}`
          break
        case "administrateur":
          userEndpoint = `/admin/${data.id}`
          break
      }

      const userResponse = await fetch(`${API_BASE_URL}${userEndpoint}`, {
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
      })

      if (!userResponse.ok) {
        throw new Error(`Erreur HTTP: ${userResponse.status}`)
      }

      const userData = await userResponse.json()

      const userInfo = {
        id: userData.id || userData.id_apprenant || userData.id_formateur || userData.id_administrateur,
        nom: userData.nom,
        prenom: userData.prenom,
        email: userData.email,
        role: role,
        referentiel: userData.referentiel,
      }

      localStorage.setItem("user", JSON.stringify(userInfo))
      setUser(userInfo)

      return true
    } catch (error) {
      console.error("Login error:", error)
      return false
    } finally {
      setLoading(false)
    }
  }

  const logout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    setUser(null)
    router.push("/login")
  }

  return <AuthContext.Provider value={{ user, loading, login, logout }}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
