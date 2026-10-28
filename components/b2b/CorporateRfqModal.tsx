"use client"

import { useState } from "react"
import { Building2, Users, Send, CheckCircle2, X, MessageSquare, Phone, Sparkles } from "lucide-react"
import { HELPLINE_PHONE, HELPLINE_PHONE_RAW, HELPLINE_WHATSAPP } from "@/lib/data/checkoutData"
import { useLanguage } from "@/lib/i18n/LanguageContext"

interface CorporateRfqModalProps {
  triggerClassName?: string
}

export default function CorporateRfqModal({ triggerClassName = "" }: CorporateRfqModalProps) {
  const { language } = useLanguage()
  const isBn = language === "bn"

  const [isOpen, setIsOpen] = useState(false)
  const [orgType, setOrgType] = useState("Corporate Office")
  const [quantity, setQuantity] = useState("5–20 Units")
  const [contactName, setContactName] = useState("")
  const [orgName, setOrgName] = useState("")
  const [phone, setPhone] = useState("")
  const [notes, setNotes] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)

    // Construct formatted WhatsApp message
    const msg = `*AquiVira Corporate / B2B Inquiry*\n\n` +
      `Organization: ${orgName || "Not provided"}\n` +
      `Type: ${orgType}\n` +
      `Estimated Quantity: ${quantity}\n` +
      `Contact Person: ${contactName}\n` +
      `Phone: ${phone}\n` +
      `Notes: ${notes || "None"}\n\n` +
      `Please provide an official pro-forma quotation.`

    const waUrl = `https://wa.me/${HELPLINE_WHATSAPP}?text=${encodeURIComponent(msg)}`
    window.open(waUrl, "_blank")
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={triggerClassName || "btn-secondary text-xs !px-5 !py-2.5"}
      >
        <Building2 className="w-4 h-4 mr-1.5" />
        <span>{isBn ? "কর্পোরেট / এনজিও কোটেশন রিকোয়েস্ট" : "Corporate & Bulk RFQ"}</span>
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-full max-w-lg rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-stone-200 text-stone-900 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-stone-200 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-stone-900 text-white flex items-center justify-center shadow-md">
                  <Building2 className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-primary bg-primary/10 px-2 py-0.5 rounded">
                    B2B & Institutional Procurement
                  </span>
                  <h3 className="text-xl font-bold mt-1 text-stone-900">
                    {isBn ? "কর্পোরেট ও প্রাতিষ্ঠানিক কোটেশন" : "Request Bulk Quotation"}
                  </h3>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-500 hover:text-stone-900 flex items-center justify-center transition-colors flex-shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold mb-2">
                  {isBn ? "কোটেশন রিকোয়েস্ট পাঠানো হয়েছে!" : "Inquiry Dispatched!"}
                </h4>
                <p className="text-xs text-stone-600 max-w-sm mx-auto mb-6">
                  {isBn
                    ? "আমাদের কর্পোরেট সেলস টিম দ্রুত অফিসিয়াল প্রফর্মা ইনভয়েস সহ আপনার সাথে যোগাযোগ করবে।"
                    : "Our enterprise sales team is reviewing your requirements and will connect via WhatsApp/Phone shortly."}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false)
                    setIsOpen(false)
                  }}
                  className="btn-primary text-xs !px-6 !py-3"
                >
                  {isBn ? "উইন্ডো বন্ধ করুন" : "Done"}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Organization Type */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                    {isBn ? "প্রতিষ্ঠানের ধরণ" : "Organization Type"}
                  </label>
                  <select
                    value={orgType}
                    onChange={(e) => setOrgType(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-stone-300 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  >
                    <option value="Corporate Office">Corporate Office / Business Enterprise</option>
                    <option value="Educational Institute">School, College or University</option>
                    <option value="Hospital / Clinic">Healthcare Facility / Clinic</option>
                    <option value="NGO / CSR Project">NGO / WASH Development Project</option>
                    <option value="Hospitality">Restaurant, Cafe or Eco-Resort</option>
                  </select>
                </div>

                {/* Estimated Quantity */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                    {isBn ? "সম্ভাব্য পরিমাণ" : "Deployment Volume"}
                  </label>
                  <select
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-stone-300 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  >
                    <option value="5–20 Units">5 to 20 Units (Small Office / Floor)</option>
                    <option value="21–50 Units">21 to 50 Units (Multi-branch / Institute)</option>
                    <option value="50+ Units">50+ Units (Large Scale / CSR WASH Project)</option>
                  </select>
                </div>

                {/* Org & Contact Details */}
                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                      {isBn ? "প্রতিষ্ঠানের নাম *" : "Organization Name *"}
                    </label>
                    <input
                      type="text"
                      required
                      value={orgName}
                      onChange={(e) => setOrgName(e.target.value)}
                      placeholder="e.g. Acme Corporation"
                      className="w-full px-3 py-2.5 rounded-xl border border-stone-300 text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                      {isBn ? "যোগাযোগকারীর নাম *" : "Contact Person *"}
                    </label>
                    <input
                      type="text"
                      required
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="e.g. Asif Mahmud"
                      className="w-full px-3 py-2.5 rounded-xl border border-stone-300 text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                    {isBn ? "মোবাইল ফোন নম্বর *" : "Contact Mobile / Phone *"}
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="017XXXXXXXX"
                    className="w-full px-3 py-2.5 rounded-xl border border-stone-300 text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                    {isBn ? "বিশেষ চাহিদা (ঐচ্ছিক)" : "Custom Requests / Notes (Optional)"}
                  </label>
                  <textarea
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder={
                      isBn
                        ? "মাটির ওপর কাস্টম লোগো খোদাই, নিয়মিত কার্টিজ রক্ষণাবেক্ষণ চুক্তি ইত্যাদি..."
                        : "Custom etched institution logo, scheduled cartridge replacement contract, etc."
                    }
                    className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full btn-primary text-xs sm:text-sm !py-3.5 flex items-center justify-center gap-2 shadow-lg"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isBn ? "কোটেশন পাঠান (হোয়াটসঅ্যাপে ফরোয়ার্ড)" : "Send RFQ via WhatsApp"}</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  )
}
