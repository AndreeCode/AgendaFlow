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
import { User, Calendar, Search, Heart, History, Star, MapPin, Settings, LogOut, Plus } from "lucide-react"

interface AppSidebarClientProps {
  activeTab: string
  onTabChange: (tab: string) => void
  onOpenModal: (modal: string) => void
  onLogout: () => void
}

export function AppSidebarClient({ activeTab, onTabChange, onOpenModal, onLogout }: AppSidebarClientProps) {
  const menuItems = [
    {
      title: "Panel Principal",
      items: [
        { title: "Mi Dashboard", action: () => onTabChange("appointments"), icon: User },
        { title: "Reservar Cita", action: () => onOpenModal("appointment"), icon: Plus },
        { title: "Mis Citas", action: () => onTabChange("appointments"), icon: Calendar },
      ],
    },
    {
      title: "Explorar",
      items: [
        { title: "Buscar Servicios", action: () => onTabChange("businesses"), icon: Search },
        { title: "Cerca de Mí", action: () => onTabChange("businesses"), icon: MapPin },
        { title: "Favoritos", action: () => onTabChange("businesses"), icon: Heart },
      ],
    },
    {
      title: "Historial",
      items: [
        { title: "Citas Anteriores", action: () => onTabChange("history"), icon: History },
        { title: "Mis Reseñas", action: () => onTabChange("history"), icon: Star },
      ],
    },
    {
      title: "Configuración",
      items: [
        { title: "Mi Perfil", action: () => onTabChange("profile"), icon: User },
        { title: "Preferencias", action: () => onOpenModal("settings"), icon: Settings },
      ],
    },
  ]

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center space-x-2 px-4 py-2">
          <User className="h-6 w-6 text-green-600" />
          <span className="font-semibold text-lg">Mi Panel</span>
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
