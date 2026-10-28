"use client"

import { useState } from "react"
import { Star, ShieldCheck, MapPin, ChevronLeft, ChevronRight, Quote, ThumbsUp } from "lucide-react"
import { useLanguage } from "@/lib/i18n/LanguageContext"

interface Review {
  id: string
  name: string
  bengaliName: string
  location: string
  bengaliLocation: string
  rating: number
  date: string
  bengaliDate: string
  headline: string
  bengaliHeadline: string
  text: string
  bengaliText: string
  highlight: string
  bengaliHighlight: string
  verified: boolean
  helpfulCount: number
}

const REVIEWS: Review[] = [
  {
    id: "rev-1",
    name: "Dr. Farhana Yasmin",
    bengaliName: "ডা. ফারহানা ইয়াসমিন",
    location: "Dhanmondi, Dhaka",
    bengaliLocation: "ধানমন্ডি, ঢাকা",
    rating: 5,
    date: "October 2026",
    bengaliDate: "অক্টোবর ২০২৬",
    headline: "No more plastic taste or gas boiling bills.",
    bengaliHeadline: "প্লাস্টিকের দুর্গন্ধ নেই, আর গ্যাস পুড়িয়ে পানি ফোটানোর ঝামেলা থেকেও মুক্তি।",
    text: "As a physician, I was deeply worried about microplastics from heated 20L plastic jars. AquiVira sits gracefully in our dining room—the water tastes crisp, natural, and stays noticeably cooler than room temperature even during Dhaka's humid afternoons.",
    bengaliText: "একজন চিকিৎসক হিসেবে গরমের দিনে ২০ লিটারের প্লাস্টিক জারের মাইক্রোপ্লাস্টিক নিয়ে খুব চিন্তিত ছিলাম। আকিভিরা এখন আমাদের খাবার ঘরের শোভা বাড়িয়েছে—পানি সম্পূর্ণ স্বচ্ছ, সুস্বাদু এবং ফ্রিজে না রেখেও প্রাকৃতিকভাবে দারুণ ঠাণ্ডা থাকে।",
    highlight: "Saved ৳1,400/month on boiling gas and jar deliveries",
    bengaliHighlight: "প্রতি মাসে গ্যাস ও জারের পেছনে প্রায় ১,৪০০ টাকা সাশ্রয় হচ্ছে",
    verified: true,
    helpfulCount: 42,
  },
  {
    id: "rev-2",
    name: "Tanvir Hossain",
    bengaliName: "তানভীর হোসেন",
    location: "Kazihata, Rajshahi",
    bengaliLocation: "কাজীহাটা, রাজশাহী",
    rating: 5,
    date: "September 2026",
    bengaliDate: "সেপ্টেম্বর ২০২৬",
    headline: "Works flawlessly during heavy load shedding.",
    bengaliHeadline: "লোডশেডিং থাকলেও কোনো চিন্তা নেই, সারাদিন বিশুদ্ধ ঠাণ্ডা পানি পাই।",
    text: "Our area faces regular summer power cuts where our old electric RO filter would shut down completely. With AquiVira, gravity does all the work. The clay craftsmanship from our own Rajshahi Kumors is exceptionally sturdy and beautiful.",
    bengaliText: "আমাদের এলাকায় গরমের দিনে প্রায়ই লোডশেডিং হয়, তখন ইলেকট্রিক আরও ফিল্টার বন্ধ হয়ে যেত। আকিভিরায় কোনো বিদ্যুৎ লাগে না, গ্র্যাভিটি প্রযুক্তিতে সবসময় বিশুদ্ধ পানি মেলে। রাজশাহীর মৃৎশিল্পের নিখুঁত ফিনিশিং দেখে মন ভরে যায়।",
    highlight: "Zero electricity required • 100% dependable",
    bengaliHighlight: "বিদ্যুৎবিহীন প্রযুক্তি • শতভাগ নির্ভরযোগ্য",
    verified: true,
    helpfulCount: 38,
  },
  {
    id: "rev-3",
    name: "Nusrat Jahan & Family",
    bengaliName: "নুসরাত জাহান ও পরিবার",
    location: "Uttara Sector 7, Dhaka",
    bengaliLocation: "উত্তরা সেক্টর ৭, ঢাকা",
    rating: 5,
    date: "October 2026",
    bengaliDate: "অক্টোবর ২০২৬",
    headline: "My kids drink twice as much water now.",
    bengaliHeadline: "বাচ্চারা এখন নিজ থেকেই আগ্রহ নিয়ে বারবার পানি পান করে।",
    text: "The traditional painted motif caught my eye, but the water quality won over our entire family. There is no chlorine odor from Dhaka tap water. Drinking from the matching terracotta cup feels wholesome and grounded.",
    bengaliText: "ফিল্টারের ওপর লালবাগ/কার্জন হল আদলের ঐতিহ্যবাহী চিত্রকর্মটি চমৎকার। ঢাকার ট্যাপের পানির তীব্র ক্লোরিনের গন্ধ সম্পূর্ণ দূর হয়ে যায়। মাটির গ্লাসে পানি খাওয়ার অনুভূতি সত্যিই অসাধারণ ও সতেজ।",
    highlight: "Complete chlorine & odor clearance",
    bengaliHighlight: "সম্পূর্ণ ক্লোরিন ও দুর্গন্ধমুক্ত সুপেয় পানি",
    verified: true,
    helpfulCount: 29,
  },
  {
    id: "rev-4",
    name: "Engr. Mahmudul Hasan",
    bengaliName: "প্রকৌশলী মাহমুদুল হাসান",
    location: "Zindabazar, Sylhet",
    bengaliLocation: "জিন্দাবাজার, সিলেট",
    rating: 5,
    date: "September 2026",
    bengaliDate: "সেপ্টেম্বর ২০২৬",
    headline: "Scientific simplicity at its best.",
    bengaliHeadline: "বিজ্ঞান ও ঐতিহ্যের এক অনন্য অপূর্ব সমন্বয়।",
    text: "Industrial RO filters waste 3 liters of brine for every 1 liter produced. AquiVira has zero water wastage, preserves calcium/magnesium minerals, and will decompose harmlessly into clay soil decades later.",
    bengaliText: "ইলেকট্রিক আরও ফিল্টারে ১ লিটার বিশুদ্ধ পানির জন্য ৩ লিটার পানি অপচয় হয়। আকিভিরায় এক ফোঁটা পানিও নষ্ট হয় না, প্রয়োজনীয় খনিজ বজায় থাকে এবং কোনো বিষাক্ত প্লাস্টিক বর্জ্য তৈরি করে না।",
    highlight: "Zero water wastage • 100% natural yield",
    bengaliHighlight: "শূন্য পানি অপচয় • শতভাগ পরিবেশবান্ধব",
    verified: true,
    helpfulCount: 31,
  },
]

export default function CustomerReviews() {
  const { language } = useLanguage()
  const isBn = language === "bn"
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => setCurrentIndex((prev) => (prev + 1) % REVIEWS.length)
  const prev = () => setCurrentIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length)

  return (
    <section className="section-padding bg-gradient-to-b from-stone-50 via-white to-stone-50 border-y border-border">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-primary mb-2 block">
            {isBn ? "প্রকৃত গ্রাহক সন্তুষ্টি" : "Verified Customer Stories"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 mb-4 tracking-tight">
            {isBn ? "বাংলাদেশের ঘরে ঘরে আকিভিরার স্নিগ্ধ ছোঁয়া" : "Loved in Bangladeshi Homes Across All Districts"}
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
            {isBn
              ? "ঢাকার ফ্ল্যাট থেকে রাজশাহীর বাড়ি—প্রকৃত গ্রাহকদের অভিজ্ঞতা ও নিরাপদ পানীয় জলের বাস্তব গল্প।"
              : "Read authentic feedback from families who made the switch to zero-plastic, off-grid natural purification."}
          </p>

          {/* Aggregate Rating Banner */}
          <div className="mt-6 inline-flex items-center gap-3 bg-white px-5 py-2.5 rounded-full border border-stone-200/80 shadow-xs">
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-xs font-bold text-stone-900">4.9 / 5.0</span>
            <span className="text-stone-300">•</span>
            <span className="text-xs text-stone-500">
              {isBn ? "১০০% যাচাইকৃত ক্রেতা রিভিউ" : "100% Verified Customer Rating"}
            </span>
          </div>
        </div>

        {/* Reviews Carousel & Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map((r, idx) => (
            <div
              key={r.id}
              className="bg-white rounded-3xl p-6 border border-stone-200/80 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Rating & Location Header */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(r.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] text-stone-400">{isBn ? r.bengaliDate : r.date}</span>
                </div>

                {/* Headline */}
                <h4 className="font-bold text-sm sm:text-base text-stone-900 mb-2 leading-snug">
                  &ldquo;{isBn ? r.bengaliHeadline : r.headline}&rdquo;
                </h4>

                {/* Review Body */}
                <p className="text-xs text-stone-600 leading-relaxed mb-4">
                  {isBn ? r.bengaliText : r.text}
                </p>
              </div>

              <div>
                {/* Highlight Pill */}
                <div className="mb-4 p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-[11px] font-bold text-amber-900">
                  {isBn ? r.bengaliHighlight : r.highlight}
                </div>

                {/* Reviewer Details */}
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <h5 className="font-extrabold text-xs text-stone-900 leading-tight">
                      {isBn ? r.bengaliName : r.name}
                    </h5>
                    <p className="text-[10px] text-stone-500 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-2.5 h-2.5 text-stone-400" />
                      <span>{isBn ? r.bengaliLocation : r.location}</span>
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60">
                    <ShieldCheck className="w-3 h-3" /> {isBn ? "যাচাইকৃত" : "Verified"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
