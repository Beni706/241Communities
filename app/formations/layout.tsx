"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Header from "@/components/header"

export default function FormationsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="flex min-h-screen flex-col">
     <Header />
      <main className="flex-1">{children}</main>
    </div>
  )
}
