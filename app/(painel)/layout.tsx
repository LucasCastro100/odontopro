"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import {
  LayoutDashboard,
  Users,
  Calendar,
  ChevronLeft,
  Stethoscope,
  DollarSign,
} from "lucide-react"
import Main from "@/components/main"
import { UserMenu } from "./_components/user-menu"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"


const menuItems = [
  {
    label: "Principal",
    items: [
      { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
      { icon: Stethoscope, label: "Serviços", href: "/dashboard/services" },
      { icon: Users, label: "Pacientes", href: "/dashboard/pacientes" },
      { icon: Calendar, label: "Agenda", href: "/dashboard/agenda" },
      { icon: DollarSign, label: "Planos", href: "/dashboard/plan" },
    ],
  },
  {
    label: "Navegação",
    items: [
      { icon: ChevronLeft, label: "Voltar ao site", href: "/" },
    ],
  },
]

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const router = useRouter()

  return (
    <SidebarProvider>
      <Sidebar collapsible="icon">
        <SidebarHeader className="flex items-center justify-center">
          <Link href="/" className="flex items-center justify-center">
            <img src="/logo-odonto.png" alt="OdontoPro" className="h-10 w-auto" />
          </Link>
        </SidebarHeader>

        <SidebarContent>
          {menuItems.map((group) => (
            <SidebarGroup key={group.label}>
              <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {group.items.map((item) => (
                    <SidebarMenuItem key={item.href}>
                      <SidebarMenuButton
                        isActive={pathname === item.href}
                        onClick={() => router.push(item.href)}
                        tooltip={item.label}
                      >
                        <item.icon className="h-4 w-4" />
                        <span>{item.label}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
        </SidebarContent>

        <SidebarFooter className="p-2">
          <SidebarMenu>
            <SidebarMenuItem>
              <UserMenu />
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>

      <div className="flex flex-1 flex-col">
        <header className="flex items-center border-b-4 border-sidebar-border bg-sidebar" style={{ height: "55px" }}>
          <SidebarTrigger />
        </header>
        <Main>
          {children}
        </Main>
      </div>
    </SidebarProvider>
  )
}
