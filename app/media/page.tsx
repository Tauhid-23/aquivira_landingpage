import type { Metadata } from "next"
import Link from "next/link"
import Navbar from "@/components/global/Navbar"
import Footer from "@/components/global/Footer"
import PhotoGallery from "@/components/PhotoGallery"
import SupportedBy from "@/components/global/SupportedBy"
import { AWARDS } from "@/lib/data/siteData"

export const metadata: Metadata = {
  title: "Media, Press & Awards | AquiVira Recognition & Milestones",
  description:
    "Explore AquiVira's awards, startup competition wins, event photo gallery, and official media coverage across Bangladesh.",
}

export default function MediaPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Header */}
        <section className="section-padding bg-gradient-to-b from-stone-50 to-white border-b border-border text-center">
          <div className="container-wide max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">
              Recognition & Gallery
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6">
              Media, Awards & Milestones.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Visual proof of our startup journey, national competition victories, community testing, and media presence.
            </p>
          </div>
        </section>

        {/* Awards Showcase */}
        <section className="section-padding bg-white">
          <div className="container-wide">
            <div className="text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-primary mb-2 block">
                Official Recognition
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Competitions & Startup Grants</h2>
              <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
                Validated by leading innovation programs, accelerators, and environmental summits in Bangladesh.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {AWARDS.map((award, i) => (
                <div key={i} className="p-8 rounded-3xl bg-secondary/30 border border-border text-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center font-extrabold text-xl mx-auto mb-4">
                    {award.short}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{award.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{award.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Supported By Section */}
        <section id="partners" className="section-padding bg-stone-50 border-t border-border scroll-mt-20">
          <div className="container-wide">
            <SupportedBy
              variant="light"
              badge="Institutional Backing"
              title="Proudly Supported By"
              subtitle="Accelerated by leading global development organizations and international water initiatives."
            />
          </div>
        </section>

        {/* Full Lightbox Photo Gallery Component */}
        <section className="border-t border-border">
          <PhotoGallery />
        </section>
      </main>

      <Footer />
    </div>
  )
}
