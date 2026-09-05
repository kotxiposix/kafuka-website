import type { ScheduleEvent } from "@/types/schedule"

interface ICSEvent {
  title: string
  description: string
  location: string
  startTime: Date
  endTime: Date
}

export function generateICSFile(event: ICSEvent): string {
  const formatDate = (date: Date): string => {
    return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z"
  }

  const escapeString = (str: string): string => {
    return str.replace(/[,;\\]/g, "\\$&").replace(/\n/g, "\\n")
  }

  const icsContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//KAFUKA African Film Festival//NONSGML v1.0//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `DTSTART:${formatDate(event.startTime)}`,
    `DTEND:${formatDate(event.endTime)}`,
    `SUMMARY:${escapeString(event.title)}`,
    `DESCRIPTION:${escapeString(event.description)}`,
    `LOCATION:${escapeString(event.location)}`,
    `STATUS:CONFIRMED`,
    `SEQUENCE:0`,
    `UID:${Date.now()}@kafuka.cv`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n")

  return icsContent
}

export function downloadICSFile(icsContent: string, filename: string) {
  const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" })
  const link = document.createElement("a")
  link.href = window.URL.createObjectURL(blob)
  link.setAttribute("download", filename)
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

export function createEventDateTime(dateString: string, timeString: string): Date {
  // dateString format: "2025-10-16"
  // timeString format: "17:00"
  const [year, month, day] = dateString.split("-").map(Number)
  const [hours, minutes] = timeString.split(":").map(Number)

  return new Date(year, month - 1, day, hours, minutes, 0)
}

export function estimateEventDuration(event: ScheduleEvent): number {
  // Return duration in minutes
  switch (event.type) {
    case "screening":
      return 120 // 2 hours for film screenings
    case "masterclass":
      return 180 // 3 hours for masterclasses
    case "ceremony":
      return 120 // 2 hours for ceremonies
    case "cultural":
      return 90 // 1.5 hours for cultural events
    case "workshop":
      return 120 // 2 hours for workshops
    case "networking":
      return 120 // 2 hours for networking
    default:
      return 90 // default 1.5 hours
  }
}

export function getGoogleCalendarUrl(event: ICSEvent): string {
  const formatGoogleDate = (date: Date): string => {
    return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z"
  }

  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: event.title,
    details: event.description,
    location: event.location,
    dates: `${formatGoogleDate(event.startTime)}/${formatGoogleDate(event.endTime)}`,
  })

  return `https://calendar.google.com/calendar/render?${params.toString()}`
}

export function getOutlookCalendarUrl(event: ICSEvent): string {
  const formatOutlookDate = (date: Date): string => {
    return date.toISOString()
  }

  const params = new URLSearchParams({
    path: "/calendar/action/compose",
    rru: "addevent",
    subject: event.title,
    body: event.description,
    location: event.location,
    startdt: formatOutlookDate(event.startTime),
    enddt: formatOutlookDate(event.endTime),
  })

  return `https://outlook.live.com/calendar/0/deeplink/compose?${params.toString()}`
}

export function getYahooCalendarUrl(event: ICSEvent): string {
  const formatYahooDate = (date: Date): string => {
    return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z"
  }

  const duration = Math.floor((event.endTime.getTime() - event.startTime.getTime()) / 1000 / 60) // in minutes
  const durationFormatted = `${Math.floor(duration / 60)
    .toString()
    .padStart(2, "0")}${(duration % 60).toString().padStart(2, "0")}`

  const params = new URLSearchParams({
    v: "60",
    view: "d",
    type: "20",
    title: event.title,
    st: formatYahooDate(event.startTime),
    dur: durationFormatted,
    desc: event.description,
    in_loc: event.location,
  })

  return `https://calendar.yahoo.com/?${params.toString()}`
}
