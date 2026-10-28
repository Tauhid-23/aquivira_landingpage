"use client"

import { useState } from "react"
import { Droplet, ShieldCheck, AlertTriangle, CheckCircle2, ArrowRight, Sparkles, MapPin } from "lucide-react"
import { useLanguage } from "@/lib/i18n/LanguageContext"

interface WaterSource {
  id: string
  name: string
  bengaliName: string
  region: string
  bengaliRegion: string
  keyIssues: string
  bengaliIssues: string
  beforeTurbidity: string
  afterTurbidity: string
  beforeHeavyMetals: string
  afterHeavyMetals: string
  beforePathogens: string
  afterPathogens: string
  mineralStatus: string
  bengaliMineralStatus: string
}

const SOURCES: WaterSource[] = [
  {
    id: "dhaka",
    name: "Dhaka WASA Tap Water",
    bengaliName: "ঢাকা ওয়াসা সাপ্লাই ট্যাপের পানি",
    region: "Dhaka Metro (Dhanmondi, Mirpur, Old Dhaka)",
    bengaliRegion: "ঢাকা মহানগরী (মিরপুর, ধানমন্ডি, পুরান ঢাকা)",
    keyIssues: "Pungent chlorine odor, rusty aging iron pipelines, seasonal muddy turbidity.",
    bengaliIssues: "তীব্র ক্লোরিনের গন্ধ, পুরনো পাইপলাইনের মরিচা ও বর্ষার ঘোলাটে পানি।",
    beforeTurbidity: "45–90 NTU (Muddy)",
    afterTurbidity: "< 1 NTU (Crystal Clear)",
    beforeHeavyMetals: "High Iron & Rust Traces",
    afterHeavyMetals: "99% Iron & Rust Trapped",
    beforePathogens: "Seasonal E. Coli Risk",
    afterPathogens: "0 CFU / 100ml Safe Drinking",
    mineralStatus: "Naturally Balanced Alkaline Minerals",
    bengaliMineralStatus: "প্রাকৃতিক ক্ষারীয় খনিজ অক্ষুণ্ণ",
  },
  {
    id: "rajshahi",
    name: "Northern Groundwater & Deep Tube-well",
    bengaliName: "উত্তরাঞ্চলের ভূগর্ভস্থ ও গভীর নলকূপের পানি",
    region: "Rajshahi, Chapainawabganj, Bogura",
    bengaliRegion: "রাজশাহী, চাঁপাইনবাবগঞ্জ, বগুড়া",
    keyIssues: "Toxic Arsenic traces, high dissolved iron deposits, and harsh metallic aftertaste.",
    bengaliIssues: "বিষাক্ত আর্সেনিক ঝুঁকি, মাত্রাতিরিক্ত আয়রন ও কষা ধাতব স্বাদ।",
    beforeTurbidity: "25–50 NTU (Iron tinted)",
    afterTurbidity: "< 0.8 NTU (Clear & Sweet)",
    beforeHeavyMetals: "Arsenic 0.05–0.12 mg/L",
    afterHeavyMetals: "< 0.01 mg/L (Safe BD Standard)",
    beforePathogens: "Low surface pathogens",
    afterPathogens: "Fully sterilized",
    mineralStatus: "Essential Calcium & Magnesium Preserved",
    bengaliMineralStatus: "ক্যালসিয়াম ও ম্যাগনেসিয়াম বজায় থাকে",
  },
  {
    id: "coastal",
    name: "Southern Coastal Pond & Shallow Wells",
    bengaliName: "দক্ষিণাঞ্চলের উপকূলীয় পুকুর ও অগভীর নলকূপ",
    region: "Khulna, Satkhira, Bagerhat",
    bengaliRegion: "খুলনা, সাতক্ষীরা, বাগেরহাট",
    keyIssues: "Extreme mud turbidity, biological surface runoff, and seasonal salinity shifts.",
    bengaliIssues: "পুকুরের অতিরিক্ত কাদা-ঘোলাটে ভাব, জৈব আবর্জনা ও জীবাণু দূষণ।",
    beforeTurbidity: "120+ NTU (Heavy mud/silt)",
    afterTurbidity: "< 1.2 NTU (Clear Drinking)",
    beforeHeavyMetals: "High silt suspended solids",
    afterHeavyMetals: "99% Suspended silt blocked",
    beforePathogens: "High Fecal Coliform & Cysts",
    afterPathogens: "> 90% Pathogen clearance",
    mineralStatus: "Natural Mineral Infusion",
    bengaliMineralStatus: "প্রাকৃতিক মিনারেল ব্যালান্স",
  },
]

export default function WaterQualitySimulator({ className = "" }: { className?: string }) {
  const { language } = useLanguage()
  const isBn = language === "bn"
  const [selectedSourceId, setSelectedSourceId] = useState("dhaka")

  const current = SOURCES.find((s) => s.id === selectedSourceId) || SOURCES[0]

  return (
    <div className={`rounded-3xl p-6 sm:p-10 bg-white border border-stone-200/90 shadow-xl ${className}`}>
      {/* Title */}
      <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
        <span className="text-xs font-extrabold uppercase tracking-widest text-primary mb-2 block">
          {isBn ? "আঞ্চলিক পানি বিশ্লেষণ টুল" : "Regional Water Source Analyzer"}
        </span>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight mb-2">
          {isBn ? "আপনার এলাকার পানি কি আকিভিরায় বিশুদ্ধ হবে?" : "Does AquiVira Filter Your Local Water Supply?"}
        </h3>
        <p className="text-xs sm:text-sm text-stone-600">
          {isBn
            ? "আপনার এলাকার পানির উৎস নির্বাচন করে দেখুন ফিল্ট্রেশনের আগে ও পরের বাস্তব গুণগত মান।"
            : "Select your geographical water source in Bangladesh to see verified clearance metrics before and after filtration."}
        </p>
      </div>

      {/* Source Selector Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {SOURCES.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => setSelectedSourceId(s.id)}
            className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all border ${
              s.id === selectedSourceId
                ? "bg-primary text-white border-primary shadow-md scale-105"
                : "bg-stone-50 hover:bg-stone-100 text-stone-700 border-stone-200/80"
            }`}
          >
            {isBn ? s.bengaliName : s.name}
          </button>
        ))}
      </div>

      {/* Region Context Pill */}
      <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/60 mb-8 flex items-start gap-3 text-xs text-amber-950">
        <MapPin className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
        <div>
          <span className="font-bold">{isBn ? "প্রভাবিত অঞ্চল ও সমস্যা: " : "Area & Primary Contaminants: "}</span>
          <span className="text-amber-900">{isBn ? current.bengaliRegion : current.region} — </span>
          <span>{isBn ? current.bengaliIssues : current.keyIssues}</span>
        </div>
      </div>

      {/* Before vs After Comparison Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Raw Water (Before) */}
        <div className="rounded-3xl p-6 bg-red-50/50 border border-red-200/80">
          <div className="flex items-center justify-between pb-3 border-b border-red-200/60 mb-4">
            <span className="text-xs font-extrabold uppercase tracking-wider text-red-700 flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-red-500" />
              {isBn ? "ফিল্টারের পূর্বে (কাঁচা পানি)" : "Before (Raw Contaminated Water)"}
            </span>
            <span className="text-[10px] font-bold bg-red-100 text-red-800 px-2 py-0.5 rounded-full">
              {isBn ? "পান অনুপযোগী" : "High Risk"}
            </span>
          </div>

          <div className="space-y-3.5 text-xs">
            <div className="flex justify-between py-1.5 border-b border-red-100">
              <span className="text-stone-600">{isBn ? "ঘোলাটে ভাব (Turbidity)" : "Turbidity"}</span>
              <span className="font-bold text-red-700">{current.beforeTurbidity}</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-red-100">
              <span className="text-stone-600">{isBn ? "ভারী ধাতু (Arsenic/Iron)" : "Heavy Metals"}</span>
              <span className="font-bold text-red-700">{current.beforeHeavyMetals}</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-red-100">
              <span className="text-stone-600">{isBn ? "জীবাণু ও কলিফর্ম" : "Microbial Bacteria"}</span>
              <span className="font-bold text-red-700">{current.beforePathogens}</span>
            </div>
            <div className="flex justify-between py-1.5">
              <span className="text-stone-600">{isBn ? "পান করার স্বাদ" : "Taste Profile"}</span>
              <span className="font-bold text-red-700">{isBn ? "কষা, গন্ধযুক্ত ও অপ্রীতিকর" : "Harsh Chlorine / Metallic"}</span>
            </div>
          </div>
        </div>

        {/* AquiVira Purified (After) */}
        <div className="rounded-3xl p-6 bg-emerald-50/50 border border-emerald-200/80 shadow-sm">
          <div className="flex items-center justify-between pb-3 border-b border-emerald-200/60 mb-4">
            <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              {isBn ? "আকিভিরার পর (বিশুদ্ধ ক্ষারীয় পানি)" : "After AquiVira (Pure Alkaline Water)"}
            </span>
            <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
              {isBn ? "শতভাগ নিরাপদ" : "100% Safe"}
            </span>
          </div>

          <div className="space-y-3.5 text-xs">
            <div className="flex justify-between py-1.5 border-b border-emerald-100">
              <span className="text-stone-600">{isBn ? "ঘোলাটে ভাব (Turbidity)" : "Turbidity"}</span>
              <span className="font-bold text-emerald-700">{current.afterTurbidity}</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-emerald-100">
              <span className="text-stone-600">{isBn ? "ভারী ধাতু দূরীকরণ" : "Heavy Metal Clearance"}</span>
              <span className="font-bold text-emerald-700">{current.afterHeavyMetals}</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-emerald-100">
              <span className="text-stone-600">{isBn ? "জীবাণু ধ্বংস" : "Pathogen Removal"}</span>
              <span className="font-bold text-emerald-700">{current.afterPathogens}</span>
            </div>
            <div className="flex justify-between py-1.5">
              <span className="text-stone-600">{isBn ? "খনিজের অক্ষুণ্ণতা" : "Mineral Profile"}</span>
              <span className="font-bold text-emerald-700">{isBn ? current.bengaliMineralStatus : current.mineralStatus}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
