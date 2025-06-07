"use client"

import React from 'react';

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Users, Shield, CheckCircle, Star, ArrowRight } from "lucide-react"


export default function Principal() {
  // Citas de ejemplo para el calendario
  
  const upcomingAppointments = [
    {
      id: 1,
      client: "Ana García",
      service: "Corte de Cabello",
      time: "09:00",
      date: "Hoy",
      employee: "María López",
      status: "confirmed",
    },
    {
      id: 2,
      client: "Carlos Pérez",
      service: "Masaje Relajante",
      time: "14:30",
      date: "Hoy",
      employee: "Dr. Rodríguez",
      status: "pending",
    },
    {
      id: 3,
      client: "Laura Martín",
      service: "Manicure",
      time: "16:00",
      date: "Mañana",
      employee: "Sofia Chen",
      status: "confirmed",
    },
    {
      id: 4,
      client: "Juan Silva",
      service: "Limpieza Dental",
      time: "10:00",
      date: "Mañana",
      employee: "Dr. Hernández",
      status: "confirmed",
    },
  ]

  // Ejemplos de antes y después
  const beforeAfterExamples = [
    {
      id: 1,
      service: "Corte de Cabello",
      before: "https://mbblancabelzunce.com/wp-content/uploads/2024/05/360_F_419176802_9s4AoYMfzxDt3kaSYV55whCkTB76NsHN.jpg?height=200&width=200",
      after: "https://mbblancabelzunce.com/wp-content/uploads/2024/05/360_F_419176802_9s4AoYMfzxDt3kaSYV55whCkTB76NsHN.jpg?height=200&width=200",
      description: "Transformación completa con corte moderno y estilizado",
      rating: 5,
      client: "María G.",
    },
    {
      id: 2,
      service: "Tratamiento Facial",
      before: "https://mbblancabelzunce.com/wp-content/uploads/2024/05/360_F_419176802_9s4AoYMfzxDt3kaSYV55whCkTB76NsHN.jpg?height=200&width=200",
      after: "https://mbblancabelzunce.com/wp-content/uploads/2024/05/360_F_419176802_9s4AoYMfzxDt3kaSYV55whCkTB76NsHN.jpg?height=200&width=200",
      description: "Rejuvenecimiento facial con técnicas avanzadas",
      rating: 5,
      client: "Ana R.",
    },
    {
      id: 3,
      service: "Manicure Artístico",
      before: "https://mbblancabelzunce.com/wp-content/uploads/2024/05/360_F_419176802_9s4AoYMfzxDt3kaSYV55whCkTB76NsHN.jpg?height=200&width=200",
      after: "https://mbblancabelzunce.com/wp-content/uploads/2024/05/360_F_419176802_9s4AoYMfzxDt3kaSYV55whCkTB76NsHN.jpg?height=200&width=200",
      description: "Diseño único y personalizado para cada cliente",
      rating: 5,
      client: "Carmen L.",
    },
    {
      id: 4,
      service: "Blanqueamiento Dental",
      before: "https://mbblancabelzunce.com/wp-content/uploads/2024/05/360_F_419176802_9s4AoYMfzxDt3kaSYV55whCkTB76NsHN.jpg?height=200&width=200",
      after: "https://mbblancabelzunce.com/wp-content/uploads/2024/05/360_F_419176802_9s4AoYMfzxDt3kaSYV55whCkTB76NsHN.jpg?height=200&width=200",
      description: "Sonrisa más blanca y brillante en una sola sesión",
      rating: 5,
      client: "Pedro M.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Calendar className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">AgendaFlow</span>
          </div>
          <div className="space-x-4">
            <Button variant="ghost" asChild>
              <a href="/Login">Iniciar Sesión</a>
            </Button> 
            <Button asChild>
              <a href="/Register">Registrarse</a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Gestiona tus citas de manera <span className="text-blue-600">inteligente</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Plataforma completa para la gestión de citas con roles específicos para administradores, empleados y
            clientes.
          </p>
          <div className="space-x-4">
            <Button size="lg" asChild>
              <a href="/Register">Comenzar Gratis</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="Login">Ver Demo</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Calendario de Citas */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Citas Programadas</h2>
            <p className="text-gray-600">Mantén un seguimiento en tiempo real de todas las citas</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Citas de Hoy */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-blue-600" />
                  Citas de Hoy
                </CardTitle>
                <CardDescription>Agenda actualizada en tiempo real</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingAppointments
                    .filter((apt) => apt.date === "Hoy")
                    .map((appointment) => (
                      <div key={appointment.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="flex flex-col">
                            <span className="font-medium text-sm">{appointment.client}</span>
                            <span className="text-xs text-gray-600">{appointment.service}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="text-right">
                            <div className="text-sm font-medium">{appointment.time}</div>
                            <div className="text-xs text-gray-600">{appointment.employee}</div>
                          </div>
                          <Badge variant={appointment.status === "confirmed" ? "default" : "secondary"}>
                            {appointment.status === "confirmed" ? "Confirmada" : "Pendiente"}
                          </Badge>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>

            {/* Citas de Mañana */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-green-600" />
                  Próximas Citas
                </CardTitle>
                <CardDescription>Planificación para mañana</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingAppointments
                    .filter((apt) => apt.date === "Mañana")
                    .map((appointment) => (
                      <div key={appointment.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="flex flex-col">
                            <span className="font-medium text-sm">{appointment.client}</span>
                            <span className="text-xs text-gray-600">{appointment.service}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="text-right">
                            <div className="text-sm font-medium">{appointment.time}</div>
                            <div className="text-xs text-gray-600">{appointment.employee}</div>
                          </div>
                          <Badge variant="outline">Programada</Badge>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button asChild>
              <a href="/Login">
                Ver Calendario Completo
                <ArrowRight className="h-4 w-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Antes y Después */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Resultados Increíbles</h2>
            <p className="text-gray-600">Mira las transformaciones que nuestros profesionales logran</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {beforeAfterExamples.map((example) => (
              <Card key={example.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="relative">
                    {/* Antes */}
                    <div className="relative">
                      <img
                        src={example.before || "https://mbblancabelzunce.com/wp-content/uploads/2024/05/360_F_419176802_9s4AoYMfzxDt3kaSYV55whCkTB76NsHN.jpg"}
                        alt="Antes"
                        className="w-full h-32 object-cover"
                      />
                      <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
                        ANTES
                      </div>
                    </div>

                    {/* Después */}
                    <div className="relative">
                      <img
                        src={example.after || "https://mbblancabelzunce.com/wp-content/uploads/2024/05/360_F_419176802_9s4AoYMfzxDt3kaSYV55whCkTB76NsHN.jpg"}
                        alt="Después"
                        className="w-full h-32 object-cover"
                      />
                      <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-medium">
                        DESPUÉS
                      </div>
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="font-semibold text-sm mb-2">{example.service}</h3>
                    <p className="text-xs text-gray-600 mb-3">{example.description}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        {[...Array(example.rating)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="text-xs text-gray-500">- {example.client}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <a href="/Register">
                Ver Más Transformaciones
                <ArrowRight className="h-4 w-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Características Principales</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Shield className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Roles y Permisos</CardTitle>
                <CardDescription>Sistema completo de roles para administradores, empleados y clientes</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Clock className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Gestión en Tiempo Real</CardTitle>
                <CardDescription>Programación y seguimiento de citas en tiempo real</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Users className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Multi-usuario</CardTitle>
                <CardDescription>Soporte para múltiples empresas y clientes en una sola plataforma</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Roles Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Roles del Sistema</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-red-200">
              <CardHeader>
                <CardTitle className="text-red-600">Administrador</CardTitle>
                <CardDescription>Control total del sistema</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Gestión de usuarios
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Configuración del sistema
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Reportes avanzados
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Gestión de empresas
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-2 border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-600">Empleado</CardTitle>
                <CardDescription>Gestión de servicios</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Gestión de citas
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Calendario personal
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Gestión de servicios
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Reportes de trabajo
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-2 border-green-200">
              <CardHeader>
                <CardTitle className="text-green-600">Cliente</CardTitle>
                <CardDescription>Reserva y gestión de citas</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Reservar citas
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Ver historial
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Cancelar citas
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Calificar servicios
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Calendar className="h-8 w-8" />
            <span className="text-2xl font-bold">CitasPro</span>
          </div>
          <p className="text-gray-400">© 2024 CitasPro. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
