export interface ProductBundle {
  id: string
  name: string
  tagline: string
  badge?: string
  price: number
  originalPrice: number
  discountPercent: number
  savingsAmount: number
  features: string[]
  recommended?: boolean
  stockLimited?: boolean
}

export const MAIN_PRODUCT: ProductBundle = {
  id: "aquivira-purifier",
  name: "AquiVira Handcrafted Natural Clay Water Purifier",
  tagline: "Complete natural gravity water purifier with pre-installed multi-layer filtration cartridge",
  badge: "Limited Stock Available",
  price: 9999,
  originalPrice: 14499, // Original base price
  discountPercent: 31,  // Exactly 31.04% (৳4,500 off)
  savingsAmount: 4500,
  stockLimited: true,
  recommended: true,
  // Only verified claims. Add items here once the team confirms them
  // (e.g. exact cooling figure, spigot material, transit guarantee).
  features: [
    "1x Handcrafted Natural Clay Water Purifier",
    "1x Pre-Installed Multi-Layer Cartridge (Biosand, Activated Carbon, Minerals)",
    "Cartridge capacity: 6,000+ Liters, up to 8,000 Liters with proper care",
    "Built for 20+ Liters daily family use (~10 to 13 months per cartridge)",
    "Removes 80% of heavy metals & 90% of microbes",
    "100% plastic-free, zero electricity, naturally cool water",
  ],
}

export const EXTRA_CARTRIDGE_PRICE = 1199
export const EXTRA_CARTRIDGE_ORIGINAL_PRICE = 1499 // ৳300 discount (20% off)
// Delivery policy (from approved plan v0.7.x): free delivery with a purifier,
// flat fee for cartridge-only orders. Confirm the fee with the team.
export const DELIVERY_FEE = 150
export const FREE_DELIVERY_THRESHOLD = 9999

// Filter Lifespan & Consumption Metrics
export const DAILY_AVERAGE_USAGE_LITERS = 20
export const FILTER_CAPACITY_STANDARD = "6,000+"
export const FILTER_CAPACITY_MAX = "8,000"
export const FILTER_DURATION_MONTHS_MIN = 10
export const FILTER_DURATION_MONTHS_MAX = 13

export const HELPLINE_PHONE = "+8801330192882"
export const HELPLINE_PHONE_RAW = "01330192882"
export const HELPLINE_WHATSAPP = "8801330192882"
export const FACEBOOK_URL = "https://www.facebook.com/aquivira.tech"
export const LINKEDIN_URL = "https://www.linkedin.com/company/aquivira"

export const BD_DIVISIONS_AND_DISTRICTS: Record<string, string[]> = {
  Rajshahi: ["Rajshahi", "Bogra", "Pabna", "Sirajganj", "Naogaon", "Natore", "Chapai Nawabganj", "Joypurhat"],
  Dhaka: ["Dhaka", "Gazipur", "Narayanganj", "Tangail", "Faridpur", "Manikganj", "Munshiganj", "Narsingdi", "Gopalganj", "Madaripur", "Rajbari", "Shariatpur", "Kishoreganj"],
  Chittagong: ["Chittagong", "Cox's Bazar", "Comilla", "Feni", "Brahmanbaria", "Chandpur", "Noakhali", "Lakshmipur", "Rangamati", "Khagrachhari", "Bandarban"],
  Khulna: ["Khulna", "Jessore", "Kushtia", "Satkhira", "Bagerhat", "Jhenaidah", "Chuadanga", "Magura", "Meherpur", "Narail"],
  Sylhet: ["Sylhet", "Moulvibazar", "Habiganj", "Sunamganj"],
  Barisal: ["Barisal", "Patuakhali", "Bhola", "Pirojpur", "Barguna", "Jhalokati"],
  Rangpur: ["Rangpur", "Dinajpur", "Gaibandha", "Kurigram", "Lalmonirhat", "Nilphamari", "Panchagarh", "Thakurgaon"],
  Mymensingh: ["Mymensingh", "Jamalpur", "Netrokona", "Sherpur"],
}
