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
import {
  Shield,
  Users,
  Building2,
  BarChart3,
  Settings,
  Calendar,
  FileText,
  Database,
  UserCheck,
  LogOut,
} from "lucide-react"

interface AppSidebarAdminProps {
  activeTab: string
  onTabChange: (tab: string) => void
  onOpenModal: (modal: string) => void
  onLogout: () => void
}

export function AppSidebarAdmin({ activeTab, onTabChange, onOpenModal, onLogout }: AppSidebarAdminProps) {
  const menuItems = [
    {
      title: "Panel Principal",
      items: [
        { title: "Dashboard", action: () => onOpenModal("statistics"), icon: BarChart3 },
        { title: "Calendario", action: () => onTabChange("calendar"), icon: Calendar },
      ],
    },
    {
      title: "Gestión",
      items: [
        { title: "Usuarios", action: () => onTabChange("users"), icon: Users },
        { title: "Empresas", action: () => onTabChange("companies"), icon: Building2 },
        { title: "Empleados", action: () => onOpenModal("userManagement"), icon: UserCheck },
      ],
    },
    {
      title: "Reportes",
      items: [
        { title: "Estadísticas", action: () => onOpenModal("statistics"), icon: BarChart3 },
        { title: "Reportes", action: () => onTabChange("reports"), icon: FileText },
        { title: "Base de Datos", action: () => onOpenModal("userManagement"), icon: Database },
      ],
    },
    {
      title: "Sistema",
      items: [{ title: "Configuración", action: () => onOpenModal("settings"), icon: Settings }],
    },
  ]

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center space-x-2 px-4 py-2">
          <Shield className="h-6 w-6 text-red-600" />
          <span className="font-semibold text-lg">Admin Panel</span>
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
