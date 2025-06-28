"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar"
import { Building2, Calendar, Users, Scissors, BarChart3, Clock, Star, Settings, LogOut, User } from "lucide-react"

interface AppSidebarEmployeeProps {
  activeTab: string
  onTabChange: (tab: string) => void
  onOpenModal: (modal: string) => void
  onLogout: () => void
}

export function AppSidebarEmployee({ activeTab, onTabChange, onOpenModal, onLogout }: AppSidebarEmployeeProps) {
  const menuItems = [
    {
      title: "Panel Principal",
      items: [
        { title: "Dashboard", action: () => onOpenModal("statistics"), icon: BarChart3 },
        { title: "Mi Calendario", action: () => onTabChange("calendar"), icon: Calendar },
        { title: "Citas de Hoy", action: () => onOpenModal("appointment"), icon: Clock },
      ],
    },
    {
      title: "Gestión",
      items: [
        { title: "Mis Servicios", action: () => onTabChange("services"), icon: Scissors },
        { title: "Mis Clientes", action: () => onTabChange("clients"), icon: Users },
        { title: "Horarios", action: () => onTabChange("calendar"), icon: Clock },
      ],
    },
    {
      title: "Reportes",
      items: [
        { title: "Mis Estadísticas", action: () => onOpenModal("statistics"), icon: BarChart3 },
        { title: "Calificaciones", action: () => onTabChange("reports"), icon: Star },
      ],
    },
    {
      title: "Configuración",
      items: [
        { title: "Mi Perfil", action: () => onOpenModal("settings"), icon: User },
        { title: "Configuración", action: () => onOpenModal("settings"), icon: Settings },
      ],
    },
  ]

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center space-x-2 px-4 py-2">
          <Building2 className="h-6 w-6 text-blue-600" />
          <span className="font-semibold text-lg">Panel Empleado</span>
        </div>
      </SidebarHeader>

      <SidebarContent>
        {menuItems.map((group) => (
          <SidebarGroup key={group.title}>
            <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      onClick={item.action}
                      className="cursor-pointer hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={onLogout}
              className="cursor-pointer hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            >
              <LogOut className="h-4 w-4" />
              <span>Cerrar Sesión</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
