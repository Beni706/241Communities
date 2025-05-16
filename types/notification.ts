// Types pour les notifications

export type NotificationType = "info" | "success" | "warning" | "error"

export interface Notification {
  id: number
  userId: number
  userRole: string
  title: string
  message: string
  type: NotificationType
  isRead: boolean
  link?: string
  createdAt: string
}
