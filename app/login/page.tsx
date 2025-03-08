"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkles } from "lucide-react"
import { signIn, useSession } from "next-auth/react"

export default function LoginPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const {data :session , status} = useSession() ; 

  useEffect(()=>{
    if(status == 'unauthenticated'){
      router.push("/")
    }
  } , [status , router]) ;

  const handleGoogleLogin = async () => {
    setIsLoading(true)
    signIn() ; 
    localStorage.setItem("isAuthenticated", "true")
    // Redirect to dashboard after successful login
    router.push("/dashboard")
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-[#0f0f0f]">
      <Card className="w-[350px]">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">
            <Sparkles className="h-6 w-6 inline-block mr-2" />
            CareerPitch
          </CardTitle>
          <CardDescription>Sign in to your account</CardDescription>
        </CardHeader>
        <CardContent>
          <Button className="w-full" onClick={handleGoogleLogin} disabled={isLoading}>
            {isLoading ? "Signing in..." : "Sign in with Google"}
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

