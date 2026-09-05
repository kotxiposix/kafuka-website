"use client"

import { useState } from "react"
import Image from "next/image"
import { Poppins } from "next/font/google"
import { Clock, Calendar, MapPin } from "lucide-react"
import type { Film } from "@/types/film"
import { useLanguage } from "@/contexts/LanguageContext"
import FilmModal from "./FilmModal"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

interface FilmCardProps {
  film: Film
}

export default function FilmCard({ film }: FilmCardProps) {
  const { language } = useLanguage()
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div
        onClick={() => setIsModalOpen(true)}
        className="bg-sand/10 backdrop-blur-sm rounded-lg border border-primary/20 overflow-hidden hover:bg-sand/20 transition-all duration-300 cursor-pointer group"
      >
        <div className="aspect-[2/3] relative overflow-hidden">
          <Image
            src={film.poster || "/placeholder.svg"}
            alt={film.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <h3 className={`text-lg font-semibold text-text-light mb-2 line-clamp-2 ${poppins.className}`}>
            {film.title}
          </h3>
          <p className="text-primary text-sm font-medium mb-2">{film.director}</p>
          <div className="flex items-center gap-2 text-sand text-xs mb-2">
            <span>{film.country}</span>
            <span>•</span>
            <span>{film.year}</span>
          </div>
          <div className="flex items-center gap-1 text-sand text-xs">
            <Clock className="w-3 h-3" />
            <span>{film.duration} min</span>
          </div>
          {film.screeningDate && (
            <div className="mt-3 pt-3 border-t border-primary/20">
              <div className="flex items-center gap-2 text-sand text-xs mb-1">
                <Calendar className="w-3 h-3" />
                <span>{film.screeningDate}</span>
                {film.screeningTime && <span>às {film.screeningTime}</span>}
              </div>
              {film.venue && (
                <div className="flex items-center gap-2 text-sand text-xs">
                  <MapPin className="w-3 h-3" />
                  <span>{film.venue}</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <FilmModal film={film} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
