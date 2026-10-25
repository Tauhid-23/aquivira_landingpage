"use client"

import { useState } from "react"
import Link from "next/link"
import { Leaf, Zap, Shield, Heart, Droplet, ArrowRight } from "lucide-react"
import Navbar from "@/components/global/Navbar"
import Footer from "@/components/global/Footer"

export default function ImpactPage() {
  const [familyMembers, setFamilyMembers] = useState(4)

  // Calculations based on 20L average family consumption (~5L/person/day for drinking & cooking)
  const dailyLiters = familyMembers * 5
  const annualLiters = dailyLiters * 365
  const plasticBottlesSaved = Math.round(annualLiters * 2) // 500ml bottles equivalent
  const electricityKwhSaved = Math.round((annualLiters / 1000) * 45) // ~45 kWh per 1000L in typical RO systems
  const co2KgAvoided = Math.round(electricityKwhSaved * 0.6) // ~0.6 kg CO2/kWh in Bangladesh grid

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-stone-50 to-white border-b border-border text-center">
          <div className="container-wide max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">
              Environmental & Social Mission
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6">
              Water Purity Without an Ecological Footprint.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every drop filtered by AquiVira is a victory over plastic waste, recurring electricity costs, and waterborne disease in Bangladesh.
            </p>
          </div>
        </section>

        {/* Interactive Family Impact Calculator */}
        <section className="section-padding bg-white">
          <div className="container-wide max-w-4xl">
            <div className="bg-gradient-to-br from-stone-50 to-secondary/30 p-8 md:p-12 rounded-3xl border border-border shadow-sm">
              <div className="text-center mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-primary mb-1 block">
                  Interactive Calculator
                </span>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">
                  Calculate Your Family&apos;s Annual Environmental Savings
                </h2>
                <p className="text-xs text-muted-foreground">
                  Based on an average daily usage of 20+ Liters for cooking and drinking.
                </p>
              </div>

              {/* Slider Control */}
              <div className="max-w-md mx-auto mb-10 text-center">
                <label className="block text-sm font-bold text-stone-700 mb-2">
                  Household Size: <span className="text-primary text-xl font-extrabold">{familyMembers} {familyMembers === 1 ? "Person" : "Family Members"}</span>
                </label>
                <input
                  type="range"
                  min={1}
                  max={10}
                  value={familyMembers}
                  onChange={(e) => setFamilyMembers(Number(e.target.value))}
                  className="w-full accent-primary h-2 bg-stone-200 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-stone-400 mt-1 font-semibold">
                  <span>1 Person</span>
                  <span>5 Members</span>
                  <span>10+ Members</span>
                </div>
              </div>

              {/* Computed Output Cards */}
              <div className="grid sm:grid-cols-3 gap-6 text-center">
                <div className="p-6 rounded-2xl bg-white border border-border shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-3">
                    <Leaf className="w-6 h-6" />
                  </div>
                  <div className="text-3xl font-extrabold text-stone-900 mb-1">
                    ~{plasticBottlesSaved.toLocaleString()}
                  </div>
                  <p className="text-xs font-bold text-stone-700 uppercase">Plastic Bottles Prevented</p>
                  <p className="text-[11px] text-stone-400 mt-1">Single-use plastic bottles avoided per year</p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-border shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto mb-3">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div className="text-3xl font-extrabold text-stone-900 mb-1">
                    ~{electricityKwhSaved} kWh
                  </div>
                  <p className="text-xs font-bold text-stone-700 uppercase">Grid Electricity Saved</p>
                  <p className="text-[11px] text-stone-400 mt-1">Compared to daily continuous UV/RO purifiers</p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-border shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-3">
                    <Droplet className="w-6 h-6" />
                  </div>
                  <div className="text-3xl font-extrabold text-stone-900 mb-1">
                    {annualLiters.toLocaleString()} L
                  </div>
                  <p className="text-xs font-bold text-stone-700 uppercase">Safe Water Consumed</p>
                  <p className="text-[11px] text-stone-400 mt-1">Naturally cool, mineral-rich drinking water</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Groundwater Realities & Health Dimensions */}
        <section className="section-padding bg-secondary/30 border-t border-border">
          <div className="container-wide">
            <div className="text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-primary mb-2 block">
                Public Health Context
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Addressing Bangladesh&apos;s Water Realities</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
                Engineering a targeted natural barrier against widespread regional groundwater contaminants.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-3xl p-8 border border-border">
                <h3 className="font-bold text-lg mb-2 text-stone-900">Arsenic & Heavy Metals</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Tube-well groundwater across Bangladesh frequently tests positive for dangerous levels of arsenic and dissolved iron. Our multi-stage activated carbon adsorbs ~80% of these dissolved heavy metals.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-border">
                <h3 className="font-bold text-lg mb-2 text-stone-900">Aging Pipe Bacteria</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Municipal tap water in urban hubs suffers from secondary bacterial contamination in transit. The micro-filtration biosand layer blocks ~90% of coliforms, E. Coli, and biological pathogens.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-border">
                <h3 className="font-bold text-lg mb-2 text-stone-900">Microplastics Prevention</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Commercial 20L plastic jars shed millions of microplastic particles when exposed to tropical heat. AquiVira&apos;s pure high-fired clay shell ensures zero plastic touches your drinking water.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-16 bg-white text-center border-t border-border">
          <div className="container-wide max-w-xl px-4">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Join the Movement for Pure Water</h2>
            <p className="text-muted-foreground text-sm mb-6">
              Invest in your family&apos;s health with the AquiVira Clay Purifier for ৳9,999.
            </p>
            <Link href="/order" className="btn-primary !px-8 !py-4 shadow-lg text-sm">
              Order Your Purifier Now
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
