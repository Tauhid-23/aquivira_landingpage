"use client"

import { useState, useEffect, useRef, useCallback, useMemo } from "react"
import {
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Grid,
  Film,
  Award,
  Users,
  Mic,
  Heart,
  Cpu,
  Sparkles,
  MapPin,
  Calendar,
  Layers,
} from "lucide-react"
import { useLanguage } from "@/lib/i18n/LanguageContext"

export type MediaCategory = "all" | "awards" | "partners" | "summits" | "community" | "rnd" | "craft"

export interface MediaSlide {
  id: string
  src: string
  alt: string
  title: string
  titleBn: string
  category: "awards" | "partners" | "summits" | "community" | "rnd" | "craft"
  categoryLabel: string
  categoryLabelBn: string
  location: string
  locationBn: string
  caption: string
  captionBn: string
  dateOrYear: string
  dateOrYearBn: string
  accentColor: string
}

export const MEDIA_SLIDES: MediaSlide[] = [
  {
    id: "blue-award",
    src: "/Photos/Blue Award receiving.JPG",
    alt: "Blue Business Idea Competition Award Ceremony",
    title: "Blue Business Idea Competition Winner",
    titleBn: "ব্লু বিজনেস আইডিয়া প্রতিযোগিতায় বিজয়ী সম্মাননা",
    category: "awards",
    categoryLabel: "Awards & Accolades",
    categoryLabelBn: "পুরস্কার ও সম্মাননা",
    location: "Dhaka, Bangladesh",
    locationBn: "ঢাকা, বাংলাদেশ",
    caption:
      "AquiVira founding team honored on stage for innovative eco-friendly water filtration technology, recognized for high social impact potential.",
    captionBn:
      "পরিবেশবান্ধব ও টেকসই পানি ফিল্টারিং প্রযুক্তির স্বীকৃতিস্বরূপ ব্লু বিজনেস আইডিয়া প্রতিযোগিতার প্রধান মঞ্চে সম্মাননা গ্রহণ।",
    dateOrYear: "2025",
    dateOrYearBn: "২০২৫",
    accentColor: "from-amber-500/20 to-amber-600/10 text-amber-600 border-amber-300",
  },
  {
    id: "swisscontact-director",
    src: "/Photos/SwissContact Country Director.JPG",
    alt: "Meeting with SwissContact Country Director",
    title: "Executive Strategic Session with Swisscontact",
    titleBn: "সুইসকনট্যাক্ট কান্ট্রি ডিরেক্টরের সাথে কৌশলগত বৈঠক",
    category: "partners",
    categoryLabel: "Global Partnerships",
    categoryLabelBn: "আন্তর্জাতিক পার্টনারশিপ",
    location: "Swisscontact Bangladesh HQ",
    locationBn: "সুইসকনট্যাক্ট বাংলাদেশ কার্যালয়",
    caption:
      "Strategic engagement discussing rural water security, enterprise scaling, and decentralized clean tech deployment across Bangladesh.",
    captionBn:
      "সুইসকনট্যাক্ট বাংলাদেশ-এর কান্ট্রি ডিরেক্টরের সাথে গ্রামীণ নিরাপদ পানির বিস্তার ও ব্যবসায়িক টেকসই রূপরেখা নিয়ে আলোচনা।",
    dateOrYear: "2025",
    dateOrYearBn: "২০২৫",
    accentColor: "from-blue-500/20 to-blue-600/10 text-blue-600 border-blue-300",
  },
  {
    id: "with-deied-pd",
    src: "/Photos/With DEIED PD.JPG",
    alt: "With DEIED Program Director",
    title: "Institutional Consultation with DEIED Leadership",
    titleBn: "ডিইআইইডি প্রকল্প পরিচালকের সাথে প্রাতিষ্ঠানিক আলোচনা",
    category: "partners",
    categoryLabel: "Government & Development",
    categoryLabelBn: "সরকারি ও উন্নয়ন সহযোগিতা",
    location: "Department of Environment & Innovation",
    locationBn: "পরিবেশ ও উদ্ভাবন বিভাগ",
    caption:
      "Demonstrating indigenous clay micro-filtration and national water standards to the Project Director of DEIED.",
    captionBn:
      "ডিইআইইডি (DEIED) প্রকল্প পরিচালকের কাছে একিভিরার দেশীয় মাটির ফিল্টারিং প্রযুক্তি এবং কমিউনিটি মডেল উপস্থাপন।",
    dateOrYear: "2025",
    dateOrYearBn: "২০২৫",
    accentColor: "from-sky-500/20 to-sky-600/10 text-sky-600 border-sky-300",
  },
  {
    id: "deied-pd-session",
    src: "/Photos/DEIED PD.JPG",
    alt: "DEIED Program Director official session",
    title: "WASH Standards & Acceleration Review",
    titleBn: "ডিইআইইডি নেতৃত্বের সাথে প্রযুক্তিগত পর্যালোচনা",
    category: "partners",
    categoryLabel: "Government & Development",
    categoryLabelBn: "সরকারি ও উন্নয়ন সহযোগিতা",
    location: "Innovation Summit Hub",
    locationBn: "ইনোভেশন সামিট হাব",
    caption:
      "Deep dive into clean water testing protocols, heavy-metal removal efficacy, and institutional pilot support.",
    captionBn:
      "পানির গুণগত মান, আর্সেনিক দূরীকরণ সক্ষমতা এবং সরকারি ইনকিউবেশন সহায়তার ওপর বিস্তারিত পর্যালোচনা।",
    dateOrYear: "2025",
    dateOrYearBn: "২০২৫",
    accentColor: "from-sky-500/20 to-sky-600/10 text-sky-600 border-sky-300",
  },
  {
    id: "pitching-session-1",
    src: "/Photos/Pitching snippets 1.jpg",
    alt: "Pitching presentation session 1",
    title: "National Startup Pitch Stage",
    titleBn: "জাতীয় স্টার্টআপ পিচিং সেশন",
    category: "summits",
    categoryLabel: "Pitches & Summits",
    categoryLabelBn: "পিচিং ও সামিট",
    location: "National Innovation Stage, Dhaka",
    locationBn: "জাতীয় উদ্ভাবন মঞ্চ, ঢাকা",
    caption:
      "Articulating AquiVira's vision to eliminate single-use plastic water jars through generational clay engineering to investors and judges.",
    captionBn:
      "বিনিয়োগকারী ও বিচারকমণ্ডলীর সামনে মাটির ফিল্টারের মাধ্যমে প্লাস্টিক জারমুক্ত বাংলাদেশের রূপরেখা তুলে ধরা।",
    dateOrYear: "2025",
    dateOrYearBn: "২০২৫",
    accentColor: "from-purple-500/20 to-purple-600/10 text-purple-600 border-purple-300",
  },
  {
    id: "pitching-session-2",
    src: "/Photos/Pitching snippets 2.jpg",
    alt: "Pitching presentation session 2",
    title: "Live Thermodynamic Filtration Mechanism",
    titleBn: "থার্মোডাইনামিক শীতলীকরণ পদ্ধতির সরাসরি উপস্থাপন",
    category: "summits",
    categoryLabel: "Pitches & Summits",
    categoryLabelBn: "পিচিং ও সামিট",
    location: "Startup Pitch Auditorium",
    locationBn: "স্টার্টআপ পিচ অডিটোরিয়াম",
    caption:
      "Illustrating how evaporative micro-pores achieve natural cooling 4°C–6°C below ambient room temperature without a watt of electricity.",
    captionBn:
      "বিদ্যুৎবিহীনভাবে পানিকে প্রাকৃতিকভাবে ৪°–৬° সেলসিয়াস শীতল রাখার অনন্য বৈজ্ঞানিক কলাকৌশল উপস্থাপন।",
    dateOrYear: "2025",
    dateOrYearBn: "২০২৫",
    accentColor: "from-purple-500/20 to-purple-600/10 text-purple-600 border-purple-300",
  },
  {
    id: "product-stall",
    src: "/Photos/Product showcasing stall.JPG",
    alt: "Product showcase at exhibition stall",
    title: "AquiVira Exhibition Pavilion & Public Tasting",
    titleBn: "একিভিরা প্রদর্শনী প্যাভিলিয়ন ও স্টল",
    category: "summits",
    categoryLabel: "Exhibitions & Stalls",
    categoryLabelBn: "প্রদর্শনী ও মেলা",
    location: "National Green Innovation Expo",
    locationBn: "জাতীয় সবুজ উদ্ভাবন মেলা",
    caption:
      "Showcasing functional clay water purifier units, raw terracotta prototypes, and drinking tumblers to hundreds of summit attendees.",
    captionBn:
      "সবুজ উদ্ভাবন মেলায় আগত দর্শনার্থীদের সামনে একিভিরার মাটির ফিল্টার এবং পোড়ামাটির গ্লাস প্রদর্শন।",
    dateOrYear: "2025",
    dateOrYearBn: "২০২৫",
    accentColor: "from-purple-500/20 to-purple-600/10 text-purple-600 border-purple-300",
  },
  {
    id: "community-testing",
    src: "/Photos/AquiVira in Community.jpg",
    alt: "AquiVira community engagement and testing",
    title: "Grassroots Field Testing & Household Feedback",
    titleBn: "মাঠপর্যায়ে কমিউনিটি যাচাই ও পরিবারের মতামত",
    category: "community",
    categoryLabel: "Community & Impact",
    categoryLabelBn: "কমিউনিটি ও মাঠপর্যায়ের প্রভাব",
    location: "Grassroots Field Testing, Rajshahi",
    locationBn: "রাজশাহী ফিল্ড টেস্ট এরিয়া",
    caption:
      "Deploying prototype units directly into households to collect family feedback on taste, cooling efficiency, and daily 20L flow rate.",
    captionBn:
      "গ্রামীণ পরিবারের মাঝে সরাসরি ফিল্টার স্থাপন করে পানির স্বাদ, প্রাকৃতিক শীতলতা ও প্রবাহের প্রত্যক্ষ প্রতিক্রিয়া গ্রহণ।",
    dateOrYear: "2025",
    dateOrYearBn: "২০২৫",
    accentColor: "from-emerald-500/20 to-emerald-600/10 text-emerald-600 border-emerald-300",
  },
  {
    id: "rnd-porosity",
    src: "/Photos/DSC09789.jpg",
    alt: "Product testing and porosity development",
    title: "Porosity Calibration & Flow Benchmarking",
    titleBn: "ল্যাবরেটরি পোরোসিটি ও প্রবাহ পরীক্ষা",
    category: "rnd",
    categoryLabel: "R&D & Engineering",
    categoryLabelBn: "গবেষণা ও প্রকৌশল",
    location: "AquiVira R&D Workshop",
    locationBn: "একিভিরা গবেষণা কর্মশালা",
    caption:
      "Testing flow rates and pore sizes on sintered clay filter candles, ensuring 6,000+ to 8,000 liters lifespan with proper care.",
    captionBn:
      "মাটির ক্যান্ডেলের নিখুঁত মাইক্রোপোর ও ৬,০০০+ থেকে ৮,০০০ লিটার দীর্ঘমেয়াদী পরিস্রাবণ ক্ষমতা নিশ্চিত করতে ল্যাব পরীক্ষা।",
    dateOrYear: "2025",
    dateOrYearBn: "২০২৫",
    accentColor: "from-indigo-500/20 to-indigo-600/10 text-indigo-600 border-indigo-300",
  },
  {
    id: "rnd-iteration",
    src: "/Photos/DSC09742.jpg",
    alt: "Team collaboration and development session",
    title: "Iterative Vessel Design & Seal Prototyping",
    titleBn: "চেম্বারের গঠন ও সিলিকন সিলিং নকশা পর্যালোচনা",
    category: "rnd",
    categoryLabel: "R&D & Engineering",
    categoryLabelBn: "গবেষণা ও প্রকৌশল",
    location: "RUET Engineering Workspace",
    locationBn: "রুয়েট ইঞ্জিনিয়ারিং ল্যাবরেটরি",
    caption:
      "Founding engineers refining double-chamber tolerances, food-grade silicone gaskets, and brass dispensing geometry.",
    captionBn:
      "ফিল্টারের দোতলা চেম্বার, নিরাপদ সিলিকন গ্যাসকেট ও প্রিমিয়াম ব্রাস ট্যাপের নিখুঁত ফিটিংস গবেষণা।",
    dateOrYear: "2025",
    dateOrYearBn: "২০২৫",
    accentColor: "from-indigo-500/20 to-indigo-600/10 text-indigo-600 border-indigo-300",
  },
  {
    id: "team-minds",
    src: "/Photos/MTA07523-EDIT.jpg",
    alt: "AquiVira team photoshoot",
    title: "The Engineering Minds Behind AquiVira",
    titleBn: "একিভিরার স্বপ্নদ্রষ্টা প্রকৌশলী দল",
    category: "rnd",
    categoryLabel: "R&D & Engineering",
    categoryLabelBn: "গবেষণা ও প্রকৌশল",
    location: "Official Team Portrait",
    locationBn: "অফিসিয়াল পোর্ট্রেট সেশন",
    caption:
      "Passionate multidisciplinary team of RUET engineers and sustainability enthusiasts dedicated to reviving generational clay science.",
    captionBn:
      "ঐতিহ্যবাহী কুমোর শিল্প এবং আধুনিক বিজ্ঞানের মেলবন্ধনে নিবেদিত একিভিরার প্রকৌশলী দল।",
    dateOrYear: "2025",
    dateOrYearBn: "২০২৫",
    accentColor: "from-indigo-500/20 to-indigo-600/10 text-indigo-600 border-indigo-300",
  },
  {
    id: "team-celebration",
    src: "/Photos/IMG_4768.JPG",
    alt: "Team achievement celebration",
    title: "Milestone Victory & Pre-Seed Celebration",
    titleBn: "ইনকিউবেশন ও গ্র্যান্ট অর্জনের আনন্দ উদযাপন",
    category: "awards",
    categoryLabel: "Awards & Accolades",
    categoryLabelBn: "পুরস্কার ও সম্মাননা",
    location: "Startup Accelerator Hub",
    locationBn: "এক্সিলারেটর হাব, ঢাকা",
    caption:
      "Celebrating pre-seed investment milestones, competition recognitions, and national incubator graduation.",
    captionBn:
      "প্রি-সিড তহবিল এবং ইনকিউবেশন গ্র্যাজুয়েশন সফলভাবে উদযাপনে একিভিরা টিম।",
    dateOrYear: "2025",
    dateOrYearBn: "২০২৫",
    accentColor: "from-amber-500/20 to-amber-600/10 text-amber-600 border-amber-300",
  },
  {
    id: "craft-pottery-vessel",
    src: "/Photos/IMG20250927172423.jpg",
    alt: "AquiVira natural clay purifier display",
    title: "Handcrafted Terracotta Vessel & Pedestal",
    titleBn: "ঐতিহ্যবাহী পোড়ামাটির সম্পূর্ণ ফিল্টার ইউনিট",
    category: "craft",
    categoryLabel: "Craft & Design",
    categoryLabelBn: "কারিগর ও পণ্যশৈলী",
    location: "Artisan Studio Display",
    locationBn: "কারিগর স্টুডিও ডিসপ্লে",
    caption:
      "Handmade on traditional potters' wheels in Rajshahi, fired in 1000°C kilns for authentic mineral retention and structural density.",
    captionBn:
      "হাতে গড়া মাটির স্ট্যান্ড ও নিরাপদ ব্রাস ট্যাপসহ একিভিরার পূর্ণাঙ্গ প্রাকৃতিক ফিল্টার সিস্টেম।",
    dateOrYear: "2025",
    dateOrYearBn: "২০২৫",
    accentColor: "from-rose-500/20 to-rose-600/10 text-rose-600 border-rose-300",
  },
  {
    id: "craft-signature-purifier",
    src: "/aquivira-authentic-purifier.jpg",
    alt: "Signature AquiVira Natural Clay Water Purifier",
    title: "Signature Clay Water Purifier (2026 Model)",
    titleBn: "সিগনেচার মাটির পানি ফিল্টার (২০২৬ মডেল)",
    category: "craft",
    categoryLabel: "Craft & Design",
    categoryLabelBn: "কারিগর ও পণ্যশৈলী",
    location: "Studio Showcase",
    locationBn: "স্টুডিও শোকেস",
    caption:
      "100% natural, plastic-free clay purifier with precision food-grade brass faucet and natural evaporative cooling condensation beads.",
    captionBn:
      "১০০% প্লাস্টিক ও বিদ্যুৎবিহীন মাটির ফিল্টার যা প্রাকৃতিকভাবে পানি ঠান্ডা ও খনিজসমৃদ্ধ রাখে।",
    dateOrYear: "2026",
    dateOrYearBn: "২০২৬",
    accentColor: "from-rose-500/20 to-rose-600/10 text-rose-600 border-rose-300",
  },
  {
    id: "craft-modern-kitchen",
    src: "/clay-water-purifier-product-photography-modern-des.jpg",
    alt: "AquiVira in modern dining interior",
    title: "Earthy Elegance for Contemporary Living",
    titleBn: "আধুনিক গৃহকোণে ঐতিহ্যবাহী শীতল পানি",
    category: "craft",
    categoryLabel: "Craft & Design",
    categoryLabelBn: "কারিগর ও পণ্যশৈলী",
    location: "Modern Home Living",
    locationBn: "মডার্ন হোম লিভিং",
    caption:
      "Blending seamlessly into contemporary homes, delivering crisp naturally chilled mineral water with zero electric bills.",
    captionBn:
      "আধুনিক ঘরের আঙিনায় ঐতিহ্যবাহী মাটির স্নিগ্ধতা ও বিদ্যুৎ খরচবিহীন নিরবচ্ছিন্ন বিশুদ্ধ পানি।",
    dateOrYear: "2026",
    dateOrYearBn: "২০২৬",
    accentColor: "from-rose-500/20 to-rose-600/10 text-rose-600 border-rose-300",
  },
  {
    id: "forum-dialogue",
    src: "/Photos/Extra.JPG",
    alt: "Climate and Circular Economy Roundtable",
    title: "Climate & Circular Economy Roundtable",
    titleBn: "জলবায়ু ও সার্কুলার অর্থনীতি গোলটেবিল",
    category: "summits",
    categoryLabel: "Pitches & Summits",
    categoryLabelBn: "পিচিং ও সামিট",
    location: "National Sustainability Forum",
    locationBn: "জাতীয় টেকসই উন্নয়ন ফোরাম",
    caption:
      "Collaborative breakout discussion on zero-waste packaging, sustainable manufacturing, and youth green entrepreneurship.",
    captionBn:
      "বর্জ্যহীন উৎপাদন, পরিবেশবান্ধব প্রযুক্তি ও তরুণদের সবুজ উদ্যোক্তা বিষয়ক অংশগ্রহণমূলক আলোচনা।",
    dateOrYear: "2025",
    dateOrYearBn: "২০২৫",
    accentColor: "from-purple-500/20 to-purple-600/10 text-purple-600 border-purple-300",
  },
]

export default function MediaSlideshow() {
  const { language } = useLanguage()
  const isBn = language === "bn"

  const [activeCategory, setActiveCategory] = useState<MediaCategory>("all")
  const [viewMode, setViewMode] = useState<"slideshow" | "grid">("slideshow")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const [touchStartX, setTouchStartX] = useState<number | null>(null)
  const [progress, setProgress] = useState(0)

  const filmstripRef = useRef<HTMLDivElement>(null)
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null)
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null)

  // Filter slides according to chosen category
  const filteredSlides = useMemo(() => {
    if (activeCategory === "all") return MEDIA_SLIDES
    return MEDIA_SLIDES.filter((slide) => slide.category === activeCategory)
  }, [activeCategory])

  // Reset index when category changes if out of bounds
  useEffect(() => {
    if (currentIndex >= filteredSlides.length) {
      setCurrentIndex(0)
    }
    setProgress(0)
  }, [activeCategory, filteredSlides.length, currentIndex])

  const currentSlide = filteredSlides[currentIndex] || filteredSlides[0]

  // Scroll active thumbnail into center of filmstrip
  useEffect(() => {
    if (!filmstripRef.current) return
    const activeThumb = filmstripRef.current.children[currentIndex] as HTMLElement | undefined
    if (activeThumb) {
      activeThumb.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      })
    }
  }, [currentIndex])

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % filteredSlides.length)
    setProgress(0)
  }, [filteredSlides.length])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + filteredSlides.length) % filteredSlides.length)
    setProgress(0)
  }, [filteredSlides.length])

  // Autoplay progression (5000ms duration with 50ms progress step)
  useEffect(() => {
    if (!isPlaying || viewMode !== "slideshow" || lightboxOpen) {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current)
      return
    }

    const DURATION = 5000
    const STEP = 50

    progressIntervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide()
          return 0
        }
        return prev + (STEP / DURATION) * 100
      })
    }, STEP)

    return () => {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current)
    }
  }, [isPlaying, viewMode, lightboxOpen, nextSlide])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxOpen) {
        if (e.key === "Escape") setLightboxOpen(false)
        if (e.key === "ArrowLeft") {
          setLightboxIndex((prev) => (prev - 1 + filteredSlides.length) % filteredSlides.length)
        }
        if (e.key === "ArrowRight") {
          setLightboxIndex((prev) => (prev + 1) % filteredSlides.length)
        }
        return
      }

      if (viewMode === "slideshow") {
        if (e.key === "ArrowLeft") prevSlide()
        if (e.key === "ArrowRight") nextSlide()
        if (e.key === " " && e.target === document.body) {
          e.preventDefault()
          setIsPlaying((p) => !p)
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [lightboxOpen, viewMode, prevSlide, nextSlide, filteredSlides.length])

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return
    const touchEndX = e.changedTouches[0].clientX
    const diff = touchStartX - touchEndX
    if (diff > 50) nextSlide()
    else if (diff < -50) prevSlide()
    setTouchStartX(null)
  }

  // Open Lightbox
  const openLightboxAt = (idx: number) => {
    setLightboxIndex(idx)
    setLightboxOpen(true)
  }

  // Category counts
  const categoryCounts = useMemo(() => {
    return {
      all: MEDIA_SLIDES.length,
      awards: MEDIA_SLIDES.filter((s) => s.category === "awards").length,
      partners: MEDIA_SLIDES.filter((s) => s.category === "partners").length,
      summits: MEDIA_SLIDES.filter((s) => s.category === "summits").length,
      community: MEDIA_SLIDES.filter((s) => s.category === "community").length,
      rnd: MEDIA_SLIDES.filter((s) => s.category === "rnd").length,
      craft: MEDIA_SLIDES.filter((s) => s.category === "craft").length,
    }
  }, [])

  const categories = [
    { key: "all" as MediaCategory, label: isBn ? "সকল ছবি" : "All Moments", count: categoryCounts.all, icon: Layers },
    { key: "awards" as MediaCategory, label: isBn ? "পুরস্কার ও স্বীকৃতি" : "Awards & Honors", count: categoryCounts.awards, icon: Award },
    { key: "partners" as MediaCategory, label: isBn ? "আন্তর্জাতিক ও সরকারি পার্টনার" : "Strategic Partners", count: categoryCounts.partners, icon: Users },
    { key: "summits" as MediaCategory, label: isBn ? "পিচিং ও সামিট" : "Pitches & Summits", count: categoryCounts.summits, icon: Mic },
    { key: "community" as MediaCategory, label: isBn ? "কমিউনিটি ও মাঠপর্যায়" : "Community Impact", count: categoryCounts.community, icon: Heart },
    { key: "rnd" as MediaCategory, label: isBn ? "গবেষণা ও প্রকৌশল" : "R&D & Engineering", count: categoryCounts.rnd, icon: Cpu },
    { key: "craft" as MediaCategory, label: isBn ? "ঐতিহ্যবাহী কারিগর ও পণ্য" : "Craft & Design", count: categoryCounts.craft, icon: Sparkles },
  ]

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "awards":
        return <Award className="w-3.5 h-3.5" />
      case "partners":
        return <Users className="w-3.5 h-3.5" />
      case "summits":
        return <Mic className="w-3.5 h-3.5" />
      case "community":
        return <Heart className="w-3.5 h-3.5" />
      case "rnd":
        return <Cpu className="w-3.5 h-3.5" />
      case "craft":
      default:
        return <Sparkles className="w-3.5 h-3.5" />
    }
  }

  return (
    <section id="gallery" className="section-padding bg-gradient-to-b from-stone-50 via-white to-stone-50 relative overflow-hidden">
      <div className="container-wide">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 md:mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold border border-primary/20 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isBn ? "ভিজ্যুয়াল জার্নি ও মিডিয়া" : "Visual Journey & Media"}</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-stone-900">
              {isBn ? "স্মৃতি, সাফল্য ও মাঠপর্যায়ের গল্প" : "Moments, Milestones & Field Stories"}
            </h2>
            <p className="text-muted-foreground text-sm md:text-base max-w-2xl mt-2">
              {isBn
                ? "ব্লু বিজনেস অ্যাওয়ার্ড থেকে শুরু করে সুইজারল্যান্ডের দূতাবাস, সুইসকনট্যাক্ট ও তৃণমূল পরিবারের সাথে একিভিরার গৌরবময় যাত্রা।"
                : "From national innovation victories to high-level summits with Swisscontact, DEIED, and grassroots community trials."}
            </p>
          </div>

          {/* View Mode Switcher */}
          <div className="flex items-center gap-2 self-start md:self-auto bg-stone-100 p-1 rounded-2xl border border-border">
            <button
              onClick={() => setViewMode("slideshow")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                viewMode === "slideshow"
                  ? "bg-white text-stone-900 shadow-sm"
                  : "text-stone-500 hover:text-stone-900"
              }`}
            >
              <Film className="w-3.5 h-3.5" />
              <span>{isBn ? "স্লাইডশো" : "Slideshow"}</span>
            </button>
            <button
              onClick={() => setViewMode("grid")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                viewMode === "grid"
                  ? "bg-white text-stone-900 shadow-sm"
                  : "text-stone-500 hover:text-stone-900"
              }`}
            >
              <Grid className="w-3.5 h-3.5" />
              <span>{isBn ? "গ্যালারি গ্রিড" : "Grid View"}</span>
            </button>
          </div>
        </div>

        {/* Category Filters Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar scroll-smooth">
          {categories.map((cat) => {
            const Icon = cat.icon
            const isActive = activeCategory === cat.key
            return (
              <button
                key={cat.key}
                onClick={() => {
                  setActiveCategory(cat.key)
                  setCurrentIndex(0)
                  setProgress(0)
                }}
                className={`flex-shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  isActive
                    ? "bg-primary text-white shadow-md shadow-primary/20 scale-102"
                    : "bg-white text-stone-600 hover:bg-stone-100 border border-stone-200"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-white" : "text-stone-500"}`} />
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    isActive ? "bg-white/20 text-white font-bold" : "bg-stone-100 text-stone-500"
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            )
          })}
        </div>

        {/* VIEW 1: CINEMATIC SLIDESHOW */}
        {viewMode === "slideshow" && (
          <div className="space-y-6">
            {/* Main Slide Stage */}
            <div
              className="relative rounded-3xl overflow-hidden bg-stone-950 border border-stone-800 shadow-2xl select-none group"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {/* Autoplay Progress Indicator */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-stone-800/80 z-30">
                <div
                  className="h-full bg-primary transition-all duration-75 ease-linear"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Ambient Background Glow matching the photo */}
              <div
                className="absolute inset-0 opacity-25 filter blur-3xl scale-110 pointer-events-none transition-all duration-700"
                style={{
                  backgroundImage: `url("${currentSlide.src}")`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              />

              {/* Main Image Viewport */}
              <div
                className="relative h-[380px] sm:h-[480px] md:h-[560px] lg:h-[620px] w-full flex items-center justify-center p-4 md:p-10 cursor-pointer"
                onClick={() => openLightboxAt(currentIndex)}
              >
                <img
                  key={currentSlide.src}
                  src={currentSlide.src}
                  alt={currentSlide.alt}
                  className="max-h-full max-w-full object-contain rounded-2xl shadow-2xl transition-all duration-500 transform group-hover:scale-[1.01]"
                  loading="eager"
                />

                {/* Floating Top Controls & Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 z-20 pointer-events-none">
                  {/* Category & Location Badge */}
                  <div className="flex flex-wrap items-center gap-2 pointer-events-auto">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-black/60 backdrop-blur-md text-white border border-white/20">
                      {getCategoryIcon(currentSlide.category)}
                      {isBn ? currentSlide.categoryLabelBn : currentSlide.categoryLabel}
                    </span>
                    <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-black/40 backdrop-blur-md text-stone-300 border border-white/10">
                      <MapPin className="w-3 h-3 text-primary" />
                      {isBn ? currentSlide.locationBn : currentSlide.location}
                    </span>
                    {currentSlide.dateOrYear && (
                      <span className="hidden md:inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-white/10 backdrop-blur-md text-stone-300 border border-white/10">
                        <Calendar className="w-3 h-3 text-stone-400" />
                        {isBn ? currentSlide.dateOrYearBn : currentSlide.dateOrYear}
                      </span>
                    )}
                  </div>

                  {/* Actions: Autoplay Toggle + Fullscreen */}
                  <div className="flex items-center gap-2 pointer-events-auto">
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        setIsPlaying((prev) => !prev)
                      }}
                      className="p-2.5 rounded-xl bg-black/60 hover:bg-black/80 backdrop-blur-md text-white border border-white/15 transition-all hover:scale-105 active:scale-95"
                      title={isPlaying ? (isBn ? "বিরতি" : "Pause") : isBn ? "চালান" : "Play"}
                      aria-label="Toggle autoplay"
                    >
                      {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 text-emerald-400" />}
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        openLightboxAt(currentIndex)
                      }}
                      className="p-2.5 rounded-xl bg-black/60 hover:bg-black/80 backdrop-blur-md text-white border border-white/15 transition-all hover:scale-105 active:scale-95"
                      title={isBn ? "সম্পূর্ণ পর্দায় দেখুন" : "View Fullscreen"}
                      aria-label="Open Fullscreen Lightbox"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Left & Right Chevron Controls */}
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    prevSlide()
                  }}
                  className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 p-3 md:p-4 rounded-2xl bg-black/60 hover:bg-black/90 backdrop-blur-md text-white border border-white/20 transition-all hover:scale-110 active:scale-95 z-20 opacity-90 group-hover:opacity-100 shadow-xl"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    nextSlide()
                  }}
                  className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 p-3 md:p-4 rounded-2xl bg-black/60 hover:bg-black/90 backdrop-blur-md text-white border border-white/20 transition-all hover:scale-110 active:scale-95 z-20 opacity-90 group-hover:opacity-100 shadow-xl"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                </button>

                {/* Bottom Caption Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/75 to-transparent p-5 md:p-8 pt-16 z-10 pointer-events-none">
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div className="max-w-3xl">
                      <div className="flex items-center gap-2 mb-1.5 sm:hidden">
                        <span className="text-[11px] font-medium text-stone-400 flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-primary" />
                          {isBn ? currentSlide.locationBn : currentSlide.location}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-2xl font-extrabold text-white tracking-tight leading-snug">
                        {isBn ? currentSlide.titleBn : currentSlide.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-stone-300 mt-1.5 leading-relaxed line-clamp-2 md:line-clamp-none">
                        {isBn ? currentSlide.captionBn : currentSlide.caption}
                      </p>
                    </div>

                    {/* Slide Counter Pill */}
                    <div className="self-start md:self-end flex-shrink-0">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-mono font-bold bg-white/10 backdrop-blur-md text-white border border-white/15">
                        <span className="text-primary font-extrabold">
                          {String(currentIndex + 1).padStart(2, "0")}
                        </span>
                        <span className="text-stone-400">/</span>
                        <span className="text-stone-300">{String(filteredSlides.length).padStart(2, "0")}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Thumbnail Filmstrip */}
            <div className="p-4 rounded-2xl bg-white border border-border shadow-sm">
              <div className="flex items-center justify-between text-xs font-bold text-stone-500 mb-3 px-1">
                <span>{isBn ? "থাম্বনেইল ব্রাউজার" : "Thumbnail Filmstrip"}</span>
                <span>
                  {isBn ? `${filteredSlides.length}টি ফটো সংরক্ষিত` : `${filteredSlides.length} Photos in Playlist`}
                </span>
              </div>
              <div
                ref={filmstripRef}
                className="flex items-center gap-3 overflow-x-auto pb-2 scroll-smooth no-scrollbar"
              >
                {filteredSlides.map((slide, idx) => {
                  const isCurrent = idx === currentIndex
                  return (
                    <button
                      key={slide.id}
                      onClick={() => {
                        setCurrentIndex(idx)
                        setProgress(0)
                      }}
                      className={`relative flex-shrink-0 w-24 sm:w-28 md:w-32 aspect-video rounded-xl overflow-hidden transition-all duration-200 group ${
                        isCurrent
                          ? "ring-2 ring-primary ring-offset-2 scale-105 shadow-md opacity-100"
                          : "opacity-60 hover:opacity-100 hover:scale-102 border border-stone-200"
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    >
                      <img
                        src={slide.src}
                        alt={slide.alt}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      {/* Active indicator bar */}
                      {isCurrent && (
                        <div className="absolute bottom-0 inset-x-0 h-1 bg-primary" />
                      )}
                      <div className="absolute top-1 left-1 px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-black/60 text-white">
                        {String(idx + 1).padStart(2, "0")}
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        )}

        {/* VIEW 2: MASONRY EXPLORER GRID */}
        {viewMode === "grid" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 animate-fade-in-up">
            {filteredSlides.map((slide, index) => (
              <div
                key={slide.id}
                onClick={() => openLightboxAt(index)}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-stone-900 border border-stone-200 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Category Pill Top Left */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-black/60 backdrop-blur-md text-white border border-white/20">
                    {getCategoryIcon(slide.category)}
                    {isBn ? slide.categoryLabelBn : slide.categoryLabel}
                  </span>
                </div>

                {/* Hover Gradient Overlay & Caption */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                  <h4 className="font-bold text-sm leading-snug">
                    {isBn ? slide.titleBn : slide.title}
                  </h4>
                  <p className="text-xs text-stone-300 mt-1 line-clamp-2">
                    {isBn ? slide.captionBn : slide.caption}
                  </p>
                  <div className="flex items-center justify-between text-[10px] text-stone-400 mt-3 pt-2 border-t border-white/10 font-medium">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-primary" />
                      {isBn ? slide.locationBn : slide.location}
                    </span>
                    <span className="text-white font-bold">{slide.dateOrYear}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* FULLSCREEN LIGHTBOX MODAL */}
        {lightboxOpen && (
          <div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 md:p-10 select-none animate-in fade-in duration-200"
            onClick={() => setLightboxOpen(false)}
          >
            {/* Top Bar with Counter & Close */}
            <div className="absolute top-4 inset-x-4 md:inset-x-8 flex items-center justify-between z-50 pointer-events-none">
              <div className="pointer-events-auto flex items-center gap-3">
                <span className="px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white font-mono text-xs font-bold border border-white/15">
                  {lightboxIndex + 1} / {filteredSlides.length}
                </span>
                <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white/10 backdrop-blur-md text-stone-300 border border-white/10">
                  {isBn
                    ? filteredSlides[lightboxIndex]?.categoryLabelBn
                    : filteredSlides[lightboxIndex]?.categoryLabel}
                </span>
              </div>

              <button
                onClick={() => setLightboxOpen(false)}
                className="pointer-events-auto p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-105 active:scale-95 border border-white/15"
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Left & Right Navigation Chevrons */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                setLightboxIndex((prev) => (prev - 1 + filteredSlides.length) % filteredSlides.length)
              }}
              className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 p-3 md:p-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 transition-all hover:scale-110 active:scale-95 z-50"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                setLightboxIndex((prev) => (prev + 1) % filteredSlides.length)
              }}
              className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 p-3 md:p-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 transition-all hover:scale-110 active:scale-95 z-50"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
            </button>

            {/* Lightbox Content Container */}
            <div
              className="max-w-6xl max-h-[85vh] w-full flex flex-col items-center justify-center p-2"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative max-h-[70vh] flex items-center justify-center">
                <img
                  src={filteredSlides[lightboxIndex]?.src}
                  alt={filteredSlides[lightboxIndex]?.alt}
                  className="max-h-[68vh] w-auto max-w-full object-contain rounded-xl shadow-2xl"
                />
              </div>

              {/* Lightbox Bottom Caption */}
              <div className="mt-4 text-center max-w-2xl px-4">
                <h4 className="text-white text-base md:text-xl font-bold tracking-tight">
                  {isBn ? filteredSlides[lightboxIndex]?.titleBn : filteredSlides[lightboxIndex]?.title}
                </h4>
                <p className="text-stone-300 text-xs md:text-sm mt-1.5 leading-relaxed">
                  {isBn ? filteredSlides[lightboxIndex]?.captionBn : filteredSlides[lightboxIndex]?.caption}
                </p>
                <div className="inline-flex items-center gap-2 mt-2 text-xs text-stone-400">
                  <MapPin className="w-3.5 h-3.5 text-primary" />
                  <span>
                    {isBn
                      ? filteredSlides[lightboxIndex]?.locationBn
                      : filteredSlides[lightboxIndex]?.location}
                  </span>
                  <span>•</span>
                  <span>{filteredSlides[lightboxIndex]?.dateOrYear}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
