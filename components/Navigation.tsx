"use client"

import { useState, useEffect } from "react"
import { Poppins } from "next/font/google"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"
import LanguageSelector from "@/components/LanguageSelector"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

interface NavigationProps {
  currentPage?: string
}

export default function Navigation({ currentPage = "" }: NavigationProps) {
  const { t } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/", label: t("home"), key: "home" },
    { href: "/sobre", label: t("about"), key: "about" },
    { href: "/media", label: t("media"), key: "media" },
    { href: "/programacao", label: t("schedule"), key: "schedule" },
    { href: "/contato", label: t("contact"), key: "contact" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#684c3e]/95 backdrop-blur-md shadow-lg" : "bg-[#684c3e]/90"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <Image src="/kafuka_nav_logo.png" alt="KAFUKA" width={120} height={40} className="h-10 w-auto" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={`font-medium transition-colors ${
                  currentPage === item.key ? "text-charcoal" : "text-text-light hover:text-charcoal"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <LanguageSelector />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-text-light hover:text-charcoal transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#684c3e]/95 backdrop-blur-md border-t border-charcoal/20">
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-2 font-medium transition-colors ${
                    currentPage === item.key ? "text-charcoal bg-text-light/10" : "text-text-light hover:text-charcoal"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-4 py-2">
                <LanguageSelector />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
