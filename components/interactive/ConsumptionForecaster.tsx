"use client"

import { useState } from "react"
import { Users, Calendar, Coins, Bell, CheckCircle2, MessageCircle, Sparkles } from "lucide-react"
import { HELPLINE_WHATSAPP } from "@/lib/data/checkoutData"
import { useLanguage } from "@/lib/i18n/LanguageContext"

export default function ConsumptionForecaster({ className = "" }: { className?: string }) {
  const { language } = useLanguage()
  const isBn = language === "bn"

  const [familyMembers, setFamilyMembers] = useState<number>(4) // Default family of 4
  const [phoneNumber, setPhoneNumber] = useState("")
  const [reminderSaved, setReminderSaved] = useState(false)

  // Calculations
  const dailyLiters = familyMembers * 5 // Calibrated 5L per person/day (drinking + light cooking)
  const baselineDays = Math.round(6000 / dailyLiters)
  const baselineMonths = Math.round((baselineDays / 30) * 10) / 10
  const maxCaredDays = Math.round(8000 / dailyLiters)
  const maxCaredMonths = Math.round((maxCaredDays / 30) * 10) / 10

  // Economic comparison (Annual 365 days)
  const annualLiters = dailyLiters * 365
  const commercialBottledCost = annualLiters * 12 // ~৳12-15 per liter for commercial jar water
  const aquiViraCost = 1199 // Replacement cartridge cost
  const annualSavings = commercialBottledCost - aquiViraCost

  const handleReminderSignup = (e: React.FormEvent) => {
    e.preventDefault()
    setReminderSaved(true)

    const msg = `*AquiVira Automated Cartridge Reminder Request*\n\n` +
      `Family Members: ${familyMembers} Persons\n` +
      `Daily Usage: ~${dailyLiters} Liters/day\n` +
      `Expected Filter Lifespan: ${baselineMonths} Months (~${baselineDays} Days)\n` +
      `WhatsApp Phone: ${phoneNumber}\n\n` +
      `Please schedule my reminder when my cartridge reaches ~80% capacity.`

    const url = `https://wa.me/${HELPLINE_WHATSAPP}?text=${encodeURIComponent(msg)}`
    window.open(url, "_blank")
  }

  return (
    <div className={`rounded-3xl p-6 sm:p-10 bg-white border border-stone-200/90 shadow-xl ${className}`}>
      {/* Header */}
      <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
        <span className="text-xs font-extrabold uppercase tracking-widest text-primary mb-2 block">
          {isBn ? "পারিবারিক সাশ্রয় ও কার্টিজ লাইফ ক্যালকুলেটর" : "Household Savings & Lifespan Forecaster"}
        </span>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight mb-2">
          {isBn ? "আপনার পরিবারের জন্য ফিল্টার কতদিন চলবে?" : "How Long Will Your Cartridge Last?"}
        </h3>
        <p className="text-xs sm:text-sm text-stone-600">
          {isBn
            ? "পরিবারের সদস্য সংখ্যা অনুযায়ী দৈনিক পানির ব্যবহার ও কার্টিজ পরিবর্তনের আনুমানিক সময় নির্ধারণ করুন।"
            : "Slide to select your household size to calculate exact cartridge longevity and annual financial savings."}
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-center">
        {/* Left: Interactive Family Slider & Output Cards */}
        <div className="lg:col-span-7 space-y-6">
          <div className="p-6 rounded-3xl bg-stone-50 border border-stone-200/80">
            <div className="flex justify-between items-center mb-3">
              <label className="text-xs font-bold uppercase tracking-wider text-stone-700 flex items-center gap-2">
                <Users className="w-4 h-4 text-primary" />
                <span>{isBn ? "পরিবারের সদস্য সংখ্যা" : "Number of Family Members"}</span>
              </label>
              <span className="text-xl font-black text-primary">
                {familyMembers} {isBn ? "জন" : familyMembers === 1 ? "Person" : "Persons"}
              </span>
            </div>

            <input
              type="range"
              min={1}
              max={10}
              step={1}
              value={familyMembers}
              onChange={(e) => setFamilyMembers(Number(e.target.value))}
              className="w-full accent-primary cursor-pointer mb-2"
            />

            <div className="flex justify-between text-xs text-stone-500 font-semibold">
              <span>{isBn ? "১ জন" : "1 Person"}</span>
              <span>{isBn ? "৪ জন (সাধারণ পরিবার - ২০ লি/দিন)" : "4 Persons (Standard 20L/day)"}</span>
              <span>{isBn ? "১০ জন" : "10 Persons"}</span>
            </div>
          </div>

          {/* Metric Comparison Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-center">
              <span className="text-[10px] font-bold uppercase tracking-widest text-amber-800 block mb-1">
                {isBn ? "বেসলাইন ফিল্টার লাইফ (৬,০০০ লিটার)" : "Baseline Longevity (6,000L)"}
              </span>
              <span className="text-3xl font-extrabold text-amber-900 block">
                ~{baselineMonths} {isBn ? "মাস" : "Months"}
              </span>
              <span className="text-[11px] text-amber-800/80">
                ({baselineDays} {isBn ? "দিন টানা ফিল্ট্রেশন" : "Days of pure water"})
              </span>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-center">
              <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-800 block mb-1">
                {isBn ? "নিয়মিত যত্নে সর্বোচ্চ লাইফ (৮,০০০ লিটার)" : "Extended Life with Care (8,000L)"}
              </span>
              <span className="text-3xl font-extrabold text-emerald-900 block">
                ~{maxCaredMonths} {isBn ? "মাস" : "Months"}
              </span>
              <span className="text-[11px] text-emerald-800/80">
                ({maxCaredDays} {isBn ? "দিন / ১ বছরের বেশি" : "Days / Over 1 Full Year"})
              </span>
            </div>
          </div>
        </div>

        {/* Right: Financial Savings & WhatsApp Reminder Opt-in */}
        <div className="lg:col-span-5">
          <div className="rounded-3xl p-6 sm:p-8 bg-stone-900 text-white shadow-xl space-y-5">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-400 bg-white/10 px-2.5 py-1 rounded-full inline-block mb-3">
                {isBn ? "বার্ষিক আর্থিক সাশ্রয়" : "Annual Household Savings"}
              </span>
              <h4 className="text-2xl font-black text-white">
                ৳{annualSavings.toLocaleString()} {isBn ? "টাকা সাশ্রয়" : "BDT Saved / Year"}
              </h4>
              <p className="text-xs text-stone-300 mt-1">
                {isBn
                  ? `প্লাস্টিক জার বা বোতলজাত পানির পেছনে বছরে আনুমানিক ৳${commercialBottledCost.toLocaleString()} টাকার বিপরীতে আকিভিরায় মাত্র ৳১,১৯৯ টাকা কার্টিজ খরচ।`
                  : `Compared to spending ~৳${commercialBottledCost.toLocaleString()} on 20L plastic jars annually, AquiVira cartridge replacement is just ৳1,199.`}
              </p>
            </div>

            <div className="pt-4 border-t border-white/10">
              <span className="text-xs font-bold text-stone-200 block mb-2 flex items-center gap-1.5">
                <Bell className="w-4 h-4 text-amber-400" />
                <span>{isBn ? "কার্টিজ পরিবর্তনের রিমাইন্ডার শিডিউল করুন" : "Schedule WhatsApp Replacement Alert"}</span>
              </span>

              {reminderSaved ? (
                <div className="p-3 bg-emerald-950/80 border border-emerald-500/50 rounded-xl text-xs text-emerald-200 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>{isBn ? "রিমাইন্ডার শিডিউল করা হয়েছে!" : "Reminder request dispatched to WhatsApp!"}</span>
                </div>
              ) : (
                <form onSubmit={handleReminderSignup} className="space-y-2.5">
                  <input
                    type="tel"
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="017XXXXXXXX"
                    className="w-full px-3 py-2 rounded-xl bg-white/10 border border-white/20 text-xs text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <button
                    type="submit"
                    className="w-full btn-primary !bg-emerald-500 hover:!bg-emerald-400 !text-stone-950 text-xs font-bold !py-2.5 flex items-center justify-center gap-1.5"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>{isBn ? "হোয়াটসঅ্যাপে রিমাইন্ডার সেট করুন" : "Set Reminder via WhatsApp"}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
