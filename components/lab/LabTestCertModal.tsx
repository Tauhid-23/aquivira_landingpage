"use client"

import { useState } from "react"
import { FileText, Download, CheckCircle, ShieldCheck, X, Printer, Award } from "lucide-react"
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
  const [isOpen, setIsOpen] = useState(false)

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
          className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200/80 text-stone-900 text-xs font-bold transition-all border border-stone-200/80 shadow-sm ${className}`}
        >
          <FileText className="w-4 h-4 text-primary" />
          <span>{t("lab.viewModal")}</span>
        </button>
      )}

      {variant === "link" && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className={`inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline ${className}`}
        >
          <FileText className="w-3.5 h-3.5" />
          <span>{t("lab.viewModal")}</span>
        </button>
      )}

      {variant === "card" && (
        <div
          onClick={() => setIsOpen(true)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && setIsOpen(true)}
          className={`cursor-pointer rounded-2xl p-4 bg-secondary/40 hover:bg-secondary/70 border border-border transition-all flex items-center justify-between gap-4 ${className}`}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h5 className="font-bold text-xs sm:text-sm text-foreground">
                {t("lab.title")}
              </h5>
              <p className="text-[11px] text-muted-foreground">
                RUET Ceramic Engineering & BCSIR Benchmark
              </p>
            </div>
          </div>
          <span className="text-xs font-bold text-primary underline">
            {language === "bn" ? "সনদ দেখুন" : "View"}
          </span>
        </div>
      )}

      {/* Modal Dialog */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-full max-w-2xl rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-stone-200 text-stone-900 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-stone-200 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center shadow-md">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-primary bg-primary/10 px-2 py-0.5 rounded">
                    Official Verification Certificate
                  </span>
                  <h3 className="text-xl font-extrabold mt-1 text-stone-900">
                    {t("lab.title")}
                  </h3>
                  <p className="text-xs text-stone-500">
                    AquiVira Gravity Filtration Technology • RUET & BCSIR Standards
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

            {/* Test Results Table */}
            <div className="space-y-4 mb-6">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-stone-200 bg-stone-50 text-[11px] font-bold uppercase tracking-wider text-stone-600">
                      <th className="py-2.5 px-3">Tested Parameter</th>
                      <th className="py-2.5 px-3">Pre-Filtration Baseline</th>
                      <th className="py-2.5 px-3">Post-AquiVira Clearance</th>
                      <th className="py-2.5 px-3 text-right">Efficacy</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100">
                    <tr>
                      <td className="py-3 px-3 font-semibold text-stone-900">
                        Heavy Metals (Arsenic, Lead, Iron)
                      </td>
                      <td className="py-3 px-3 text-stone-500">0.05–0.15 mg/L</td>
                      <td className="py-3 px-3 text-emerald-700 font-semibold">&lt; 0.01 mg/L (BD Standard)</td>
                      <td className="py-3 px-3 text-right font-extrabold text-primary">~80%</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-3 font-semibold text-stone-900">
                        Pathogens (E. Coli, Cysts, Fecal Coliform)
                      </td>
                      <td className="py-3 px-3 text-stone-500">Contaminated well water</td>
                      <td className="py-3 px-3 text-emerald-700 font-semibold">0 CFU/100ml Safe Drinking</td>
                      <td className="py-3 px-3 text-right font-extrabold text-primary">~90%+</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-3 font-semibold text-stone-900">
                        Sediment, Turbidity & Rust
                      </td>
                      <td className="py-3 px-3 text-stone-500">High (50–120 NTU)</td>
                      <td className="py-3 px-3 text-emerald-700 font-semibold">&lt; 1 NTU Crystal Clear</td>
                      <td className="py-3 px-3 text-right font-extrabold text-primary">99%</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-3 font-semibold text-stone-900">
                        Essential Minerals (Ca++, Mg++)
                      </td>
                      <td className="py-3 px-3 text-stone-500">Natural trace minerals</td>
                      <td className="py-3 px-3 text-emerald-700 font-semibold">Balanced & Alkaline (pH 7.4–7.8)</td>
                      <td className="py-3 px-3 text-right font-extrabold text-emerald-600">100% Intact</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-3 font-semibold text-stone-900">
                        Microplastics & Chemical Byproducts
                      </td>
                      <td className="py-3 px-3 text-stone-500">N/A (Zero Plastic Housing)</td>
                      <td className="py-3 px-3 text-emerald-700 font-semibold">Zero Detected (Pure Clay)</td>
                      <td className="py-3 px-3 text-right font-extrabold text-emerald-600">Zero Risk</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Institutional Endorsement Footnote */}
            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 mb-6 text-xs text-stone-600 space-y-1">
              <p className="font-semibold text-stone-900">
                Academic & Technical Validation:
              </p>
              <p>
                Tested under the academic guidance of Md. Shamim Hossain (Lecturer, Ceramic & Metallurgical Engineering, RUET). Media cartridge formulated with food-grade washed biosand, acid-washed high-iodine activated carbon, and natural mineral rock.
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 justify-end pt-2">
              <button
                type="button"
                onClick={handlePrint}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold text-xs transition-colors"
              >
                <Printer className="w-4 h-4" />
                <span>{language === "bn" ? "প্রিন্ট করুন" : "Print Certificate"}</span>
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-primary hover:bg-primary/90 text-white font-bold text-xs transition-colors shadow-sm"
              >
                <span>{language === "bn" ? "বন্ধ করুন" : "Close Certificate"}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
