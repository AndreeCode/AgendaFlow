import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid"
import interactionPlugin from '@fullcalendar/interaction'

export default function fullCalendar() {
  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      initialView="timeGridWeek" // ✅ semana por defecto
      headerToolbar={{
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay' // ✅ botones: mes, semana, día
      }}
      
      slotMinTime="09:00:00"  // ⏰ Empieza a las 9:00 a.m.
      slotMaxTime="20:00:00"  // ⏰ Termina a las 8:00 p.m.
      height="auto"
      events={[
        {
          title: 'Reunión con equipo',
          start: '2025-06-30T10:00:00',
          end: '2025-06-30T11:00:00'
        },
        {
          title: 'Entrega de informe',
          start: '2025-07-01T15:30:00',
          end: '2025-07-01T16:30:00'
        }
      ]}
    />
  )
}