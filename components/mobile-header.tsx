"use client"

import Link from "next/link"
import { useTheme } from "next-themes"
import { Search, Moon, Sun, User, Sparkles, LogOut } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { signOut, useSession } from "next-auth/react"

export function MobileHeader() {
  const { setTheme, theme } = useTheme()
  const session = useSession();

  const handleLogout = () => {
    signOut();
  }
  return (
    <div className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between h-16 px-4 border-b bg-black/80 backdrop-blur-sm border-white/10">
      <Link href="/" className="flex items-center gap-2 flex-1 text-white">
        <Sparkles className="h-6 w-6" />
        <span className="font-bold text-xl ">CareerPitch</span>
      </Link>

      <div className="flex items-center gap-2">


        <Button
          variant="ghost"
          size="icon"
          className="text-white/70"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-2 h-auto ">
              <Avatar className="h-8 w-8">

                {session.data?.user?.image && <AvatarImage src={session.data?.user?.image} alt="User" />}
                <AvatarFallback>AR</AvatarFallback>
              </Avatar>
              
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <div className="flex flex-col justify-center ml-2 mb-3">
            <div className="text-sm font-light">{session.data?.user?.name}</div>
            <div className="text-sm font-light">{session.data?.user?.email}</div></div>
              {/* <DropdownMenuItem className="">
                <span>Profile</span>
              </DropdownMenuItem> */}
              <DropdownMenuItem>
                <span>Settings</span>
              </DropdownMenuItem>

            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}

