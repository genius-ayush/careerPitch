"use client"
import { ThemeProvider } from "@/components/ui/theme-provider"
import { ScrollProvider } from "@/contexts/scroll-context"
import { SessionProvider } from "next-auth/react"
import { ReactNode } from "react"

function Providers({children}:{children: ReactNode}) {
  return (
    <ThemeProvider
    attribute="class"
    defaultTheme="system"
    enableSystem
    disableTransitionOnChange
    >
    <SessionProvider>
            {/* <ScrollProvider> */}
        {children}
    {/* </ScrollProvider> */}
    </SessionProvider>
    </ThemeProvider>
  )
}

export default Providers