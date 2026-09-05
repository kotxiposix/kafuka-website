"use client"

import type React from "react"
import { useState } from "react"
import { Poppins, Inter } from "next/font/google"
import { Eye, EyeOff, Lock } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/contexts/LanguageContext"
import LanguageSelector from "@/components/LanguageSelector"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

export default function AdminLogin() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const { t } = useLanguage()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    if (email === "founders@kafuka.cv" && password === "p@Lumi#252FA") {
      setIsLoggedIn(true)
    } else {
      setError(t("invalidCredentials"))
    }

    setIsLoading(false)
  }

  if (isLoggedIn) {
    return <AdminDashboard />
  }

  return (
    <div className={`min-h-screen bg-charcoal flex items-center justify-center ${inter.className}`}>
      <div className="absolute top-4 right-4">
        <LanguageSelector />
      </div>
      <div className="bg-sand/10 backdrop-blur-sm p-8 rounded-lg w-full max-w-md border border-primary/20">
        <div className="text-center mb-8">
          <Lock className="w-12 h-12 text-text-light mx-auto mb-4" />
          <h1 className={`text-2xl font-bold text-text-light ${poppins.className}`}>{t("adminLogin")}</h1>
        </div>

        {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">{error}</div>}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-text-light font-medium mb-2">{t("email")}</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>
          <div>
            <label className="block text-text-light font-medium mb-2">{t("password")}</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 pr-10"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-500"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-primary text-text-light p-3 rounded-lg hover:bg-primary/80 transition-colors disabled:opacity-50"
          >
            {isLoading ? t("loggingIn") : t("login")}
          </button>
        </form>
      </div>
    </div>
  )
}

function AdminDashboard() {
  const { t } = useLanguage()
  const pages = [
    { name: t("home"), path: "/", status: "visible" },
    { name: t("about"), path: "/sobre", status: "visible" },
    { name: t("media"), path: "/media", status: "visible" },
    { name: t("contact"), path: "/contato", status: "visible" },
    { name: t("schedule"), path: "/programacao", status: "visible" },
    { name: "Patrocinadores", path: "/patrocinadores", status: "hidden" },
    { name: "Posts", path: "/posts", status: "hidden" },
  ]

  const handleLogout = () => {
    window.location.reload()
  }

  return (
    <div className={`min-h-screen bg-charcoal ${inter.className}`}>
      <div className="bg-charcoal text-text-light p-4 border-b border-primary/20">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Image src="/kafuka_nav_logo.png" alt="KAFUKA" width={120} height={32} className="h-8 w-auto" />
          </div>
          <div className="flex items-center gap-4">
            <LanguageSelector />
            <button onClick={handleLogout} className="bg-red-600 px-4 py-2 rounded hover:bg-red-700 transition-colors">
              {t("logout")}
            </button>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-text-light mb-8">{t("pageManagement")}</h2>

        <div className="grid gap-6">
          {pages.map((page) => (
            <div key={page.path} className="bg-sand/10 backdrop-blur-sm p-6 rounded-lg border border-primary/20">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-bold text-text-light">{page.name}</h3>
                  <p className="text-sand opacity-70">{page.path}</p>
                </div>
                <div className="flex gap-3">
                  <span
                    className={`px-3 py-1 rounded text-sm font-medium ${
                      page.status === "visible" ? "bg-green-200 text-green-800" : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    {page.status === "visible" ? t("visible") : t("hidden")}
                  </span>
                  <button className="bg-primary text-text-light px-4 py-2 rounded hover:bg-primary/80 transition-colors">
                    {t("editContent")}
                  </button>
                  <button
                    className={`px-4 py-2 rounded transition-colors ${
                      page.status === "visible"
                        ? "bg-red-600 text-text-light hover:bg-red-700"
                        : "bg-green-600 text-text-light hover:bg-green-700"
                    }`}
                  >
                    {page.status === "visible" ? t("hide") : t("publish")}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
