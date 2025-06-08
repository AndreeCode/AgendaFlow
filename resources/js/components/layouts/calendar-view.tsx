"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Calendar, Plus } from "lucide-react"

interface CalendarViewProps {
  onNewAppointment?: () => void
}

export function CalendarView({ onNewAppointment }: CalendarViewProps) {
  const [currentDate, setCurrentDate] = useState(new Date())

  // Datos simulados de citas
  const appointments = [
    { id: 1, time: "09:00", client: "Ana García", service: "Corte", duration: 30, status: "confirmed" },
    { id: 2, time: "10:30", client: "Carlos López", service: "Masaje", duration: 60, status: "pending" },
    { id: 3, time: "14:00", client: "María Rodríguez", service: "Manicure", duration: 45, status: "confirmed" },
    { id: 4, time: "16:00", client: "Juan Pérez", service: "Corte + Barba", duration: 45, status: "completed" },
    { id: 5, time: "17:30", client: "Laura Martín", service: "Facial", duration: 90, status: "confirmed" },
  ]

  const timeSlots = [
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
  ]

  const getMonthName = (date: Date) => {
    return date.toLocaleDateString("es-ES", { month: "long", year: "numeric" })
  }

  const navigateMonth = (direction: "prev" | "next") => {
    const newDate = new Date(currentDate)
    if (direction === "prev") {
      newDate.setMonth(newDate.getMonth() - 1)
    } else {
      newDate.setMonth(newDate.getMonth() + 1)
    }
    setCurrentDate(newDate)
  }

  const getAppointmentForTime = (time: string) => {
    return appointments.find((apt) => apt.time === time)
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="flex items-center">
            <Calendar className="h-5 w-5 mr-2" />
            Calendario de Citas
          </CardTitle>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" onClick={() => navigateMonth("prev")}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="text-lg font-semibold capitalize min-w-[200px] text-center">
              {getMonthName(currentDate)}
            </span>
            <Button variant="outline" size="sm" onClick={() => navigateMonth("next")}>
              <ChevronRight className="h-4 w-4" />
            </Button>
            <Button onClick={onNewAppointment}>
              <Plus className="h-4 w-4 mr-2" />
              Nueva Cita
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {/* Vista de Calendario Simulado */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-8 min-h-[600px]">
          <div className="bg-white rounded-lg shadow-lg p-6 h-full">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-full">
              {/* Columna de Horarios */}
              <div className="lg:col-span-1">
                <h3 className="font-semibold text-lg mb-4 text-center">Horarios</h3>
                <div className="space-y-2">
                  {timeSlots.map((time) => (
                    <div key={time} className="p-2 text-center border rounded bg-gray-50 font-medium">
                      {time}
                    </div>
                  ))}
                </div>
              </div>

              {/* Columna de Citas */}
              <div className="lg:col-span-3">
                <h3 className="font-semibold text-lg mb-4 text-center">
                  Citas del Día - {currentDate.toLocaleDateString("es-ES")}
                </h3>
                <div className="space-y-2">
                  {timeSlots.map((time) => {
                    const appointment = getAppointmentForTime(time)
                    return (
                      <div key={time} className="flex items-center p-3 border rounded-lg min-h-[60px]">
                        <div className="w-16 text-sm font-medium text-gray-600">{time}</div>
                        <div className="flex-1 ml-4">
                          {appointment ? (
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="font-medium">{appointment.client}</p>
                                <p className="text-sm text-gray-600">
                                  {appointment.service} ({appointment.duration} min)
                                </p>
                              </div>
                              <Badge
                                variant={
                                  appointment.status === "confirmed"
                                    ? "default"
                                    : appointment.status === "completed"
                                      ? "secondary"
                                      : "outline"
                                }
                              >
                                {appointment.status === "confirmed"
                                  ? "Confirmada"
                                  : appointment.status === "completed"
                                    ? "Completada"
                                    : "Pendiente"}
                              </Badge>
                            </div>
                          ) : (
                            <div className="text-gray-400 text-sm">Disponible</div>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Leyenda */}
            <div className="mt-6 pt-4 border-t">
              <div className="flex justify-center space-x-6">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                  <span className="text-sm">Confirmada</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-gray-500 rounded-full mr-2"></div>
                  <span className="text-sm">Completada</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                  <span className="text-sm">Pendiente</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-sm">Disponible</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
