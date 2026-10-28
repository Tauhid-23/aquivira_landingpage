import type { Metadata } from "next"
import Navbar from "@/components/global/Navbar"
import Footer from "@/components/global/Footer"
import HomePageContent from "@/components/home/HomePageContent"

export const metadata: Metadata = {
  title: "AquiVira — Engineered for Purity, Powered by Nature",
  description:
    "Experience crisp, cool, and safe drinking water with our 100% natural clay purifier. Zero plastic, zero electricity, icddr,b tested 0 coliforms, <1 ppb arsenic.",
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      <main className="flex-1">
        <HomePageContent />
      </main>

      <Footer />
    </div>
  )
}
