import type React from "react"
import DashboardLayout from "@/components/dashboard-layout"

export default function FormateurLayout({ children }: { children: React.ReactNode }) {
  return <DashboardLayout userRole="formateur">{children}</DashboardLayout>
}
