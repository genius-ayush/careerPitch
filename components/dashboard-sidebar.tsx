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

export default function DashboardSidebar() {
    const pathname = usePathname()
    const router = useRouter()

    const handleLogout = () => {
        // Clear authentication state
        // localStorage.removeItem("isAuthenticated")g
        // Redirect to landing page
        router.push("/")
    }

    return (
        <Sidebar className="w-72">
            <SidebarHeader className="flex items-center px-4 py-6 border-b-1">
                <Link href="/landing" className="flex items-center gap-2 flex-1">
                    <Sparkles className="h-6 w-6" />
                    <span className="font-bold text-xl">CareerPitch</span>
                </Link>

            </SidebarHeader>

            <SidebarContent className="py-5">
                <SidebarGroup>
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

                <SidebarSeparator className="my-4" />

                <SidebarGroup >
                    <SidebarGroupLabel>Recent Messages</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu >          
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <Link href="/dashboard/messages/msg-1">
                                        <span>Frontend Developer at Google</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <Link href="/dashboard/messages/msg-2">
                                                <span>UX Designer at Microsoft</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <div className="p-4 space-y-4">
                    <Button className="w-full" asChild>
                        <Link href="/dashboard">
                            <PlusCircle className="mr-2 h-4 w-4" />
                            <span>New Message</span>
                        </Link>
                    </Button>

                    <div className="flex items-center justify-between">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="flex items-center gap-2 h-auto p-2">
                                    <Avatar className="h-8 w-8">
                                        <AvatarImage src="/placeholder.svg" alt="User" />
                                        <AvatarFallback>JD</AvatarFallback>
                                    </Avatar>
                                    <div className="flex flex-col items-start text-sm">
                                        <span className="font-medium">John Doe</span>
                                        <span className="text-xs text-muted-foreground">john.doe@example.com</span>
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

