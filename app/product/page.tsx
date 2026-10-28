import type { Metadata } from "next"
import Link from "next/link"
import { Check, Droplet, Shield, Zap, ArrowRight, Sparkles, AlertCircle } from "lucide-react"
import Navbar from "@/components/global/Navbar"
import Footer from "@/components/global/Footer"
import { FILTER_LAYERS } from "@/lib/data/siteData"
import { HELPLINE_PHONE, HELPLINE_PHONE_RAW } from "@/lib/data/checkoutData"
import ArtisanKilnStamp from "@/components/artisan/ArtisanKilnStamp"
import LabTestCertModal from "@/components/lab/LabTestCertModal"
import CoolingSimulator from "@/components/interactive/CoolingSimulator"
import WaterQualitySimulator from "@/components/interactive/WaterQualitySimulator"

export const metadata: Metadata = {
  title: "The Science of Clay | AquiVira Water Purification Technology",
  description:
    "Filtration driven by gravity, perfected by science. Explore the 3-layer natural filter cartridge, evaporative cooling physics, and verified laboratory test results.",
}

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Header */}
        <section className="section-padding bg-gradient-to-b from-stone-50 to-white border-b border-border text-center">
          <div className="container-wide max-w-3xl">
            <div className="flex justify-center mb-4">
              <ArtisanKilnStamp variant="compact" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">
              Natural Gravity Engineering
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6">
              Filtration Driven by Gravity, Perfected by Science.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Inside the natural clay body lies a rigorous, multi-layered filtration engine designed to capture impurities while letting essential minerals flow through.
            </p>
          </div>
        </section>

        {/* Section 1: The 3-Layer Filtration Engine */}
        <section className="section-padding bg-white">
          <div className="container-wide">
            <div className="text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-primary mb-2 block">
                Filtration Architecture
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Inside the Multi-Layer Cartridge</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
                Rated for 6,000+ Liters (and up to 8,000 Liters with routine care) — providing 10 to 13 months of pure drinking water for a family consuming 20L daily.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {FILTER_LAYERS.map((layer, index) => (
                <div key={layer.id} className="p-8 rounded-3xl bg-secondary/30 border border-border flex flex-col justify-between">
                  <div>
                    <span className="w-10 h-10 rounded-full bg-primary/10 text-primary font-bold text-sm flex items-center justify-center mb-6">
                      {index + 1}
                    </span>
                    <h3 className="text-xl font-bold mb-3">{layer.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {layer.body}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-border/60 flex items-center gap-2 text-xs font-semibold text-primary">
                    <Check className="w-4 h-4" /> Natural non-synthetic media
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2: Head-to-Head Comparison: Clay vs. Electric RO */}
        <section className="section-padding bg-stone-900 text-white">
          <div className="container-wide">
            <div className="text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-2 block">
                Comparison
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Conventional Electric RO vs. AquiVira Clay</h2>
              <p className="text-stone-400 max-w-2xl mx-auto text-sm">
                Why synthetic plastic and high-power RO systems fall short in Bangladeshi households.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="border-b border-white/10 text-xs font-bold uppercase tracking-wider text-stone-400">
                    <th className="py-4 px-6">Feature / Metric</th>
                    <th className="py-4 px-6 text-stone-400">Industrial Electric RO / UV</th>
                    <th className="py-4 px-6 text-amber-400 font-bold bg-white/5 rounded-t-xl">AquiVira Natural Clay Purifier</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  <tr>
                    <td className="py-4 px-6 font-semibold">Material Housing</td>
                    <td className="py-4 px-6 text-stone-400">Synthetic PVC / ABS plastic</td>
                    <td className="py-4 px-6 bg-white/5 font-semibold text-emerald-400">100% High-Fired Natural Clay</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-semibold">Microplastics Risk</td>
                    <td className="py-4 px-6 text-stone-400">High (plastic leaches in heat)</td>
                    <td className="py-4 px-6 bg-white/5 font-semibold text-emerald-400">Zero (100% plastic-free vessel)</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-semibold">Electricity Usage</td>
                    <td className="py-4 px-6 text-stone-400">Requires 24/7 power; fails in blackouts</td>
                    <td className="py-4 px-6 bg-white/5 font-semibold text-emerald-400">Zero Electricity (Gravity-powered)</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-semibold">Water Wastage</td>
                    <td className="py-4 px-6 text-stone-400">Wastes 3–4L for every 1L purified</td>
                    <td className="py-4 px-6 bg-white/5 font-semibold text-emerald-400">Zero Water Wasted (100% Yield)</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-semibold">Water Temperature</td>
                    <td className="py-4 px-6 text-stone-400">Lukewarm room temperature</td>
                    <td className="py-4 px-6 bg-white/5 font-semibold text-emerald-400">Naturally cooled (~4°C to 6°C drop)</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-semibold">Water Chemistry</td>
                    <td className="py-4 px-6 text-stone-400">Stripped demineralized &ldquo;dead&rdquo; water</td>
                    <td className="py-4 px-6 bg-white/5 font-semibold text-emerald-400">Balanced, alkaline & mineralized</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-semibold">Environmental End of Life</td>
                    <td className="py-4 px-6 text-stone-400">10–15 kg toxic landfill e-waste</td>
                    <td className="py-4 px-6 bg-white/5 font-semibold text-emerald-400">100% Biodegradable return to soil</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 3: Natural Evaporative Cooling Physics */}
        <section className="section-padding bg-white">
          <div className="container-wide">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6">
                <span className="text-xs font-bold uppercase tracking-wider text-primary mb-2 block">
                  Thermodynamic Science
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                  The Physics of Evaporative Cooling
                </h2>
                <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                  <p>
                    Unlike synthetic containers, our unglazed high-fired clay vessel breathes. Micro-capillaries within the clay walls draw microscopic amounts of water molecules to the outer surface.
                  </p>
                  <p>
                    As ambient air circulates across the vessel, this surface moisture evaporates, naturally absorbing the latent heat of vaporization directly from the interior water column.
                  </p>
                  <p>
                    This cools the stored drinking water by approximately <strong>4°C to 6°C below room temperature</strong> naturally—giving you crisp, chilled water without wasting electricity or filling up your refrigerator.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="p-8 rounded-3xl bg-secondary/40 border border-border">
                  <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <Droplet className="w-5 h-5 text-primary" /> Verified Laboratory Metrics
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between py-2 border-b border-border">
                      <span className="text-stone-600">Heavy Metal Removal (Arsenic, Lead, Iron)</span>
                      <span className="font-bold text-primary">~80%</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-border">
                      <span className="text-stone-600">Microbial Pathogen Clearance (E. Coli, Cysts)</span>
                      <span className="font-bold text-primary">~90%</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-border">
                      <span className="text-stone-600">Sediment & Turbidity Clarity</span>
                      <span className="font-bold text-primary">99%</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-border">
                      <span className="text-stone-600">Cartridge Rated Lifespan</span>
                      <span className="font-bold text-stone-900">6,000+ to 8,000 Liters</span>
                    </div>
                    <div className="flex justify-between py-2 text-xs text-stone-500">
                      <span>Daily Family Usage Standard</span>
                      <span>20+ Liters / day</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border flex justify-end">
                    <LabTestCertModal variant="button" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Interactive Thermodynamic Cooling Simulator */}
        <section className="section-padding bg-stone-50 border-t border-border">
          <div className="container-wide">
            <CoolingSimulator />
          </div>
        </section>

        {/* Section 5: Regional Water Contaminant Analyzer */}
        <section className="section-padding bg-white border-t border-border">
          <div className="container-wide">
            <WaterQualitySimulator />
          </div>
        </section>

        {/* Section 6: Call to Action */}
        <section className="py-16 bg-secondary/50 border-t border-border text-center">
          <div className="container-wide max-w-2xl px-4">
            <h2 className="text-3xl font-bold mb-4">Experience Pure Water in Your Home</h2>
            <p className="text-muted-foreground text-sm mb-8">
              Available now for ৳9,999 with 1 pre-installed filter cartridge. Free nationwide shipping.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/order" className="btn-primary !px-8 !py-4 shadow-lg text-sm">
                Order Your Purifier (৳9,999)
              </Link>
              <Link href="/clay-care-guide" className="btn-secondary !px-8 !py-4 text-sm">
                Read the Clay Care Guide
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
