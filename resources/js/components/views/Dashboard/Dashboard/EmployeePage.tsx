"use client"

import { Separator } from "@/components/ui/separator"
import type React from "react"
import { useState } from "react"
import {Link, LogOut} from "lucide-react"
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
  useSidebar,
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
  SidebarSeparator,
} from "@/components/ui/sidebar"
import {
  HomeIcon,
  CalendarDaysIcon,
  UsersIcon,
  BriefcaseIcon,
  UserIcon,
  LogOutIcon,
  ScissorsIcon,
  MoreHorizontalIcon,
  MenuIcon,
  PlusCircleIcon,
  DollarSignIcon,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Config from "@/Config"
import AuthUser from "@/Auth/AuthUser"

export default function EmployeeDashboardPage() {
  const [activeSection, setActiveSection] = useState("overview")
  const { setOpenMobile } = useSidebar()
    const {getLogout, getToken}=AuthUser();

  // --- Data for all sections ---

  // Data for Overview Section
  const upcomingAppointments = [
    {
      id: "a1",
      date: "25 de Julio, 2025",
      time: "10:00 AM",
      service: "Corte y Peinado",
      client: "Laura M.",
    },
    {
      id: "a2",
      date: "25 de Julio, 2025",
      time: "11:30 AM",
      service: "Coloración",
      client: "Juan P.",
    },
  ]

  const pendingTasks = [
    "Confirmar cita de María G. para el 26 de Julio.",
    "Revisar inventario de productos de coloración.",
  ]

  // Data for Appointments Section
  const employeeAppointments = [
    {
      id: "1",
      date: "25 de Julio, 2025",
      time: "10:00 AM",
      service: "Corte y Peinado",
      client: "Laura M.",
      status: "Confirmada",
    },
    {
      id: "2",
      date: "25 de Julio, 2025",
      time: "11:30 AM",
      service: "Coloración Completa",
      client: "Juan P.",
      status: "Confirmada",
    },
    {
      id: "3",
      date: "26 de Julio, 2025",
      time: "09:00 AM",
      service: "Manicura",
      client: "Sofía R.",
      status: "Pendiente",
    },
    {
      id: "4",
      date: "26 de Julio, 2025",
      time: "02:00 PM",
      service: "Tratamiento Capilar",
      client: "Pedro G.",
      status: "Cancelada",
    },
  ]

  // Data for Clients Section
  const clients = [
    {
      id: "c1",
      name: "Laura M.",
      email: "laura.m@example.com",
      phone: "+34 678 123 456",
      lastVisit: "2025-07-25",
    },
    {
      id: "c2",
      name: "Juan P.",
      email: "juan.p@example.com",
      phone: "+34 678 789 012",
      lastVisit: "2025-07-25",
    },
    {
      id: "c3",
      name: "Sofía R.",
      email: "sofia.r@example.com",
      phone: "+34 678 345 678",
      lastVisit: "2025-06-15",
    },
  ]

  // Data for Services Section
  const services = [
    {
      id: "s1",
      name: "Corte de Cabello",
      duration: "30 min",
      price: "20.00€",
      description: "Corte de cabello profesional para hombre o mujer.",
    },
    {
      id: "s2",
      name: "Coloración Completa",
      duration: "90 min",
      price: "60.00€",
      description: "Aplicación de color en todo el cabello.",
    },
    {
      id: "s3",
      name: "Manicura y Pedicura",
      duration: "60 min",
      price: "35.00€",
      description: "Cuidado completo de manos y pies.",
    },
  ]

  // Data for Debts Section
  const [debts, setDebts] = useState([
    {
      id: "d1",
      clientName: "Laura M.",
      description: "Corte y Peinado (25 de Julio)",
      amount: 25.0,
      status: "Pendiente",
    },
    {
      id: "d2",
      clientName: "Juan P.",
      description: "Coloración Completa (10 de Agosto)",
      amount: 60.0,
      status: "Pendiente",
    },
    {
      id: "d3",
      clientName: "Sofía R.",
      description: "Manicura (15 de Junio)",
      amount: 15.0,
      status: "Pagado",
    },
    {
      id: "d4",
      clientName: "Pedro G.",
      description: "Tratamiento Capilar (01 de Julio)",
      amount: 40.0,
      status: "Pendiente",
    },
  ])

  // Data for Profile Section
  const employeeProfile = {
    name: "Ana García",
    email: "ana.g@example.com",
    phone: "+34 600 111 222",
    specialty: "Estilista Senior",
  }

  

  const handleNavigationClick = (section: string) => {
    setActiveSection(section)
    setOpenMobile(false) // Cierra el sidebar móvil al hacer clic en un enlace
  }

  const handleMarkAppointmentStatus = (id: string, newStatus: string) => {
    alert(`Cita ${id} marcada como ${newStatus} (simulado).`)
    // Lógica para actualizar el estado de la cita (no implementada completamente aquí)
  }

  const handleMarkAsPaid = (id: string) => {
    alert(`Deuda ${id} marcada como pagada (simulado).`)
    setDebts((prevDebts) => prevDebts.map((debt) => (debt.id === id ? { ...debt, status: "Pagado" } : debt)))
  }

  const handleUpdateEmployeeProfile = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Perfil de empleado actualizado (simulado)!")
  }

  const handleAddService = () => {
    alert("Formulario para añadir nuevo servicio (simulado).")
    // Lógica para abrir un modal o redirigir a un formulario de añadir servicio
  }

  const navItems = [
    {
      title: "Inicio",
      section: "overview",
      icon: HomeIcon,
    },
    {
      title: "Mis Citas",
      section: "appointments",
      icon: CalendarDaysIcon,
    },
    {
      title: "Clientes",
      section: "clients",
      icon: UsersIcon,
    },
    {
      title: "Servicios",
      section: "services",
      icon: BriefcaseIcon,
    },
    {
      title: "Deudas",
      section: "debts",
      icon: DollarSignIcon,
    },
    {
      title: "Mi Perfil",
      section: "profile",
      icon: UserIcon,
    },
  ]
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

  return (
    <SidebarProvider>
      {/* Employee Sidebar (now inline) */}
      <Sidebar>
        <SidebarHeader>
          <Link href="/employee" className="flex items-center justify-center py-2">
            <ScissorsIcon className="h-8 w-8 text-custom-primary" />
            <span className="ml-2 text-2xl font-extrabold text-custom-text-dark">Tu Cita Fácil</span>
          </Link>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Gestión</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {navItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      isActive={activeSection === item.section}
                      onClick={() => handleNavigationClick(item.section)}
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarSeparator />
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href="#">
                      <LogOutIcon />
                      <span>Cerrar Sesión</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarFooter>
      </Sidebar>

      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4 bg-white shadow-sm">
          {/* Sidebar Trigger for mobile */}
          <SidebarTrigger className="-ml-1 lg:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle sidebar</span>
          </SidebarTrigger>
          {/* Logo for mobile */}
          <Link href="/employee" className="flex items-center justify-center lg:hidden">
            <ScissorsIcon className="h-7 w-7 text-custom-primary" />
            <span className="ml-2 text-xl font-extrabold text-custom-text-dark">Tu Cita Fácil</span>
          </Link>
          <Separator orientation="vertical" className="mr-2 h-4 hidden lg:block" />
          <h1 className="text-xl font-semibold text-custom-text-dark hidden lg:block">Dashboard Empleado</h1>
          <div className="ml-auto flex items-center gap-4">
            <Button variant="ghost" size="icon" className="rounded-full">
              <UsersIcon className="h-5 w-5 text-custom-text-light" />
              <span className="sr-only">Perfil de usuario</span>
            </Button>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 bg-custom-background-light">
          {/* --- Overview Section --- */}
          {activeSection === "overview" && (
            <div className="grid gap-6 md:gap-8">
              <h2 className="text-3xl font-bold text-custom-text-dark">¡Bienvenido/a, Empleado!</h2>

              <Card className="bg-white shadow-lg border border-gray-100">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-custom-text-dark">Citas Próximas</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {upcomingAppointments.length > 0 ? (
                    <div className="space-y-3">
                      {upcomingAppointments.map((appointment) => (
                        <div key={appointment.id} className="flex items-center gap-4 text-custom-text-dark">
                          <CalendarDaysIcon className="h-6 w-6 text-custom-primary" />
                          <div>
                            <p className="text-lg font-medium">
                              {appointment.date} a las {appointment.time}
                            </p>
                            <p className="text-custom-text-light">
                              Servicio: {appointment.service} para {appointment.client}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-custom-text-light">No tienes citas programadas para hoy.</p>
                  )}
                  <div className="flex flex-wrap gap-3">
                    <Button
                      onClick={() => handleNavigationClick("appointments")}
                      className="bg-custom-primary hover:bg-custom-primary/90 text-white"
                    >
                      <CalendarDaysIcon className="mr-2 h-4 w-4" />
                      Ver Todas Mis Citas
                    </Button>
                    <Button
                      onClick={() => handleNavigationClick("clients")}
                      variant="outline"
                      className="border-custom-primary text-custom-primary hover:bg-custom-primary/10 bg-transparent"
                    >
                      Gestionar Clientes
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card className="bg-white shadow-lg border border-gray-100">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-custom-text-dark">Tareas Pendientes</CardTitle>
                  </CardHeader>
                  <CardContent className="text-custom-text-light">
                    {pendingTasks.length > 0 ? (
                      <ul className="list-disc list-inside space-y-1">
                        {pendingTasks.map((task, index) => (
                          <li key={index}>{task}</li>
                        ))}
                      </ul>
                    ) : (
                      <p>No hay tareas pendientes.</p>
                    )}
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg border border-gray-100">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-custom-text-dark">Acceso Rápido</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-2">
                    <Button
                      onClick={() => handleNavigationClick("services")}
                      variant="ghost"
                      className="justify-start text-custom-primary hover:bg-custom-primary/10"
                    >
                      Gestionar Servicios
                    </Button>
                    <Button
                      onClick={() => handleNavigationClick("profile")}
                      variant="ghost"
                      className="justify-start text-custom-primary hover:bg-custom-primary/10"
                    >
                      Editar Perfil
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg border border-gray-100">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-custom-text-dark">Estadísticas Rápidas</CardTitle>
                  </CardHeader>
                  <CardContent className="text-custom-text-light">
                    <p>
                      Citas completadas esta semana: <span className="font-semibold text-custom-primary">12</span>
                    </p>
                    <p>
                      Clientes nuevos este mes: <span className="font-semibold text-custom-primary">5</span>
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {/* --- Appointments Section --- */}
          {activeSection === "appointments" && (
            <div className="grid gap-6 md:gap-8">
              <h2 className="text-3xl font-bold text-custom-text-dark">Mis Citas (Empleado)</h2>

              <Card className="bg-white shadow-lg border border-gray-100">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-custom-text-dark">Gestión de Citas</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="text-custom-text-dark">Fecha</TableHead>
                        <TableHead className="text-custom-text-dark">Hora</TableHead>
                        <TableHead className="text-custom-text-dark">Servicio</TableHead>
                        <TableHead className="text-custom-text-dark">Cliente</TableHead>
                        <TableHead className="text-custom-text-dark">Estado</TableHead>
                        <TableHead className="text-custom-text-dark">Acciones</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {employeeAppointments.map((appointment) => (
                        <TableRow key={appointment.id}>
                          <TableCell className="font-medium text-custom-text-dark">{appointment.date}</TableCell>
                          <TableCell className="text-custom-text-light">{appointment.time}</TableCell>
                          <TableCell className="text-custom-text-light">{appointment.service}</TableCell>
                          <TableCell className="text-custom-text-light">{appointment.client}</TableCell>
                          <TableCell>
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-semibold ${
                                appointment.status === "Confirmada"
                                  ? "bg-green-100 text-green-800"
                                  : appointment.status === "Pendiente"
                                    ? "bg-yellow-100 text-yellow-800"
                                    : "bg-red-100 text-red-800"
                              }`}
                            >
                              {appointment.status}
                            </span>
                          </TableCell>
                          <TableCell>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <MoreHorizontalIcon className="h-4 w-4 text-custom-text-light" />
                                  <span className="sr-only">Acciones</span>
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem>Ver Detalles</DropdownMenuItem>
                                {appointment.status === "Pendiente" && (
                                  <DropdownMenuItem
                                    onClick={() => handleMarkAppointmentStatus(appointment.id, "Confirmada")}
                                  >
                                    Confirmar
                                  </DropdownMenuItem>
                                )}
                                {appointment.status !== "Cancelada" && (
                                  <DropdownMenuItem
                                    onClick={() => handleMarkAppointmentStatus(appointment.id, "Cancelada")}
                                    className="text-red-600"
                                  >
                                    Cancelar
                                  </DropdownMenuItem>
                                )}
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          )}

          {/* --- Clients Section --- */}
          {activeSection === "clients" && (
            <div className="grid gap-6 md:gap-8">
              <h2 className="text-3xl font-bold text-custom-text-dark">Gestión de Clientes</h2>

              <Card className="bg-white shadow-lg border border-gray-100">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-custom-text-dark">Lista de Clientes</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="text-custom-text-dark">Nombre</TableHead>
                        <TableHead className="text-custom-text-dark">Email</TableHead>
                        <TableHead className="text-custom-text-dark">Teléfono</TableHead>
                        <TableHead className="text-custom-text-dark">Última Visita</TableHead>
                        <TableHead className="text-custom-text-dark">Acciones</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {clients.map((client) => (
                        <TableRow key={client.id}>
                          <TableCell className="font-medium text-custom-text-dark">{client.name}</TableCell>
                          <TableCell className="text-custom-text-light">{client.email}</TableCell>
                          <TableCell className="text-custom-text-light">{client.phone}</TableCell>
                          <TableCell className="text-custom-text-light">{client.lastVisit}</TableCell>
                          <TableCell>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <MoreHorizontalIcon className="h-4 w-4 text-custom-text-light" />
                                  <span className="sr-only">Acciones</span>
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem>Ver Perfil</DropdownMenuItem>
                                <DropdownMenuItem>Agendar Cita</DropdownMenuItem>
                                <DropdownMenuItem className="text-red-600">Eliminar Cliente</DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          )}

          {/* --- Services Section --- */}
          {activeSection === "services" && (
            <div className="grid gap-6 md:gap-8">
              <h2 className="text-3xl font-bold text-custom-text-dark">Gestión de Servicios</h2>

              <Card className="bg-white shadow-lg border border-gray-100">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-2xl font-semibold text-custom-text-dark">Lista de Servicios</CardTitle>
                  <Button
                    onClick={handleAddService}
                    className="bg-custom-primary hover:bg-custom-primary/90 text-white"
                  >
                    <PlusCircleIcon className="mr-2 h-4 w-4" />
                    Añadir Nuevo Servicio
                  </Button>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="text-custom-text-dark">Nombre</TableHead>
                        <TableHead className="text-custom-text-dark">Duración</TableHead>
                        <TableHead className="text-custom-text-dark">Precio</TableHead>
                        <TableHead className="text-custom-text-dark">Descripción</TableHead>
                        <TableHead className="text-custom-text-dark">Acciones</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {services.map((service) => (
                        <TableRow key={service.id}>
                          <TableCell className="font-medium text-custom-text-dark">{service.name}</TableCell>
                          <TableCell className="text-custom-text-light">{service.duration}</TableCell>
                          <TableCell className="text-custom-text-light">{service.price}</TableCell>
                          <TableCell className="text-custom-text-light">{service.description}</TableCell>
                          <TableCell>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <MoreHorizontalIcon className="h-4 w-4 text-custom-text-light" />
                                  <span className="sr-only">Acciones</span>
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem>Editar</DropdownMenuItem>
                                <DropdownMenuItem className="text-red-600">Eliminar</DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          )}

          {/* --- Debts Section --- */}
          {activeSection === "debts" && (
            <div className="grid gap-6 md:gap-8">
              <h2 className="text-3xl font-bold text-custom-text-dark">Gestión de Deudas</h2>

              <Card className="bg-white shadow-lg border border-gray-100">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-custom-text-dark">Deudas de Clientes</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="text-custom-text-dark">Cliente</TableHead>
                        <TableHead className="text-custom-text-dark">Descripción</TableHead>
                        <TableHead className="text-custom-text-dark">Monto</TableHead>
                        <TableHead className="text-custom-text-dark">Estado</TableHead>
                        <TableHead className="text-custom-text-dark">Acciones</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {debts.map((debt) => (
                        <TableRow key={debt.id}>
                          <TableCell className="font-medium text-custom-text-dark">{debt.clientName}</TableCell>
                          <TableCell className="text-custom-text-light">{debt.description}</TableCell>
                          <TableCell className="text-custom-text-light">{debt.amount.toFixed(2)}€</TableCell>
                          <TableCell>
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-semibold ${
                                debt.status === "Pendiente" ? "bg-red-100 text-red-800" : "bg-green-100 text-green-800"
                              }`}
                            >
                              {debt.status}
                            </span>
                          </TableCell>
                          <TableCell>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <MoreHorizontalIcon className="h-4 w-4 text-custom-text-light" />
                                  <span className="sr-only">Acciones</span>
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem>Ver Detalles</DropdownMenuItem>
                                {debt.status === "Pendiente" && (
                                  <DropdownMenuItem onClick={() => handleMarkAsPaid(debt.id)}>
                                    Marcar como Pagada
                                  </DropdownMenuItem>
                                )}
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          )}

          {/* --- Profile Section --- */}
          {activeSection === "profile" && (
            <div className="grid gap-6 md:gap-8">
              <h2 className="text-3xl font-bold text-custom-text-dark">Mi Perfil (Empleado)</h2>

              <Card className="bg-white shadow-lg border border-gray-100">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-custom-text-dark">Información Personal</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleUpdateEmployeeProfile} className="grid gap-6">
                    <div className="grid gap-2">
                      <Label htmlFor="name" className="text-custom-text-dark">
                        Nombre Completo
                      </Label>
                      <Input
                        id="name"
                        defaultValue={employeeProfile.name}
                        className="bg-custom-background-light text-custom-text-dark"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email" className="text-custom-text-dark">
                        Correo Electrónico
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        defaultValue={employeeProfile.email}
                        className="bg-custom-background-light text-custom-text-dark"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="phone" className="text-custom-text-dark">
                        Teléfono
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        defaultValue={employeeProfile.phone}
                        className="bg-custom-background-light text-custom-text-dark"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="specialty" className="text-custom-text-dark">
                        Especialidad
                      </Label>
                      <Input
                        id="specialty"
                        defaultValue={employeeProfile.specialty}
                        className="bg-custom-background-light text-custom-text-dark"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="bg-custom-primary hover:bg-custom-primary/90 text-white py-3 text-lg"
                    >
                      Guardar Cambios
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg border border-gray-100">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-custom-text-dark">Cambiar Contraseña</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="grid gap-6">
                    <div className="grid gap-2">
                      <Label htmlFor="current-password" className="text-custom-text-dark">
                        Contraseña Actual
                      </Label>
                      <Input
                        id="current-password"
                        type="password"
                        className="bg-custom-background-light text-custom-text-dark"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="new-password" className="text-custom-text-dark">
                        Nueva Contraseña
                      </Label>
                      <Input
                        id="new-password"
                        type="password"
                        className="bg-custom-background-light text-custom-text-dark"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="confirm-password" className="text-custom-text-dark">
                        Confirmar Nueva Contraseña
                      </Label>
                      <Input
                        id="confirm-password"
                        type="password"
                        className="bg-custom-background-light text-custom-text-dark"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="bg-custom-secondary hover:bg-custom-secondary/90 text-white py-3 text-lg"
                    >
                      Actualizar Contraseña
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
