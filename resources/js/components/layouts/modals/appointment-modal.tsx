"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { CalendarIcon, Clock } from "lucide-react"

interface AppointmentModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function AppointmentModal({ open, onOpenChange }: AppointmentModalProps) {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [formData, setFormData] = useState({
    client: "",
    service: "",
    time: "",
    notes: "",
    employee: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simular guardado
    console.log("Cita creada:", { ...formData, date })
    onOpenChange(false)
    // Reset form
    setFormData({ client: "", service: "", time: "", notes: "", employee: "" })
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <CalendarIcon className="h-5 w-5 mr-2" />
            Reservar Nueva Cita
          </DialogTitle>
          <DialogDescription>Complete los detalles para programar una nueva cita.</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Calendario */}
            <div className="space-y-2">
              <Label>Fecha de la Cita</Label>
              <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
            </div>

            {/* Formulario */}
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="client">Cliente</Label>
                <Select value={formData.client} onValueChange={(value) => setFormData({ ...formData, client: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar cliente" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ana-garcia">Ana García</SelectItem>
                    <SelectItem value="carlos-lopez">Carlos López</SelectItem>
                    <SelectItem value="maria-rodriguez">María Rodríguez</SelectItem>
                    <SelectItem value="juan-perez">Juan Pérez</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="service">Servicio</Label>
                <Select
                  value={formData.service}
                  onValueChange={(value) => setFormData({ ...formData, service: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar servicio" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="corte-cabello">Corte de Cabello - $25</SelectItem>
                    <SelectItem value="masaje">Masaje Relajante - $45</SelectItem>
                    <SelectItem value="manicure">Manicure - $20</SelectItem>
                    <SelectItem value="pedicure">Pedicure - $25</SelectItem>
                    <SelectItem value="facial">Tratamiento Facial - $60</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="time">Hora</Label>
                <Select value={formData.time} onValueChange={(value) => setFormData({ ...formData, time: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar hora" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="09:00">09:00 AM</SelectItem>
                    <SelectItem value="10:00">10:00 AM</SelectItem>
                    <SelectItem value="11:00">11:00 AM</SelectItem>
                    <SelectItem value="14:00">02:00 PM</SelectItem>
                    <SelectItem value="15:00">03:00 PM</SelectItem>
                    <SelectItem value="16:00">04:00 PM</SelectItem>
                    <SelectItem value="17:00">05:00 PM</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="employee">Empleado</Label>
                <Select
                  value={formData.employee}
                  onValueChange={(value) => setFormData({ ...formData, employee: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar empleado" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="maria-lopez">María López</SelectItem>
                    <SelectItem value="dr-rodriguez">Dr. Rodríguez</SelectItem>
                    <SelectItem value="sofia-chen">Sofia Chen</SelectItem>
                    <SelectItem value="ana-martinez">Ana Martínez</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Notas Adicionales</Label>
                <Textarea
                  id="notes"
                  placeholder="Instrucciones especiales, alergias, etc."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                />
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancelar
            </Button>
            <Button type="submit">
              <Clock className="h-4 w-4 mr-2" />
              Confirmar Cita
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
