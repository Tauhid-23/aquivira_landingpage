import Link from "next/link"
import SocialLinks from "@/components/global/SocialIcons"
import { TAGLINE, LEADERSHIP_CONTACTS } from "@/lib/data/siteData"
import { HELPLINE_PHONE, HELPLINE_PHONE_RAW, HELPLINE_WHATSAPP } from "@/lib/data/checkoutData"

const linkClass = "text-sm text-muted-foreground hover:text-primary transition-colors"

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border">
      <div className="container-wide px-4 md:px-8 py-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand & socials */}
        <div>
          <img src="/aquivira-logo.png" alt="AquiVira" className="h-12 w-auto object-contain mb-4" />
          <p className="text-sm font-medium mb-1">{TAGLINE}</p>
          <p className="text-xs text-muted-foreground mb-5">Handcrafted clay water purifiers from Rajshahi, Bangladesh.</p>
          <SocialLinks />
        </div>

        {/* Product & care */}
        <div>
          <h3 className="text-sm font-bold mb-4">Product & Care</h3>
          <ul className="space-y-2.5">
            <li><Link href="/order" className={linkClass}>Shop the Clay Purifier</Link></li>
            <li><Link href="/order" className={linkClass}>Replacement Filters</Link></li>
            <li><Link href="/clay-care-guide" className={linkClass}>Clay Care Guide</Link></li>
            <li><Link href="/contact#faq" className={linkClass}>FAQ</Link></li>
          </ul>
        </div>

        {/* Science & story */}
        <div>
          <h3 className="text-sm font-bold mb-4">Science & Story</h3>
          <ul className="space-y-2.5">
            <li><Link href="/product" className={linkClass}>The Science of Clay</Link></li>
            <li><Link href="/impact" className={linkClass}>Our Impact</Link></li>
            <li><Link href="/about" className={linkClass}>About Us</Link></li>
            <li><Link href="/media" className={linkClass}>Media & Awards</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-bold mb-4">Contact</h3>
          <ul className="space-y-2.5 text-sm">
            <li>
              <a href={`tel:${HELPLINE_PHONE_RAW}`} className={linkClass}>
                Helpline: <span className="font-semibold text-foreground">{HELPLINE_PHONE}</span>
              </a>
            </li>
            <li>
              <a
                href={`https://wa.me/${HELPLINE_WHATSAPP}?text=${encodeURIComponent("Hello AquiVira Team, I am inquiring about a corporate/bulk order.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                Corporate & bulk orders (WhatsApp)
              </a>
            </li>
            {LEADERSHIP_CONTACTS.map((p) => (
              <li key={p.email}>
                <a href={`mailto:${p.email}`} className={linkClass}>
                  {p.role}: {p.email}
                </a>
              </li>
            ))}
            <li><Link href="/contact" className={linkClass}>All contact options</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground px-4">
        © AquiVira — Pure Water, Naturally. Handcrafted for families in Bangladesh.
      </div>
    </footer>
  )
}
