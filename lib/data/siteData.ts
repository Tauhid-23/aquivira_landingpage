// Central content for AquiVira pages. Keep claims here verified by the team.

export const TAGLINE = "Engineered for Purity, Powered by Nature."

export const NAV_LINKS = [
  { href: "/order", label: "Shop" },
  { href: "/product", label: "The Science of Clay" },
  { href: "/impact", label: "Our Impact" },
  { href: "/about", label: "About Us" },
  { href: "/contact#faq", label: "FAQ" },
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
    name: "WaterAid Bangladesh",
    bengaliName: "ওয়াটারএইড বাংলাদেশ",
    logo: "/partners/wateraid.png",
    alt: "WaterAid - Water, Sanitation and Hygiene",
    role: "WASH Innovation Partner",
    description: "International NGO dedicated to transforming lives through universal access to safe water, sanitation, and hygiene.",
  },
  {
    name: "Swisscontact",
    bengaliName: "সুইসকনট্যাক্ট বাংলাদেশ",
    logo: "/partners/swisscontact.png",
    alt: "Swisscontact - Swiss Foundation for Technical Cooperation",
    role: "Enterprise & Technical Partner",
    description: "Swiss non-profit foundation championing sustainable private enterprise, inclusive economic growth, and green technology.",
  },
]

export const AWARDS = [
  {
    short: "UIHP",
    title: "UIHP Pre-Seed Winner",
    description: "Recognized for innovation in sustainable water purification technology.",
  },
  {
    short: "AB",
    title: "Accelerating Bangladesh Graduate",
    description: "Part of the prestigious program supporting innovative Bangladeshi startups.",
  },
  {
    short: "BBC",
    title: "Blue Business Idea Competition Winner",
    description: "Awarded for outstanding business concept with social impact potential.",
  },
  {
    short: "GC",
    title: "Greenovation Challenge 2025",
    description: "2nd runners up at Environment Innovation Summit 2025.",
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
