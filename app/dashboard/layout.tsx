"use client"

import type React from "react"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import DashboardSidebar from "@/components/dashboard-sidebar"
import { SidebarProvider } from "@/components/ui/sidebar"
import { useSession } from "next-auth/react"
import { MobileHeader } from "@/components/mobile-header"
import { MobileBottomNav } from "@/components/mobile-bottom-nav"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()

  const session =  useSession() ; 

  if(session.data){
    return (
      
        <SidebarProvider>
          <div className="flex min-h-screen">
            <div className="hidden md:block">
              <DashboardSidebar/>
            </div>

            <div className="md:hidden">
              <MobileHeader/>
            </div>

            
              <main className="flex-1 pt-16 pb-16 md:pt-0 md:pb-0 md:ml-80  ">{children}</main>
              <MobileBottomNav/>
          </div>

        </SidebarProvider>
    
  )
  }else{
    return <p>Access Denied</p>
  }
  
}

