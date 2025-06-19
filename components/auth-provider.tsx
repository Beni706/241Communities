"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { useRouter } from "next/navigation"
import { setupSessionPersistence } from "../lib/session-persistence"

type User = {
  id: number
  nom: string
  prenom: string
  email: string
  role: "apprenant" | "formateur" | "administrateur"
  referentiel?: "DEVELOPPEUR" | "DIGITAL_CREATOR" | "REFERENT_DIGITAL"
  photoProfil?: string | null
}

type AuthContextType = {
  user: User | null
  loading: boolean
  login: (email: string, password: string, role: string) => Promise<void>
  logout: () => void
  setUser: (user: User | null) => void // Exposer setUser
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL

  // Mettre en place la persistance de session
  useEffect(() => {
    setupSessionPersistence()
  }, [])

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem("token")
    const storedUser = localStorage.getItem("user")
    console.log("[AuthProvider] token:", token, "storedUser:", storedUser)
    if (token && storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser)
        console.log("[AuthProvider] parsedUser:", parsedUser)
        // Vérification basique que l'objet parsé a les propriétés attendues
        if (
          parsedUser &&
          typeof parsedUser.id === "number" &&
          typeof parsedUser.email === "string" &&
          typeof parsedUser.role === "string"
          // photoProfil est optionnel, donc pas de vérification stricte ici
        ) {
          setUser(parsedUser as User)
        } else {
          console.warn("Données utilisateur stockées invalides:", parsedUser)
          // Ne pas supprimer les tokens/user pour éviter les déconnexions indésirables
          setUser(null)
        }
      } catch (error) {
        console.error("Erreur lors du parsing de l'utilisateur depuis localStorage:", error)
        // Ne pas supprimer les tokens/user pour éviter les déconnexions indésirables
        setUser(null)
      }
    } else {
      setUser(null)
    }
    setLoading(false)
  }, [])

  const login = async (email: string, password: string, role: string): Promise<void> => {
    setLoading(true)
    try {
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
        let errorMessage = `Erreur de connexion: ${loginResponse.status}`
        try {
          const errorData = await loginResponse.json()
          if (errorData && errorData.message) {
            errorMessage = errorData.message
          }
        } catch (e) {
          // Ignorer l'erreur de parsing JSON, le message d'erreur HTTP sera utilisé
        }
        throw new Error(errorMessage)
      }

      const data = await loginResponse.json()

      if (!data.token || !data.id) {
        throw new Error("Réponse de l'API de connexion invalide: token ou ID manquant.")
      }

      // Stockage du token avec un nom spécifique au rôle
      localStorage.setItem("token", data.token)

      // Stocker également un token spécifique au rôle pour éviter les conflits
      if (role === "formateur") {
        localStorage.setItem("formateurToken", data.token)
      } else if (role === "administrateur") {
        localStorage.setItem("adminToken", data.token)
      } else if (role === "apprenant") {
        localStorage.setItem("apprenantToken", data.token)
      }

      // Créer l'objet userInfo directement à partir des données de la réponse
      let userInfo: User = {
        id: data.id,
        nom: "",
        prenom: "",
        email: email,
        role: role as User["role"],
        referentiel: undefined,
        photoProfil: undefined,
      }

      if (role === "formateur") {
        try {
          const userResponse = await fetch(`${API_BASE_URL}/formateur/${data.id}`, {
            headers: { Authorization: `Bearer ${data.token}` },
          })
          if (userResponse.ok) {
            const userData = await userResponse.json()
            userInfo = {
              id: userData.id_formateur,
              nom: userData.nom,
              prenom: userData.prenom,
              email: userData.email,
              role: "formateur",
              referentiel: userData.referentiel,
              photoProfil: userData.photoProfil || null,
            }
          }
        } catch (e) {
          // fallback: garder userInfo minimal
        }
      } else if (role === "apprenant") {
        try {
          const userResponse = await fetch(`${API_BASE_URL}/apprenant/${data.id}`, {
            headers: { Authorization: `Bearer ${data.token}` },
          })
          if (userResponse.ok) {
            const userData = await userResponse.json()
            userInfo = {
              id: userData.id_apprenant,
              nom: userData.nom,
              prenom: userData.prenom,
              email: userData.email,
              role: "apprenant",
              referentiel: userData.referentiel,
              photoProfil: userData.photoProfil || null,
            }
          }
        } catch (e) {
          // fallback: garder userInfo minimal
        }
      }

      // Stockage des informations utilisateur
      localStorage.setItem("user", JSON.stringify(userInfo))

      // Mise à jour de l'état user
      setUser(userInfo)

      // Redirection basée sur le rôle
      if (role === "formateur") {
        window.location.href = "/formateur/dashboard"
      } else if (role === "administrateur") {
        window.location.href = "/admin/dashboard"
      } else if (role === "apprenant") {
        window.location.href = "/apprenant/dashboard"
      }
    } catch (error: any) {
      console.error("Login error:", error)
      // Nettoyer en cas d'erreur partielle
      localStorage.removeItem("token")
      localStorage.removeItem("formateurToken")
      localStorage.removeItem("adminToken")
      localStorage.removeItem("apprenantToken")
      localStorage.removeItem("user")
      setUser(null)
      throw error
    } finally {
      setLoading(false)
    }
  }

  // Modifier la fonction logout pour supprimer tous les tokens
  const logout = () => {
    // Récupérer le rôle de l'utilisateur avant de supprimer les données
    const userRole = user?.role === "administrateur" ? "administrateur" : user?.role || "apprenant"

    localStorage.removeItem("token")
    localStorage.removeItem("formateurToken")
    localStorage.removeItem("adminToken")
    localStorage.removeItem("apprenantToken")
    localStorage.removeItem("user")
    setUser(null)

    // Rediriger vers la page de connexion spécifique au rôle
    const redirectPath = userRole === "administrateur" ? "/login/administrateur" : `/login/${userRole}`
    window.location.href = redirectPath
  }

  return <AuthContext.Provider value={{ user, loading, login, logout, setUser }}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
