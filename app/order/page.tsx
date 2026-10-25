import type { Metadata } from "next"
import CheckoutPanel from "@/components/checkout/CheckoutPanel"
import Link from "next/link"
import { ArrowLeft, Phone } from "lucide-react"
import { HELPLINE_PHONE, HELPLINE_PHONE_RAW } from "@/lib/data/checkoutData"

export const metadata: Metadata = {
  title: "Order Your AquiVira Clay Purifier | Active Dispatch",
  description:
    "Order the AquiVira handcrafted natural clay water purifier. Cash on delivery available across Bangladesh. 100% plastic-free, zero electricity.",
}

export default function OrderPage() {
  return (
    <div className="min-h-screen bg-[#FBF9F5] text-stone-900 pb-20">
      {/* Top Bar Navigation */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-stone-600 hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <div className="h-9 w-auto">
            <img src="/aquivira-logo.png" alt="AquiVira" className="h-full w-auto object-contain" />
          </div>
          <a
            href={`tel:${HELPLINE_PHONE_RAW}`}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline bg-primary/5 px-3 py-1.5 rounded-full border border-primary/20"
          >
            <Phone className="w-3.5 h-3.5" /> Helpline: {HELPLINE_PHONE}
          </a>
        </div>
      </header>

      {/* Main Checkout Component */}
      <main>
        <CheckoutPanel />
      </main>

      {/* Trust Footer */}
      <footer className="mt-16 text-center text-xs text-stone-500 max-w-md mx-auto px-4">
        <p>© AquiVira — Engineered for Purity, Powered by Nature.</p>
        <p className="mt-1">Handcrafted in Rajshahi, delivering across all 64 districts of Bangladesh.</p>
        <p className="mt-1 font-semibold text-stone-600">Official Helpline: {HELPLINE_PHONE}</p>
      </footer>
    </div>
  )
}
