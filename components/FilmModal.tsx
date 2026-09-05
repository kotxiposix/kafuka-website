"use client"

import { Poppins } from "next/font/google"
import Image from "next/image"
import { X, Clock, Calendar, MapPin, Globe } from "lucide-react"
import type { Film } from "@/types/film"
import { useLanguage } from "@/contexts/LanguageContext"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

interface FilmModalProps {
  film: Film
  isOpen: boolean
  onClose: () => void
}

export default function FilmModal({ film, isOpen, onClose }: FilmModalProps) {
  const { t, language } = useLanguage()

  if (!isOpen) return null

  const synopsis = film.synopsis[language] || film.synopsis.pt

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-charcoal border border-primary/20 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-charcoal border-b border-primary/20 p-4 flex justify-between items-center z-10">
          <h2 className={`text-2xl font-bold text-text-light ${poppins.className}`}>{film.title}</h2>
          <button
            onClick={onClose}
            className="text-sand hover:text-primary transition-colors p-2"
            aria-label={t("close")}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-shrink-0">
              <div className="w-full md:w-64 aspect-[2/3] relative rounded-lg overflow-hidden">
                <Image src={film.poster || "/placeholder.svg"} alt={film.title} fill className="object-cover" />
              </div>
            </div>

            <div className="flex-1">
              <div className="mb-4">
                <h3 className={`text-xl font-semibold text-primary mb-2 ${poppins.className}`}>
                  {t("director")}: {film.director}
                </h3>
                <div className="flex flex-wrap gap-4 text-sand">
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4" />
                    <span>{film.country}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{film.year}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>
                      {film.duration} {t("minutes")}
                    </span>
                  </div>
                </div>
              </div>

              {(film.screeningDate || film.venue) && (
                <div className="mb-4 p-4 bg-sand/10 rounded-lg border border-primary/20">
                  <h4 className={`text-lg font-semibold text-text-light mb-2 ${poppins.className}`}>
                    {t("screeningInfo")}
                  </h4>
                  {film.screeningDate && (
                    <div className="flex items-center gap-2 text-sand mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>{film.screeningDate}</span>
                      {film.screeningTime && <span>às {film.screeningTime}</span>}
                    </div>
                  )}
                  {film.venue && (
                    <div className="flex items-center gap-2 text-sand">
                      <MapPin className="w-4 h-4" />
                      <span>{film.venue}</span>
                    </div>
                  )}
                </div>
              )}

              <div>
                <h4 className={`text-lg font-semibold text-text-light mb-3 ${poppins.className}`}>{t("synopsis")}</h4>
                <p className="text-sand leading-relaxed text-justify">{synopsis}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
