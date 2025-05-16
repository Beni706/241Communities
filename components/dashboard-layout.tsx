"use client"

import type React from "react"

import { type ReactNode, useState, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import { useAuth } from "@/components/auth-provider"
import { Button } from "@/components/ui/button"
import { BookOpen, FileText, Home, LogOut, Menu, User, Users, X, BarChart } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { NotificationBell } from "@/components/notification-bell"

type NavItem = {
  title: string
  href: string
  icon: React.ElementType
}

type Props = {
  children: ReactNode
}

export default function DashboardLayout({ children }: Props) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const { user, logout } = useAuth()
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    // Check if user is logged in
    if (!user) {
      router.push("/login")
    }
  }, [user, router])

  if (!user) {
    return null
  }

  // Define navigation items based on user role
  let navItems: NavItem[] = []

  if (user.role === "apprenant") {
    navItems = [
      { title: "Tableau de bord", href: "/apprenant/dashboard", icon: Home },
      { title: "Mes cours", href: "/apprenant/cours", icon: BookOpen },
      { title: "Mes veilles", href: "/apprenant/veilles", icon: FileText },
      { title: "Mon profil", href: "/apprenant/profil", icon: User },
    ]
  } else if (user.role === "formateur") {
    navItems = [
      { title: "Tableau de bord", href: "/formateur/dashboard", icon: Home },
      { title: "Mes cours", href: "/formateur/cours", icon: BookOpen },
      { title: "Mes veilles", href: "/formateur/veilles", icon: FileText },
      { title: "Mes apprenants", href: "/formateur/apprenants", icon: Users },
      { title: "Mon profil", href: "/formateur/profil", icon: User },
    ]
  } else if (user.role === "administrateur") {
    navItems = [
      { title: "Tableau de bord", href: "/admin/dashboard", icon: BarChart },
      { title: "Apprenants", href: "/admin/apprenants", icon: Users },
      { title: "Formateurs", href: "/admin/formateurs", icon: Users },
      { title: "Cours", href: "/admin/cours", icon: BookOpen },
      { title: "Veilles", href: "/admin/veilles", icon: FileText },
    ]
  }

  return (
    <div className="min-h-screen bg-muted/10 flex flex-col">
      {/* Mobile Header */}
      <header className="bg-white border-b h-16 flex items-center justify-between px-4 lg:hidden">
        <div className="flex items-center gap-2">
          <span className="font-bold">école {241}</span>
        </div>

        <div className="flex items-center gap-2">
          <NotificationBell />
          <Button variant="ghost" size="icon" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            {isSidebarOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside
          className={cn(
            "fixed top-0 left-0 z-40 h-screen w-64 bg-white border-r transition-transform lg:translate-x-0 lg:static",
            isSidebarOpen ? "translate-x-0" : "-translate-x-full",
          )}
        >
          <div className="h-16 border-b flex items-center px-4 gap-2 lg:justify-center">
            <span className="font-bold">école {241}</span>
          </div>

          <div className="p-4">
            <div className="mb-6">
              <div className="flex items-center gap-2 p-2 rounded-lg bg-muted">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-bold text-primary">
                    {user.prenom.charAt(0)}
                    {user.nom.charAt(0)}
                  </span>
                </div>
                <div className="overflow-hidden">
                  <p className="font-medium truncate">
                    {user.prenom} {user.nom}
                  </p>
                  <p className="text-xs text-muted-foreground truncate capitalize">{user.role}</p>
                </div>
              </div>
            </div>

            <nav className="space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-md text-sm",
                    pathname === item.href ? "bg-primary text-white" : "text-muted-foreground hover:bg-muted",
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.title}</span>
                </Link>
              ))}

              <button
                onClick={logout}
                className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm text-muted-foreground hover:bg-muted"
              >
                <LogOut className="h-4 w-4" />
                <span>Déconnexion</span>
              </button>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          {/* Desktop Header */}
          <div className="h-16 border-b bg-white hidden lg:flex items-center justify-end px-8">
            <NotificationBell />
          </div>

          {/* Content */}
          <div className="p-4 lg:p-8">{children}</div>
        </main>
      </div>
    </div>
  )
}
