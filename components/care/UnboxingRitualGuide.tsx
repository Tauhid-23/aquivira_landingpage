"use client"

import { useState } from "react"
import { CheckCircle2, Circle, Sparkles, Droplets, Wind, Coffee, PackageCheck, ArrowRight, ArrowLeft } from "lucide-react"
import { useLanguage } from "@/lib/i18n/LanguageContext"

interface Step {
  title: string
  bengaliTitle: string
  desc: string
  bengaliDesc: string
  tip: string
  bengaliTip: string
  icon: typeof PackageCheck
}

const STEPS: Step[] = [
  {
    title: "1. Unboxing & Inspection",
    bengaliTitle: "১. আনবক্সিং ও সাধারণ পরিদর্শন",
    desc: "Carefully open the double-box packaging. Gently wipe the interior and exterior of the terracotta vessel with clean freshwater and a soft damp cloth.",
    bengaliDesc: "ডাবল বক্স প্যাকেজিং সাবধানে খুলুন। মাটির পাত্রের ভেতর ও বাইরের পৃষ্ঠ পরিষ্কার সাধারণ পানি এবং একটি নরম সুতি কাপড় দিয়ে মুছে নিন।",
    tip: "Never use chemical detergents, dish soap, or abrasive metal scrubbers.",
    bengaliTip: "কখনোই কোনো ডিশওয়াশার সাবান, ডিটারজেন্ট বা তারের স্ক্রাবার ব্যবহার করবেন না।",
    icon: PackageCheck,
  },
  {
    title: "2. 24-Hour Freshwater Immersion",
    bengaliTitle: "২. ২৪ ঘণ্টা পানিতে ভিজিয়ে রাখা (Curing)",
    desc: "Submerge or fill the terracotta vessel completely with clean tap water for 24 hours. This saturates the high-fired earthen walls and activates the microscopic capillary pores.",
    bengaliDesc: "মাটির পাত্রটি সম্পূর্ণ পরিষ্কার পানিতে পূর্ণ করে ২৪ ঘণ্টার জন্য রেখে দিন। এতে পোড়ামাটির অতিসূক্ষ্ম ছিদ্রগুলো উন্মুক্ত হয় এবং বাষ্পীভবনের স্বাভাবিক প্রক্রিয়া সক্রিয় হয়।",
    tip: "Slight natural condensation on the outer wall confirms healthy capillary breathability.",
    bengaliTip: "পাত্রের বাইরের দেয়ালে মৃদু শিশিরের মতো আর্দ্রতা দেখা দেওয়া মাটির শ্বাস-প্রশ্বাসের স্বাভাবিক লক্ষণ।",
    icon: Droplets,
  },
  {
    title: "3. Cartridge Insertion & First Flush",
    bengaliTitle: "৩. কার্টিজ স্থাপন ও প্রথমবার ওয়াশ",
    desc: "Screw the multi-layer cartridge into the upper chamber securely. Fill with water and let 1 full reservoir filter through into a bowl. Discard this first run to flush harmless natural activated carbon particles.",
    bengaliDesc: "ফিল্টার কার্টিজটি ওপরের চেম্বারে শক্তভাবে সংযুক্ত করুন। সম্পূর্ণ পাত্র পানিতে পূর্ণ করে প্রথম ব্যাচ পানি ফিল্টার হতে দিন এবং সেই পানি ফেলে দিন (কার্বনের গুঁড়া বের হওয়ার জন্য)।",
    tip: "Gravity flow takes ~20 to 35 minutes per reservoir cycle.",
    bengaliTip: "অভিকর্ষজ বা গ্র্যাভিটি প্রবাহে প্রতি চক্রে প্রায় ২০–৩৫ মিনিট সময় লাগে।",
    icon: Sparkles,
  },
  {
    title: "4. Shaded, Well-Ventilated Placement",
    bengaliTitle: "৪. বাতাসযুক্ত ছায়াযুক্ত স্থানে স্থাপন",
    desc: "Place your AquiVira on a stable kitchen counter, dining sideboard, or stand near gentle room air circulation. Avoid placing directly under harsh scorching sun.",
    bengaliDesc: "আকিভিরা পিউরিফায়ারটি খাবার ঘর বা রান্নাঘরের বাতাস চলাচলযুক্ত ছায়াময় স্থানে রাখুন। সরাসরি তীব্র রোদে রাখা থেকে বিরত থাকুন।",
    tip: "Airflow accelerates evaporative cooling, dropping water temperature by 4°C to 6°C.",
    bengaliTip: "স্বাভাবিক বাতাস চলাচল পানির তাপমাত্রা ঘরের চেয়ে ৪°–৬° সেলসিয়াস পর্যন্ত কমাতে সাহায্য করে।",
    icon: Wind,
  },
  {
    title: "5. Enjoy Pure, Crisp Earthen Water",
    bengaliTitle: "৫. উপভোগ করুন বিশুদ্ধ স্নিগ্ধ পানি",
    desc: "Dispense through the food-grade stainless steel tap into your matching terracotta cup. Experience naturally alkaline, mineral-rich, cold drinking water.",
    bengaliDesc: "ফুড-গ্রেড স্টেইনলেস স্টিলের ট্যাপ দিয়ে মাটির গ্লাসে ঢেলে নিন। কোনো বিদ্যুৎ বা প্লাস্টিক ছাড়াই উপভোগ করুন মিষ্টি ও খনিজসমৃদ্ধ সুপেয় পানি।",
    tip: "Re-rinse the cartridge every 2–3 weeks with plain running water for maximum lifespan.",
    bengaliTip: "ফিল্টারের দীর্ঘস্থায়িত্বের জন্য প্রতি ২–৩ সপ্তাহ পর পর কার্টিজ সাধারণ ট্যাপের পানিতে হালকা ধুয়ে নিন।",
    icon: Coffee,
  },
]

export default function UnboxingRitualGuide() {
  const { language } = useLanguage()
  const isBn = language === "bn"
  const [activeStep, setActiveStep] = useState(0)

  const step = STEPS[activeStep]
  const Icon = step.icon

  return (
    <div className="rounded-3xl p-6 sm:p-10 bg-white border border-stone-200/90 shadow-lg">
      <div className="text-center max-w-xl mx-auto mb-8">
        <span className="text-xs font-extrabold uppercase tracking-widest text-primary mb-2 block">
          {isBn ? "প্রস্তুতি নির্দেশিকা" : "First-Time Setup Ritual"}
        </span>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight mb-2">
          {isBn ? "৫ ধাপে মাটির পাত্র ও ফিল্টার প্রস্তুতি" : "The 5-Step Unboxing & Curing Ritual"}
        </h3>
        <p className="text-xs sm:text-sm text-stone-600">
          {isBn
            ? "নতুন মাটির ফিল্টারের সর্বোত্তম কার্যকারিতা নিশ্চিত করতে প্রথম ব্যবহারের আগে এই ধাপগুলো অনুসরণ করুন।"
            : "Follow this simple initial ritual to activate the clay micro-capillaries for decades of pure cooling performance."}
        </p>
      </div>

      {/* Progress Dots */}
      <div className="flex justify-between items-center max-w-md mx-auto mb-8 relative">
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-stone-100 -translate-y-1/2 -z-0" />
        <div
          className="absolute top-1/2 left-0 h-1 bg-primary -translate-y-1/2 -z-0 transition-all duration-300"
          style={{ width: `${(activeStep / (STEPS.length - 1)) * 100}%` }}
        />

        {STEPS.map((s, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setActiveStep(idx)}
            className={`relative z-10 w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs transition-all ${
              idx === activeStep
                ? "bg-primary text-white ring-4 ring-primary/20 scale-110 shadow-md"
                : idx < activeStep
                ? "bg-emerald-600 text-white"
                : "bg-white text-stone-400 border-2 border-stone-200"
            }`}
          >
            {idx < activeStep ? <CheckCircle2 className="w-5 h-5" /> : idx + 1}
          </button>
        ))}
      </div>

      {/* Active Step Card */}
      <div className="max-w-xl mx-auto p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-stone-50 via-[#FBF9F5] to-orange-50/50 border border-stone-200 shadow-sm mb-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
            <Icon className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-primary">
              Step {activeStep + 1} of {STEPS.length}
            </span>
            <h4 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
              {isBn ? step.bengaliTitle : step.title}
            </h4>
          </div>
        </div>

        <p className="text-sm text-stone-700 leading-relaxed mb-4">
          {isBn ? step.bengaliDesc : step.desc}
        </p>

        {/* Tip Box */}
        <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200/80 text-xs text-amber-900 flex items-start gap-2.5">
          <Sparkles className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            <span className="font-bold">{isBn ? "প্রয়োজনীয় পরামর্শ: " : "Essential Tip: "}</span>
            <span>{isBn ? step.bengaliTip : step.tip}</span>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex justify-between items-center max-w-xl mx-auto">
        <button
          type="button"
          onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
          disabled={activeStep === 0}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-stone-200 text-xs font-bold text-stone-700 hover:bg-stone-50 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>{isBn ? "পূর্ববর্তী" : "Previous"}</span>
        </button>

        <span className="text-xs text-stone-400 font-semibold">
          {activeStep + 1} / {STEPS.length}
        </span>

        <button
          type="button"
          onClick={() => setActiveStep((prev) => Math.min(STEPS.length - 1, prev + 1))}
          disabled={activeStep === STEPS.length - 1}
          className="inline-flex items-center gap-1.5 px-5 py-2 rounded-xl bg-primary text-white text-xs font-bold hover:bg-primary/90 shadow-sm disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <span>{isBn ? "পরবর্তী ধাপ" : "Next Step"}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  )
}
