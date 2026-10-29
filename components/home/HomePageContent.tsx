"use client"

import Link from "next/link"
import { Droplet, Zap, Shield, Leaf, ArrowRight, Check, Award, Flame, Phone, Sparkles } from "lucide-react"
import SupportedBy from "@/components/global/SupportedBy"
import { TAGLINE, AWARDS, FAQS } from "@/lib/data/siteData"
import { HELPLINE_PHONE, HELPLINE_PHONE_RAW } from "@/lib/data/checkoutData"
import { useLanguage } from "@/lib/i18n/LanguageContext"
import WaterPourAudio from "@/components/sensory/WaterPourAudio"
import ArtisanKilnStamp from "@/components/artisan/ArtisanKilnStamp"
import LabTestCertModal from "@/components/lab/LabTestCertModal"
import TerracottaDivider from "@/components/ui/TerracottaDivider"
import CustomerReviews from "@/components/reviews/CustomerReviews"
import DistrictDeliveryChecker from "@/components/delivery/DistrictDeliveryChecker"
import CorporateRfqModal from "@/components/b2b/CorporateRfqModal"

export default function HomePageContent() {
  const { t, language } = useLanguage()

  return (
    <>
      {/* 1. Hero Section */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 fade-in-up">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-900 text-xs font-bold border border-amber-500/20">
                  <Flame className="w-4 h-4 text-amber-600" />
                  {t("checkout.discount")} (৳9,999)
                </div>

                {/* Compact Artisan Seal */}
                <ArtisanKilnStamp variant="compact" />
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 text-balance">
                {t("hero.headline")}
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed text-balance">
                {t("hero.subheadline")}
              </p>

              {/* Key Metrics Strip */}
              <div className="flex flex-wrap gap-5 sm:gap-6 mb-10 text-sm font-semibold text-stone-700">
                <div className="flex items-center gap-2">
                  <Leaf className="w-5 h-5 text-primary" />
                  <span>{language === "bn" ? "১০০% প্লাস্টিকমুক্ত" : "100% Plastic-Free"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" />
                  <span>{language === "bn" ? "বিদ্যুৎবিহীন প্রবাহ" : "Zero Electricity"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Droplet className="w-5 h-5 text-primary" />
                  <span>{language === "bn" ? "প্রাকৃতিক শীতলতা" : "Evaporative Cooling"}</span>
                </div>
              </div>

              {/* Action Buttons + Audio Pour */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link href="/order" className="btn-primary text-base !px-8 !py-4 shadow-lg text-center">
                  {t("hero.orderBtn")}
                </Link>
                <Link href="/product" className="btn-secondary text-base !px-8 !py-4 text-center">
                  {t("hero.discoverBtn")}
                </Link>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-primary" />
                  <span>
                    {t("nav.helpline")}:{" "}
                    <a href={`tel:${HELPLINE_PHONE_RAW}`} className="font-bold underline text-foreground">
                      {HELPLINE_PHONE}
                    </a>
                  </span>
                </div>
                <span className="text-stone-300">•</span>
                <LabTestCertModal variant="link" />
              </div>
            </div>

            {/* Right Column: Hero Image with Longevity Badge */}
            <div className="lg:col-span-5 slide-in-right flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-b from-stone-50 to-stone-100 border border-stone-200 flex items-center justify-center p-6">
                  <img
                    src="/aquivira-water-purifier.png"
                    alt="AquiVira Natural Clay Water Purifier"
                    className="w-full h-full object-contain filter drop-shadow-xl"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white px-5 py-3 rounded-2xl shadow-xl border border-stone-100 hidden sm:block">
                  <p className="text-[11px] font-bold text-muted-foreground uppercase">{t("hero.filterLongevity")}</p>
                  <p className="text-base font-extrabold text-primary">{t("hero.liters")}</p>
                  <p className="text-[10px] text-stone-500">{t("hero.dailyUsage")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TerracottaDivider />

      {/* 2. The 3 Pillars Section */}
      <section className="section-padding bg-secondary/50 border-y border-border">
        <div className="container-wide">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-primary mb-2 block">
              {t("pillars.badge")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("pillars.title")}
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("pillars.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="bg-white rounded-3xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                <Leaf className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t("pillars.p1Title")}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t("pillars.p1Desc")}
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white rounded-3xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                <Zap className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t("pillars.p2Title")}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t("pillars.p2Desc")}
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white rounded-3xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                <Droplet className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t("pillars.p3Title")}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t("pillars.p3Desc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Dedicated "The Magic of Natural Clay" Section with Artisan Kiln Stamp */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Image Column */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="rounded-3xl overflow-hidden bg-gradient-to-b from-stone-100 via-stone-50 to-stone-100 border border-border shadow-xl p-3 sm:p-4 flex items-center justify-center">
                  <img
                    src="/aquivira-authentic-purifier.jpg"
                    alt="Authentic AquiVira Handcrafted Terracotta Water Purifier"
                    className="w-full h-auto max-h-[580px] object-contain rounded-2xl shadow-sm"
                  />
                </div>
                <div className="absolute -bottom-4 -right-2 sm:-right-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-stone-200 flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <div>
                    <p className="text-[11px] font-bold text-stone-900 leading-tight">{t("clay.craftBadge")}</p>
                    <p className="text-[10px] text-stone-500">{t("clay.craftSub")}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-wider text-primary mb-2 block">
                {t("clay.badge")}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                {t("clay.title")}
              </h2>
              <div className="space-y-4 text-muted-foreground text-base leading-relaxed">
                <p>{t("clay.p1")}</p>
                <p>{t("clay.p2")}</p>
                <p>{t("clay.p3")}</p>
              </div>

              {/* Artisan Seal of Authenticity Medallion */}
              <div className="mt-8 mb-6">
                <ArtisanKilnStamp variant="seal" />
              </div>

              {/* Craftsmanship Highlights Grid */}
              <div className="grid sm:grid-cols-2 gap-3 pt-6 border-t border-border">
                <div className="flex items-start gap-2.5 text-xs">
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold flex-shrink-0 mt-0.5">✓</span>
                  <span className="text-stone-700">{t("clay.feat1")}</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs">
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold flex-shrink-0 mt-0.5">✓</span>
                  <span className="text-stone-700">{t("clay.feat2")}</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs">
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold flex-shrink-0 mt-0.5">✓</span>
                  <span className="text-stone-700">{t("clay.feat3")}</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs">
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold flex-shrink-0 mt-0.5">✓</span>
                  <span className="text-stone-700">{t("clay.feat4")}</span>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link href="/product" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline">
                  {t("clay.explore")} <ArrowRight className="w-4 h-4" />
                </Link>
                <span className="text-stone-300">•</span>
                <Link href="/clay-care-guide" className="inline-flex items-center gap-2 text-sm font-bold text-stone-600 hover:text-primary">
                  {t("clay.readGuide")} <ArrowRight className="w-4 h-4" />
                </Link>
                <span className="text-stone-300">•</span>
                <LabTestCertModal variant="link" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <TerracottaDivider />

      {/* 4. Awards & Recognitions Banner */}
      <section className="py-16 bg-stone-900 text-white">
        <div className="container-wide px-4">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-2 block">
              {language === "bn" ? "স্বীকৃতি ও অর্জন" : "Recognitions & Milestones"}
            </span>
            <h2 className="text-3xl font-bold">
              {language === "bn"
                ? "জাতীয় প্রতিযোগিতা ও ইনোভেশন অ্যাওয়ার্ডে বিজয়ী"
                : "Validated by National Competitions & Accelerators"}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {AWARDS.map((award, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-400/40 hover:bg-white/[0.08] transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Clean White Badge Container for logo visibility */}
                  <div className="w-full h-20 rounded-xl bg-white flex items-center justify-center p-3 mb-4 shadow-md transition-transform hover:scale-105">
                    <img
                      src={award.logo}
                      alt={award.title}
                      className="max-h-14 w-auto max-w-[90%] object-contain"
                    />
                  </div>
                  {award.badge && (
                    <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-2.5 py-0.5 rounded-full mb-2">
                      {language === "bn" && award.badgeBn ? award.badgeBn : award.badge}
                    </span>
                  )}
                  <h3 className="font-bold text-base mb-1 text-white leading-snug">
                    {language === "bn" && award.titleBn ? award.titleBn : award.title}
                  </h3>
                  {award.organizer && (
                    <p className="text-[11px] text-amber-300/80 font-medium mb-2">{award.organizer}</p>
                  )}
                </div>
                <p className="text-xs text-stone-300 leading-relaxed mt-2">
                  {language === "bn" && award.descriptionBn ? award.descriptionBn : award.description}
                </p>
              </div>
            ))}
          </div>

          {/* Supported By Showcase (Switzerland -> Swisscontact -> WaterAid) */}
          <div className="mt-16 pt-12 border-t border-white/10">
            <SupportedBy
              variant="dark"
              badge={t("partners.badge")}
              title={t("partners.title")}
              subtitle={t("partners.subtitle")}
            />
          </div>
        </div>
      </section>

      {/* 5. Verified Customer Reviews Carousel */}
      <CustomerReviews />

      <TerracottaDivider />

      {/* 6. Real-Time 64-District Delivery & B2B Procurement Hub */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            {/* Left: 64-District Delivery & COD Checker */}
            <div className="lg:col-span-7">
              <DistrictDeliveryChecker className="h-full" />
            </div>

            {/* Right: Corporate, School & NGO Bulk Orders */}
            <div className="lg:col-span-5 rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-stone-900 to-stone-800 text-white flex flex-col justify-between shadow-xl">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-400 bg-white/10 px-3 py-1 rounded-full inline-block mb-4">
                  {language === "bn" ? "অফিস, শিক্ষা প্রতিষ্ঠান ও এনজিও" : "Offices, Schools & NGOs"}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold mb-3">
                  {language === "bn" ? "কর্পোরেট ও প্রাতিষ্ঠানিক বাল্ক সলিউশন" : "Bulk Procurement & CSR Projects"}
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed mb-6">
                  {language === "bn"
                    ? "প্লাস্টিকের ২০ লিটার জারের নিয়মিত খরচ বন্ধ করুন। অফিস ও উন্নয়ন প্রকল্পের জন্য কাস্টম লোগো খোদাই ও সাশ্রয়ী মূল্যে বাল্ক অর্ডার সরবরাহ।"
                    : "Replace recurring 20L plastic jars with sustainable, plastic-free clay purifiers. Custom laser etching & institutional maintenance SLAs."}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-3">
                <CorporateRfqModal triggerClassName="btn-primary !bg-amber-500 !text-stone-950 hover:!bg-amber-400 text-xs sm:text-sm !px-5 !py-3 flex-1 flex items-center justify-center font-bold shadow-md" />
                <a
                  href={`tel:${HELPLINE_PHONE_RAW}`}
                  className="btn-secondary !bg-white/10 !text-white hover:!bg-white/20 text-xs sm:text-sm !px-4 !py-3 text-center border-white/20"
                >
                  {t("nav.helpline")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ Accordion Snippet */}
      <section id="faq" className="section-padding bg-secondary/30">
        <div className="container-wide max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">
              {language === "bn" ? "সচরাচর জিজ্ঞাসিত প্রশ্নাবলী" : "Frequently Asked Questions"}
            </h2>
            <p className="text-muted-foreground text-sm">
              {language === "bn"
                ? "আকিভিরা পিউরিফায়ার ব্যবহার ও রক্ষণাবেক্ষণ সংক্রান্ত প্রয়োজনীয় তথ্যাবলী।"
                : "Everything you need to know about purchasing and maintaining your AquiVira."}
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-border shadow-sm">
                <h3 className="font-bold text-base mb-2">{faq.question}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center flex flex-wrap justify-center items-center gap-4">
            <Link href="/clay-care-guide" className="text-sm font-semibold text-primary hover:underline">
              {t("clay.readGuide")} →
            </Link>
            <span className="text-stone-300">•</span>
            <LabTestCertModal variant="link" />
          </div>
        </div>
      </section>

      {/* 6. Active Call To Action Banner */}
      <section className="section-padding bg-gradient-to-br from-amber-600 via-amber-700 to-stone-800 text-white text-center">
        <div className="container-wide max-w-3xl">
          <span className="inline-block px-4 py-1 rounded-full text-xs font-bold bg-white/20 text-white mb-4">
            {language === "bn" ? "উৎপাদন ব্যাচ সক্রিয় • দেশজুড়ে ডেলিভারি" : "Active Production Batch • Fast Nationwide Delivery"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            {language === "bn"
              ? "আপনার পরিবারের জন্য বিশুদ্ধ ও স্নিগ্ধ শীতল পানি"
              : "Experience Clean, Cool Drinking Water Without Electricity"}
          </h2>
          <p className="text-amber-100 text-sm sm:text-base mb-8 max-w-xl mx-auto leading-relaxed">
            {language === "bn"
              ? "সীমিত স্টক অফারে মাত্র ৯,৯৯৯ টাকায় প্রি-ইনস্টল্ড ফিল্টার কার্টিজসহ সংগ্রহ করুন। ক্যাশ অন ডেলিভারি সুবিধা।"
              : "Available now for ৳9,999 (31% off). Free insured shipping and Cash on Delivery across all 64 districts."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/order" className="btn-primary !bg-white !text-stone-900 hover:!bg-stone-100 text-sm !px-8 !py-4 shadow-xl">
              {t("hero.orderBtn")}
            </Link>
            <a
              href={`tel:${HELPLINE_PHONE_RAW}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-amber-100 hover:text-white underline underline-offset-4"
            >
              <Phone className="w-4 h-4" /> {t("nav.helpline")}: {HELPLINE_PHONE}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
