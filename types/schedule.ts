export interface ScheduleEvent {
  id: string
  title: string
  time: string
  venue: string
  type: "screening" | "masterclass" | "ceremony" | "cultural" | "workshop" | "networking"
  films?: string[] // Film IDs if it's a screening
  description?: {
    pt: string
    en: string
    fr: string
  }
  registrationUrl?: string
  noRegistrationNeeded?: boolean
}

export interface ScheduleDay {
  date: string // Format: "2025-10-16"
  dayName: {
    pt: string
    en: string
    fr: string
  }
  events: ScheduleEvent[]
}
