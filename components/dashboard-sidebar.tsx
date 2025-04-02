"use client"

import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { LayoutDashboard, MessageSquare, Settings, Users, PlusCircle, Sparkles, LogOut } from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarSeparator,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarGroupContent,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ScrollArea } from "./ui/scroll-area"
import { Separator } from "./ui/separator"
import { signOut, useSession } from "next-auth/react"
import { useEffect, useState } from "react"
import axios from "axios"

export default function DashboardSidebar() {
    const pathname = usePathname()
    const router = useRouter()
    const session = useSession() ; 
    const [messages, setMessages] = useState<any[]>([])

    useEffect(() => {
        const fetchData = async()=>{
          try{
            const response = await axios.get("/api/messages",{withCredentials:true})
            console.log(response.data) ; 
            setMessages(response.data) ;
            console.log(messages) ; 
          }catch(error){
            console.error("Error fetching data" , error) ; 
          }
        }
    
        fetchData() ;
        
      }, [])


    const handleLogout = () => {
        signOut() ;
        router.push("/")
    }

    return (
        <Sidebar className="w-72 ">
            <SidebarHeader className="flex items-center px-4 py-6 border-b-1">
                <Link href="/" className="flex items-center gap-2 flex-1">
                    <Sparkles className="h-6 w-6" />
                    <span className="font-bold text-xl">CareerPitch</span>
                </Link>

            </SidebarHeader>


            <SidebarGroup className="border-b-1 pt-10 pb-10">
                <SidebarGroupContent>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton asChild isActive={pathname === "/dashboard"}>
                                <Link href="/dashboard" className="flex items-center w-full">
                                    <LayoutDashboard className="mr-2 h-4 w-4" />
                                    <span>Create Message</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                            <SidebarMenuButton
                                asChild
                                isActive={pathname === "/dashboard/messages" || pathname.startsWith("/dashboard/messages/")}
                            >
                                <Link href="/dashboard/messages" className="flex items-center w-full">
                                    <MessageSquare className="mr-2 h-4 w-4" />
                                    <span>Messages</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                            <SidebarMenuButton asChild>
                                <Link href="/dashboard/settings" className="flex items-center w-full">
                                    <Settings className="mr-2 h-4 w-4" />
                                    <span>Settings</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>


            <h4 className="mb-4  text-sm leading-none px-4 pt-5">Recent Messages</h4>
            <ScrollArea className="h-96  rounded-md border-b-1 pb-5 ">
                <div className="p-4">
                    
                    {messages.map((message)=>(
                        <div className="text-sm"><Link href={`/dashboard/messages/${message.id}`}>
                        {`${message.role} at ${message.company}`}
                    </Link>
                    <Separator className="my-2" />
                    </div>    
                    ))}

                </div>
            </ScrollArea>
            <SidebarFooter>
                <div className="space-y-4 mt-5">


                    <div className="flex items-center justify-between ">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="flex items-center gap-2 h-auto ">
                                    <Avatar className="h-8 w-8">

                                        {session.data?.user?.image && <AvatarImage src={session.data?.user?.image} alt="User" />}
                                        <AvatarFallback>AR</AvatarFallback>
                                    </Avatar>
                                    <div className="flex flex-col items-start text-sm">
                                        <span className="font-medium">{session.data?.user?.name}</span>
                                        <span className="text-xs text-muted-foreground">{session.data?.user?.email}</span>
                                    </div>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56" align="end">
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuGroup>
                                    <DropdownMenuItem>
                                        <span>Profile</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <span>Settings</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <span className="flex items-center"><p>Theme</p> <ModeToggle /></span>
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
            </SidebarFooter>
        </Sidebar>
    )
}

