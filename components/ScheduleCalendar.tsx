"use client"

import { useState } from "react"
import { Poppins } from "next/font/google"
import { Clock, MapPin, Ticket } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"
import { festivalSchedule } from "@/data/schedule"
import AddToCalendarButton from "./AddToCalendarButton"
import Image from "next/image"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

const eventTypeColors = {
  screening: "bg-primary/20 border-primary text-primary",
  masterclass: "bg-blue-500/20 border-blue-500 text-blue-400",
  ceremony: "bg-purple-500/20 border-purple-500 text-purple-400",
  cultural: "bg-green-500/20 border-green-500 text-green-400",
  workshop: "bg-yellow-500/20 border-yellow-500 text-yellow-400",
  networking: "bg-pink-500/20 border-pink-500 text-pink-400",
}

const eventTypeLabels = {
  pt: {
    screening: "Exibição",
    masterclass: "Master Class",
    ceremony: "Cerimónia",
    cultural: "Cultural",
    workshop: "Workshop",
    networking: "Networking",
  },
  en: {
    screening: "Screening",
    masterclass: "Master Class",
    ceremony: "Ceremony",
    cultural: "Cultural",
    workshop: "Workshop",
    networking: "Networking",
  },
  fr: {
    screening: "Projection",
    masterclass: "Master Class",
    ceremony: "Cérémonie",
    cultural: "Culturel",
    workshop: "Atelier",
    networking: "Réseautage",
  },
}

// Map of all unique venues
const venues = [
  { id: "all", name: { pt: "Todos os Locais", en: "All Venues", fr: "Tous les Lieux" } },
  {
    id: "palacio",
    name: { pt: "Palácio Presidência República", en: "Presidential Palace", fr: "Palais Présidentiel" },
  },
  {
    id: "guimaraes1",
    name: { pt: "Instituto Guimarães Rosa 1", en: "Guimarães Rosa Institute 1", fr: "Institut Guimarães Rosa 1" },
  },
  {
    id: "guimaraes2",
    name: { pt: "Instituto Guimarães Rosa 2", en: "Guimarães Rosa Institute 2", fr: "Institut Guimarães Rosa 2" },
  },
  { id: "quebra-canela", name: { pt: "Quebra Canela", en: "Quebra Canela", fr: "Quebra Canela" } },
  {
    id: "embaixador",
    name: {
      pt: "Residência Embaixador Brasil",
      en: "Brazilian Ambassador's Residence",
      fr: "Résidence Ambassadeur Brésil",
    },
  },
  { id: "arquivo", name: { pt: "Arquivo Nacional", en: "National Archives", fr: "Archives Nationales" } },
]

export default function ScheduleCalendar() {
  const { t, language } = useLanguage()
  const [selectedDay, setSelectedDay] = useState(0)
  const [selectedVenue, setSelectedVenue] = useState("all")

  const currentDay = festivalSchedule[selectedDay]

  // Map day index to image (only show for PT)
  const dayImages: { [key: number]: string } = {
    0: "/schedule/program-day1.jpg",
    2: "/schedule/program-day3.jpg",
    3: "/schedule/program-day4.jpg",
  }

  // Filter events by venue
  const filteredEvents =
    selectedVenue === "all"
      ? currentDay.events
      : currentDay.events.filter((event) => {
          const eventVenue = event.venue.toLowerCase()
          switch (selectedVenue) {
            case "palacio":
              return eventVenue.includes("palácio")
            case "guimaraes1":
              return eventVenue.includes("guimarães rosa 1")
            case "guimaraes2":
              return eventVenue.includes("guimarães rosa 2")
            case "quebra-canela":
              return eventVenue.includes("quebra canela")
            case "embaixador":
              return eventVenue.includes("embaixador")
            case "arquivo":
              return eventVenue.includes("arquivo")
            default:
              return true
          }
        })

  const formatDate = (dateString: string) => {
    const date = new Date(`${dateString}T00:00:00-01:00`) // força fuso Cabo Verde
    const day = date.getDate()
    const monthNames = {
      pt: [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro",
      ],
      en: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      fr: [
        "Janvier",
        "Février",
        "Mars",
        "Avril",
        "Mai",
        "Juin",
        "Juillet",
        "Août",
        "Septembre",
        "Octobre",
        "Novembre",
        "Décembre",
      ],
    }
    return `${day} ${monthNames[language][date.getMonth()]}`
  }

// Helpers para corrigir o dia da semana e fuso horário
const weekdayLabels = {
  pt: ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"],
  en: ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
  fr: ["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"],
}

const parseCvDate = (iso: string) => new Date(`${iso}T00:00:00-01:00`) // fuso Cabo Verde

const getWeekday = (iso: string, lang: "pt"|"en"|"fr") => {
  const d = parseCvDate(iso)
  return weekdayLabels[lang][d.getDay()]
}

  return (
    <div className="mb-12">
      <div className={`text-center mb-8 ${poppins.className}`}>
        <h2 className="text-3xl md:text-4xl font-bold text-text-light mb-2">{t("festivalSchedule")}</h2>
        <p className="text-sand text-lg">{t("festivalDates")}</p>
      </div>

      {/* Day Selector */}
      <div className="flex flex-wrap gap-3 justify-center mb-8">
        {festivalSchedule.map((day, index) => (
          <button
            key={day.date}
            onClick={() => setSelectedDay(index)}
            className={`px-6 py-4 rounded-lg font-medium transition-all ${
              selectedDay === index
                ? "bg-primary text-text-light shadow-lg scale-105"
                : "bg-sand/10 text-sand hover:bg-sand/20 border border-primary/20"
            }`}
          >
            <div className="flex flex-col items-center">
              <span className="text-xs mb-1">{getWeekday(day.date, language)}</span>
              <span className="text-lg font-bold">{formatDate(day.date)}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Program Image Preview - Only show for PT language and if image exists */}
      {language === "pt" && dayImages[selectedDay] && (
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-sand/10 backdrop-blur-sm rounded-lg border border-primary/20 p-4">
            <Image
              src={dayImages[selectedDay] || "/placeholder.svg"}
              alt={`Programa Dia ${selectedDay + 1}`}
              width={1200}
              height={800}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}

      {/* Venue Filter */}
      <div className="max-w-5xl mx-auto mb-6">
        <div className="flex flex-wrap gap-2 justify-center">
          {venues.map((venue) => (
            <button
              key={venue.id}
              onClick={() => setSelectedVenue(venue.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-all text-sm ${
                selectedVenue === venue.id
                  ? "bg-primary text-text-light"
                  : "bg-sand/10 text-sand hover:bg-sand/20 border border-primary/20"
              }`}
            >
              {venue.name[language]}
            </button>
          ))}
        </div>
      </div>

      {/* Events Timeline */}
      <div className="max-w-5xl mx-auto">
        {filteredEvents.length === 0 ? (
          <div className="text-center text-sand py-8">
            <p>{t("noEventsAtVenue")}</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className="bg-sand/10 backdrop-blur-sm rounded-lg border border-primary/20 p-4 hover:bg-sand/20 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  {/* Time */}
                  <div className="flex-shrink-0 md:w-24">
                    <div className="flex items-center gap-2 text-primary font-bold text-lg">
                      <Clock className="w-5 h-5" />
                      <span>{event.time}</span>
                    </div>
                  </div>

                  {/* Event Details */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className={`text-text-light font-semibold text-lg ${poppins.className}`}>{event.title}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full border ${eventTypeColors[event.type]}`}>
                        {eventTypeLabels[language][event.type]}
                      </span>
                    </div>

                    <div className="flex items-start gap-2 text-sand text-sm mb-2">
                      <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <span>{event.venue}</span>
                    </div>

                    {event.description && <p className="text-sand text-sm mt-2">{event.description[language]}</p>}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-2 flex-shrink-0">
                    {/* Add to Calendar */}
                    <AddToCalendarButton event={event} eventDate={currentDay.date} />

                    {/* Registration/Ticket Button */}
                    {event.registrationUrl ? (
                      <a
                        href={event.registrationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-text-light rounded-lg hover:bg-primary/80 transition-colors font-medium whitespace-nowrap"
                      >
                        <Ticket className="w-4 h-4" />
                        {t("register")}
                      </a>
                    ) : event.noRegistrationNeeded ? (
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 text-green-400 rounded-lg font-medium whitespace-nowrap border border-green-500/30">
                        <Ticket className="w-4 h-4" />
                        {t("freeEntry")}
                      </div>
                    ) : (
                      <button
                        disabled
                        className="inline-flex items-center gap-2 px-4 py-2 bg-sand/10 text-sand/50 rounded-lg cursor-not-allowed font-medium whitespace-nowrap"
                      >
                        <Ticket className="w-4 h-4" />
                        {t("comingSoon")}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Legend */}
      <div className="mt-8 max-w-5xl mx-auto">
        <div className="bg-sand/5 rounded-lg p-4 border border-primary/10">
          <h4 className={`text-text-light font-semibold mb-3 text-sm ${poppins.className}`}>{t("legend")}:</h4>
          <div className="flex flex-wrap gap-3">
            {Object.entries(eventTypeColors).map(([type, colorClass]) => (
              <div key={type} className="flex items-center gap-2">
                <span className={`w-3 h-3 rounded-full ${colorClass}`}></span>
                <span className="text-sand text-xs">
                  {eventTypeLabels[language][type as keyof typeof eventTypeLabels.pt]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
