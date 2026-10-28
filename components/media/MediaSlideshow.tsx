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
  Cpu,
  Sparkles,
  MapPin,
  Calendar,
  Layers,
} from "lucide-react"
import { useLanguage } from "@/lib/i18n/LanguageContext"

export type MediaCategory = "all" | "awards" | "partners" | "summits" | "rnd" | "craft"

export interface MediaSlide {
  id: string
  src: string
  alt: string
  title: string
  titleBn: string
  category: "awards" | "partners" | "summits" | "rnd" | "craft"
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
    id: "blue-award-stage",
    src: "/Photos/Blue Award receiving.JPG",
    alt: "AquiVira founders receiving the Blue Business Idea Competition Award",
    title: "BLUE Business Idea Competition Championship",
    titleBn: "ব্লু বিজনেস আইডিয়া প্রতিযোগিতায় চ্যাম্পিয়ন সম্মাননা গ্রহণ",
    category: "awards",
    categoryLabel: "Awards & Honors",
    categoryLabelBn: "পুরস্কার ও সম্মাননা",
    location: "Grand Auditorium Stage, Dhaka",
    locationBn: "গ্র্যান্ড অডিটোরিয়াম মঞ্চ, ঢাকা",
    caption:
      "AquiVira co-founders on stage receiving the prestigious winner crest at the 'BLUE uplifting you Business Idea Competition' Awarding Ceremony, backed by WaterAid and international partners.",
    captionBn:
      "ওয়াটারএইড ও উন্নয়ন সহযোগী সংস্থাগুলোর উদ্যোগে আয়োজিত 'ব্লু বিজনেস আইডিয়া কম্পিটিশন'-এর মূল মঞ্চে একিভিরার সহ-প্রতিষ্ঠাতাগণের চ্যাম্পিয়ন সম্মাননা ক্রেস্ট গ্রহণ।",
    dateOrYear: "2025",
    dateOrYearBn: "২০২৫",
    accentColor: "from-amber-500/20 to-amber-600/10 text-amber-600 border-amber-300",
  },
  {
    id: "mta-award-handover",
    src: "/Photos/MTA07523-EDIT.jpg",
    alt: "Handover moment of the BLUE Business Idea Competition Award",
    title: "Award Handover by Swisscontact Country Director",
    titleBn: "সুইসকনট্যাক্ট কান্ট্রি ডিরেক্টরের হাত থেকে পুরস্কার গ্রহণ",
    category: "awards",
    categoryLabel: "Awards & Honors",
    categoryLabelBn: "পুরস্কার ও সম্মাননা",
    location: "BLUE Award Ceremony Stage, Dhaka",
    locationBn: "ব্লু অ্যাওয়ার্ড সিরিমোনি মঞ্চ, ঢাকা",
    caption:
      "The official crest presentation moment: Country Director of Swisscontact Bangladesh handing over the BLUE Business Idea Competition Award to the AquiVira founders.",
    captionBn:
      "ব্লু বিজনেস আইডিয়া প্রতিযোগিতার মূল মঞ্চে একিভিরার সহ-প্রতিষ্ঠাতাদের হাতে বিজয়ী স্মারক ক্রেস্ট তুলে দিচ্ছেন সুইসকনট্যাক্ট বাংলাদেশের কান্ট্রি ডিরেক্টর।",
    dateOrYear: "2025",
    dateOrYearBn: "২০২৫",
    accentColor: "from-amber-500/20 to-amber-600/10 text-amber-600 border-amber-300",
  },
  {
    id: "swisscontact-director-reception",
    src: "/Photos/SwissContact Country Director.JPG",
    alt: "AquiVira founders with Swisscontact Country Director holding the award",
    title: "Celebrating Victory with Swisscontact Leadership",
    titleBn: "সুইসকনট্যাক্ট কান্ট্রি ডিরেক্টরের সাথে সম্মাননা উদযাপন",
    category: "partners",
    categoryLabel: "Strategic Partners",
    categoryLabelBn: "আন্তর্জাতিক ও সরকারি পার্টনার",
    location: "Award Reception Hall, Dhaka",
    locationBn: "অ্যাওয়ার্ড সংবর্ধনা হল, ঢাকা",
    caption:
      "AquiVira founders holding the BLUE Business Idea Competition crest with the Country Director of Swisscontact Bangladesh in recognition of building a sustainable, community-centered green enterprise.",
    captionBn:
      "টেকসই পরিবেশবান্ধব ব্যবসা মডেল গড়ে তোলার স্বীকৃতি হিসেবে পাওয়া ব্লু বিজনেস আইডিয়া অ্যাওয়ার্ড ক্রেস্টটি সুইসকনট্যাক্ট বাংলাদেশ-এর কান্ট্রি ডিরেক্টরের সাথে প্রদর্শন করছেন প্রতিষ্ঠাতাদ্বয়।",
    dateOrYear: "2025",
    dateOrYearBn: "২০২৫",
    accentColor: "from-blue-500/20 to-blue-600/10 text-blue-600 border-blue-300",
  },
  {
    id: "blue-award-organizers",
    src: "/Photos/Extra.JPG",
    alt: "AquiVira founders on stage with BLUE competition program leads",
    title: "Celebrating with BLUE Program Leadership",
    titleBn: "ব্লু বিজনেস কম্পিটিশন আয়োজক নেতৃত্বের সাথে জয় উদযাপন",
    category: "awards",
    categoryLabel: "Awards & Honors",
    categoryLabelBn: "পুরস্কার ও সম্মাননা",
    location: "BLUE Award Gala Stage, Dhaka",
    locationBn: "ব্লু অ্যাওয়ার্ড গালা স্টেজ, ঢাকা",
    caption:
      "AquiVira co-founders celebrating their award on stage with the BLUE initiative organizing leadership, supported by Switzerland, Swisscontact, and WaterAid.",
    captionBn:
      "সুইজারল্যান্ড দূতাবাস, সুইসকনট্যাক্ট ও ওয়াটারএইডের সহায়তায় আয়োজিত ব্লু বিজনেস আইডিয়া প্রতিযোগিতার সমাপনী মঞ্চে আয়োজকদের সাথে বিজয়ের আনন্দ উদযাপন।",
    dateOrYear: "2025",
    dateOrYearBn: "২০২৫",
    accentColor: "from-amber-500/20 to-amber-600/10 text-amber-600 border-amber-300",
  },
  {
    id: "accelerating-bd-award",
    src: "/Photos/DSC09789.jpg",
    alt: "Receiving Accelerating Bangladesh 2025 award at Sarah Resort",
    title: "Accelerating Bangladesh 2025 Cohort Honor",
    titleBn: "অ্যাক্সিলারেটিং বাংলাদেশ ২০২৫ আবাসিক বুট ক্যাম্প সম্মাননা",
    category: "awards",
    categoryLabel: "Awards & Honors",
    categoryLabelBn: "পুরস্কার ও সম্মাননা",
    location: "Sarah Resort, Gazipur",
    locationBn: "সারাহ রিসোর্ট, গাজীপুর",
    caption:
      "AquiVira co-founder receiving the Accelerating Bangladesh 2025 Crest on the red carpet from dignitaries of the World Bank, ICT Division, Bangladesh Hi-Tech Park Authority, and Startupbootcamp.",
    captionBn:
      "বিশ্বব্যাংক, তথ্য ও যোগাযোগ প্রযুক্তি বিভাগ, বাংলাদেশ হাই-টেক পার্ক কর্তৃপক্ষ ও স্টার্টআপবুটক্যাম্প কর্তৃক আয়োজিত অ্যাক্সিলারেটিং বাংলাদেশ ২০২৫ আবাসিক বুট ক্যাম্পে সম্মাননা ক্রেস্ট গ্রহণ।",
    dateOrYear: "2025",
    dateOrYearBn: "২০২৫",
    accentColor: "from-amber-500/20 to-amber-600/10 text-amber-600 border-amber-300",
  },
  {
    id: "accelerating-bd-mentor",
    src: "/Photos/IMG20250927172423.jpg",
    alt: "AquiVira co-founders with lead accelerator mentor at Sarah Resort",
    title: "Red Carpet Milestone with Lead Mentor",
    titleBn: "প্রধান মেন্টরের সাথে অ্যাক্সিলারেটিং বাংলাদেশ উদযাপন",
    category: "awards",
    categoryLabel: "Awards & Honors",
    categoryLabelBn: "পুরস্কার ও সম্মাননা",
    location: "Sarah Resort, Gazipur (Sept 27, 2025)",
    locationBn: "সারাহ রিসোর্ট, গাজীপুর (২৭ সেপ্টেম্বর, ২০২৫)",
    caption:
      "AquiVira co-founders holding the Accelerating Bangladesh winner crest on the red carpet with their program lead mentor, celebrating graduation from the World Bank and BHTPA incubation initiative.",
    captionBn:
      "বিশ্বব্যাংক ও বাংলাদেশ হাই-টেক পার্ক কর্তৃপক্ষের অ্যাক্সিলারেটিং বাংলাদেশ বুট ক্যাম্পে সফল সমাপনী শেষে প্রধান মেন্টরের সাথে রেড কার্পেটে স্মারক ক্রেস্ট হাতে একিভিরার সহ-প্রতিষ্ঠাতাদ্বয়।",
    dateOrYear: "2025",
    dateOrYearBn: "২০২৫",
    accentColor: "from-amber-500/20 to-amber-600/10 text-amber-600 border-amber-300",
  },
  {
    id: "accelerating-bd-cohort",
    src: "/Photos/DSC09742.jpg",
    alt: "Accelerating Bangladesh 2025 official cohort group photo",
    title: "Accelerating Bangladesh 2025 Official Cohort",
    titleBn: "অ্যাক্সিলারেটিং বাংলাদেশ ২০২৫ অফিসিয়াল কোহর্ট",
    category: "summits",
    categoryLabel: "Pitches & Summits",
    categoryLabelBn: "পিচিং ও সামিট",
    location: "Sarah Resort, Gazipur",
    locationBn: "সারাহ রিসোর্ট, গাজীপুর",
    caption:
      "AquiVira founders standing with fellow pioneering entrepreneurs and esteemed dignitaries of the World Bank, ICT Division, DEIED, and Bangladesh Hi-Tech Park Authority.",
    captionBn:
      "বিশ্বব্যাংক, আইসিটি বিভাগ এবং বাংলাদেশ হাই-টেক পার্ক কর্তৃপক্ষের শীর্ষ কর্মকর্তাদের সাথে অ্যাক্সিলারেটিং বাংলাদেশ ২০২৫-এর গ্র্যাজুয়েট উদ্যোক্তাদের স্মারক ছবি।",
    dateOrYear: "2025",
    dateOrYearBn: "২০২৫",
    accentColor: "from-purple-500/20 to-purple-600/10 text-purple-600 border-purple-300",
  },
  {
    id: "with-deied-pd",
    src: "/Photos/With DEIED PD.JPG",
    alt: "AquiVira founders with DEIED Project Director Mohammad Shahriar",
    title: "Executive Office Visit with DEIED Project Director",
    titleBn: "ডিইআইইডি প্রকল্প পরিচালকের কার্যালয়ে মতবিনিময়",
    category: "partners",
    categoryLabel: "Strategic Partners",
    categoryLabelBn: "আন্তর্জাতিক ও সরকারি পার্টনার",
    location: "Bangladesh Hi-Tech Park Authority, ICT Tower, Dhaka",
    locationBn: "বাংলাদেশ হাই-টেক পার্ক কর্তৃপক্ষ, আইসিটি টাওয়ার, ঢাকা",
    caption:
      "AquiVira founders presenting their national award and clay nanotechnology progress in a special consultative meeting with Mohammad Shahriar, Project Director of DEIED (Digital Entrepreneurship and Innovation Eco-System Development Project, BHTPA).",
    captionBn:
      "বাংলাদেশ হাই-টেক পার্ক কর্তৃপক্ষের ডিইআইইডি প্রকল্পের প্রকল্প পরিচালক জনাব মোহাম্মদ শাহরিয়ারের দপ্তরে একিভিরার উদ্ভাবন ও প্রযুক্তিগত অগ্রগতি নিয়ে বিশেষ সৌজন্য সাক্ষাৎ।",
    dateOrYear: "2025",
    dateOrYearBn: "২০২৫",
    accentColor: "from-sky-500/20 to-sky-600/10 text-sky-600 border-sky-300",
  },
  {
    id: "deied-pd-session",
    src: "/Photos/DEIED PD.JPG",
    alt: "Formal felicitation at Bangladesh Hi-Tech Park Authority",
    title: "Official Recognition at Bangladesh Hi-Tech Park Authority",
    titleBn: "বাংলাদেশ হাই-টেক পার্ক কর্তৃপক্ষে আনুষ্ঠানিক সংবর্ধনা",
    category: "partners",
    categoryLabel: "Strategic Partners",
    categoryLabelBn: "আন্তর্জাতিক ও সরকারি পার্টনার",
    location: "BHTPA / ICT Division, Agargaon, Dhaka",
    locationBn: "বিএইচটিপিএ / আইসিটি বিভাগ, আগারগাঁও, ঢাকা",
    caption:
      "Formal handover and review session with DEIED Project Director Mohammad Shahriar, validating AquiVira's alignment with national green technology and University Innovation Hub Program (UIHP) mandates.",
    captionBn:
      "বাংলাদেশ হাই-টেক পার্ক কর্তৃপক্ষ কার্যালয়ে ডিইআইইডি প্রকল্প পরিচালকের সাথে আনুষ্ঠানিক বৈঠক ও একিভিরার উদ্ভাবনী ওয়াটার পিউরিফায়ার প্রকল্পের প্রাতিষ্ঠানিক পর্যালোচনা।",
    dateOrYear: "2025",
    dateOrYearBn: "২০২৫",
    accentColor: "from-sky-500/20 to-sky-600/10 text-sky-600 border-sky-300",
  },
  {
    id: "simcubator-swiss",
    src: "/Photos/IMG_4768.JPG",
    alt: "AquiVira team with Swiss delegates at Simcubator Bangladesh workshop",
    title: "Simcubator Bangladesh Swiss Innovation Cohort",
    titleBn: "সিমকিউবেটর বাংলাদেশ সুইস ইনোভেশন কোহর্ট",
    category: "partners",
    categoryLabel: "Strategic Partners",
    categoryLabelBn: "আন্তর্জাতিক ও সরকারি পার্টনার",
    location: "SELISE Digital Platforms / Simcubator Hub, Dhaka",
    locationBn: "সেলিস ডিজিটাল প্ল্যাটফর্মস / সিমকিউবেটর হাব, ঢাকা",
    caption:
      "AquiVira delegates collaborating with international mentors and Swiss innovation leaders during the Simcubator Bangladesh incubation workshop powered by SELISE.",
    captionBn:
      "সুইস ডিজিটাল প্ল্যাটফর্ম প্রতিষ্ঠান 'সেলিস' (SELISE) ও সিমকিউবেটর বাংলাদেশের উচ্চপর্যায়ের উদ্ভাবন কর্মশালায় আন্তর্জাতিক মেন্টরদের সাথে একিভিরা দল।",
    dateOrYear: "2025",
    dateOrYearBn: "২০২৫",
    accentColor: "from-blue-500/20 to-blue-600/10 text-blue-600 border-blue-300",
  },
  {
    id: "pitching-snippets-1",
    src: "/Photos/Pitching snippets 1.jpg",
    alt: "AquiVira founders presenting the problem statement to evaluation committee",
    title: "Residential Boot Camp Pitch to Evaluation Panel",
    titleBn: "আবাসিক বুট ক্যাম্পে বিচারকদের সামনে সমস্যা ও সমাধান উপস্থাপন",
    category: "summits",
    categoryLabel: "Pitches & Summits",
    categoryLabelBn: "পিচিং ও সামিট",
    location: "BLUE Residential Boot Camp, Gazipur",
    locationBn: "ব্লু আবাসিক বুট ক্যাম্প, গাজীপুর",
    caption:
      "AquiVira founders pitching the problem statement—arsenic contamination affecting 35M+ people and toxic plastic filters—before the official evaluation committee at the BLUE Business Idea Competition Residential Boot Camp.",
    captionBn:
      "ব্লু বিজনেস আইডিয়া প্রতিযোগিতার আবাসিক বুট ক্যাম্পে বিচারকমণ্ডলীর সামনে দেশের ৩৫ মিলিয়নের অধিক মানুষের আর্সেনিক ঝুঁকি এবং প্লাস্টিক ফিল্টারের বিকল্প হিসেবে মাটির প্রযুক্তির উপস্থাপন।",
    dateOrYear: "2025",
    dateOrYearBn: "২০২৫",
    accentColor: "from-purple-500/20 to-purple-600/10 text-purple-600 border-purple-300",
  },
  {
    id: "pitching-snippets-2",
    src: "/Photos/Pitching snippets 2.jpg",
    alt: "AquiVira co-founders presenting on the grand auditorium stage",
    title: "Keynote Stage Presentation of Clay Architecture",
    titleBn: "গ্র্যান্ড অডিটোরিয়াম মঞ্চে একিভিরার লাইভ উপস্থাপনা",
    category: "summits",
    categoryLabel: "Pitches & Summits",
    categoryLabelBn: "পিচিং ও সামিট",
    location: "BLUE Award Ceremony Stage, Dhaka",
    locationBn: "ব্লু অ্যাওয়ার্ড সিরিমোনি মঞ্চ, ঢাকা",
    caption:
      "Presenting AquiVira's terracotta filtration architecture and handcrafted artistic edition on the giant auditorium screen during the BLUE Business Idea Competition Award Ceremony.",
    captionBn:
      "ব্লু বিজনেস আইডিয়া অ্যাওয়ার্ড সিরিমোনির মূল মঞ্চে সুবিশাল ডিজিটাল স্ক্রিনে একিভিরার নান্দনিক মাটির ফিল্টারের নকশা ও কার্যকারিতা নিয়ে বক্তব্য রাখছেন সহ-প্রতিষ্ঠাতাদ্বয়।",
    dateOrYear: "2025",
    dateOrYearBn: "২০২৫",
    accentColor: "from-purple-500/20 to-purple-600/10 text-purple-600 border-purple-300",
  },
  {
    id: "greenovation-stall",
    src: "/Photos/Product showcasing stall.JPG",
    alt: "AquiVira exhibition stall at Environment Innovation Summit",
    title: "Environment Innovation Summit 2025 Pavilion",
    titleBn: "এনভায়রনমেন্ট ইনোভেশন সামিট ২০২৫-এ প্রদর্শনী স্টল",
    category: "summits",
    categoryLabel: "Exhibitions & Stalls",
    categoryLabelBn: "প্রদর্শনী ও মেলা",
    location: "Environment Innovation Summit & Awards 2025",
    locationBn: "এনভায়রনমেন্ট ইনোভেশন সামিট ও অ্যাওয়ার্ডস ২০২৫",
    caption:
      "Demonstrating the raw terracotta cooling pot and earthenware drinking tumbler to summit visitors and evaluation panelists at the Environment Innovation Summit & Awards 2025.",
    captionBn:
      "এনভায়রনমেন্ট ইনোভেশন সামিট ২০২৫-এর মেলা প্রাঙ্গণে দর্শনার্থী ও প্রযুক্তিপ্রেমীদের কাছে পোড়ামাটির ফিল্টারের প্রাকৃতিক শীতলকরণ ও খনিজ ধারণ ক্ষমতার সরাসরি প্রদর্শন।",
    dateOrYear: "2025",
    dateOrYearBn: "২০২৫",
    accentColor: "from-purple-500/20 to-purple-600/10 text-purple-600 border-purple-300",
  },
  {
    id: "prototype-mentor-review",
    src: "/Photos/AquiVira in Community.jpg",
    alt: "Demonstrating the double-chamber purifier prototype to incubator mentors",
    title: "Working Prototype Demonstration to Startup Mentors",
    titleBn: "ইনকিউবেশন মেন্টরদের সাথে প্রোটোটাইপ পর্যালোচনা",
    category: "rnd",
    categoryLabel: "R&D & Engineering",
    categoryLabelBn: "গবেষণা ও প্রকৌশল",
    location: "Startup Accelerator Hub, Dhaka",
    locationBn: "স্টার্টআপ এক্সিলারেটর হাব, ঢাকা",
    caption:
      "Founding engineers demonstrating the functional double-chamber clay purifier prototype and flow rate mechanics during an intensive product review session with incubator mentors.",
    captionBn:
      "ইনকিউবেশন হাবের অভিজ্ঞ টেক ও বিজনেস মেন্টরদের সামনে একিভিরার কার্যকরী দোতলা মাটির ফিল্টারের প্রোটোটাইপ এবং ডিসপেন্সিং মেকানিজম প্রদর্শন ও পরামর্শ গ্রহণ।",
    dateOrYear: "2025",
    dateOrYearBn: "২০২৫",
    accentColor: "from-indigo-500/20 to-indigo-600/10 text-indigo-600 border-indigo-300",
  },
  {
    id: "signature-curzon-purifier",
    src: "/aquivira-authentic-purifier.jpg",
    alt: "Signature AquiVira handcrafted purifier with Curzon Hall art and clay cup",
    title: "Heritage Curzon Hall Painted Purifier & Terracotta Tumbler",
    titleBn: "ঐতিহ্যবাহী কার্জন হল নকশাখচিত মাটির ফিল্টার ও পানপাত্র",
    category: "craft",
    categoryLabel: "Craft & Design",
    categoryLabelBn: "ঐতিহ্যবাহী কারিগর ও পণ্য",
    location: "AquiVira Craft Studio, Rajshahi",
    locationBn: "একিভিরা ক্রাফট স্টুডিও, রাজশাহী",
    caption:
      "Authentic double-chamber terracotta purifier featuring hand-painted Curzon Hall architectural art, folk Alpona motifs, precision dispensing faucet, and matching earthenware drinking tumbler.",
    captionBn:
      "ঐতিহ্যবাহী কার্জন হলের স্থাপত্য নকশা ও আবহমান বাংলার আলপনায় সজ্জিত একিভিরার দোতলা মাটির ফিল্টার, ব্রাস ফিটিংস ও সাথে খাঁটি মাটির পানপাত্র।",
    dateOrYear: "2026",
    dateOrYearBn: "২০২৬",
    accentColor: "from-rose-500/20 to-rose-600/10 text-rose-600 border-rose-300",
  },
  {
    id: "cultural-editions",
    src: "/aquivira-water-purifier.png",
    alt: "AquiVira trio showcase: Folk Peacock Art, Bangladesh Flag, and Rickshaw Art",
    title: "Cultural Editions: Peacock, National Flag & Rickshaw Art",
    titleBn: "সাংস্কৃতিক সংস্করণ: ময়ূর লোকশিল্প, জাতীয় পতাকা ও রিকশা আর্ট",
    category: "craft",
    categoryLabel: "Craft & Design",
    categoryLabelBn: "ঐতিহ্যবাহী কারিগর ও পণ্য",
    location: "Artisan Heritage Showcase, Rajshahi",
    locationBn: "ঐতিহ্যবাহী কারিগর প্রদর্শনী, রাজশাহী",
    caption:
      "Signature cultural design editions celebrating Bangladeshi heritage: Folk Peacock Art, the National Flag in forest green & crimson red, and traditional Rickshaw Art.",
    captionBn:
      "বাংলার সমৃদ্ধ লোকশিল্পকে তুলে ধরতে একিভিরার তিনটি বিশেষ সংস্করণ: ঐতিহ্যবাহী ময়ূর লোকশিল্প, লাল-সবুজ জাতীয় পতাকা এবং রঙিন রিকশা আর্ট।",
    dateOrYear: "2026",
    dateOrYearBn: "২০২৬",
    accentColor: "from-rose-500/20 to-rose-600/10 text-rose-600 border-rose-300",
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
      rnd: MEDIA_SLIDES.filter((s) => s.category === "rnd").length,
      craft: MEDIA_SLIDES.filter((s) => s.category === "craft").length,
    }
  }, [])

  const categories = [
    { key: "all" as MediaCategory, label: isBn ? "সকল ছবি" : "All Moments", count: categoryCounts.all, icon: Layers },
    { key: "awards" as MediaCategory, label: isBn ? "পুরস্কার ও সম্মাননা" : "Awards & Honors", count: categoryCounts.awards, icon: Award },
    { key: "partners" as MediaCategory, label: isBn ? "কৌশলগত ও সরকারি পার্টনার" : "Strategic Partners", count: categoryCounts.partners, icon: Users },
    { key: "summits" as MediaCategory, label: isBn ? "পিচিং ও সামিট" : "Pitches & Summits", count: categoryCounts.summits, icon: Mic },
    { key: "rnd" as MediaCategory, label: isBn ? "গবেষণা ও প্রোটোটাইপ" : "R&D & Prototyping", count: categoryCounts.rnd, icon: Cpu },
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
              {isBn ? "স্মৃতি, সাফল্য ও ঐতিহাসিক অর্জন" : "Moments, Milestones & Official Honors"}
            </h2>
            <p className="text-muted-foreground text-sm md:text-base max-w-2xl mt-2">
              {isBn
                ? "ব্লু বিজনেস আইডিয়া প্রতিযোগিতা, বিশ্বব্যাংক ও হাই-টেক পার্ক কর্তৃপক্ষের অ্যাক্সিলারেটিং বাংলাদেশ, সুইসকনট্যাক্ট ও সিমকিউবেটর কর্মশালার প্রামাণ্য চিত্র।"
                : "Authentic photographic evidence of national awards, World Bank & BHTPA incubation milestones, Swisscontact partnership, and prototype reviews."}
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
