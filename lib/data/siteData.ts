// Central content for AquiVira pages. Keep claims here verified by the team.

export const TAGLINE = "Engineered for Purity, Powered by Nature."

export const NAV_LINKS = [
  { href: "/product", label: "The Science" },
  { href: "/impact", label: "Our Impact" },
  { href: "/about", label: "About Us" },
  { href: "/media", label: "Media & Partners" },
  { href: "/contact#faq", label: "FAQ & Contact" },
]

export const LEADERSHIP_CONTACTS = [
  {
    name: "Most. Mobassara Jannat",
    role: "CEO",
    email: "Jannat@aquivira.com",
    phone: "+880-1864-727230",
    tel: "+8801864727230",
  },
  {
    name: "Ashraf Islam Ashfaq",
    role: "COO",
    email: "ashrafislam@aquivira.com",
    phone: "01678738503",
    tel: "01678738503",
  },
]

export interface TeamMember {
  name: string
  role: string
  photo: string
  bio: string
}

export const TEAM: TeamMember[] = [
  {
    name: "Most. Mobassara Jannat",
    role: "CEO",
    photo: "/team-photos/COO.jpeg",
    bio: "Oversees manufacturing planning, clay artisan coordination, supply chain management, and operational workflow for production readiness.",
  },
  {
    name: "Ashraf Islam Ashfaq",
    role: "COO",
    photo: "/team-photos/CEO.jpg",
    bio: "Leads filtration R&D, product design, and testing while coordinating strategy, partnerships, and early market validation.",
  },
  {
    name: "Abdullah AL-Mamun",
    role: "Business and Finance Lead",
    photo: "/team-photos/Business and Finance lead.jpeg",
    bio: "Manages financial modeling, pricing strategy, grant applications, and partnership negotiations to support revenue growth and funding.",
  },
  {
    name: "Meherin Zarin Oranti",
    role: "Marketing Team Lead",
    photo: "/team-photos/Marketing Team Lead.jpeg",
    bio: "Leads customer outreach, social media campaigns, and early demand generation through community engagement and product promotion.",
  },
  {
    name: "Md Sadekul Islam",
    role: "PR & Media Team Lead",
    photo: "/team-photos/PR & Marketing Lead.HEIC",
    bio: "Handles branding, visual storytelling, product photography, and communication materials for public engagement and brand presence.",
  },
  {
    name: "Md Tauhidul Islam Chowdhury",
    role: "Software & Platform Developer",
    photo: "/team-photos/Software & platform developer.png",
    bio: "Develops and maintains website, supports digital platforms, and builds future software infrastructure for smart monitoring integration.",
  },
]

export const ADVISOR: TeamMember = {
  name: "Md. Sidratul Montaha Hossain",
  role: "Advisor – Materials & Filtration Systems",
  photo: "/team-photos/Advisor.png",
  bio: "Lecturer, Ceramic & Metallurgical Engineering, RUET. Brings academic expertise in ceramic materials and water treatment technologies to guide filtration system optimization and material performance testing.",
}

export interface Supporter {
  name: string
  bengaliName?: string
  logo: string
  alt: string
  role: string
  description: string
}

export const SUPPORTERS: Supporter[] = [
  {
    name: "Embassy of Switzerland in Bangladesh",
    bengaliName: "সুইজারল্যান্ডের সহায়তায়",
    logo: "/partners/switzerland.jpg",
    alt: "সুইজারল্যান্ডের সহায়তায় - Supported by Switzerland",
    role: "Development Partner",
    description: "Supported by Switzerland through initiatives promoting sustainable water, environmental resilience, and green innovation.",
  },
  {
    name: "Swisscontact",
    bengaliName: "সুইসকনট্যাক্ট বাংলাদেশ",
    logo: "/partners/swisscontact.png",
    alt: "Swisscontact - Swiss Foundation for Technical Cooperation",
    role: "Enterprise & Technical Partner",
    description: "Swiss non-profit foundation championing sustainable private enterprise, inclusive economic growth, and green technology.",
  },
  {
    name: "WaterAid Bangladesh",
    bengaliName: "ওয়াটারএইড বাংলাদেশ",
    logo: "/partners/wateraid.png",
    alt: "WaterAid - Water, Sanitation and Hygiene",
    role: "WASH Innovation Partner",
    description: "International NGO dedicated to transforming lives through universal access to safe water, sanitation, and hygiene.",
  },
]

export interface Award {
  short: string
  title: string
  titleBn?: string
  badge?: string
  badgeBn?: string
  organizer?: string
  description: string
  descriptionBn?: string
  logo: string
}

export const AWARDS: Award[] = [
  {
    short: "BBC",
    title: "Blue Business Idea Competition Winner",
    titleBn: "ব্লু বিজনেস আইডিয়া কম্পিটিশন চ্যাম্পিয়ন",
    badge: "Champion • 1st Place",
    badgeBn: "চ্যাম্পিয়ন • ১ম স্থান",
    organizer: "WaterAid Bangladesh & Swisscontact",
    description: "Awarded 1st place championship for outstanding business model addressing community safe water access.",
    descriptionBn: "ওয়াটারএইড ও সুইসকনট্যাক্ট আয়োজিত প্রতিযোগিতায় সেরা টেকসই সামাজিক উদ্ভাবনী বিজনেস হিসেবে চ্যাম্পিয়ন সম্মাননা।",
    logo: "/competitions/blue-business-idea.svg",
  },
  {
    short: "AB",
    title: "Accelerating Bangladesh Graduate",
    titleBn: "অ্যাক্সিলারেটিং বাংলাদেশ গ্র্যাজুয়েট",
    badge: "National Accelerator Cohort",
    badgeBn: "জাতীয় এক্সিলারেটর কোহর্ট",
    organizer: "DEIED, BHTPA & World Bank",
    description: "Graduated from the prestigious national accelerator cohort supporting high-impact Bangladeshi ventures.",
    descriptionBn: "আইসিটি বিভাগ, বিএইচটিপিএ ও বিশ্বব্যাংক পরিচালিত ফ্ল্যাগশিপ স্টার্টআপ এক্সিলারেটরে উত্তীর্ণ।",
    logo: "/competitions/accelerating-bangladesh.svg",
  },
  {
    short: "SN26",
    title: "Startup Nation 2026 — Top 6 Team",
    titleBn: "স্টার্টআপ নেশন ২০২৬ — শীর্ষ ৬ দল",
    badge: "Top 6 National Finalist",
    badgeBn: "শীর্ষ ৬ জাতীয় ফাইনালিস্ট",
    organizer: "Startup Nation Bangladesh",
    description: "Recognized among Bangladesh's top six innovative startups in the premier flagship national startup challenge.",
    descriptionBn: "সারাদেশের উদ্ভাবনী উদ্যোগগুলোর মধ্যে শীর্ষ ৬ স্টার্টআপ দলের অন্যতম হিসেবে নির্বাচিত ও জাতীয় স্বীকৃতি।",
    logo: "/competitions/startup-nation-2026.svg",
  },
  {
    short: "UIHP",
    title: "UIHP Pre-Seed Winner",
    titleBn: "ইউআইএইচপি প্রি-সিড বিজয়ী",
    badge: "Pre-Seed Innovation Grant",
    badgeBn: "প্রি-সিড উদ্ভাবন অনুদান",
    organizer: "Bangladesh Hi-Tech Park Authority",
    description: "Awarded pre-seed grant for breakthrough innovation in sustainable clay water purification technology.",
    descriptionBn: "বাংলাদেশ হাই-টেক পার্ক কর্তৃপক্ষ ও ডিইআইইডি কর্তৃক টেকসই ওয়াটার পিউরিফায়ার প্রযুক্তির জন্য প্রাক-বীজ তহবিল অনুদান।",
    logo: "/competitions/uihp-bhtpa.svg",
  },
  {
    short: "GC",
    title: "Greenovation Challenge 2025",
    titleBn: "গ্রীনোভেশন চ্যালেঞ্জ ২০২৫",
    badge: "2nd Runner Up",
    badgeBn: "২য় রানার-আপ",
    organizer: "Environment Innovation Summit 2025",
    description: "2nd Runner Up at Environment Innovation Summit 2025 for zero-plastic, eco-friendly water filtration.",
    descriptionBn: "পরিবেশবান্ধব ও প্লাস্টিকমুক্ত প্রযুক্তির জন্য এনভায়রনমেন্ট ইনোভেশন সামিটে ২য় রানার-আপ সম্মাননা।",
    logo: "/competitions/greenovation-challenge.svg",
  },
  {
    short: "NIF",
    title: "National Innovation Fair",
    titleBn: "জাতীয় উদ্ভাবনী মেলা — বঙ্গবন্ধু নভোথিয়েটার",
    badge: "Novo Theatre Showcase",
    badgeBn: "বঙ্গবন্ধু নভোথিয়েটার প্রদর্শনী",
    organizer: "Bangabandhu Sheikh Mujibur Rahman Novo Theatre",
    description: "Officially selected and exhibited AquiVira's eco-clay water purifier at the prestigious National Innovation Fair in Dhaka.",
    descriptionBn: "বঙ্গবন্ধু শেখ মুজিবুর রহমান নভোথিয়েটারে আয়োজিত জাতীয় উদ্ভাবনী মেলায় একুইভীরা পিউরিফায়ারের সরাসরি সফল প্রদর্শনী।",
    logo: "/competitions/novotheatre-fair.svg",
  },
]

export const FILTER_LAYERS = [
  {
    id: "biosand",
    name: "Micro-Filtration Biosand",
    short: "Layer 1",
    body: "Acts as a dense natural net, capturing harmful microbes, bacteria, and suspended particles.",
  },
  {
    id: "carbon",
    name: "Activated Carbon",
    short: "Layer 2",
    body: "The purifier's core defense against chemical impurities, effectively trapping toxins, eliminating odors, and neutralizing bad tastes.",
  },
  {
    id: "minerals",
    name: "Mineral Restoration",
    short: "Layer 3",
    body: "While industrial RO systems strip water of its life, our natural mineral layer ensures your water remains naturally alkaline and healthy.",
  },
]

export const FAQS = [
  {
    question: "How long does one filter cartridge last?",
    answer:
      "Each cartridge filters 6,000+ liters, and up to 8,000 liters with proper care. For a family using about 20 liters a day, that's roughly 10 to 13 months. Replacement cartridges cost ৳1,199.",
  },
  {
    question: "Does it need electricity?",
    answer:
      "No. AquiVira uses gravity-powered filtration, so it works without any electricity — including during power outages.",
  },
  {
    question: "Is the clay durable?",
    answer:
      "Yes. AquiVira is made from high-fired clay designed to last for years with proper care. See our Clay Care Guide for simple maintenance steps.",
  },
  {
    question: "How do I order?",
    answer:
      "Order on our Shop page and send the order to us on WhatsApp. Cash on Delivery is available. For corporate or bulk orders, message our helpline on WhatsApp or Facebook.",
  },
  {
    question: "Is there any plastic in contact with the water?",
    answer:
      "The purifier body is 100% natural clay — no plastic housing, so no microplastics from the vessel in your drinking water.",
  },
]
