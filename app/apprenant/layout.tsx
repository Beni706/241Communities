import type React from "react"
import DashboardLayout from "@/components/dashboard-layout"

export default function ApprenantLayout({ children }: { children: React.ReactNode }) {
  return <DashboardLayout userRole="apprenant">{children}</DashboardLayout>
}
