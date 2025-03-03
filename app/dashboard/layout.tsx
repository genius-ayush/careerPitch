"use client"

import type React from "react"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import DashboardSidebar from "@/components/dashboard-sidebar"
import { SidebarProvider } from "@/components/ui/sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()

  

  return (
      <div className="flex min-h-screen">
        <SidebarProvider>
        <DashboardSidebar/>
        <main className="flex-1">{children}</main>
        </SidebarProvider>
      </div>
  )
}

