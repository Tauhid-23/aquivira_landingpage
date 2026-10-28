"use client"

import { useState } from "react"
import { Thermometer, Zap, Droplets, Wind, Sparkles, Sun, ShieldCheck } from "lucide-react"
import { useLanguage } from "@/lib/i18n/LanguageContext"

export default function CoolingSimulator({ className = "" }: { className?: string }) {
  const { language } = useLanguage()
  const isBn = language === "bn"

  // User Interactive States
  const [ambientTemp, setAmbientTemp] = useState<number>(36) // °C (Typical Bangladesh Summer)
  const [humidity, setHumidity] = useState<number>(55) // % (Moderate Humidity)

  // Thermodynamic Evaporative Cooling calculation (Empirical approximation for micro-porous terracotta)
  // Cooling drop delta is inversely proportional to relative humidity (dryer air = more evaporation)
  // Max drop is ~6.5°C at low humidity; at 80% humidity drop is ~3.5°C
  const humidityFactor = (100 - humidity) / 100
  const coolingDrop = Math.max(3.0, Math.min(6.5, 2.5 + humidityFactor * 5.0))
  const waterTemp = Math.round((ambientTemp - coolingDrop) * 10) / 10
  const annualKwhSaved = Math.round(160 + (ambientTemp - 25) * 4) // kWh/year saved vs refrigerator compressor

  return (
    <div className={`rounded-3xl p-6 sm:p-10 bg-white border border-stone-200/90 shadow-xl ${className}`}>
      {/* Header */}
      <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
        <span className="text-xs font-extrabold uppercase tracking-widest text-primary mb-2 block">
          {isBn ? "প্রাকৃতিক তাপগতিবিদ্যা সিমুলেটর" : "Thermodynamic Physics Simulator"}
        </span>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight mb-2">
          {isBn ? "বিদ্যুৎ ছাড়া মাটির পাত্রে পানি কতটুকু শীতল হয়?" : "How Cold Does Clay Water Really Get Without Power?"}
        </h3>
        <p className="text-xs sm:text-sm text-stone-600">
          {isBn
            ? "তাপমাত্রা ও আর্দ্রতার স্লাইডার পরিবর্তন করে দেখুন বাষ্পীভবনের মাধ্যমে পানি কীভাবে ঘরের চেয়ে ৪°–৬° সেলসিয়াস শীতল থাকে।"
            : "Adjust ambient summer temperature and humidity to visualize real-time micro-porous evaporative transpiration."}
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-center">
        {/* Left: Sliders Controls (6 Cols) */}
        <div className="lg:col-span-6 space-y-6">
          {/* Ambient Temperature Slider */}
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80">
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-bold uppercase tracking-wider text-stone-700 flex items-center gap-1.5">
                <Sun className="w-4 h-4 text-amber-500" />
                <span>{isBn ? "ঘরের / বাইরের তাপমাত্রা" : "Ambient Room Temperature"}</span>
              </label>
              <span className="text-lg font-black text-amber-700">{ambientTemp}°C</span>
            </div>
            <input
              type="range"
              min={25}
              max={43}
              step={1}
              value={ambientTemp}
              onChange={(e) => setAmbientTemp(Number(e.target.value))}
              className="w-full accent-amber-600 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-stone-400 mt-1 font-semibold">
              <span>25°C ({isBn ? "বসন্ত" : "Spring"})</span>
              <span>36°C ({isBn ? "গ্রীষ্ম" : "Peak Summer"})</span>
              <span>43°C ({isBn ? "তীব্র দাবদাহ" : "Heatwave"})</span>
            </div>
          </div>

          {/* Relative Humidity Slider */}
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80">
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-bold uppercase tracking-wider text-stone-700 flex items-center gap-1.5">
                <Wind className="w-4 h-4 text-sky-500" />
                <span>{isBn ? "বাতাসের আপেক্ষিক আর্দ্রতা" : "Relative Air Humidity"}</span>
              </label>
              <span className="text-lg font-black text-sky-700">{humidity}%</span>
            </div>
            <input
              type="range"
              min={30}
              max={85}
              step={5}
              value={humidity}
              onChange={(e) => setHumidity(Number(e.target.value))}
              className="w-full accent-sky-600 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-stone-400 mt-1 font-semibold">
              <span>30% ({isBn ? "শুষ্ক হাওয়া" : "Dry Breezy"})</span>
              <span>55% ({isBn ? "স্বাভাবিক" : "Moderate"})</span>
              <span>85% ({isBn ? "বর্ষা" : "Monsoon"})</span>
            </div>
          </div>

          {/* Physics Explanation Pill */}
          <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/70 text-xs text-amber-950 flex items-start gap-3">
            <Droplets className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              {isBn
                ? `মাটির পাত্রের বাইরের দেয়াল দিয়ে অতিসূক্ষ্ম পানি বাষ্পীভূত হওয়ার সময় পানি থেকে সুপ্ততাপ (Latent Heat) শোষণ করে, যার ফলে পানির তাপমাত্রা ঘরের চেয়ে ${coolingDrop.toFixed(1)}°C কমে যায়।`
                : `Micro-capillary moisture evaporation continuously extracts latent heat directly from the water column, naturally dropping the stored water by ${coolingDrop.toFixed(1)}°C below ambient air.`}
            </p>
          </div>
        </div>

        {/* Right: Dynamic Physics Visualization & Thermometer (6 Cols) */}
        <div className="lg:col-span-6">
          <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-stone-900 via-stone-850 to-stone-950 text-white shadow-2xl border border-white/10 relative overflow-hidden">
            {/* Ambient vs Chilled Temperature Compare */}
            <div className="grid grid-cols-2 gap-4 pb-6 border-b border-white/10 text-center">
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block mb-1">
                  {isBn ? "ঘরের তাপমাত্রা" : "Room Air"}
                </span>
                <span className="text-3xl sm:text-4xl font-extrabold text-stone-300">
                  {ambientTemp}°C
                </span>
                <span className="text-[10px] text-stone-400 block mt-1">
                  {isBn ? "উষ্ণ ও অস্বস্তিকর" : "Warm & Stifling"}
                </span>
              </div>

              <div className="p-3 rounded-2xl bg-sky-500/10 border border-sky-400/30">
                <span className="text-[10px] font-bold uppercase tracking-wider text-sky-400 block mb-1">
                  {isBn ? "আকিভিরা শীতল পানি" : "AquiVira Water"}
                </span>
                <span className="text-3xl sm:text-4xl font-extrabold text-sky-300">
                  {waterTemp}°C
                </span>
                <span className="text-[10px] text-emerald-400 font-bold block mt-1">
                  ▼ {coolingDrop.toFixed(1)}°C {isBn ? "প্রাকৃতিক শীতল" : "Naturally Chilled"}
                </span>
              </div>
            </div>

            {/* Vessel Thermographic Map Visualization */}
            <div className="py-6 flex items-center justify-center gap-6">
              <div className="relative w-36 h-48 rounded-3xl p-1 bg-gradient-to-b from-[#C05621] via-amber-700 to-sky-700 shadow-2xl flex items-center justify-center">
                <div className="w-full h-full rounded-[22px] bg-stone-900/90 flex flex-col items-center justify-center p-3 text-center border border-white/10">
                  <Thermometer className="w-8 h-8 text-sky-400 animate-pulse mb-2" />
                  <span className="text-xs font-bold text-sky-200">
                    {waterTemp}°C
                  </span>
                  <span className="text-[9px] text-stone-400 uppercase tracking-widest mt-1">
                    {isBn ? "অভ্যন্তরীণ পানি" : "Core Water"}
                  </span>
                </div>
              </div>

              {/* Live Physics Metrics */}
              <div className="space-y-3 flex-1 text-xs">
                <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                  <span className="text-stone-400 block text-[10px] uppercase font-bold">
                    {isBn ? "তাপমাত্রা হ্রাস" : "Temperature Drop"}
                  </span>
                  <span className="text-base font-bold text-emerald-400">
                    -{coolingDrop.toFixed(1)}°C {isBn ? "ঘরের চেয়ে ঠাণ্ডা" : "Below Ambient"}
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                  <span className="text-stone-400 block text-[10px] uppercase font-bold">
                    {isBn ? "বার্ষিক বিদ্যুৎ সাশ্রয়" : "Annual Energy Saved"}
                  </span>
                  <span className="text-base font-bold text-amber-400 flex items-center gap-1">
                    <Zap className="w-4 h-4" /> ~{annualKwhSaved} kWh / {isBn ? "বছর" : "yr"}
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                  <span className="text-stone-400 block text-[10px] uppercase font-bold">
                    {isBn ? "ফ্রিজ স্পেস সাশ্রয়" : "Refrigerator Shelf Space"}
                  </span>
                  <span className="text-xs font-semibold text-stone-200">
                    {isBn ? "ফ্রিজে বোতল রাখার ঝামেলা শেষ" : "100% Free Fridge Shelves"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
