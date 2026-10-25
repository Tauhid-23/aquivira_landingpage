import type { Metadata } from "next"
import Link from "next/link"
import { Droplet, Zap, Shield, Leaf, ArrowRight, Check, Award, Flame, Phone } from "lucide-react"
import Navbar from "@/components/global/Navbar"
import Footer from "@/components/global/Footer"
import { TAGLINE, AWARDS, FAQS } from "@/lib/data/siteData"
import { HELPLINE_PHONE, HELPLINE_PHONE_RAW } from "@/lib/data/checkoutData"

export const metadata: Metadata = {
  title: "AquiVira — Engineered for Purity, Powered by Nature",
  description:
    "Experience crisp, cool, and safe drinking water with our 100% natural clay purifier. Zero plastic, zero electricity, removes 80% heavy metals and 90% microbes.",
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <section className="section-padding bg-white relative overflow-hidden">
          <div className="container-wide">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Left Column */}
              <div className="lg:col-span-7 fade-in-up">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-800 text-xs font-bold mb-6 border border-amber-500/20">
                  <Flame className="w-4 h-4 text-amber-600" />
                  Limited Stock • 31% Off Launch Offer (৳9,999)
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 text-balance">
                  {TAGLINE}
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed text-balance">
                  Experience crisp, cool, and safe drinking water with our 100% natural clay purifier. No plastics, zero electricity—just gravity and earth working together to filter out 80% of heavy metals and 90% of microbes.
                </p>

                {/* Key Metrics Strip */}
                <div className="flex flex-wrap gap-6 mb-10 text-sm font-semibold text-stone-700">
                  <div className="flex items-center gap-2">
                    <Leaf className="w-5 h-5 text-primary" />
                    <span>100% Plastic-Free</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-primary" />
                    <span>Zero Electricity</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Droplet className="w-5 h-5 text-primary" />
                    <span>Natural Evaporative Cooling</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/order" className="btn-primary text-base !px-8 !py-4 shadow-lg">
                    Shop the Clay Purifier
                  </Link>
                  <Link href="/product" className="btn-secondary text-base !px-8 !py-4">
                    Discover the Process
                  </Link>
                </div>

                <div className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
                  <Phone className="w-3.5 h-3.5 text-primary" />
                  <span>Helpline & Order Support: <a href={`tel:${HELPLINE_PHONE_RAW}`} className="font-bold underline text-foreground">{HELPLINE_PHONE}</a></span>
                </div>
              </div>

              {/* Right Column: Hero Image */}
              <div className="lg:col-span-5 slide-in-right flex justify-center">
                <div className="relative w-full max-w-md">
                  <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-b from-stone-50 to-stone-100 border border-stone-200 flex items-center justify-center p-6">
                    <img
                      src="/aquivira-water-purifier.png"
                      alt="AquiVira Natural Clay Water Purifier"
                      className="w-full h-full object-contain filter drop-shadow-xl"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-white px-5 py-3 rounded-2xl shadow-xl border border-stone-100 hidden sm:block">
                    <p className="text-[11px] font-bold text-muted-foreground uppercase">Filter Longevity</p>
                    <p className="text-base font-extrabold text-primary">6,000+ to 8,000 Liters</p>
                    <p className="text-[10px] text-stone-500">20L/day for ~10 to 13 months</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. The 3 Pillars Section */}
        <section className="section-padding bg-secondary/50 border-y border-border">
          <div className="container-wide">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Pure Water, Grounded in Principles</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Built specifically to solve Bangladesh's water purification challenges without plastic waste or power bills.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Pillar 1 */}
              <div className="bg-white rounded-3xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <Leaf className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">1. Zero Plastic</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Housed in pure, high-fired clay, ensuring no microplastics ever touch your drinking water. 100% biodegradable body that returns safely to the earth.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="bg-white rounded-3xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <Zap className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">2. Off-the-Grid Purification</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Relies entirely on gravity and multi-stage natural filtration. Pure, uninterrupted drinking water, even during load shedding and power cuts.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="bg-white rounded-3xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <Droplet className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">3. Natural Cooling</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  The breathable clay body naturally regulates temperature through micro-porous evaporative transpiration, delivering refreshing cool water all day long.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Dedicated "The Magic of Natural Clay" Section */}
        <section className="section-padding bg-white">
          <div className="container-wide">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-md">
                  <div className="rounded-3xl overflow-hidden bg-gradient-to-b from-stone-100 via-stone-50 to-stone-100 border border-border shadow-xl p-3 sm:p-4 flex items-center justify-center">
                    <img
                      src="/aquivira-authentic-purifier.jpg"
                      alt="Authentic AquiVira Handcrafted Terracotta Water Purifier with Heritage Motifs"
                      className="w-full h-auto max-h-[580px] object-contain rounded-2xl shadow-sm"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-2 sm:-right-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-stone-200 flex items-center gap-2.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <div>
                      <p className="text-[11px] font-bold text-stone-900 leading-tight">Authentic Handcrafted Terracotta</p>
                      <p className="text-[10px] text-stone-500">Traditional motifs & food-grade tap</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <span className="text-xs font-bold uppercase tracking-wider text-primary mb-2 block">
                  Natural Material Science
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                  The Magic of Natural Clay
                </h2>
                <div className="space-y-4 text-muted-foreground text-base leading-relaxed">
                  <p>
                    For centuries, clay has been trusted to store and cool water naturally. We&apos;ve taken this age-old wisdom and engineered it for the modern home.
                  </p>
                  <p>
                    Unlike synthetic materials, our clay vessels &ldquo;breathe.&rdquo; This micro-porosity allows for natural evaporative cooling, keeping your water crisp and refreshing without taking up space in a refrigerator.
                  </p>
                  <p>
                    At the end of its decades-long lifecycle, the clay body safely returns to the earth, leaving zero footprint.
                  </p>
                </div>

                {/* Craftsmanship & Material Highlights */}
                <div className="mt-6 grid sm:grid-cols-2 gap-3 pt-6 border-t border-border">
                  <div className="flex items-start gap-2.5 text-xs">
                    <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold flex-shrink-0 mt-0.5">✓</span>
                    <span className="text-stone-700"><strong>Handcrafted Terracotta:</strong> Kiln-fired by master artisans in Rajshahi.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs">
                    <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold flex-shrink-0 mt-0.5">✓</span>
                    <span className="text-stone-700"><strong>Natural Cooling:</strong> Water naturally 4°C–6°C cooler with zero power.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs">
                    <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold flex-shrink-0 mt-0.5">✓</span>
                    <span className="text-stone-700"><strong>100% Plastic-Free:</strong> Zero microplastics, BPA, or chemical leaching.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs">
                    <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold flex-shrink-0 mt-0.5">✓</span>
                    <span className="text-stone-700"><strong>Long-Life Cartridge:</strong> 6,000+ to 8,000 Liters (20+ L/day).</span>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link href="/product" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline">
                    Explore the Science of Clay <ArrowRight className="w-4 h-4" />
                  </Link>
                  <span className="text-stone-300">•</span>
                  <Link href="/clay-care-guide" className="inline-flex items-center gap-2 text-sm font-bold text-stone-600 hover:text-primary">
                    Read the Clay Care Guide <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Awards & Accolades Banner */}
        <section className="py-16 bg-stone-900 text-white">
          <div className="container-wide px-4">
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-2 block">
                Recognitions & Milestones
              </span>
              <h2 className="text-3xl font-bold">Validated by National Competitions & Accelerators</h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {AWARDS.map((award, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-400/40 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center font-bold text-lg mb-4">
                    {award.short}
                  </div>
                  <h3 className="font-bold text-base mb-2">{award.title}</h3>
                  <p className="text-xs text-stone-400 leading-relaxed">{award.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. FAQ Accordion Snippet */}
        <section id="faq" className="section-padding bg-secondary/30">
          <div className="container-wide max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-3">Frequently Asked Questions</h2>
              <p className="text-muted-foreground text-sm">Everything you need to know about purchasing and maintaining your AquiVira.</p>
            </div>

            <div className="space-y-4">
              {FAQS.map((faq, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 border border-border shadow-sm">
                  <h3 className="font-bold text-base mb-2">{faq.question}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link href="/clay-care-guide" className="text-sm font-semibold text-primary hover:underline">
                View the Full Clay Care & Maintenance Guide →
              </Link>
            </div>
          </div>
        </section>

        {/* 6. Active Call To Action Banner */}
        <section className="section-padding bg-gradient-to-br from-amber-600 via-amber-700 to-stone-800 text-white text-center">
          <div className="container-wide max-w-3xl">
            <span className="inline-block px-4 py-1 rounded-full text-xs font-bold bg-white/20 text-white mb-4">
              Active Production Batch
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Ready for Clean Water, Naturally?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto">
              Get the AquiVira Clay Purifier for ৳9,999 (31% off). Free delivery across Bangladesh, Cash on Delivery available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/order" className="px-8 py-4 bg-white text-stone-900 font-bold rounded-full hover:bg-stone-100 transition-colors shadow-xl">
                Order Your Purifier Now
              </Link>
              <a
                href={`tel:${HELPLINE_PHONE_RAW}`}
                className="px-8 py-4 bg-white/10 text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-colors"
              >
                Call Helpline: {HELPLINE_PHONE}
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
