"use client"

import { useState, useEffect } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Textarea } from "@/components/ui/textarea"
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebarClient } from "@/components/layouts/app-sidebar-client"
import { AppointmentModal } from "@/components/layouts/modals/appointment-modal"
import { SettingsModal } from "@/components/layouts/modals/settings-modal"
import { User, CalendarIcon, Clock, MapPin, Star, LogOut, Plus, Search, Heart, Settings } from "lucide-react"
import Config from "@/Config"
import AuthUser from "@/Auth/AuthUser"

export default function ClientDashboard() {
    const {getLogout, getToken}=AuthUser();
  const [user, setUser] = useState<any>(null)
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [activeTab, setActiveTab] = useState("appointments")
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false)
  const [settingsModalOpen, setSettingsModalOpen] = useState(false)


  useEffect(() => {
    
  }, )

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
      case "settings":
        setSettingsModalOpen(true)
        break
    }
  }



  // Datos simulados
  const stats = [
    { title: "Próximas Citas", value: "3", icon: CalendarIcon, color: "text-blue-600" },
    { title: "Citas Completadas", value: "24", icon: Clock, color: "text-green-600" },
    { title: "Lugares Favoritos", value: "5", icon: Heart, color: "text-red-600" },
    { title: "Reseñas Escritas", value: "18", icon: Star, color: "text-orange-600" },
  ]

  const upcomingAppointments = [
    {
      id: 1,
      business: "Salón Bella Vista",
      service: "Corte de Cabello",
      date: "2024-01-20",
      time: "10:00",
      address: "Calle Principal 123",
      status: "confirmed",
    },
    {
      id: 2,
      business: "Spa Relajación",
      service: "Masaje Relajante",
      date: "2024-01-22",
      time: "15:30",
      address: "Av. Bienestar 456",
      status: "pending",
    },
    {
      id: 3,
      business: "Clínica Dental Sonrisa",
      service: "Limpieza Dental",
      date: "2024-01-25",
      time: "09:00",
      address: "Plaza Salud 789",
      status: "confirmed",
    },
  ]

  const appointmentHistory = [
    {
      id: 1,
      business: "Salón Bella Vista",
      service: "Corte + Peinado",
      date: "2024-01-10",
      rating: 5,
      price: "$35",
      reviewed: true,
    },
    {
      id: 2,
      business: "Spa Relajación",
      service: "Masaje Sueco",
      date: "2024-01-05",
      rating: 4,
      price: "$60",
      reviewed: true,
    },
    {
      id: 3,
      business: "Nail Art Studio",
      service: "Manicure Francesa",
      date: "2023-12-28",
      rating: 0,
      price: "$25",
      reviewed: false,
    },
  ]

  const businesses = [
    {
      id: 1,
      name: "Salón Bella Vista",
      category: "Belleza",
      rating: 4.8,
      reviews: 124,
      address: "Calle Principal 123",
      image: "/placeholder.svg?height=100&width=100",
      services: ["Corte", "Peinado", "Coloración"],
      favorite: true,
    },
    {
      id: 2,
      name: "Spa Relajación",
      category: "Bienestar",
      rating: 4.6,
      reviews: 89,
      address: "Av. Bienestar 456",
      image: "/placeholder.svg?height=100&width=100",
      services: ["Masajes", "Faciales", "Aromaterapia"],
      favorite: false,
    },
    {
      id: 3,
      name: "Clínica Dental Sonrisa",
      category: "Salud",
      rating: 4.9,
      reviews: 156,
      address: "Plaza Salud 789",
      image: "/placeholder.svg?height=100&width=100",
      services: ["Limpieza", "Ortodoncia", "Blanqueamiento"],
      favorite: true,
    },
  ]

  return (
    <SidebarProvider>
      <AppSidebarClient
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
                <User className="h-6 w-6 text-green-600" />
                <div>
                  <h1 className="text-xl font-bold text-gray-900">Mi Panel</h1>
                  <p className="text-sm text-gray-600">Bienvenido, cliente</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
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
              <Card key={index}>
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

          {/* Quick Actions */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Acciones Rápidas</CardTitle>
              <CardDescription>¿Qué te gustaría hacer hoy?</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button className="h-20 flex flex-col space-y-2" onClick={() => setAppointmentModalOpen(true)}>
                  <Plus className="h-6 w-6" />
                  <span>Reservar Cita</span>
                </Button>
                <Button
                  variant="outline"
                  className="h-20 flex flex-col space-y-2"
                  onClick={() => setActiveTab("businesses")}
                >
                  <Search className="h-6 w-6" />
                  <span>Buscar Servicios</span>
                </Button>
                <Button
                  variant="outline"
                  className="h-20 flex flex-col space-y-2"
                  onClick={() => setActiveTab("appointments")}
                >
                  <CalendarIcon className="h-6 w-6" />
                  <span>Ver Calendario</span>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Main Content */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="appointments">Mis Citas</TabsTrigger>
              <TabsTrigger value="businesses">Explorar</TabsTrigger>
              <TabsTrigger value="history">Historial</TabsTrigger>
              <TabsTrigger value="profile">Perfil</TabsTrigger>
            </TabsList>

            {/* Appointments Tab */}
            <TabsContent value="appointments">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Calendar */}
                <Card>
                  <CardHeader>
                    <CardTitle>Calendario</CardTitle>
                    <CardDescription>Tus próximas citas</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
                  </CardContent>
                </Card>

                {/* Upcoming Appointments */}
                <Card className="lg:col-span-2">
                  <CardHeader>
                    <CardTitle>Próximas Citas</CardTitle>
                    <CardDescription>Tus citas programadas</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {upcomingAppointments.map((appointment) => (
                        <div key={appointment.id} className="p-4 border rounded-lg">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h3 className="font-semibold">{appointment.business}</h3>
                              <p className="text-sm text-gray-600">{appointment.service}</p>
                            </div>
                            <Badge variant={appointment.status === "confirmed" ? "default" : "outline"}>
                              {appointment.status === "confirmed" ? "Confirmada" : "Pendiente"}
                            </Badge>
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <div className="flex items-center">
                              <CalendarIcon className="h-4 w-4 mr-1" />
                              {appointment.date}
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {appointment.time}
                            </div>
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1" />
                              {appointment.address}
                            </div>
                          </div>
                          <div className="flex space-x-2 mt-3">
                            <Button size="sm" variant="outline">
                              Reagendar
                            </Button>
                            <Button size="sm" variant="outline">
                              Cancelar
                            </Button>
                            <Button size="sm">Ver Detalles</Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Businesses Tab */}
            <TabsContent value="businesses">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle>Explorar Negocios</CardTitle>
                      <CardDescription>Encuentra servicios cerca de ti</CardDescription>
                    </div>
                    <div className="flex space-x-2">
                      <div className="relative">
                        <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input placeholder="Buscar servicios..." className="pl-10 w-64" />
                      </div>
                      <Select>
                        <SelectTrigger className="w-40">
                          <SelectValue placeholder="Categoría" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Todas</SelectItem>
                          <SelectItem value="beauty">Belleza</SelectItem>
                          <SelectItem value="wellness">Bienestar</SelectItem>
                          <SelectItem value="health">Salud</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {businesses.map((business) => (
                      <Card key={business.id} className="hover:shadow-lg transition-shadow">
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between mb-3">
                            <img
                              src={business.image || "/placeholder.svg"}
                              alt={business.name}
                              className="w-16 h-16 rounded-lg object-cover"
                            />
                            <Button size="sm" variant="ghost">
                              <Heart className={`h-4 w-4 ${business.favorite ? "fill-red-500 text-red-500" : ""}`} />
                            </Button>
                          </div>
                          <h3 className="font-semibold text-lg mb-1">{business.name}</h3>
                          <p className="text-sm text-gray-600 mb-2">{business.category}</p>
                          <div className="flex items-center mb-2">
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${i < Math.floor(business.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                                />
                              ))}
                            </div>
                            <span className="ml-2 text-sm text-gray-600">
                              {business.rating} ({business.reviews} reseñas)
                            </span>
                          </div>
                          <div className="flex items-center text-sm text-gray-600 mb-3">
                            <MapPin className="h-4 w-4 mr-1" />
                            {business.address}
                          </div>
                          <div className="flex flex-wrap gap-1 mb-3">
                            {business.services.slice(0, 3).map((service, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                {service}
                              </Badge>
                            ))}
                          </div>
                          <Button className="w-full" onClick={() => setAppointmentModalOpen(true)}>
                            Reservar Cita
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* History Tab */}
            <TabsContent value="history">
              <Card>
                <CardHeader>
                  <CardTitle>Historial de Citas</CardTitle>
                  <CardDescription>Tus citas anteriores y reseñas</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {appointmentHistory.map((appointment) => (
                      <div key={appointment.id} className="p-4 border rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-semibold">{appointment.business}</h3>
                            <p className="text-sm text-gray-600">{appointment.service}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-green-600">{appointment.price}</p>
                            <p className="text-sm text-gray-600">{appointment.date}</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            {appointment.reviewed ? (
                              <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-4 w-4 ${i < appointment.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                                  />
                                ))}
                                <span className="ml-2 text-sm text-gray-600">Tu calificación</span>
                              </div>
                            ) : (
                              <span className="text-sm text-gray-500">Sin calificar</span>
                            )}
                          </div>
                          <div className="flex space-x-2">
                            {!appointment.reviewed && (
                              <Button size="sm" variant="outline">
                                <Star className="h-4 w-4 mr-1" />
                                Calificar
                              </Button>
                            )}
                            <Button size="sm" variant="outline" onClick={() => setAppointmentModalOpen(true)}>
                              Reservar Nuevamente
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Profile Tab */}
            <TabsContent value="profile">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Información Personal</CardTitle>
                    <CardDescription>Actualiza tus datos personales</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Nombre Completo</label>
                      <Input defaultValue="client" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Correo Electrónico</label>
                      <Input defaultValue="email"/>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Teléfono</label>
                      <Input placeholder="+1 234 567 8900" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Fecha de Nacimiento</label>
                      <Input type="date" />
                    </div>
                    <Button>Guardar Cambios</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Preferencias</CardTitle>
                    <CardDescription>Configura tus preferencias</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Ubicación Preferida</label>
                      <Input placeholder="Ciudad, Estado" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Servicios de Interés</label>
                      <div className="flex flex-wrap gap-2">
                        {["Belleza", "Bienestar", "Salud", "Fitness", "Spa"].map((service) => (
                          <Badge
                            key={service}
                            variant="outline"
                            className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                          >
                            {service}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Notas Especiales</label>
                      <Textarea placeholder="Alergias, preferencias especiales, etc." />
                    </div>
                    <Button>Actualizar Preferencias</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Modals */}
        <AppointmentModal open={appointmentModalOpen} onOpenChange={setAppointmentModalOpen} />
        <SettingsModal open={settingsModalOpen} onOpenChange={setSettingsModalOpen} />
      </SidebarInset>
    </SidebarProvider>
  )
}
