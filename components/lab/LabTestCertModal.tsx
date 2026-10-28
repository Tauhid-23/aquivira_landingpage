"use client"

import { useState } from "react"
import { FileText, CheckCircle2, ShieldCheck, X, Printer, Award, Building2, ExternalLink } from "lucide-react"
import { useLanguage } from "@/lib/i18n/LanguageContext"

interface LabTestCertModalProps {
  variant?: "button" | "card" | "link"
  className?: string
}

export default function LabTestCertModal({
  variant = "button",
  className = "",
}: LabTestCertModalProps) {
  const { t, language } = useLanguage()
  const isBn = language === "bn"
  const [isOpen, setIsOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<"all" | "micro" | "physical" | "chemical">("all")

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print()
    }
  }

  return (
    <>
      {variant === "button" && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold transition-all shadow-sm ${className}`}
        >
          <Award className="w-4 h-4 text-amber-400" />
          <span>{isBn ? "icddr,b পরীক্ষার রিপোর্ট দেখুন" : "View icddr,b Test Reports"}</span>
        </button>
      )}

      {variant === "link" && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className={`inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline ${className}`}
        >
          <Award className="w-3.5 h-3.5 text-primary" />
          <span>{isBn ? "icddr,b সার্টিফাইড টেস্ট রিপোর্ট" : "icddr,b Certified Test Reports"}</span>
        </button>
      )}

      {variant === "card" && (
        <div
          onClick={() => setIsOpen(true)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && setIsOpen(true)}
          className={`cursor-pointer rounded-2xl p-5 bg-gradient-to-br from-amber-50/80 via-white to-stone-50 border border-amber-200/80 hover:border-amber-400 shadow-sm hover:shadow-md transition-all flex items-center justify-between gap-4 ${className}`}
        >
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-[#E2136E]/10 text-[#E2136E] flex items-center justify-center flex-shrink-0 font-black text-sm">
              icddr,b
            </div>
            <div>
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#E2136E] bg-rose-50 px-2 py-0.5 rounded-full">
                  Official Laboratory Test
                </span>
              </div>
              <h5 className="font-extrabold text-sm sm:text-base text-stone-900">
                {isBn ? "icddr,b পরীক্ষিত ও প্রমাণিত ফলাফল" : "icddr,b Certified Water Quality"}
              </h5>
              <p className="text-xs text-stone-600">
                Total Coliforms: 0 CFU • Arsenic &lt;1.0 ppb • Iron &lt;0.1 mg/L • Turbidity 0.11 NTU
              </p>
            </div>
          </div>
          <span className="text-xs font-bold text-primary underline flex items-center gap-1 flex-shrink-0">
            {isBn ? "পূর্ণাঙ্গ রিপোর্ট" : "View Reports"}
          </span>
        </div>
      )}

      {/* Modal Dialog */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-stone-950/70 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-full max-w-3xl rounded-3xl bg-white p-5 sm:p-8 shadow-2xl border border-stone-200 text-stone-900 max-h-[92vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Institution Header */}
            <div className="flex items-start justify-between gap-4 pb-5 border-b border-stone-200 mb-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-stone-900 to-stone-800 text-white flex flex-col items-center justify-center shadow-lg p-2 flex-shrink-0">
                  <span className="text-[11px] font-black tracking-tight text-amber-400">icddr,b</span>
                  <span className="text-[8px] text-stone-300 font-semibold tracking-tighter">LAB</span>
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">
                      Official Testing Laboratory
                    </span>
                    <span className="text-[10px] text-stone-500">
                      Mohakhali, Dhaka - 1212
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-black mt-1 text-stone-900 leading-snug">
                    icddr,b — Laboratory of Environmental Health
                  </h3>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Health Systems and Population Studies Division • Web: www.icddrb.org
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-500 hover:text-stone-900 flex items-center justify-center transition-colors flex-shrink-0"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Client Particulars & Testing Context */}
            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 mb-6 text-xs text-stone-700 grid sm:grid-cols-2 gap-3">
              <div>
                <span className="font-bold text-stone-900 block">{isBn ? "নমুনার বিবরণ ও ক্লায়েন্ট:" : "Sample & Client Details:"}</span>
                <p className="text-stone-600 mt-0.5">
                  <strong>Client:</strong> AquiVira (746/1 Aambagan, Rajpara, Rajshahi) & Ashraf Islam Ashfaq, Mirpur
                </p>
                <p className="text-stone-600">
                  <strong>Sample Particular:</strong> Drinking Water
                </p>
              </div>
              <div>
                <span className="font-bold text-stone-900 block">{isBn ? "সার্টিফাইং কর্তৃপক্ষ:" : "Certifying Authority:"}</span>
                <p className="text-stone-600 mt-0.5">
                  <strong>Signatory:</strong> Dr. Zahid Hayat Mahmud (Scientist and Head)
                </p>
                <p className="text-stone-600">
                  Laboratory of Environmental Health, HSPSD, icddr,b
                </p>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="flex flex-wrap gap-2 mb-5">
              <button
                type="button"
                onClick={() => setActiveTab("all")}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === "all"
                    ? "bg-primary text-white shadow-xs"
                    : "bg-stone-100 hover:bg-stone-200 text-stone-700"
                }`}
              >
                {isBn ? "সকল ফলাফল (All)" : "All Parameters (3 Reports)"}
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("micro")}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === "micro"
                    ? "bg-primary text-white shadow-xs"
                    : "bg-stone-100 hover:bg-stone-200 text-stone-700"
                }`}
              >
                {isBn ? "১. জীবাণু পরীক্ষা (Coliforms)" : "1. Microbiological"}
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("physical")}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === "physical"
                    ? "bg-primary text-white shadow-xs"
                    : "bg-stone-100 hover:bg-stone-200 text-stone-700"
                }`}
              >
                {isBn ? "২. টার্বিডিটি ও টিডিএস" : "2. Physical (Turbidity & TDS)"}
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("chemical")}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === "chemical"
                    ? "bg-primary text-white shadow-xs"
                    : "bg-stone-100 hover:bg-stone-200 text-stone-700"
                }`}
              >
                {isBn ? "৩. ভারী ধাতু (Arsenic/Iron)" : "3. Heavy Metals (As & Fe)"}
              </button>
            </div>

            {/* Reports Display */}
            <div className="space-y-6 mb-6">
              {/* Report 1: Microbiological */}
              {(activeTab === "all" || activeTab === "micro") && (
                <div className="rounded-2xl border border-stone-200 overflow-hidden shadow-xs">
                  <div className="p-3.5 bg-emerald-50/80 border-b border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
                    <div>
                      <span className="font-extrabold text-emerald-950 uppercase tracking-wider">
                        Report 1: Microbiological Test Report
                      </span>
                      <span className="text-stone-500 text-[11px] ml-2">
                        Lab ID: 2026042093 (V1) • Receipt: UTR26042900062 • Date: 04.05.2026
                      </span>
                    </div>
                    <span className="bg-emerald-600 text-white font-bold text-[10px] px-2 py-0.5 rounded-full">
                      Zero Contamination
                    </span>
                  </div>

                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="bg-stone-50 text-[11px] font-bold text-stone-600 uppercase border-b border-stone-200">
                        <th className="py-2.5 px-3">Sl. No.</th>
                        <th className="py-2.5 px-3">Parameter</th>
                        <th className="py-2.5 px-3">Unit</th>
                        <th className="py-2.5 px-3 font-extrabold text-stone-900">AquiVira Result</th>
                        <th className="py-2.5 px-3">BD Standard (ECR&apos;23)</th>
                        <th className="py-2.5 px-3">WHO Guideline (2022)</th>
                        <th className="py-2.5 px-3">Method</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100">
                      <tr className="bg-white">
                        <td className="py-3 px-3 font-bold text-stone-500">1</td>
                        <td className="py-3 px-3 font-bold text-stone-900">Total coliforms</td>
                        <td className="py-3 px-3 text-stone-600">CFU/100mL</td>
                        <td className="py-3 px-3 font-black text-emerald-700 text-base">0</td>
                        <td className="py-3 px-3 text-stone-600">0</td>
                        <td className="py-3 px-3 text-stone-600">0</td>
                        <td className="py-3 px-3 text-stone-500">Membrane Filtration</td>
                      </tr>
                    </tbody>
                  </table>

                  <div className="p-3 bg-stone-50/70 border-t border-stone-100 text-xs text-stone-700 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>
                      <strong>Official icddr,b Comment:</strong> &ldquo;The supplied water sample is not contaminated with total coliforms.&rdquo;
                    </span>
                  </div>
                </div>
              )}

              {/* Report 2: Physical Parameters */}
              {(activeTab === "all" || activeTab === "physical") && (
                <div className="rounded-2xl border border-stone-200 overflow-hidden shadow-xs">
                  <div className="p-3.5 bg-sky-50/80 border-b border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
                    <div>
                      <span className="font-extrabold text-sky-950 uppercase tracking-wider">
                        Report 2: Physical Water Quality Parameters
                      </span>
                      <span className="text-stone-500 text-[11px] ml-2">
                        Lab ID: 2026095130 (V1) • Receipt: MIR26092800066 • Date: 01.10.2026
                      </span>
                    </div>
                    <span className="bg-sky-600 text-white font-bold text-[10px] px-2 py-0.5 rounded-full">
                      Crystal Clarity
                    </span>
                  </div>

                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="bg-stone-50 text-[11px] font-bold text-stone-600 uppercase border-b border-stone-200">
                        <th className="py-2.5 px-3">Sl. No.</th>
                        <th className="py-2.5 px-3">Parameter</th>
                        <th className="py-2.5 px-3">Unit</th>
                        <th className="py-2.5 px-3 font-extrabold text-stone-900">AquiVira Result</th>
                        <th className="py-2.5 px-3">BD Standard (ECR&apos;23)</th>
                        <th className="py-2.5 px-3">WHO Guideline (2022)</th>
                        <th className="py-2.5 px-3">Method</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100">
                      <tr className="bg-white">
                        <td className="py-3 px-3 font-bold text-stone-500">1</td>
                        <td className="py-3 px-3 font-bold text-stone-900">Total Dissolved Solids (TDS)</td>
                        <td className="py-3 px-3 text-stone-600">mg/L</td>
                        <td className="py-3 px-3 font-black text-sky-800 text-base">160.7</td>
                        <td className="py-3 px-3 text-stone-600">1000</td>
                        <td className="py-3 px-3 text-stone-600">1000</td>
                        <td className="py-3 px-3 text-stone-500">Electrical Conductivity</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="py-3 px-3 font-bold text-stone-500">2</td>
                        <td className="py-3 px-3 font-bold text-stone-900">Turbidity</td>
                        <td className="py-3 px-3 text-stone-600">NTU</td>
                        <td className="py-3 px-3 font-black text-emerald-700 text-base">0.11</td>
                        <td className="py-3 px-3 text-stone-600">5</td>
                        <td className="py-3 px-3 text-stone-600">&lt;5</td>
                        <td className="py-3 px-3 text-stone-500">Nephelometric</td>
                      </tr>
                    </tbody>
                  </table>

                  <div className="p-3 bg-stone-50/70 border-t border-stone-100 text-xs text-stone-700 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>
                      <strong>Clarity & Minerals:</strong> Turbidity is 0.11 NTU (98% clearer than the WHO limit of 5 NTU); TDS of 160.7 mg/L ensures healthy alkaline drinking water.
                    </span>
                  </div>
                </div>
              )}

              {/* Report 3: Chemical & Heavy Metals */}
              {(activeTab === "all" || activeTab === "chemical") && (
                <div className="rounded-2xl border border-stone-200 overflow-hidden shadow-xs">
                  <div className="p-3.5 bg-amber-50/80 border-b border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
                    <div>
                      <span className="font-extrabold text-amber-950 uppercase tracking-wider">
                        Report 3: Chemical & Heavy Metals Quality Parameters
                      </span>
                      <span className="text-stone-500 text-[11px] ml-2">
                        Lab ID: 2026095130 (V1) • Receipt: MIR26092800066 • Date: 12.10.2026
                      </span>
                    </div>
                    <span className="bg-amber-600 text-white font-bold text-[10px] px-2 py-0.5 rounded-full">
                      Safe Heavy Metals
                    </span>
                  </div>

                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="bg-stone-50 text-[11px] font-bold text-stone-600 uppercase border-b border-stone-200">
                        <th className="py-2.5 px-3">Sl. No.</th>
                        <th className="py-2.5 px-3">Parameter</th>
                        <th className="py-2.5 px-3">Unit</th>
                        <th className="py-2.5 px-3 font-extrabold text-stone-900">AquiVira Result</th>
                        <th className="py-2.5 px-3">BD Standard (ECR&apos;23)</th>
                        <th className="py-2.5 px-3">WHO Guideline (2022)</th>
                        <th className="py-2.5 px-3">Method</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100">
                      <tr className="bg-white">
                        <td className="py-3 px-3 font-bold text-stone-500">1</td>
                        <td className="py-3 px-3 font-bold text-stone-900">Iron (Fe)</td>
                        <td className="py-3 px-3 text-stone-600">mg/L</td>
                        <td className="py-3 px-3 font-black text-emerald-700 text-base">&lt;0.1</td>
                        <td className="py-3 px-3 text-stone-600">0.3–1.0</td>
                        <td className="py-3 px-3 text-stone-600">&lt;0.3</td>
                        <td className="py-3 px-3 text-stone-500">FAAS</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="py-3 px-3 font-bold text-stone-500">2</td>
                        <td className="py-3 px-3 font-bold text-stone-900">Arsenic (As)</td>
                        <td className="py-3 px-3 text-stone-600">ppb</td>
                        <td className="py-3 px-3 font-black text-emerald-700 text-base">&lt;1.0</td>
                        <td className="py-3 px-3 text-stone-600">50</td>
                        <td className="py-3 px-3 text-stone-600">10</td>
                        <td className="py-3 px-3 text-stone-500">HGAAS</td>
                      </tr>
                    </tbody>
                  </table>

                  <div className="p-3 bg-stone-50/70 border-t border-stone-100 text-xs text-stone-700 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>
                      <strong>Toxic Metal Safety:</strong> Arsenic level of &lt;1.0 ppb is 10x safer than WHO guidelines (10 ppb) and 50x safer than Bangladesh national limits (50 ppb).
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Official Certification Footer */}
            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/90 mb-6 text-xs text-stone-600 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="font-extrabold text-stone-900">
                  Certified by: Dr. Zahid Hayat Mahmud
                </p>
                <p className="text-[11px] text-stone-500">
                  Scientist and Head, Laboratory of Environmental Health, HSPSD, icddr,b
                </p>
              </div>
              <div className="text-right sm:text-right">
                <span className="text-[10px] font-bold text-stone-500 uppercase tracking-widest block">
                  Original Document Archival
                </span>
                <span className="text-xs font-semibold text-emerald-700">
                  ✓ Physical Reports Verified
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 justify-end pt-2">
              <button
                type="button"
                onClick={handlePrint}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold text-xs transition-colors"
              >
                <Printer className="w-4 h-4" />
                <span>{isBn ? "রিপোর্ট প্রিন্ট করুন" : "Print Official Summary"}</span>
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs transition-colors shadow-sm"
              >
                <span>{isBn ? "উইন্ডো বন্ধ করুন" : "Close Reports"}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
