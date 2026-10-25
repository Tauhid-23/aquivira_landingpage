"use client"

import { useState } from "react"
import Link from "next/link"
import { Phone, Mail, MessageCircle, Send, CheckCircle2, ChevronDown, Building2 } from "lucide-react"
import Navbar from "@/components/global/Navbar"
import Footer from "@/components/global/Footer"
import { LEADERSHIP_CONTACTS, FAQS } from "@/lib/data/siteData"
import { HELPLINE_PHONE, HELPLINE_PHONE_RAW, HELPLINE_WHATSAPP, FACEBOOK_URL } from "@/lib/data/checkoutData"

export default function ContactPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    subject: "preorder",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name.trim() || !formData.contact.trim() || !formData.message.trim()) return

    // Open WhatsApp with inquiry
    const text = encodeURIComponent(
      `Hello AquiVira Team!\nInquiry Type: ${formData.subject.toUpperCase()}\nName: ${formData.name}\nContact: ${formData.contact}\nMessage: ${formData.message}`
    )
    window.open(`https://wa.me/${HELPLINE_WHATSAPP}?text=${text}`, "_blank")
    setFormSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section className="section-padding bg-gradient-to-b from-stone-50 to-white border-b border-border text-center">
          <div className="container-wide max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">
              Direct Access & Inquiries
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6">
              Get in Touch with AquiVira.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you have product inquiries, institutional partnership proposals, or need order support, our team is ready to assist.
            </p>
          </div>
        </section>

        {/* Executive Contact Cards & Helpline */}
        <section className="section-padding bg-white">
          <div className="container-wide max-w-5xl">
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {/* Official Helpline Card */}
              <div className="p-8 rounded-3xl bg-amber-500/10 border-2 border-amber-500/30 text-center flex flex-col justify-between">
                <div>
                  <span className="w-12 h-12 rounded-full bg-amber-500 text-white flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-6 h-6" />
                  </span>
                  <h3 className="font-bold text-lg mb-1">Official Helpline</h3>
                  <p className="text-xs text-amber-900 font-semibold mb-4">Calls & WhatsApp Orders</p>
                  <p className="text-2xl font-black text-amber-950 tracking-tight font-mono mb-2">
                    {HELPLINE_PHONE}
                  </p>
                  <p className="text-[11px] text-amber-800">Available 9:00 AM – 9:00 PM daily</p>
                </div>
                <a
                  href={`https://wa.me/${HELPLINE_WHATSAPP}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 px-6 py-3 bg-[#25D366] text-white font-bold rounded-full text-xs hover:bg-[#1EBE5D] transition-colors flex items-center justify-center gap-2 shadow"
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp Us
                </a>
              </div>

              {/* CEO Card */}
              <div className="p-8 rounded-3xl bg-secondary/30 border border-border text-center flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-4 border-2 border-primary/20">
                    <img src="/team-photos/COO.jpeg" alt="Most. Mobassara Jannat" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="font-bold text-lg mb-0.5">Most. Mobassara Jannat</h3>
                  <p className="text-xs font-bold text-primary mb-4">CEO, AquiVira</p>
                  <div className="space-y-2 text-xs text-muted-foreground">
                    <p><a href="mailto:Jannat@aquivira.com" className="hover:underline">Jannat@aquivira.com</a></p>
                    <p><a href="tel:+8801864727230" className="hover:underline">+880-1864-727230</a></p>
                  </div>
                </div>
                <a
                  href="mailto:Jannat@aquivira.com"
                  className="mt-6 px-6 py-2.5 bg-white border border-border text-stone-700 font-semibold rounded-full text-xs hover:bg-stone-50 transition-colors"
                >
                  Send Email
                </a>
              </div>

              {/* COO Card */}
              <div className="p-8 rounded-3xl bg-secondary/30 border border-border text-center flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-4 border-2 border-primary/20">
                    <img src="/team-photos/CEO.jpg" alt="Ashraf Islam Ashfaq" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="font-bold text-lg mb-0.5">Ashraf Islam Ashfaq</h3>
                  <p className="text-xs font-bold text-primary mb-4">COO, AquiVira</p>
                  <div className="space-y-2 text-xs text-muted-foreground">
                    <p><a href="mailto:ashrafislam@aquivira.com" className="hover:underline">ashrafislam@aquivira.com</a></p>
                    <p><a href="tel:01678738503" className="hover:underline">01678738503</a></p>
                  </div>
                </div>
                <a
                  href="mailto:ashrafislam@aquivira.com"
                  className="mt-6 px-6 py-2.5 bg-white border border-border text-stone-700 font-semibold rounded-full text-xs hover:bg-stone-50 transition-colors"
                >
                  Send Email
                </a>
              </div>
            </div>

            {/* Corporate & Institutional Note */}
            <div className="p-8 rounded-3xl bg-stone-900 text-white mb-16 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-1 block">
                  Institutional Partnerships
                </span>
                <h3 className="text-2xl font-bold mb-2">Corporate, NGO & Bulk Inquiries</h3>
                <p className="text-xs text-stone-400 max-w-xl">
                  Deploying AquiVira for schools, healthcare centers, rural development projects, or corporate offices across Bangladesh.
                </p>
              </div>
              <a
                href={`https://wa.me/${HELPLINE_WHATSAPP}?text=Hello%20AquiVira%20Team%2C%20I%20am%20inquiring%20about%20an%20Institutional%20or%20Bulk%20Order.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold text-xs rounded-full flex-shrink-0 transition-colors shadow-lg"
              >
                Inquire on WhatsApp
              </a>
            </div>

            {/* FAQ Accordion */}
            <div id="faq" className="max-w-3xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold mb-2">Frequently Asked Questions</h2>
                <p className="text-muted-foreground text-xs">Everything you need to know about purchasing, warranty, and maintaining AquiVira.</p>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq, index) => (
                  <div key={index} className="border border-border rounded-2xl overflow-hidden bg-white">
                    <button
                      onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                      className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-secondary/40 transition-colors"
                    >
                      <span className="font-bold text-sm">{faq.question}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-primary transition-transform duration-200 ${
                          expandedFaq === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {expandedFaq === index && (
                      <div className="px-6 py-4 bg-secondary/20 border-t border-border text-xs text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
