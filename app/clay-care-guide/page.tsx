import type { Metadata } from "next"
import Link from "next/link"
import { Droplet, Sparkles, AlertCircle, Check, Phone, ArrowRight } from "lucide-react"
import Navbar from "@/components/global/Navbar"
import Footer from "@/components/global/Footer"
import { HELPLINE_PHONE, HELPLINE_PHONE_RAW } from "@/lib/data/checkoutData"

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
            <div className="text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-primary mb-2 block">
                First-Time Setup
              </span>
              <h2 className="text-3xl font-bold mb-4">The Initial Curing & Seasoning Ritual</h2>
              <p className="text-muted-foreground text-sm">
                Complete these simple steps when your double-boxed purifier first arrives.
              </p>
            </div>

            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-secondary/30 border border-border flex gap-4 items-start">
                <span className="w-8 h-8 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                <div>
                  <h3 className="font-bold text-base mb-1">Unpack & Inspect</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Carefully unbox your clay chambers and place them on a clean, level surface away from direct gas stove heat.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-secondary/30 border border-border flex gap-4 items-start">
                <span className="w-8 h-8 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                <div>
                  <h3 className="font-bold text-base mb-1">Initial Fresh Water Rinse (Zero Soap)</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Rinse both clay chambers thoroughly with plain fresh water. <strong>Never use chemical detergents, dishwashing liquid, or bleach.</strong>
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-secondary/30 border border-border flex gap-4 items-start">
                <span className="w-8 h-8 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                <div>
                  <h3 className="font-bold text-base mb-1">Install the Multi-Layer Cartridge</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Insert the pre-installed cartridge into the upper chamber seating. Ensure the silicone washer sits flush against the clay base.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-secondary/30 border border-border flex gap-4 items-start">
                <span className="w-8 h-8 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">4</span>
                <div>
                  <h3 className="font-bold text-base mb-1">The First Overnight Flush</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Fill the upper chamber completely with tap water and allow it to filter through overnight. Discard this first batch (or use it to water household plants). This hydrates the clay pores and activates the biosand and carbon.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 flex gap-4 items-start">
                <span className="w-8 h-8 rounded-full bg-emerald-600 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">5</span>
                <div>
                  <h3 className="font-bold text-base mb-1 text-emerald-950">Ready for Daily Pure Water</h3>
                  <p className="text-xs text-emerald-800 leading-relaxed">
                    Refill with fresh water. Your purifier is now primed to deliver 20+ Liters daily of crisp, naturally cool drinking water.
                  </p>
                </div>
              </div>
            </div>
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
