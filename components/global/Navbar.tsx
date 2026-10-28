"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Menu, X, Phone, Globe } from "lucide-react"
import { NAV_LINKS } from "@/lib/data/siteData"
import { HELPLINE_PHONE, HELPLINE_PHONE_RAW } from "@/lib/data/checkoutData"
import { useLanguage } from "@/lib/i18n/LanguageContext"
import WaterPourAudio from "@/components/sensory/WaterPourAudio"

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const { t, language, setLanguage } = useLanguage()

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const isActive = (href: string) => {
    const path = href.split("#")[0]
    return path === "/" ? pathname === "/" : pathname.startsWith(path)
  }

  const getLocalizedNavLabel = (href: string, defaultLabel: string) => {
    if (href.startsWith("/product")) return t("nav.science", defaultLabel)
    if (href.startsWith("/impact")) return t("nav.impact", defaultLabel)
    if (href.startsWith("/about")) return t("nav.about", defaultLabel)
    if (href.startsWith("/media")) return t("nav.media", defaultLabel)
    if (href.startsWith("/contact")) return t("nav.contact", defaultLabel)
    return defaultLabel
  }

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container-wide px-4 md:px-8 py-2.5 flex items-center justify-between gap-3">
        <Link href="/" className="h-10 sm:h-11 w-auto flex-shrink-0" aria-label="AquiVira home">
          <img src="/aquivira-logo.png" alt="AquiVira" className="h-full w-auto object-contain" />
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex gap-4 xl:gap-6 items-center" aria-label="Main">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive(link.href) ? "text-primary font-semibold" : "text-foreground"
              }`}
            >
              {getLocalizedNavLabel(link.href, link.label)}
            </Link>
          ))}
        </nav>

        {/* Right Controls: Sensory Audio + Language Switcher + Phone + CTA */}
        <div className="hidden lg:flex items-center gap-3 xl:gap-4">
          {/* Sensory Acoustic Stream */}
          <WaterPourAudio />

          {/* Bilingual Language Switcher */}
          <div className="flex items-center border border-stone-200 rounded-full p-0.5 bg-stone-100 text-xs font-bold select-none">
            <button
              type="button"
              onClick={() => setLanguage("en")}
              className={`px-2.5 py-1 rounded-full transition-all ${
                language === "en" ? "bg-white text-stone-900 shadow-xs" : "text-stone-500 hover:text-stone-900"
              }`}
              title="English"
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLanguage("bn")}
              className={`px-2.5 py-1 rounded-full transition-all ${
                language === "bn" ? "bg-primary text-white shadow-xs" : "text-stone-500 hover:text-stone-900"
              }`}
              title="বাংলা"
            >
              বাং
            </button>
          </div>

          <a
            href={`tel:${HELPLINE_PHONE_RAW}`}
            className="hidden xl:inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-primary"
          >
            <Phone className="w-3.5 h-3.5" /> {HELPLINE_PHONE}
          </a>

          <Link href="/order" className="btn-primary text-xs sm:text-sm !px-5 !py-2.5">
            {t("nav.orderNow")}
          </Link>
        </div>

        {/* Mobile Hamburger & Language Quick Switcher */}
        <div className="flex items-center gap-2 lg:hidden">
          {/* Mobile Language Toggle */}
          <div className="flex items-center border border-stone-200 rounded-full p-0.5 bg-stone-100 text-xs font-bold select-none">
            <button
              type="button"
              onClick={() => setLanguage("en")}
              className={`px-2 py-0.5 rounded-full ${language === "en" ? "bg-white text-stone-900 font-extrabold" : "text-stone-500"}`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLanguage("bn")}
              className={`px-2 py-0.5 rounded-full ${language === "bn" ? "bg-primary text-white font-extrabold" : "text-stone-500"}`}
            >
              বাং
            </button>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="p-2 hover:bg-secondary rounded-lg transition-colors"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <nav className="lg:hidden bg-white border-t border-border px-4 py-4 flex flex-col gap-1 shadow-lg" aria-label="Mobile">
          {/* Mobile Audio Pour */}
          <div className="pb-3 pt-1 border-b border-stone-100 flex justify-center">
            <WaterPourAudio />
          </div>

          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium py-3 px-2 rounded-lg hover:bg-secondary ${
                isActive(link.href) ? "text-primary font-semibold" : ""
              }`}
            >
              {getLocalizedNavLabel(link.href, link.label)}
            </Link>
          ))}
          <Link
            href="/clay-care-guide"
            className={`text-sm font-medium py-3 px-2 rounded-lg hover:bg-secondary ${
              pathname === "/clay-care-guide" ? "text-primary font-semibold" : ""
            }`}
          >
            {t("nav.careGuide")}
          </Link>
          <Link href="/order" className="btn-primary text-sm w-full mt-3">
            {t("nav.orderNow")} — ৳9,999
          </Link>
          <a href={`tel:${HELPLINE_PHONE_RAW}`} className="text-center text-xs font-semibold text-muted-foreground mt-3">
            {t("nav.helpline")}: {HELPLINE_PHONE}
          </a>
        </nav>
      )}
    </header>
  )
}

