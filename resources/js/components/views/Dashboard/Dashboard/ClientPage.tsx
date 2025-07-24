import { useState } from "react"
import {
  HomeIcon,
  CalendarDaysIcon,
  PlusCircleIcon,
  UserIcon,
  CalendarIcon,
  Link,
  LogOutIcon,
  MenuIcon,
  MoreHorizontalIcon,
  ScissorsIcon,
  UsersIcon,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarInset, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarSeparator, SidebarTrigger } from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@radix-ui/react-dropdown-menu"
import { Separator } from "@radix-ui/react-separator"
export default function ClientPage() {
  const [activeSection, setActiveSection] = useState("overview")
  const [bookDate, setBookDate] = useState<Date | undefined>(undefined)
  const [bookService, setBookService] = useState("")
  const [bookStylist, setBookStylist] = useState("")
  const [bookTime, setBookTime] = useState("")
  const [isBookModalOpen, setIsBookModalOpen] = useState(false)

  const handleBookAppointment = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ date: bookDate, service: bookService, stylist: bookStylist, time: bookTime })
    alert("Cita agendada (simulado)!")
    setBookDate(undefined)
    setBookService("")
    setBookStylist("")
    setBookTime("")
    setIsBookModalOpen(false)
  }

  const services = [
    { value: "corte-peinado", label: "Corte y Peinado" },
    { value: "coloracion", label: "Coloración Completa" },
    { value: "mechas", label: "Mechas / Balayage" },
    { value: "tratamiento-capilar", label: "Tratamiento Capilar" },
    { value: "manicura", label: "Manicura" },
    { value: "pedicura", label: "Pedicura" },
    { value: "maquillaje", label: "Maquillaje Profesional" },
  ]

  const stylists = [
    { value: "ana-garcia", label: "Ana García" },
    { value: "carlos-ruiz", label: "Carlos Ruiz" },
    { value: "sofia-lopez", label: "Sofía López" },
  ]

  const availableTimes = ["09:00 AM", "10:00 AM", "11:00 AM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM"]

  const nextAppointment = {
    date: "25 de Julio, 2025",
    time: "10:00 AM",
    service: "Corte y Peinado",
    stylist: "Ana García",
  }

  const appointments = [
    {
      id: "1",
      date: "25 de Julio, 2025",
      time: "10:00 AM",
      service: "Corte y Peinado",
      stylist: "Ana García",
      status: "Confirmada",
    },
    {
      id: "2",
      date: "10 de Agosto, 2025",
      time: "03:00 PM",
      service: "Coloración Completa",
      stylist: "Carlos Ruiz",
      status: "Pendiente",
    },
    {
      id: "3",
      date: "15 de Junio, 2025",
      time: "11:30 AM",
      service: "Manicura y Pedicura",
      stylist: "Sofía López",
      status: "Completada",
    },
    {
      id: "4",
      date: "01 de Julio, 2025",
      time: "09:00 AM",
      service: "Tratamiento Capilar",
      stylist: "Ana García",
      status: "Cancelada",
    },
  ]

  const userProfile = {
    name: "Laura M.",
    email: "laura.m@example.com",
    phone: "+34 678 123 456",
  }

  const handleUpdateProfile = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Perfil actualizado (simulado)!")
  }

  const navItems = [
    { title: "Inicio", section: "overview", icon: HomeIcon },
    { title: "Mis Citas", section: "appointments", icon: CalendarDaysIcon },
    { title: "Reservar Cita", section: "book", icon: PlusCircleIcon },
    { title: "Mi Perfil", section: "profile", icon: UserIcon },
  ]

  return (
    <SidebarProvider>
      <Sidebar style={{ height: '100vh', backgroundColor: '#F9FAFB', color: '#1F2937' }}>
  <SidebarHeader
  style={{
    justifyContent: 'center',
    borderBottom: '1px solid #E5E7EB', // Borde gris claro
    paddingTop: '1rem',
    paddingBottom: '1rem',
  }}
>
  <a
    href="/client"
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      textDecoration: 'none',
    }}
  >
    <ScissorsIcon
      style={{
        height: '2rem',
        width: '2rem',
        color: '#E91E63', // Rosa vibrante (ícono principal)
      }}
    />
    <span
      style={{
        fontSize: '1.5rem',
        fontWeight: 800,
        color: '#1F2937', // Gris oscuro (texto)
      }}
    >
      Tu Cita Fácil
    </span>
  </a>
</SidebarHeader>



  <SidebarContent style={{ flex: 1, overflowY: 'auto' }}>
  <SidebarGroup>
  <SidebarGroupLabel
    style={{
      paddingLeft: '1rem',
      paddingTop: '1rem',
      fontSize: '0.875rem',
      fontWeight: 500,
      color: '#1F2937', // Texto oscuro (gris)
    }}
  >
    Navegación
  </SidebarGroupLabel>

  <SidebarGroupContent>
    <SidebarMenu>
      {navItems.map((item) => (
        <SidebarMenuItem key={item.title}>
          <SidebarMenuButton
            isActive={activeSection === item.section}
            onClick={() => setActiveSection(item.section)}
            style={{
              color: '#1F2937', // Gris oscuro base
              display: 'flex',
              alignItems: 'center',
              padding: '0.5rem 1rem',
              borderRadius: '0.375rem',
              transition: 'background-color 0.2s, color 0.2s',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#FCE4EC'; // Rosa claro (hover)
              e.currentTarget.style.color = '#E91E63';           // Rosa vibrante
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#1F2937';
            }}
          >
            <item.icon className="mr-2 h-5 w-5" />
            <span>{item.title}</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  </SidebarGroupContent>
</SidebarGroup>

</SidebarContent>


  <SidebarFooter style={{ borderTop: '1px solid #E5E7EB', paddingTop: '1rem', paddingBottom: '1rem' }}>
  <SidebarGroup>
    <SidebarGroupContent>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton
            style={{
              color: '#1F2937',
              transition: 'background-color 0.2s, color 0.2s',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#FEE2E2';
              e.currentTarget.style.color = '#DC2626';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#1F2937';
            }}
          >
            <LogOutIcon className="mr-2 h-5 w-5" />
            <span>Cerrar sesión</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroupContent>
  </SidebarGroup>
</SidebarFooter>

</Sidebar>

      <SidebarInset>
        <header
  className="flex h-16 shrink-0 items-center gap-2 border-b px-4 shadow-sm"
  style={{ backgroundColor: '#F9FAFB' }}
>
  <SidebarTrigger className="-ml-1 lg:hidden">
    <MenuIcon className="h-6 w-6" style={{ color: '#1F2937' }} />
    <span className="sr-only">Toggle sidebar</span>
  </SidebarTrigger>

  <Link href="/client" className="flex items-center justify-center lg:hidden">
    <ScissorsIcon className="h-7 w-7" style={{ color: '#E91E63' }} />
    <span className="ml-2 text-xl font-extrabold" style={{ color: '#1F2937' }}>
      Tu Cita Fácil
    </span>
  </Link>

  <Separator
    orientation="vertical"
    className="mr-2 h-4 hidden lg:block"
    style={{ backgroundColor: '#6B7280' }}
  />

  <h1 className="text-xl font-semibold hidden lg:block" style={{ color: '#1F2937' }}>
    Dashboard Cliente
  </h1>

  <div className="ml-auto flex items-center gap-4">
    <Button variant="ghost" size="icon" className="rounded-full">
      <UsersIcon className="h-5 w-5" style={{ color: '#6B7280' }} />
      <span className="sr-only">Perfil de usuario</span>
    </Button>
  </div>
</header>


        <div className="flex flex-1 flex-col gap-4 p-4 bg-custom-background-light">
          {activeSection === "overview" && (
            <div className="grid gap-6 md:gap-8">
  <h2 className="text-3xl font-bold" style={{ color: '#1F2937' }}>¡Bienvenido/a, Cliente!</h2>

  <Card style={{ backgroundColor: '#FFFFFF', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)', border: '1px solid #E5E7EB' }}>
    <CardHeader>
      <CardTitle className="text-2xl font-semibold" style={{ color: '#1F2937' }}>Próxima Cita</CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
      {nextAppointment ? (
        <div className="flex items-center gap-4" style={{ color: '#1F2937' }}>
          <CalendarDaysIcon className="h-8 w-8" style={{ color: '#E91E63' }} />
          <div>
            <p className="text-lg font-medium">
              {nextAppointment.date} a las {nextAppointment.time}
            </p>
            <p style={{ color: '#6B7280' }}>
              Servicio: {nextAppointment.service} con {nextAppointment.stylist}
            </p>
          </div>
        </div>
      ) : (
        <p style={{ color: '#6B7280' }}>No tienes citas próximas. ¡Agenda una ahora!</p>
      )}
      <div className="flex gap-3">
        <Button
          onClick={() => setActiveSection("book")}
          className="text-white"
          style={{ backgroundColor: '#E91E63' }}
        >
          <PlusCircleIcon className="mr-2 h-4 w-4" />
          Reservar Nueva Cita
        </Button>
        <Button
          onClick={() => setActiveSection("appointments")}
          variant="outline"
          className="bg-transparent"
          style={{
            border: '1px solid #E91E63',
            color: '#E91E63',
            backgroundColor: 'transparent'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#fce4ec'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          Ver Todas Mis Citas
        </Button>
      </div>
    </CardContent>
  </Card>

  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    <Card style={{ backgroundColor: '#FFFFFF', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)', border: '1px solid #E5E7EB' }}>
      <CardHeader>
        <CardTitle className="text-xl font-semibold" style={{ color: '#1F2937' }}>Servicios Populares</CardTitle>
      </CardHeader>
      <CardContent style={{ color: '#6B7280' }}>
        <ul className="list-disc list-inside space-y-1">
          <li>Corte de Cabello</li>
          <li>Coloración Completa</li>
          <li>Manicura y Pedicura</li>
        </ul>
      </CardContent>
    </Card>

    <Card style={{ backgroundColor: '#FFFFFF', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)', border: '1px solid #E5E7EB' }}>
      <CardHeader>
        <CardTitle className="text-xl font-semibold" style={{ color: '#1F2937' }}>Notificaciones Recientes</CardTitle>
      </CardHeader>
      <CardContent style={{ color: '#6B7280' }}>
        <ul className="space-y-1">
          <li>Tu cita del 25 de Julio ha sido confirmada.</li>
          <li>¡Nuevo descuento del 15% en tratamientos capilares!</li>
        </ul>
      </CardContent>
    </Card>

    <Card style={{ backgroundColor: '#FFFFFF', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)', border: '1px solid #E5E7EB' }}>
      <CardHeader>
        <CardTitle className="text-xl font-semibold" style={{ color: '#1F2937' }}>Acceso Rápido</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <Button
          onClick={() => setActiveSection("profile")}
          variant="ghost"
          className="justify-start"
          style={{ color: '#E91E63' }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#fce4ec'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          Editar Perfil
        </Button>
        <Button
          variant="ghost"
          className="justify-start"
          style={{ color: '#E91E63' }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#fce4ec'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          Contactar Soporte
        </Button>
      </CardContent>
    </Card>
  </div>
</div>

          )}

          {activeSection === "appointments" && (
            <div style={{ display: 'grid', gap: '2rem' }}>
  <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#1F2937' }}>Mis Citas</h2>

  <Card style={{ backgroundColor: '#FFFFFF', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', border: '1px solid #E5E7EB' }}>
    <CardHeader>
      <CardTitle style={{ fontSize: '1.5rem', fontWeight: 600, color: '#1F2937' }}>
        Historial y Próximas Citas
      </CardTitle>
    </CardHeader>
    <CardContent>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead style={{ color: '#1F2937' }}>Fecha</TableHead>
            <TableHead style={{ color: '#1F2937' }}>Hora</TableHead>
            <TableHead style={{ color: '#1F2937' }}>Servicio</TableHead>
            <TableHead style={{ color: '#1F2937' }}>Estilista</TableHead>
            <TableHead style={{ color: '#1F2937' }}>Estado</TableHead>
            <TableHead style={{ color: '#1F2937' }}>Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {appointments.map((appointment) => (
            <TableRow key={appointment.id}>
              <TableCell style={{ fontWeight: '500', color: '#1F2937' }}>{appointment.date}</TableCell>
              <TableCell style={{ color: '#6B7280' }}>{appointment.time}</TableCell>
              <TableCell style={{ color: '#6B7280' }}>{appointment.service}</TableCell>
              <TableCell style={{ color: '#6B7280' }}>{appointment.stylist}</TableCell>
              <TableCell>
                <span
                  style={{
                    padding: '0.25rem 0.5rem',
                    borderRadius: '9999px',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    backgroundColor:
                      appointment.status === 'Confirmada'
                        ? '#D1FAE5'
                        : appointment.status === 'Pendiente'
                          ? '#FEF9C3'
                          : appointment.status === 'Completada'
                            ? '#DBEAFE'
                            : '#FECACA',
                    color:
                      appointment.status === 'Confirmada'
                        ? '#065F46'
                        : appointment.status === 'Pendiente'
                          ? '#92400E'
                          : appointment.status === 'Completada'
                            ? '#1E40AF'
                            : '#991B1B',
                  }}
                >
                  {appointment.status}
                </span>
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" style={{ height: '2rem', width: '2rem' }}>
                      <MoreHorizontalIcon style={{ height: '1rem', width: '1rem', color: '#6B7280' }} />
                      <span className="sr-only">Acciones</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Ver Detalles</DropdownMenuItem>
                    {appointment.status === 'Confirmada' && (
                      <>
                        <DropdownMenuItem>Reprogramar</DropdownMenuItem>
                        <DropdownMenuItem style={{ color: '#DC2626' }}>Cancelar</DropdownMenuItem>
                      </>
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

          {activeSection === "book" && (
            <div className="grid gap-6 md:gap-8">
  <h2 className="text-3xl font-bold text-[#1F2937]">Reservar Nueva Cita</h2>

  <div className="flex justify-center items-center h-[calc(100vh-200px)]">
    <Dialog open={isBookModalOpen} onOpenChange={setIsBookModalOpen}>
      <DialogTrigger asChild>
        <Button className="bg-[#E91E63] hover:bg-[#D81B60] text-white px-8 py-6 text-lg rounded-lg shadow-lg transition-all duration-300 hover:scale-105">
          <PlusCircleIcon className="mr-3 h-6 w-6" />
          Abrir Formulario de Reserva
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white text-[#1F2937] p-6 rounded-lg shadow-xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#1F2937]">Agendar Nueva Cita</DialogTitle>
          <DialogDescription className="text-[#6B7280]">
            Completa los detalles para reservar tu servicio.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleBookAppointment} className="grid gap-6 py-4">
          <div className="grid gap-2">
            <Label htmlFor="service" className="text-[#1F2937]">Servicio</Label>
            <Select value={bookService} onValueChange={setBookService}>
              <SelectTrigger id="service" className="w-full bg-[#F9FAFB] text-[#1F2937]">
                <SelectValue placeholder="Selecciona un servicio" />
              </SelectTrigger>
              <SelectContent className="bg-white text-[#1F2937]">
                {services.map((s) => (
                  <SelectItem key={s.value} value={s.value}>
                    {s.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="stylist" className="text-[#1F2937]">Estilista Preferido</Label>
            <Select value={bookStylist} onValueChange={setBookStylist}>
              <SelectTrigger id="stylist" className="w-full bg-[#F9FAFB] text-[#1F2937]">
                <SelectValue placeholder="Cualquier estilista" />
              </SelectTrigger>
              <SelectContent className="bg-white text-[#1F2937]">
                {stylists.map((s) => (
                  <SelectItem key={s.value} value={s.value}>
                    {s.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="date" className="text-[#1F2937]">Fecha</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal bg-[#F9FAFB] border-[#E91E63] text-[#1F2937]",
                    !bookDate && "text-[#6B7280]"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {bookDate ? format(bookDate, "PPP", { locale: es }) : <span>Selecciona una fecha</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 bg-white" align="start">
                <Calendar
                  mode="single"
                  selected={bookDate}
                  onSelect={setBookDate}
                  initialFocus
                  locale={es}
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="time" className="text-[#1F2937]">Hora</Label>
            <Select value={bookTime} onValueChange={setBookTime}>
              <SelectTrigger id="time" className="w-full bg-[#F9FAFB] text-[#1F2937]">
                <SelectValue placeholder="Selecciona una hora" />
              </SelectTrigger>
              <SelectContent className="bg-white text-[#1F2937]">
                {availableTimes.map((t) => (
                  <SelectItem key={t} value={t}>
                    {t}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button
            type="submit"
            className="bg-[#E91E63] hover:bg-[#D81B60] text-white py-3 text-lg"
          >
            Confirmar Cita
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  </div>
</div>

          )}

          {activeSection === "profile" && (
            <div className="grid gap-6 md:gap-8">
  <h2 className="text-3xl font-bold text-[#1F2937]">Mi Perfil</h2>

  <Card className="bg-white shadow-lg border border-gray-100">
    <CardHeader>
      <CardTitle className="text-2xl font-semibold text-[#1F2937]">Información Personal</CardTitle>
    </CardHeader>
    <CardContent>
      <form onSubmit={handleUpdateProfile} className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="name" className="text-[#1F2937]">
            Nombre Completo
          </Label>
          <Input
            id="name"
            defaultValue={userProfile.name}
            className="bg-[#F9FAFB] text-[#1F2937]"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email" className="text-[#1F2937]">
            Correo Electrónico
          </Label>
          <Input
            id="email"
            type="email"
            defaultValue={userProfile.email}
            className="bg-[#F9FAFB] text-[#1F2937]"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="phone" className="text-[#1F2937]">
            Teléfono
          </Label>
          <Input
            id="phone"
            type="tel"
            defaultValue={userProfile.phone}
            className="bg-[#F9FAFB] text-[#1F2937]"
          />
        </div>
        <Button
          type="submit"
          className="bg-[#E91E63] hover:bg-[#C2185B] text-white py-3 text-lg"
        >
          Guardar Cambios
        </Button>
      </form>
    </CardContent>
  </Card>

  <Card className="bg-white shadow-lg border border-gray-100">
    <CardHeader>
      <CardTitle className="text-2xl font-semibold text-[#1F2937]">Cambiar Contraseña</CardTitle>
    </CardHeader>
    <CardContent>
      <form className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="current-password" className="text-[#1F2937]">
            Contraseña Actual
          </Label>
          <Input
            id="current-password"
            type="password"
            className="bg-[#F9FAFB] text-[#1F2937]"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="new-password" className="text-[#1F2937]">
            Nueva Contraseña
          </Label>
          <Input
            id="new-password"
            type="password"
            className="bg-[#F9FAFB] text-[#1F2937]"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="confirm-password" className="text-[#1F2937]">
            Confirmar Nueva Contraseña
          </Label>
          <Input
            id="confirm-password"
            type="password"
            className="bg-[#F9FAFB] text-[#1F2937]"
          />
        </div>
        <Button
          type="submit"
          className="bg-[#00796B] hover:bg-[#00695C] text-white py-3 text-lg"
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
