import type { Metadata } from "next"
import Link from "next/link"
import { Droplet, Sparkles, AlertCircle, Check, Phone, ArrowRight } from "lucide-react"
import Navbar from "@/components/global/Navbar"
import Footer from "@/components/global/Footer"
import { HELPLINE_PHONE, HELPLINE_PHONE_RAW } from "@/lib/data/checkoutData"
import UnboxingRitualGuide from "@/components/care/UnboxingRitualGuide"

export const metadata: Metadata = {
  title: "Clay Care Guide | Maintenance, Curing & Optimization",
  description:
    "Official care and maintenance manual for the AquiVira Natural Clay Water Purifier. Learn the initial curing ritual, chemical-free cleaning, and cooling optimization.",
}

export default function ClayCareGuidePage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section className="section-padding bg-gradient-to-b from-stone-50 to-white border-b border-border text-center">
          <div className="container-wide max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">
              Official Care Manual
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6">
              Caring for Your Living Clay Vessel.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Crafted from 100% natural earth, your AquiVira purifier is built to last for years. Follow these simple rituals to ensure crisp, sweet, and refreshing water every day.
            </p>
          </div>
        </section>

        {/* 5-Step Unboxing & Curing Ritual */}
        <section className="section-padding bg-white">
          <div className="container-wide max-w-4xl">
            <UnboxingRitualGuide />
          </div>
        </section>

        {/* Cleaning & Maintenance Rules */}
        <section className="section-padding bg-secondary/30 border-t border-border">
          <div className="container-wide max-w-4xl">
            <div className="text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-primary mb-2 block">
                Routine Care
              </span>
              <h2 className="text-3xl font-bold mb-4">Golden Rules of Cleaning</h2>
              <p className="text-muted-foreground text-sm">
                Preserve pure water taste and prolong cartridge lifespan up to 8,000 Liters.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-3xl p-8 border border-border">
                <h3 className="font-bold text-lg mb-4 text-emerald-600 flex items-center gap-2">
                  <Check className="w-5 h-5" /> What to DO
                </h3>
                <ul className="space-y-3 text-xs text-muted-foreground leading-relaxed">
                  <li>• Clean the interior once every 2–3 weeks using warm fresh water and a clean, dedicated soft-bristle brush.</li>
                  <li>• Gently rinse the top surface of the biosand pre-filter under running tap water if fine sediment slows gravity flow.</li>
                  <li>• Place the vessel in a well-ventilated, breezy dining room area to maximize natural evaporative cooling (~4°C to 6°C).</li>
                </ul>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-border">
                <h3 className="font-bold text-lg mb-4 text-red-600 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" /> What NEVER to Do
                </h3>
                <ul className="space-y-3 text-xs text-muted-foreground leading-relaxed">
                  <li>• <strong>NEVER use soap, detergent, or bleach.</strong> The micro-porous clay will absorb synthetic chemicals and alter water taste.</li>
                  <li>• Do not scrub the exterior with abrasive steel wool wire scourers.</li>
                  <li>• Do not pour boiling water directly into the cold clay vessel to prevent sudden thermal shock.</li>
                </ul>
              </div>
            </div>

            <div className="mt-12 p-6 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-center justify-between gap-4">
              <div>
                <strong>Need help with maintenance or cartridge replacement?</strong> Contact our helpline for immediate guidance.
              </div>
              <a href={`tel:${HELPLINE_PHONE_RAW}`} className="px-4 py-2 bg-amber-600 text-white font-bold rounded-lg hover:bg-amber-700 flex-shrink-0">
                Call {HELPLINE_PHONE}
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
