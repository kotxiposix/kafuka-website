"use client"
import { Poppins } from "next/font/google"
import Image from "next/image"
import { Calendar, MapPin } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

export default function Home() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-charcoal">
      <Navigation currentPage="home" />

      {/* Hero Section */}
      <main className="pt-20 pb-8">
        <div className="container mx-auto px-4 py-12">
          {/* Festival Banner */}
          <div className="mb-12 w-full max-w-[900px] mx-auto">
            <Image
              src="/kafuka_banner.jpg"
              alt="KAFUKA African Film Festival 2025 Banner"
              width={900}
              height={450}
              className="w-full h-auto rounded-lg shadow-2xl"
              priority
            />
          </div>

          <div className="text-center mb-16">
            <h1 className={`text-4xl md:text-6xl font-bold text-text-light mb-6 ${poppins.className}`}>
              {t("celebration")}
            </h1>

            <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12 text-sand">
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-primary" />
                <span className="text-xl font-medium">{t("location")}</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-6 h-6 text-primary" />
                <span className="text-xl font-medium">{t("date")}</span>
              </div>
            </div>
          </div>

          {/* Introduction */}
          <section className="max-w-4xl mx-auto mb-16">
            <h2 className={`text-3xl md:text-4xl font-semibold text-text-light mb-8 text-center ${poppins.className}`}>
              {t("whatIsKaff")}
            </h2>
            <p className="text-sand text-lg leading-relaxed text-justify font-medium">{t("description")}</p>
          </section>

          {/* Social Media Call */}
          <section className="text-center mb-16">
            <h3 className={`text-2xl font-semibold text-text-light mb-6 ${poppins.className}`}>{t("followUs")}</h3>
            <div className="flex justify-center gap-8">
              <a
                href="https://youtube.com/@kafukaffcv?sub_confirmation=1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sand hover:text-primary transition-colors font-medium text-lg"
              >
                YouTube
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61576947113476"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sand hover:text-primary transition-colors font-medium text-lg"
              >
                Facebook
              </a>
              <a
                href="https://instagram.com/kafukaffcv"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sand hover:text-primary transition-colors font-medium text-lg"
              >
                Instagram
              </a>
            </div>
          </section>

          {/* Contact */}
          <section className="text-center">
            <p className="text-sand">
              {t("contactUs")}{" "}
              <a href="mailto:contact@kafuka.cv" className="font-semibold text-primary hover:underline transition-all">
                contact@kafuka.cv
              </a>
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
