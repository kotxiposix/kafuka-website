"use client"

import { Poppins } from "next/font/google"
import Image from "next/image"
import { X } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

interface TeamMember {
  name: string
  role: string
  image: string
  bio: string
  fullBio?: string
  fullBioEN?: string
  fullBioFR?: string
}

interface TeamModalProps {
  member: TeamMember | null
  isOpen: boolean
  onClose: () => void
}

export default function TeamModal({ member, isOpen, onClose }: TeamModalProps) {
  const { t, language } = useLanguage()

  if (!isOpen || !member) return null

  const getBioForLanguage = () => {
    switch (language) {
      case "en":
        return member.fullBioEN || member.fullBio || member.bio
      case "fr":
        return member.fullBioFR || member.fullBio || member.bio
      default:
        return member.fullBio || member.bio
    }
  }

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-charcoal border border-primary/20 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-charcoal border-b border-primary/20 p-4 flex justify-between items-center">
          <h2 className={`text-2xl font-bold text-text-light ${poppins.className}`}>{member.name}</h2>
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
              <Image
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                width={200}
                height={200}
                className="w-48 h-48 object-cover rounded-lg mx-auto md:mx-0"
              />
            </div>

            <div className="flex-1">
              <h3 className={`text-xl font-semibold text-primary mb-4 ${poppins.className}`}>{member.role}</h3>
              <div className="text-sand leading-relaxed text-justify whitespace-pre-line">{getBioForLanguage()}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
