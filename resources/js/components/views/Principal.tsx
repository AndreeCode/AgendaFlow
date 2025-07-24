import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import {
  Menu, Scissors, ScissorsIcon,
  SprayCan,
  Users,
  Calendar,
  Clock,
  Star,
  Gift,
} from "lucide-react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";


export default function Component() {
  const servicios = [
    {
      icon: <Scissors className="h-8 w-8 text-[#ea4c89]" />,
      title: "Cortes y Peinados",
      description: "Estilo para todas las edades. Clásicos o modernos, tú eliges.",
    },
    {
      icon: <SprayCan className="h-8 w-8 text-[#ea4c89]" />,
      title: "Coloración y Mechas",
      description: "Tintes, mechas y más para renovar tu look.",
    },
    {
      icon: <Users className="h-8 w-8 text-[#ea4c89]" />,
      title: "Tratamientos Capilares",
      description: "Cuida tu cabello con hidratación, nutrición y brillo.",
    },
    {
      icon: <Calendar className="h-8 w-8 text-[#ea4c89]" />,
      title: "Reserva Online Fácil",
      description: "Agenda tu cita desde cualquier lugar, en segundos.",
    },
    {
      icon: <Clock className="h-8 w-8 text-[#ea4c89]" />,
      title: "Recordatorios de Cita",
      description: "Recibe alertas automáticas por email o celular.",
    },
    {
      icon: <Gift className="h-8 w-8 text-[#ea4c89]" />,
      title: "Programas de Fidelidad",
      description: "Obtén recompensas y descuentos exclusivos.",
    },
  ];
  const testimonios = [
    {
      mensaje:
        "¡Me encanta este salón! Siempre salgo feliz con mi nuevo look y el sistema de citas es súper cómodo. ¡Adiós a las esperas y hola a un estilo perfecto!",
      nombre: "Laura M.",
    },
    {
      mensaje:
        "El mejor sitio para mi coloración y manicura. Además, los recordatorios de cita son geniales, nunca se me olvida cuándo tengo que ir. ¡Profesionales y eficientes!",
      nombre: "Javier R.",
    },
    {
      mensaje:
        "Siempre me atienden con profesionalidad y el ambiente es muy agradable. Reservar online es un plus que valoro mucho. ¡Mi salón de confianza!",
      nombre: "Sofía L.",
    },
  ];


  return (
    <div className="flex flex-col min-h-[100dvh] bg-custom-background-light text-custom-text-dark">
      <header className="fixed top-0 left-0 right-0 z-50 h-20 bg-white shadow-sm border-b border-gray-200 px-6 flex items-center justify-between">

        <Link to="/" className="flex items-center">
          
          <span className="ml-3 text-2xl font-extrabold text-[#1F1F1F]">AgendaFlow</span>
        </Link>

        {/* Menú móvil */}
        <div className="ml-auto lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-7 w-7 text-[#1F1F1F]" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#FFF8FB]">
              <Link to="/" className="flex items-center justify-center py-4">
                <Scissors className="h-7 w-7 text-[#FF69B4]" />
                <span className="ml-2 text-xl font-extrabold text-[#1F1F1F]">Tu Cita Fácil</span>
              </Link>
              <div className="grid gap-4 py-6">
                {["Servicios", "Nosotros", "Testimonios", "Contacto"].map((item) => (
                  <SheetClose asChild key={item}>
                    <Link
                      to="#"
                      className="flex w-full items-center py-2 text-lg font-semibold text-[#1F1F1F] hover:text-[#FF69B4]"
                    >
                      {item}
                    </Link>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Button
                    asChild
                    variant="outline"
                    className="border-[#FF69B4] text-[#FF69B4] hover:bg-[#FF69B4]/10 w-full py-3 text-lg rounded-lg bg-transparent"
                  >
                    <Link to="/login">Iniciar Sesión</Link>
                  </Button>
                </SheetClose>
                <SheetClose asChild>
                  <Button
                    asChild
                    className="bg-[#C71585] hover:bg-[#C71585]/90 text-white w-full py-3 text-lg rounded-lg"
                  >
                    <Link to="register">Registrarse</Link>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Navegación en pantallas grandes */}
        <nav className="ml-auto hidden lg:flex gap-6 items-center">
          {["Servicios", "Nosotros", "Testimonios", "Contacto"].map((item) => (
            <Link
              to="#"
              key={item}
              className="text-base font-medium hover:text-[#FF69B4] text-[#7A7A7A] transition-colors"
            >
              {item}
            </Link>
          ))}
          <Button
            asChild
            variant="outline"
            className="border-[#FF69B4] text-[#FF69B4] hover:bg-[#FF69B4]/10 text-base font-medium px-5 py-2 rounded-lg bg-transparent"
          >
            <Link to="#">Iniciar Sesión</Link>
          </Button>
          <Button
            asChild
            className="bg-[#C71585] hover:bg-[#C71585]/90 text-white text-base font-medium px-5 py-2 rounded-lg"
          >
            <Link to="#">Registrarse</Link>
          </Button>
        </nav>
      </header>

      <main>
        <section className="w-full min-h-[calc(100vh-5rem)] bg-gradient-to-br from-[#FFF8F8] to-[#FFEFF5] py-16 md:py-24 lg:py-28 px-6 sm:px-8 mt-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-[1fr_550px] xl:grid-cols-[1fr_650px] gap-10 lg:gap-16 items-center">

              {/* Texto */}
              <div className="flex flex-col justify-center items-center text-center lg:items-start lg:text-left space-y-6">
                <div className="space-y-4">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-tight text-[#1F1F1F] leading-tight">
                    Tu Salón de Belleza: <br /> Reserva tu momento de estilo.
                  </h1>
                  <p className="max-w-[700px] text-[#7A7A7A] text-base sm:text-lg md:text-xl leading-relaxed">
                    Reserva fácilmente tus tratamientos de cabello, uñas, maquillaje y más. Gestiona tus citas y luce
                    siempre radiante con nuestra plataforma intuitiva y exclusiva para ti.
                  </p>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button
                    asChild
                    className="bg-[#FF69B4] hover:bg-[#FF69B4]/90 text-white px-10 py-5 text-base sm:text-lg rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <Link to="#">Reservar Ahora</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-[#FF69B4] text-[#FF69B4] hover:bg-[#FF69B4]/10 px-10 py-5 text-base sm:text-lg bg-transparent rounded-xl shadow-md transition-all duration-300 hover:scale-105"
                  >
                    <Link to="#">Ver Servicios</Link>
                  </Button>
                </div>
              </div>

              {/* Imagen oculta en móviles */}
              <div className="hidden lg:block">
                <img
                  src="https://impulsapopular.com/wp-content/uploads/2019/06/4504-Pasos-para-abrir-un-sal%C3%B3n-de-belleza.jpg?"
                  alt="Interior de un moderno salón de belleza con sillas de peluquería y espejos."
                  className="rounded-2xl object-cover max-h-[500px] w-full shadow-2xl aspect-video lg:aspect-square"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full min-h-screen bg-[#fef7fb] py-10 px-4 flex flex-col justify-center">
          <div className="max-w-6xl mx-auto text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-2">
              Nuestros Servicios de Belleza
            </h2>
            <p className="text-sm sm:text-base text-[#5f5f5f] max-w-2xl mx-auto">
              Ofrecemos una amplia gama de servicios para realzar tu belleza y bienestar, con la calidad que mereces.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto w-full">
            {servicios.map((item, index) => (
              <Card
                key={index}
                className="flex flex-col items-center text-center px-4 py-5 rounded-xl shadow-sm border bg-white hover:shadow-md transition-all"
              >
                <div className="mb-3">{item.icon}</div>
                <CardHeader className="p-0 mb-1 w-full flex justify-center">
                  <CardTitle className="text-base font-semibold text-[#1a1a1a] text-center">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 text-xs text-[#5f5f5f]">
                  <p>{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="w-full py-20 bg-[#f8f3f7]">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-3">
                Lo que dicen nuestros clientes
              </h2>
              <p className="text-[#5f5f5f] max-w-xl mx-auto text-sm sm:text-base">
                La satisfacción de nuestros clientes es nuestra mejor carta de presentación.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {testimonios.map((t, idx) => (
                <Card key={idx} className="p-6 rounded-xl shadow-md bg-white border border-gray-100">
                  <CardContent className="flex flex-col items-center text-center">
                    <div className="flex items-center mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                      ))}
                    </div>
                    <p className="italic text-sm text-[#333] mb-4">{`"${t.mensaje}"`}</p>
                    <div className="flex items-center space-x-3">
                      <img
                        src="https://impulsapopular.com/wp-content/uploads/2019/06/4504-Pasos-para-abrir-un-sal%C3%B3n-de-belleza.jpg?"
                        alt="Avatar"
                        width={50}
                        height={50}
                        className="rounded-full object-cover"
                      />
                      <div className="font-semibold text-sm text-[#1a1a1a]">{t.nombre}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full min-h-[100vh] py-20 bg-white border-t border-gray-200 flex items-center">
          <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center gap-10">
            <div className="space-y-4 max-w-3xl">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 leading-tight">
                ¿Listo para transformar tu estilo?
              </h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Agenda tu próxima cita con nosotros y descubre la diferencia de un servicio excepcional y una
                experiencia sin igual.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-5 text-base sm:text-lg rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
              >
                <Link to="/reservar">Reservar Mi Cita</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-pink-600 text-pink-600 hover:bg-pink-50 px-8 py-5 text-base sm:text-lg rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
              >
                <Link to="/conocenos">Conocernos Mejor</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-3 sm:flex-row py-8 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-100 bg-[#f9f9f9] text-[#666]">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Tu Cita Fácil. Todos los derechos reservados.
        </p>
        <nav className="sm:ml-auto flex gap-5 sm:gap-7">
          <Link to="/terminos" className="text-sm hover:underline underline-offset-4">
            Términos de Servicio
          </Link>
          <Link to="/privacidad" className="text-sm hover:underline underline-offset-4">
            Privacidad
          </Link>
        </nav>
      </footer>

    </div>
  )
}
