"use client"

import { Poppins } from "next/font/google"
import { Mail, Youtube, Facebook, Instagram } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-charcoal border-t border-primary/20 py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className={`text-xl font-semibold text-text-light mb-4 ${poppins.className}`}>{t("contactUs")}</h3>
            <div className="space-y-2">
              <a
                href="mailto:contact@kafuka.cv"
                className="flex items-center gap-2 text-sand hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                contact@kafuka.cv
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className={`text-xl font-semibold text-text-light mb-4 ${poppins.className}`}>{t("socialMedia")}</h3>
            <div className="space-y-2">
              <a
                href="https://youtube.com/@kafukaffcv?sub_confirmation=1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sand hover:text-primary transition-colors"
              >
                <Youtube className="w-4 h-4" />
                @kafukaffcv
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61576947113476"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sand hover:text-primary transition-colors"
              >
                <Facebook className="w-4 h-4" />
                @kafukaffcv
              </a>
              <a
                href="https://instagram.com/kafukaffcv"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sand hover:text-primary transition-colors"
              >
                <Instagram className="w-4 h-4" />
                @kafukaffcv
              </a>
            </div>
          </div>

          {/* Festival Info */}
          <div>
            <h3 className={`text-xl font-semibold text-text-light mb-4 ${poppins.className}`}>KAFUKA 2025</h3>
            <div className="space-y-2 text-sand">
              <p>{t("date")}</p>
              <p>{t("location")}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary/20 mt-8 pt-8 text-center">
          <p className="text-sand text-sm">© 2025 KAFUKA African Film Festival. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
