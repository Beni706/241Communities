"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { useAuth } from "@/components/auth-provider"
import type { Notification } from "@/types/notification"

type NotificationContextType = {
  notifications: Notification[]
  unreadCount: number
  loading: boolean
  error: string | null
  markAsRead: (id: number) => Promise<void>
  markAllAsRead: () => Promise<void>
  refreshNotifications: () => Promise<void>
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined)

export function NotificationProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth()
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchNotifications = async () => {
    if (!user) return

    setLoading(true)
    setError(null)

    try {
      const token = localStorage.getItem("token")
      if (!token) return

      const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api"
      const response = await fetch(`${API_BASE_URL}/notifications?userId=${user.id}&role=${user.role}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`)
      }

      const data = await response.json()
      setNotifications(data)
    } catch (err) {
      console.error("Erreur lors de la récupération des notifications:", err)
      setError("Impossible de charger les notifications")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (user) {
      fetchNotifications()

      // Rafraîchir les notifications toutes les 5 minutes
      const interval = setInterval(fetchNotifications, 5 * 60 * 1000)

      return () => clearInterval(interval)
    }
  }, [user])

  const markAsRead = async (id: number) => {
    try {
      const token = localStorage.getItem("token")
      if (!token) return

      const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api"
      const response = await fetch(`${API_BASE_URL}/notifications/${id}/read`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({}),
      })

      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`)
      }

      setNotifications(notifications.map((notif) => (notif.id === id ? { ...notif, isRead: true } : notif)))
    } catch (err) {
      console.error("Erreur lors du marquage de la notification comme lue:", err)
      setError("Impossible de marquer la notification comme lue")
    }
  }

  const markAllAsRead = async () => {
    if (!user) return

    try {
      const token = localStorage.getItem("token")
      if (!token) return

      const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api"
      const response = await fetch(`${API_BASE_URL}/notifications/read-all`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ userId: user.id, role: user.role }),
      })

      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`)
      }

      setNotifications(notifications.map((notif) => ({ ...notif, isRead: true })))
    } catch (err) {
      console.error("Erreur lors du marquage de toutes les notifications comme lues:", err)
      setError("Impossible de marquer toutes les notifications comme lues")
    }
  }

  const refreshNotifications = fetchNotifications

  const unreadCount = notifications.filter((notif) => !notif.isRead).length

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        unreadCount,
        loading,
        error,
        markAsRead,
        markAllAsRead,
        refreshNotifications,
      }}
    >
      {children}
    </NotificationContext.Provider>
  )
}

export const useNotifications = () => {
  const context = useContext(NotificationContext)
  if (context === undefined) {
    throw new Error("useNotifications must be used within a NotificationProvider")
  }
  return context
}
