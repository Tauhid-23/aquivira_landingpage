"use client"

import { useState } from "react"
import { ShieldCheck, Award, Flame, MapPin, X, CheckCircle2, Sparkles } from "lucide-react"
import { useLanguage } from "@/lib/i18n/LanguageContext"

interface ArtisanKilnStampProps {
  variant?: "badge" | "seal" | "compact"
  className?: string
}

export default function ArtisanKilnStamp({
  variant = "seal",
  className = "",
}: ArtisanKilnStampProps) {
  const { t, language } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  if (variant === "compact") {
    return (
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 text-amber-900 text-xs font-bold hover:bg-amber-100/80 transition-colors ${className}`}
      >
        <span className="w-2 h-2 rounded-full bg-amber-600 animate-pulse" />
        <span>{t("stamp.title")}</span>
        <span className="text-amber-500">•</span>
        <span className="text-amber-700">{t("stamp.firing")}</span>
      </button>
    )
  }

  return (
    <>
      {/* Interactive Artisan Kiln Medallion */}
      <div
        onClick={() => setIsOpen(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && setIsOpen(true)}
        className={`group relative cursor-pointer select-none rounded-3xl p-5 border border-amber-200/70 bg-gradient-to-br from-amber-50/90 via-[#FBF9F5] to-orange-50/70 shadow-md hover:shadow-xl hover:border-amber-400 transition-all duration-300 transform hover:-translate-y-1 ${className}`}
      >
        <div className="flex items-center gap-4">
          {/* Terracotta Wax Seal Emblem */}
          <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-[#C05621] to-[#78350F] p-0.5 shadow-lg flex-shrink-0 flex items-center justify-center">
            <div className="w-full h-full rounded-[14px] border border-amber-300/40 flex flex-col items-center justify-center text-white text-center p-1">
              <Flame className="w-4 h-4 text-amber-300 mb-0.5" />
              <span className="text-[9px] font-black tracking-widest uppercase leading-none">1000°C</span>
            </div>
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white" />
          </div>

          {/* Text Summary */}
          <div className="flex-1">
            <div className="flex items-center gap-1.5 mb-0.5">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#C05621] bg-orange-100/80 px-2 py-0.5 rounded-full">
                {t("stamp.seal")}
              </span>
              <span className="text-[10px] text-stone-500 flex items-center gap-0.5">
                <MapPin className="w-2.5 h-2.5 text-stone-400" /> {t("stamp.origin")}
              </span>
            </div>
            <h4 className="font-extrabold text-sm text-stone-900 group-hover:text-[#C05621] transition-colors leading-snug">
              {t("stamp.title")}
            </h4>
            <p className="text-[11px] text-stone-600 mt-0.5 flex items-center gap-1">
              <span>{t("stamp.firing")}</span>
              <span className="text-stone-300">•</span>
              <span className="text-amber-800 font-semibold underline decoration-dotted underline-offset-2">
                {language === "bn" ? "সনদপত্র দেখুন" : "View Provenance"}
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Provenance & Authenticity Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-full max-w-lg rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-stone-200 text-stone-900 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Background Terracotta Tint */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-100/60 to-transparent rounded-full -mr-20 -mt-20 pointer-events-none" />

            {/* Header */}
            <div className="flex items-start justify-between gap-4 mb-6 relative">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#C05621] text-white flex items-center justify-center shadow-lg">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#C05621]">
                    {t("stamp.badge")}
                  </span>
                  <h3 className="text-xl font-bold leading-tight">
                    {t("stamp.modalTitle")}
                  </h3>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-500 hover:text-stone-900 flex items-center justify-center transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs sm:text-sm text-stone-600 mb-6 leading-relaxed">
              {t("stamp.modalSub")}
            </p>

            {/* 3 Pillars of Authenticity */}
            <div className="space-y-3.5 mb-6">
              <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200/80 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-bold text-xs sm:text-sm text-stone-900">
                    {language === "bn" ? "প্রাকৃতিক পলিমাটি নির্বাচন" : "Alluvial Silt Sediment"}
                  </h5>
                  <p className="text-xs text-stone-600 mt-0.5 leading-relaxed">
                    {t("stamp.silt")}
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200/80 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-bold text-xs sm:text-sm text-stone-900">
                    {language === "bn" ? "১০০০° সেলসিয়াস সুনিয়ন্ত্রিত পোড়ানো" : "1000°C Thermal Sintering"}
                  </h5>
                  <p className="text-xs text-stone-600 mt-0.5 leading-relaxed">
                    {t("stamp.firingText")}
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200/80 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-bold text-xs sm:text-sm text-stone-900">
                    {language === "bn" ? "মাইক্রোপ্লাস্টিক ও ভারী ধাতুমুক্ত" : "Certified Zero Toxic Leaching"}
                  </h5>
                  <p className="text-xs text-stone-600 mt-0.5 leading-relaxed">
                    {t("stamp.nonToxic")}
                  </p>
                </div>
              </div>
            </div>

            {/* Fair Wage Artisan Note */}
            <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/70 mb-6 flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-amber-600 flex-shrink-0" />
              <p className="text-[11px] text-amber-900 leading-snug">
                {language === "bn"
                  ? "আকিভিরার প্রতিটি ক্রয় রাজশাহীর ঐতিহ্যবাহী কুমোর পরিবারের জন্য নিশ্চিত করে সম্মানজনক জীবিকা।"
                  : "Every AquiVira purchase directly supports living wages for generational pottery families in Rajshahi."}
              </p>
            </div>

            {/* Action Button */}
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="w-full py-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs sm:text-sm transition-colors"
            >
              {t("stamp.close")}
            </button>
          </div>
        </div>
      )}
    </>
  )
}
