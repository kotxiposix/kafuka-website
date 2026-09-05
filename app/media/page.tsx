"use client"

import { Poppins } from "next/font/google"
import { useLanguage } from "@/contexts/LanguageContext"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

export default function Media() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-charcoal">
      <Navigation currentPage="media" />

      <main className="pt-20 pb-8">
        <div className="container mx-auto px-4 py-12">
          <h1 className={`text-4xl md:text-5xl font-bold text-text-light mb-12 text-center ${poppins.className}`}>
            {t("mediaTitle")}
          </h1>

          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-sand/10 backdrop-blur-sm p-12 rounded-lg border border-primary/20">
              <h2 className={`text-3xl font-bold text-text-light mb-4 ${poppins.className}`}>{t("comingSoon")}</h2>
              <p className="text-sand text-lg font-medium">{t("mediaDescription")}</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
