"use client"

import { useState } from "react"
import { Truck, CheckCircle, ShieldCheck, Clock, PackageCheck, MapPin } from "lucide-react"
import { BD_DIVISIONS_AND_DISTRICTS } from "@/lib/data/checkoutData"
import { useLanguage } from "@/lib/i18n/LanguageContext"

export default function DistrictDeliveryChecker({ className = "" }: { className?: string }) {
  const { language } = useLanguage()
  const isBn = language === "bn"

  const [division, setDivision] = useState("Dhaka")
  const [district, setDistrict] = useState("Dhaka")

  const handleDivisionChange = (newDiv: string) => {
    setDivision(newDiv)
    const districts = BD_DIVISIONS_AND_DISTRICTS[newDiv] || []
    if (districts.length > 0) {
      setDistrict(districts[0])
    }
  }

  const isFastHub = district === "Dhaka" || district === "Rajshahi" || district === "Gazipur"

  return (
    <div className={`rounded-3xl p-6 bg-white border border-stone-200/90 shadow-sm ${className}`}>
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
          <Truck className="w-5 h-5" />
        </div>
        <div>
          <h4 className="font-extrabold text-sm sm:text-base text-stone-900">
            {isBn ? "৬৪ জেলায় ডেলিভারি ও ক্যাশ অন ডেলিভারি যাচাই" : "Check Delivery & COD in Your District"}
          </h4>
          <p className="text-xs text-muted-foreground">
            {isBn ? "নিরাপদ প্যাকেজিং ও ফ্রি ট্রানজিট ইন্স্যুরেন্সসহ সরাসরি হোম ডেলিভারি" : "Fast, insured dispatch with double-box fragile protection"}
          </p>
        </div>
      </div>

      {/* Selectors */}
      <div className="grid grid-cols-2 gap-3 mb-5">
        <div>
          <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-600 mb-1">
            {isBn ? "বিভাগ" : "Division"}
          </label>
          <select
            value={division}
            onChange={(e) => handleDivisionChange(e.target.value)}
            className="w-full px-3 py-2 rounded-xl border border-stone-300 bg-stone-50/50 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
          >
            {Object.keys(BD_DIVISIONS_AND_DISTRICTS).map((div) => (
              <option key={div} value={div}>
                {div}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-600 mb-1">
            {isBn ? "জেলা" : "District"}
          </label>
          <select
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            className="w-full px-3 py-2 rounded-xl border border-stone-300 bg-stone-50/50 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
          >
            {(BD_DIVISIONS_AND_DISTRICTS[division] || []).map((dist) => (
              <option key={dist} value={dist}>
                {dist}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Output Status Card */}
      <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-50/80 to-stone-50 border border-emerald-200/70 space-y-2.5">
        <div className="flex items-center justify-between text-xs font-bold text-emerald-800">
          <span className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            {isBn ? "ক্যাশ অন ডেলিভারি (COD) প্রযোজ্য" : "Cash on Delivery Available"}
          </span>
          <span className="bg-emerald-100 text-emerald-900 px-2 py-0.5 rounded-full text-[10px]">
            {isBn ? "সক্রিয়" : "Active"}
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs text-stone-700">
          <Clock className="w-4 h-4 text-primary flex-shrink-0" />
          <span>
            {isBn
              ? isFastHub
                ? `${district} জেলায় আনুমানিক সময়: ২৪–৪৮ ঘণ্টা`
                : `${district} জেলায় আনুমানিক সময়: ৪৮–৭২ ঘণ্টা`
              : isFastHub
              ? `Estimated transit to ${district}: 24–48 Hours (Express Hub)`
              : `Estimated transit to ${district}: 48–72 Hours`}
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs text-stone-700">
          <PackageCheck className="w-4 h-4 text-primary flex-shrink-0" />
          <span>
            {isBn ? "ফ্রি ডেলিভারি • ভাঙন সুরক্ষায় ডাবল বক্স প্যাকেজিং" : "Free Nationwide Shipping • 100% Fragile Insurance"}
          </span>
        </div>
      </div>
    </div>
  )
}
