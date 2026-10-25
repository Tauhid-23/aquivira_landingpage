import type { Metadata } from "next"
import Link from "next/link"
import { Users, GraduationCap, Heart, ArrowRight } from "lucide-react"
import Navbar from "@/components/global/Navbar"
import Footer from "@/components/global/Footer"
import { TEAM, ADVISOR } from "@/lib/data/siteData"

export const metadata: Metadata = {
  title: "About Us | AquiVira — Origin, Team & Artisan Roots",
  description:
    "Born out of RUET engineering halls. Discover our mission to combine data-driven filtration science with generational clay pottery craftsmanship in Bangladesh.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero & Founders' Note */}
        <section className="section-padding bg-gradient-to-b from-stone-50 to-white border-b border-border">
          <div className="container-wide max-w-4xl">
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block text-center">
              Our Origin & Vision
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-8 text-center text-balance">
              Rethinking Water for a Sustainable Future.
            </h1>

            {/* The Founders' Note */}
            <div className="bg-secondary/40 border border-border p-8 md:p-12 rounded-3xl relative">
              <span className="text-xs font-bold uppercase tracking-wider text-primary mb-4 block">
                The Founders&apos; Note
              </span>
              <blockquote className="text-base sm:text-lg text-stone-700 leading-relaxed space-y-4 italic">
                <p>
                  &ldquo;We are a team of problem-solvers born out of the engineering halls of RUET. What started as a vision to rethink sustainable technology has grown into AquiVira.&rdquo;
                </p>
                <p>
                  &ldquo;We looked at traditional water purifiers and saw a flawed system: heavy reliance on inconsistent electricity, excessive plastic waste, and stripped, dead water. By combining traditional clay craftsmanship with data-driven filtration science, we engineered a solution that respects both human health and the environment. This is water purification, completely off the grid.&rdquo;
                </p>
              </blockquote>
            </div>
          </div>
        </section>

        {/* The Kumor Artisan Partnership Story */}
        <section className="section-padding bg-white">
          <div className="container-wide">
            <div className="text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-primary mb-2 block">
                Cultural Heritage & Social Impact
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Reviving Bangladesh&apos;s Clay Pottery Craft</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
                Bridging generational pottery wisdom (*Kumors* / মৃৎশিল্পী) with controlled engineering standards.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-secondary/30 border border-border">
                <span className="w-8 h-8 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center mb-4">1</span>
                <h3 className="font-bold text-base mb-2">Natural Silt Sourcing</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Clay sedimented naturally along unpolluted alluvial riverbanks, rich in natural minerals and free from industrial chemicals.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-secondary/30 border border-border">
                <span className="w-8 h-8 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center mb-4">2</span>
                <h3 className="font-bold text-base mb-2">Artisan Wheel-Throwing</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Master potters shape each chamber by hand, preserving generational heritage and earning dignified living wages.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-secondary/30 border border-border">
                <span className="w-8 h-8 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center mb-4">3</span>
                <h3 className="font-bold text-base mb-2">1000°C+ Kiln Sintering</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Controlled thermal curves create exact micro-capillaries for evaporative cooling while guaranteeing years of durability.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-secondary/30 border border-border">
                <span className="w-8 h-8 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center mb-4">4</span>
                <h3 className="font-bold text-base mb-2">Return to Soil</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Zero plastic waste. At the end of its decades-long lifecycle, the unglazed clay vessel safely biodegrades into harmless earth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team Grid */}
        <section className="section-padding bg-secondary/30 border-t border-border">
          <div className="container-wide">
            <div className="text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-primary mb-2 block">
                The Core Team
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Leadership & Engineering Readiness</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
                Driving AquiVira&apos;s mission across business, materials engineering, and operational execution.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {TEAM.map((member, i) => (
                <div key={i} className="bg-white rounded-3xl p-6 border border-border shadow-sm text-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 bg-stone-100 border-2 border-primary/20">
                    <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                  <p className="text-xs font-bold text-primary mb-3">{member.role}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{member.bio}</p>
                </div>
              ))}
            </div>

            {/* Academic Advisor Highlight */}
            <div className="mt-8 max-w-2xl mx-auto bg-white rounded-3xl p-6 md:p-8 border border-border shadow-sm text-center">
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 bg-stone-100 border-2 border-primary/20">
                <img src={ADVISOR.photo} alt={ADVISOR.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-bold text-lg mb-1">{ADVISOR.name}</h3>
              <p className="text-xs font-bold text-primary mb-3">{ADVISOR.role}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{ADVISOR.bio}</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
