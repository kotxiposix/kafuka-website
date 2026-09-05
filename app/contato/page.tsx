"use client"

import { Poppins } from "next/font/google"
import { Mail, Youtube, Facebook, Instagram } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

export default function Contato() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-charcoal">
      <Navigation currentPage="contact" />

      <main className="pt-20 pb-8">
        <div className="container mx-auto px-4 py-12">
          <h1 className={`text-4xl md:text-5xl font-bold text-text-light mb-12 text-center ${poppins.className}`}>
            {t("contactTitle")}
          </h1>

          <div className="max-w-2xl mx-auto">
            <div className="bg-sand/10 backdrop-blur-sm p-8 rounded-lg border border-primary/20">
              <div className="space-y-8">
                {/* Email */}
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-primary" />
                  <div>
                    <h3 className={`font-semibold text-text-light text-lg ${poppins.className}`}>{t("email")}</h3>
                    <a
                      href="mailto:contact@kafuka.cv"
                      className="text-sand hover:text-primary transition-colors font-medium"
                    >
                      contact@kafuka.cv
                    </a>
                  </div>
                </div>

                {/* Redes Sociais */}
                <div>
                  <h3 className={`font-semibold text-text-light text-lg mb-4 ${poppins.className}`}>
                    {t("socialMedia")}
                  </h3>
                  <div className="space-y-3">
                    <a
                      href="https://youtube.com/@kafukaffcv?sub_confirmation=1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sand hover:text-primary transition-colors font-medium"
                    >
                      <Youtube className="w-5 h-5" />
                      @kafukaffcv
                    </a>
                    <a
                      href="https://www.facebook.com/profile.php?id=61576947113476"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sand hover:text-primary transition-colors font-medium"
                    >
                      <Facebook className="w-5 h-5" />
                      @kafukaffcv
                    </a>
                    <a
                      href="https://instagram.com/kafukaffcv"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sand hover:text-primary transition-colors font-medium"
                    >
                      <Instagram className="w-5 h-5" />
                      @kafukaffcv
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
