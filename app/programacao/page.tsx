"use client"

import { useState } from "react"
import { Poppins } from "next/font/google"
import { useLanguage } from "@/contexts/LanguageContext"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import FilmCard from "@/components/FilmCard"
import ScheduleCalendar from "@/components/ScheduleCalendar"
import { films, filmCategories } from "@/data/films"
import type { FilmCategory } from "@/types/film"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

export default function Programacao() {
  const { t, language } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState<FilmCategory | "all">("all")

  const filteredFilms = selectedCategory === "all" ? films : films.filter((film) => film.category === selectedCategory)

  const getCategoryName = (categoryCode: FilmCategory) => {
    const category = filmCategories.find((c) => c.code === categoryCode)
    return category?.name[language] || categoryCode
  }

  const getCategoryDescription = (categoryCode: FilmCategory) => {
    const category = filmCategories.find((c) => c.code === categoryCode)
    return category?.description[language] || ""
  }

  return (
    <div className="min-h-screen bg-charcoal">
      <Navigation currentPage="schedule" />

      <main className="pt-20 pb-8">
        <div className="container mx-auto px-4 py-12">
          {/* Schedule Calendar - ABOVE everything */}
          <ScheduleCalendar />

          {/* Divider */}
          <div className="my-16 border-t border-primary/20"></div>

          {/* Films Section Title */}
          <h2 className={`text-3xl md:text-4xl font-bold text-text-light mb-4 text-center ${poppins.className}`}>
            {t("allFilms")}
          </h2>
          <p className="text-sand text-center text-lg mb-8">{t("exploreByCategory")}</p>

          {/* Category Filters */}
          <div className="max-w-6xl mx-auto mb-12">
            <div className="flex flex-wrap gap-3 justify-center">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  selectedCategory === "all"
                    ? "bg-primary text-text-light"
                    : "bg-sand/10 text-sand hover:bg-sand/20 border border-primary/20"
                }`}
              >
                {t("allFilms")}
              </button>
              {filmCategories.map((category) => (
                <button
                  key={category.code}
                  onClick={() => setSelectedCategory(category.code)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all ${
                    selectedCategory === category.code
                      ? "bg-primary text-text-light"
                      : "bg-sand/10 text-sand hover:bg-sand/20 border border-primary/20"
                  }`}
                >
                  {category.code}
                </button>
              ))}
            </div>

            {/* Category Description */}
            {selectedCategory !== "all" && (
              <div className="mt-6 text-center">
                <h3 className={`text-2xl font-semibold text-text-light mb-2 ${poppins.className}`}>
                  {getCategoryName(selectedCategory)}
                </h3>
                <p className="text-sand">{getCategoryDescription(selectedCategory)}</p>
              </div>
            )}
          </div>

          {/* Films Grid */}
          {films.length === 0 ? (
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-sand/10 backdrop-blur-sm p-12 rounded-lg border border-primary/20">
                <h3 className={`text-3xl font-bold text-text-light mb-4 ${poppins.className}`}>
                  {t("comingSoon2025")}
                </h3>
                <p className="text-sand text-lg font-medium mb-6">{t("scheduleDescription")}</p>
                <p className="text-sand text-sm">{t("programAnnouncementSoon")}</p>
              </div>
            </div>
          ) : (
            <>
              {filteredFilms.length === 0 ? (
                <div className="text-center text-sand">
                  <p className="text-lg">{t("noFilmsInCategory")}</p>
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                  {filteredFilms.map((film) => (
                    <FilmCard key={film.id} film={film} />
                  ))}
                </div>
              )}

              {/* Film Count */}
              <div className="text-center mt-8 text-sand">
                <p>
                  {t("showing")} {filteredFilms.length} {t("of")} {films.length} {t("films")}
                </p>
              </div>
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
