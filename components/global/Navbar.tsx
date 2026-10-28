"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Menu, X, Phone } from "lucide-react"
import { NAV_LINKS } from "@/lib/data/siteData"
import { HELPLINE_PHONE, HELPLINE_PHONE_RAW } from "@/lib/data/checkoutData"

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const isActive = (href: string) => {
    const path = href.split("#")[0]
    return path === "/" ? pathname === "/" : pathname.startsWith(path)
  }

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container-wide px-4 md:px-8 py-3 flex items-center justify-between gap-4">
        <Link href="/" className="h-11 w-auto flex-shrink-0" aria-label="AquiVira home">
          <img src="/aquivira-logo.png" alt="AquiVira" className="h-full w-auto object-contain" />
        </Link>

        <nav className="hidden lg:flex gap-5 xl:gap-7 items-center" aria-label="Main">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive(link.href) ? "text-primary" : "text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href={`tel:${HELPLINE_PHONE_RAW}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-primary"
          >
            <Phone className="w-3.5 h-3.5" /> {HELPLINE_PHONE}
          </a>
          <Link href="/order" className="btn-primary text-sm !px-6 !py-3">
            Order Now
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <nav className="lg:hidden bg-white border-t border-border px-4 py-4 flex flex-col gap-1" aria-label="Mobile">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium py-3 px-2 rounded-lg hover:bg-secondary ${
                isActive(link.href) ? "text-primary font-semibold" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/clay-care-guide"
            className={`text-sm font-medium py-3 px-2 rounded-lg hover:bg-secondary ${
              pathname === "/clay-care-guide" ? "text-primary font-semibold" : ""
            }`}
          >
            Clay Care Guide
          </Link>
          <Link href="/order" className="btn-primary text-sm w-full mt-3">
            Order Now — ৳9,999
          </Link>
          <a href={`tel:${HELPLINE_PHONE_RAW}`} className="text-center text-xs font-semibold text-muted-foreground mt-3">
            Helpline: {HELPLINE_PHONE}
          </a>
        </nav>
      )}
    </header>
  )
}
