"use client"

import { CalendarPlus } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"
import { generateICSFile, downloadICSFile, createEventDateTime, estimateEventDuration } from "@/lib/calendar-utils"
import type { ScheduleEvent } from "@/types/schedule"

interface AddToCalendarButtonProps {
  event: ScheduleEvent
  eventDate: string
}

export default function AddToCalendarButton({ event, eventDate }: AddToCalendarButtonProps) {
  const { t, language } = useLanguage()

  const eventTypeTranslations = {
    pt: {
      screening: "Exibição",
      masterclass: "Master Class",
      ceremony: "Cerimónia",
      cultural: "Evento Cultural",
      workshop: "Workshop",
      networking: "Networking",
    },
    en: {
      screening: "Film Screening",
      masterclass: "Master Class",
      ceremony: "Ceremony",
      cultural: "Cultural Event",
      workshop: "Workshop",
      networking: "Networking Event",
    },
    fr: {
      screening: "Projection",
      masterclass: "Master Class",
      ceremony: "Cérémonie",
      cultural: "Événement Culturel",
      workshop: "Atelier",
      networking: "Événement Réseautage",
    },
  }

  const getEventDescription = (): string => {
    const typeLabel = eventTypeTranslations[language][event.type]
    const festivalInfo =
      language === "pt"
        ? "KAFUKA African Film Festival 2025"
        : language === "en"
          ? "KAFUKA African Film Festival 2025"
          : "KAFUKA African Film Festival 2025"

    let description = `${typeLabel} - ${festivalInfo}\n\n${event.title}\n\n`

    if (event.description) {
      description += event.description[language] + "\n\n"
    }

    description +=
      language === "pt"
        ? `Local: ${event.venue}\nHorário: ${event.time}\n\nMais informações: https://kafuka.cv`
        : language === "en"
          ? `Venue: ${event.venue}\nTime: ${event.time}\n\nMore information: https://kafuka.cv`
          : `Lieu: ${event.venue}\nHeure: ${event.time}\n\nPlus d'informations: https://kafuka.cv`

    return description
  }

  const handleAddToCalendar = () => {
    const startTime = createEventDateTime(eventDate, event.time)
    const duration = estimateEventDuration(event)
    const endTime = new Date(startTime.getTime() + duration * 60000)

    const calendarEvent = {
      title: `${event.title} - KAFUKA 2025`,
      description: getEventDescription(),
      location: event.venue,
      startTime,
      endTime,
    }

    const icsContent = generateICSFile(calendarEvent)
    const filename = `kafuka-${event.id}.ics`
    downloadICSFile(icsContent, filename)
  }

  return (
    <button
      onClick={handleAddToCalendar}
      className="inline-flex items-center gap-2 px-4 py-2 bg-sand/10 text-sand rounded-lg hover:bg-sand/20 transition-colors font-medium border border-primary/20 whitespace-nowrap"
      title={t("addToCalendar")}
    >
      <CalendarPlus className="w-4 h-4" />
      <span className="hidden sm:inline">{t("addToCalendar")}</span>
    </button>
  )
}
