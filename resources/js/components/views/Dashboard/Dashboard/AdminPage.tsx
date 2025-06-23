"use client"

import { useState, useEffect } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebarAdmin } from "@/components/layouts/app-sidebar-admin";
import { CalendarView } from "@/components/layouts/calendar-view"
import { AppointmentModal } from "@/components/layouts/modals/appointment-modal"
import { UserManagementModal } from "@/components/layouts/modals/user-management-modal"
import { StatisticsModal } from "@/components/layouts/modals/statistics-modal"
import { SettingsModal } from "@/components/layouts/modals/settings-modal"
import {
  Users,
  Building2,
  Calendar,
  LogOut,
  Search,
  Plus,
  Edit,
  Trash2,
  Shield,
  TrendingUp,
  BarChart3,
  Settings,
} from "lucide-react"
import AuthUser from "@/Auth/AuthUser"
import Config from "@/Config"

export default function AdminPage(){

  const {getLogout, getToken}=AuthUser();
  const [activeTab, setActiveTab] = useState("calendar")
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false)
  const [userManagementModalOpen, setUserManagementModalOpen] = useState(false)
  const [statisticsModalOpen, setStatisticsModalOpen] = useState(false)
  const [settingsModalOpen, setSettingsModalOpen] = useState(false)


  useEffect(() => {
    
  }, [])

  const handleLogout = () => {
    Config.getLogout().then(response=>{
      getLogout();
    });
  }
  const renderLinks =()=>{
    if(getToken()){
      return (
        <>
          <Button variant="outline" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                Cerrar Sesión
          </Button>
        </>
      );
    }
  }

  const handleOpenModal = (modal: string) => {
    switch (modal) {
      case "appointment":
        setAppointmentModalOpen(true)
        break
      case "userManagement":
        setUserManagementModalOpen(true)
        break
      case "statistics":
        setStatisticsModalOpen(true)
        break
      case "settings":
        setSettingsModalOpen(true)
        break
    }
  }



  // Datos simulados
  const stats = [
    { title: "Total Usuarios", value: "1,234", icon: Users, color: "text-blue-600" },
    { title: "Empresas Activas", value: "89", icon: Building2, color: "text-green-600" },
    { title: "Citas Hoy", value: "156", icon: Calendar, color: "text-purple-600" },
    { title: "Ingresos Mes", value: "$12,450", icon: TrendingUp, color: "text-orange-600" },
  ]

  const users = [
    { id: 1, name: "Juan Pérez", email: "juan@ejemplo.com", role: "client", status: "active", lastLogin: "2024-01-15" },
    {
      id: 2,
      name: "María García",
      email: "maria@empresa.com",
      role: "employee",
      status: "active",
      lastLogin: "2024-01-14",
    },
    {
      id: 3,
      name: "Carlos López",
      email: "carlos@cliente.com",
      role: "client",
      status: "inactive",
      lastLogin: "2024-01-10",
    },
  ]

  const companies = [
    { id: 1, name: "Salón Bella Vista", owner: "María García", services: 5, appointments: 23, status: "active" },
    { id: 2, name: "Clínica Dental Sonrisa", owner: "Dr. Rodríguez", services: 8, appointments: 45, status: "active" },
    { id: 3, name: "Spa Relajación", owner: "Ana Martínez", services: 12, appointments: 18, status: "pending" },
  ]

  return (
    <div>
    <h1>hola</h1>
    <SidebarProvider>
      <AppSidebarAdmin
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onOpenModal={handleOpenModal}
        onLogout={handleLogout}
      />
      <SidebarInset>
        {/* Header */}
        <header className="bg-white border-b">
          <div className="px-6 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <SidebarTrigger />
              <div className="flex items-center space-x-2">
                <Shield className="h-6 w-6 text-red-600" />
                <div>
                  <h1 className="text-xl font-bold text-gray-900">Panel de Administración</h1>
                  <p className="text-sm text-gray-600">Bienvenido,hola { }</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" onClick={() => setStatisticsModalOpen(true)}>
                <BarChart3 className="h-4 w-4 mr-2" />
                Estadísticas
              </Button>
              <Button variant="outline" onClick={() => setSettingsModalOpen(true)}>
                <Settings className="h-4 w-4 mr-2" />
                Configuración
              </Button>
              {renderLinks()}
            </div>
          </div>
        </header>

        <div className="p-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => setStatisticsModalOpen(true)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                      <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                    </div>
                    <stat.icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Content */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="calendar">Calendario</TabsTrigger>
              <TabsTrigger value="users">Usuarios</TabsTrigger>
              <TabsTrigger value="companies">Empresas</TabsTrigger>
              <TabsTrigger value="reports">Reportes</TabsTrigger>
              <TabsTrigger value="settings">Configuración</TabsTrigger>
            </TabsList>

            {/* Calendar Tab */}
            <TabsContent value="calendar">
              <CalendarView onNewAppointment={() => setAppointmentModalOpen(true)} />
            </TabsContent>

            {/* Users Tab */}
            <TabsContent value="users">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle>Gestión de Usuarios</CardTitle>
                      <CardDescription>Administra todos los usuarios del sistema</CardDescription>
                    </div>
                    <div className="flex space-x-2">
                      <Button onClick={() => setUserManagementModalOpen(true)}>
                        <Users className="h-4 w-4 mr-2" />
                        Gestión Avanzada
                      </Button>
                      <Button>
                        <Plus className="h-4 w-4 mr-2" />
                        Nuevo Usuario
                      </Button>
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input placeholder="Buscar usuarios..." className="pl-10" />
                    </div>
                    <Select>
                      <SelectTrigger className="w-48">
                        <SelectValue placeholder="Filtrar por rol" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Todos</SelectItem>
                        <SelectItem value="admin">Administradores</SelectItem>
                        <SelectItem value="employee">Empleados</SelectItem>
                        <SelectItem value="client">Clientes</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Usuario</TableHead>
                        <TableHead>Rol</TableHead>
                        <TableHead>Estado</TableHead>
                        <TableHead>Último Acceso</TableHead>
                        <TableHead>Acciones</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {users.map((user) => (
                        <TableRow key={user.id}>
                          <TableCell>
                            <div>
                              <p className="font-medium">{user.name}</p>
                              <p className="text-sm text-gray-600">{user.email}</p>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge
                              variant={
                                user.role === "admin"
                                  ? "destructive"
                                  : user.role === "employee"
                                    ? "default"
                                    : "secondary"
                              }
                            >
                              {user.role === "admin" ? "Admin" : user.role === "employee" ? "Empleado" : "Cliente"}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Badge variant={user.status === "active" ? "default" : "secondary"}>
                              {user.status === "active" ? "Activo" : "Inactivo"}
                            </Badge>
                          </TableCell>
                          <TableCell>{user.lastLogin}</TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Button size="sm" variant="outline">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button size="sm" variant="outline">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Companies Tab */}
            <TabsContent value="companies">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle>Gestión de Empresas</CardTitle>
                      <CardDescription>Administra las empresas registradas</CardDescription>
                    </div>
                    <Button>
                      <Plus className="h-4 w-4 mr-2" />
                      Nueva Empresa
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Empresa</TableHead>
                        <TableHead>Propietario</TableHead>
                        <TableHead>Servicios</TableHead>
                        <TableHead>Citas</TableHead>
                        <TableHead>Estado</TableHead>
                        <TableHead>Acciones</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {companies.map((company) => (
                        <TableRow key={company.id}>
                          <TableCell className="font-medium">{company.name}</TableCell>
                          <TableCell>{company.owner}</TableCell>
                          <TableCell>{company.services}</TableCell>
                          <TableCell>{company.appointments}</TableCell>
                          <TableCell>
                            <Badge variant={company.status === "active" ? "default" : "secondary"}>
                              {company.status === "active" ? "Activa" : "Pendiente"}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Button size="sm" variant="outline">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button size="sm" variant="outline">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Reports Tab */}
            <TabsContent value="reports">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card
                  className="cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => setStatisticsModalOpen(true)}
                >
                  <CardHeader>
                    <CardTitle>Estadísticas de Uso</CardTitle>
                    <CardDescription>Métricas generales del sistema</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span>Usuarios Activos</span>
                        <span className="font-bold">89%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Citas Completadas</span>
                        <span className="font-bold">94%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Satisfacción Cliente</span>
                        <span className="font-bold">4.8/5</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card
                  className="cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => setStatisticsModalOpen(true)}
                >
                  <CardHeader>
                    <CardTitle>Ingresos Mensuales</CardTitle>
                    <CardDescription>Resumen financiero</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span>Enero 2024</span>
                        <span className="font-bold text-green-600">$12,450</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Diciembre 2023</span>
                        <span className="font-bold">$11,200</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Crecimiento</span>
                        <span className="font-bold text-green-600">+11.2%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Settings Tab */}
            <TabsContent value="settings">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card
                  className="cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => setSettingsModalOpen(true)}
                >
                  <CardHeader>
                    <CardTitle>Configuración General</CardTitle>
                    <CardDescription>Ajustes del sistema</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Nombre del Sistema</label>
                      <Input defaultValue="CitasPro" disabled />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email de Contacto</label>
                      <Input defaultValue="admin@citaspro.com" disabled />
                    </div>
                    <Button onClick={() => setSettingsModalOpen(true)}>
                      <Settings className="h-4 w-4 mr-2" />
                      Configuración Avanzada
                    </Button>
                  </CardContent>
                </Card>

                <Card
                  className="cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => setSettingsModalOpen(true)}
                >
                  <CardHeader>
                    <CardTitle>Configuración de Seguridad</CardTitle>
                    <CardDescription>Políticas de seguridad</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Tiempo de Sesión (minutos)</label>
                      <Input defaultValue="60" type="number" disabled />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Intentos de Login</label>
                      <Input defaultValue="3" type="number" disabled />
                    </div>
                    <Button onClick={() => setSettingsModalOpen(true)}>
                      <Shield className="h-4 w-4 mr-2" />
                      Configuración de Seguridad
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Modals */}
        <AppointmentModal open={appointmentModalOpen} onOpenChange={setAppointmentModalOpen} />
        <UserManagementModal open={userManagementModalOpen} onOpenChange={setUserManagementModalOpen} />
        <StatisticsModal open={statisticsModalOpen} onOpenChange={setStatisticsModalOpen} />
        <SettingsModal open={settingsModalOpen} onOpenChange={setSettingsModalOpen} />
      </SidebarInset>
    </SidebarProvider>
    </div>
  )
}