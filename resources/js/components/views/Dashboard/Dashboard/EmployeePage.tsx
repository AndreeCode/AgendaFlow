"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebarEmployee } from "@/components/layouts/app-sidebar-employee"
import { CalendarView } from "@/components/layouts/calendar-view"
import { AppointmentModal } from "@/components/layouts/modals/appointment-modal"
import { StatisticsModal } from "@/components/layouts/modals/statistics-modal"
import { SettingsModal } from "@/components/layouts/modals/settings-modal"
import {
  Building2,
  CalendarIcon,
  Users,
  DollarSign,
  LogOut,
  Plus,
  Edit,
  Trash2,
  Star,
  BarChart3,
  Settings,
} from "lucide-react"

export default function EmployeeDashboard() {
  const [user, setUser] = useState<any>(null)
  const [activeTab, setActiveTab] = useState("calendar")
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false)
  const [statisticsModalOpen, setStatisticsModalOpen] = useState(false)
  const [settingsModalOpen, setSettingsModalOpen] = useState(false)
  

  useEffect(() => {
    
  },)

  const handleLogout = () => {
   
  }

  const handleOpenModal = (modal: string) => {
    switch (modal) {
      case "appointment":
        setAppointmentModalOpen(true)
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
    { title: "Citas Hoy", value: "12", icon: CalendarIcon, color: "text-blue-600" },
    { title: "Clientes Activos", value: "89", icon: Users, color: "text-green-600" },
    { title: "Ingresos Mes", value: "$3,450", icon: DollarSign, color: "text-purple-600" },
    { title: "Calificación", value: "4.8", icon: Star, color: "text-orange-600" },
  ]

  const services = [
    { id: 1, name: "Corte de Cabello", duration: "30 min", price: "$25", active: true },
    { id: 2, name: "Masaje Relajante", duration: "60 min", price: "$45", active: true },
    { id: 3, name: "Manicure", duration: "45 min", price: "$20", active: true },
    { id: 4, name: "Pedicure", duration: "45 min", price: "$25", active: false },
  ]

  const clients = [
    { id: 1, name: "Ana García", email: "ana@email.com", phone: "+1234567890", visits: 15, lastVisit: "2024-01-10" },
    {
      id: 2,
      name: "Carlos López",
      email: "carlos@email.com",
      phone: "+1234567891",
      visits: 8,
      lastVisit: "2024-01-08",
    },
    {
      id: 3,
      name: "María Rodríguez",
      email: "maria@email.com",
      phone: "+1234567892",
      visits: 22,
      lastVisit: "2024-01-12",
    },
  ]

  return (
    <SidebarProvider>
      <AppSidebarEmployee
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
                <Building2 className="h-6 w-6 text-blue-600" />
                <div>
                  <h1 className="text-xl font-bold text-gray-900">Panel Empleado</h1>
                  <p className="text-sm text-gray-600">Bienvenido,usuario</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" onClick={() => setStatisticsModalOpen(true)}>
                <BarChart3 className="h-4 w-4 mr-2" />
                Mis Estadísticas
              </Button>
              <Button variant="outline" onClick={() => setSettingsModalOpen(true)}>
                <Settings className="h-4 w-4 mr-2" />
                Configuración
              </Button>
              <Button variant="outline" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                Cerrar Sesión
              </Button>
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
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="calendar">Calendario</TabsTrigger>
              <TabsTrigger value="services">Servicios</TabsTrigger>
              <TabsTrigger value="clients">Clientes</TabsTrigger>
              <TabsTrigger value="reports">Reportes</TabsTrigger>
            </TabsList>

            {/* Calendar Tab */}
            <TabsContent value="calendar">
              <CalendarView onNewAppointment={() => setAppointmentModalOpen(true)} />
            </TabsContent>

            {/* Services Tab */}
            <TabsContent value="services">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle>Mis Servicios</CardTitle>
                      <CardDescription>Gestiona los servicios que ofreces</CardDescription>
                    </div>
                    <Button>
                      <Plus className="h-4 w-4 mr-2" />
                      Nuevo Servicio
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Servicio</TableHead>
                        <TableHead>Duración</TableHead>
                        <TableHead>Precio</TableHead>
                        <TableHead>Estado</TableHead>
                        <TableHead>Acciones</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {services.map((service) => (
                        <TableRow key={service.id}>
                          <TableCell className="font-medium">{service.name}</TableCell>
                          <TableCell>{service.duration}</TableCell>
                          <TableCell className="font-bold text-green-600">{service.price}</TableCell>
                          <TableCell>
                            <Badge variant={service.active ? "default" : "secondary"}>
                              {service.active ? "Activo" : "Inactivo"}
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

            {/* Clients Tab */}
            <TabsContent value="clients">
              <Card>
                <CardHeader>
                  <CardTitle>Mis Clientes</CardTitle>
                  <CardDescription>Información de tus clientes</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Cliente</TableHead>
                        <TableHead>Contacto</TableHead>
                        <TableHead>Visitas</TableHead>
                        <TableHead>Última Visita</TableHead>
                        <TableHead>Acciones</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {clients.map((client) => (
                        <TableRow key={client.id}>
                          <TableCell>
                            <div>
                              <p className="font-medium">{client.name}</p>
                              <p className="text-sm text-gray-600">{client.email}</p>
                            </div>
                          </TableCell>
                          <TableCell>{client.phone}</TableCell>
                          <TableCell>
                            <Badge variant="outline">{client.visits} visitas</Badge>
                          </TableCell>
                          <TableCell>{client.lastVisit}</TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Button size="sm" variant="outline" onClick={() => setAppointmentModalOpen(true)}>
                                <CalendarIcon className="h-4 w-4" />
                              </Button>
                              <Button size="sm" variant="outline">
                                <Edit className="h-4 w-4" />
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
                    <CardTitle>Ingresos Mensuales</CardTitle>
                    <CardDescription>Resumen de ingresos</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span>Enero 2024</span>
                        <span className="font-bold text-green-600">$3,450</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Diciembre 2023</span>
                        <span className="font-bold">$2,890</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Crecimiento</span>
                        <span className="font-bold text-green-600">+19.4%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card
                  className="cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => setStatisticsModalOpen(true)}
                >
                  <CardHeader>
                    <CardTitle>Servicios Populares</CardTitle>
                    <CardDescription>Más solicitados este mes</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span>Corte de Cabello</span>
                        <span className="font-bold">45 citas</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Masaje Relajante</span>
                        <span className="font-bold">32 citas</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Manicure</span>
                        <span className="font-bold">28 citas</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Modals */}
        <AppointmentModal open={appointmentModalOpen} onOpenChange={setAppointmentModalOpen} />
        <StatisticsModal open={statisticsModalOpen} onOpenChange={setStatisticsModalOpen} />
        <SettingsModal open={settingsModalOpen} onOpenChange={setSettingsModalOpen} />
      </SidebarInset>
    </SidebarProvider>
  )
}
