"use client"

import { ChevronDown, Droplet, Zap, Shield, Leaf, Menu, X, Mail, Phone } from "lucide-react"
import { useState } from "react"
import PhotoGallery from "@/components/PhotoGallery"

export default function Home() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="container-wide mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          <div className="h-12 w-auto">
            <img src="/aquivira-logo.png" alt="AquiVira" className="h-full w-auto object-contain" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 items-center">
            <button
              onClick={() => scrollToSection("features")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("product")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
             Product
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
             About
            </button>
            <button
              onClick={() => scrollToSection("achievements")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Achievements
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Desktop CTA Button */}
          <a href="https://forms.gle/dWfQtW2n4gzYz5s2A" className="hidden md:inline-block btn-primary text-sm">
            Pre-Order
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden bg-white border-t border-border px-4 py-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("features")}
              className="text-sm font-medium hover:text-primary transition-colors text-left py-2"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("product")}
              className="text-sm font-medium hover:text-primary transition-colors text-left py-2"
            >
             Product
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium hover:text-primary transition-colors text-left py-2"
            >
             About
            </button>
            <button
              onClick={() => scrollToSection("achievements")}
              className="text-sm font-medium hover:text-primary transition-colors text-left py-2"
            >
              Achievements
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-sm font-medium hover:text-primary transition-colors text-left py-2"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-sm font-medium hover:text-primary transition-colors text-left py-2"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium hover:text-primary transition-colors text-left py-2"
            >
              Contact
            </button>
            <a href="https://forms.gle/dWfQtW2n4gzYz5s2A" className="btn-primary text-sm w-full mt-2">
             Pre-Order
            </a>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="fade-in-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance mb-6">
                Clean, Safe & Beautiful Drinking Water — Naturally.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed text-balance">
                AquiVira is a modern clay water purifier that removes heavy metals and microbes — with zero plastic and
                zero electricity.
              </p>

              {/* Trust Elements */}
              <div className="flex flex-col md:flex-row gap-4 mb-12 text-sm font-medium">
                <div className="flex items-center gap-2">
                  <Leaf className="w-5 h-5 text-primary" />
                  100% Plastic-Free
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" />
                  Zero Electricity
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  High Purity
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col md:flex-row gap-4">
                <a href="https://forms.gle/dWfQtW2n4gzYz5s2A" className="btn-primary">
                  Pre-Order Now
                </a>
                <button onClick={() => scrollToSection("product")} className="btn-secondary">
                  See Product
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="slide-in-right flex justify-center md:justify-end">
              <div className="relative w-full max-w-sm">
                <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl bg-gray-100 flex items-center justify-center">
                  <img
                    src="/aquivira-water-purifier.png"
                    alt="AquiVira Clay Water Purifier"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose AquiVira?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Engineered for purity, designed for simplicity, built for your family.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Leaf className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Zero Plastic</h3>
              <p className="text-muted-foreground leading-relaxed">
                Clay & natural materials only — no BPA, no microplastics. Pure, eco-friendly filtration for your home.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Zero Electricity</h3>
              <p className="text-muted-foreground leading-relaxed">
                Gravity-powered filtration — no electricity required. Works anytime, anywhere, with complete
                reliability.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">High Purity</h3>
              <p className="text-muted-foreground leading-relaxed">
                Removes 80% heavy metals & 90% microbes naturally. Multi-layer filtration for superior water quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section id="product" className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Product Image */}
            <div className="fade-in-up">
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-xl bg-gray-100 flex items-center justify-center">
                <img
                  src="/aquivira-water-purifier.png"
                  alt="AquiVira Clay Water Purifier"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="slide-in-right">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">AquiVira Clay Purifier</h2>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                A beautifully designed water purifier made from natural clay, powered by multi-layer filtration using
                biosand, activated carbon, and natural minerals.
              </p>

              {/* Features List */}
              <div className="space-y-4 mb-10">
                <div className="flex gap-3 items-start">
                  <Droplet className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">High-Fired Ceramic</p>
                    <p className="text-sm text-muted-foreground">
                      Durable and built to last for years with proper care
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <Shield className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Multi-Layer Filtration</p>
                    <p className="text-sm text-muted-foreground">
                      Biosand, activated carbon, and natural minerals work together
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <Leaf className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Eco-Friendly Design</p>
                    <p className="text-sm text-muted-foreground">
                      100% biodegradable materials, perfect for the environment
                    </p>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col md:flex-row gap-4">
                <a href="https://forms.gle/dWfQtW2n4gzYz5s2A" className="btn-primary">
                  Buy Now
                </a>
                <button className="btn-secondary">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="section-padding bg-amber-50">
        <div className="container-wide text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Ready for Cleaner Water?</h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto text-balance">
            Pre-order now and get early-bird pricing + free first-month servicing.
          </p>

          <a href="https://forms.gle/dWfQtW2n4gzYz5s2A" className="btn-primary text-lg">
            Pre-Order AquiVira
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-secondary">
        <div className="container-wide max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Team & Execution Readiness</h2>
            <p className="text-lg text-muted-foreground">
              Committed professionals driving AquiVira's mission with diverse expertise across business, engineering, and operations.
            </p>
          </div>

          {/* Team Members Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* CEO */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-200 to-amber-100 rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden">
                <img src="/team-photos/CEO.jpg" alt="Ashraf Islam Ashfaq" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Ashraf Islam Ashfaq</h3>
              <p className="text-sm font-medium text-primary mb-4">CEO</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Leads filtration R&D, product design, and testing while coordinating strategy, partnerships, and early market validation.
              </p>
            </div>
            
            {/* COO */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-200 to-amber-100 rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden">
                <img src="/team-photos/COO.jpeg" alt="Most. Mobassara Jannat" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Most. Mobassara Jannat</h3>
              <p className="text-sm font-medium text-primary mb-4">COO</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Oversees manufacturing planning, clay artisan coordination, supply chain management, and operational workflow for production readiness.
              </p>
            </div>

            {/* Business and Finance Lead */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-200 to-amber-100 rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden">
                <img src="/team-photos/Business and Finance lead.jpeg" alt="Abdullah AL-Mamun" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Abdullah AL-Mamun</h3>
              <p className="text-sm font-medium text-primary mb-4">Business and Finance Lead</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Manages financial modeling, pricing strategy, grant applications, and partnership negotiations to support revenue growth and funding.
              </p>
            </div>

            {/* Marketing Team Lead */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-200 to-amber-100 rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden">
                <img src="/team-photos/Marketing Team Lead.jpeg" alt="Meherin Zarin Oranti" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Meherin Zarin Oranti</h3>
              <p className="text-sm font-medium text-primary mb-4">Marketing Team Lead</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Leads customer outreach, social media campaigns, and early demand generation through community engagement and product promotion.
              </p>
            </div>

            {/* PR & Media Team Lead */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-200 to-amber-100 rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden">
                <img src="/team-photos/PR & Marketing Lead.HEIC" alt="Md Sadekul Islam" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Md Sadekul Islam</h3>
              <p className="text-sm font-medium text-primary mb-4">PR & Media Team Lead</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Handles branding, visual storytelling, product photography, and communication materials for public engagement and brand presence.
              </p>
            </div>

            {/* Software & Platform Developer */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-200 to-amber-100 rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden">
                <img src="/team-photos/Software & platform developer.png" alt="Md Tauhidul Islam Chowdhury" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Md Tauhidul Islam Chowdhury</h3>
              <p className="text-sm font-medium text-primary mb-4">Software & Platform Developer</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Develops and maintains website, supports digital platforms, and builds future software infrastructure for smart monitoring integration.
              </p>
            </div>

            {/* Advisor */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 text-center col-span-full max-w-2xl mx-auto">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-200 to-amber-100 rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden">
                <img src="/team-photos/Advisor.png" alt="Md. Sidratul Montaha Hossain" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Md. Sidratul Montaha Hossain</h3>
              <p className="text-sm font-medium text-primary mb-4">Advisor – Materials & Filtration Systems</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Lecturer, Ceramic & Metallurgical Engineering, RUET. Brings academic expertise in ceramic materials and water treatment technologies to guide filtration system optimization and material performance testing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="section-padding bg-secondary">
        <div className="container-wide max-w-5xl">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Achievements</h2>
            <p className="text-lg text-muted-foreground">
              Recognitions and milestones that fuel our mission.
            </p>
          </div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-4 gap-10">
            {/* Achievement 1 */}
            <div className="achievement-card bg-white rounded-2xl p-8 shadow-sm text-center group animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              <div className="w-20 h-20 bg-gradient-to-br from-amber-200 to-amber-500 rounded-full mx-auto mb-6 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                <span className="text-2xl font-bold text-primary">UIHP</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">UIHP Pre-Seed Winner</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Recognized for innovation in sustainable water purification technology.
              </p>
            </div>
            
            {/* Achievement 2 */}
            <div className="achievement-card bg-white rounded-2xl p-8 shadow-sm text-center group animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="w-20 h-20 bg-gradient-to-br from-amber-200 to-amber-500 rounded-full mx-auto mb-6 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                <span className="text-2xl font-bold text-primary">AB</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">Accelerating Bangladesh Graduate</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Part of the prestigious program supporting innovative Bangladeshi startups.
              </p>
            </div>

            {/* Achievement 3 */}
            <div className="achievement-card bg-white rounded-2xl p-8 shadow-sm text-center group animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <div className="w-20 h-20 bg-gradient-to-br from-amber-200 to-amber-500 rounded-full mx-auto mb-6 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                <span className="text-2xl font-bold text-primary">BBC</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">Blue Business Idea Competition Winner</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Awarded for outstanding business concept with social impact potential.
              </p>
            </div>

            {/* Achievement 4 */}
            <div className="achievement-card bg-white rounded-2xl p-8 shadow-sm text-center group animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <div className="w-20 h-20 bg-gradient-to-br from-amber-200 to-amber-500 rounded-full mx-auto mb-6 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                <span className="text-2xl font-bold text-primary">GC</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">Greenovation Challenge 2025</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                2nd runners up at Environment Innovation Summit 2025.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <PhotoGallery />

      {/* FAQ Section */}
      <section id="faq" className="section-padding bg-white">
        <div className="container-wide max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">Everything you need to know about AquiVira.</p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {[
              {
                question: "How often do I change the filter?",
                answer:
                  "The filter should be replaced every 6–8 months depending on your water usage and local water quality. Regular maintenance ensures optimal purification performance.",
              },
              {
                question: "Does it need electricity?",
                answer:
                  "No, AquiVira uses gravity-powered filtration, so it works without any electricity. This makes it reliable during power outages and incredibly cost-efficient.",
              },
              {
                question: "Is the clay durable?",
                answer:
                  "Yes, AquiVira is made from high-fired ceramic designed to last for years with proper care. The clay structure is strong enough to withstand regular use and water pressure.",
              },
            ].map((item, index) => (
              <div key={index} className="border border-border rounded-lg overflow-hidden transition-all duration-300">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-secondary/50 transition-colors"
                >
                  <span className="font-semibold text-lg text-left">{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                      expandedFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {expandedFaq === index && (
                  <div className="px-6 py-4 bg-secondary/30 border-t border-border">
                    <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-white border-t border-border">
        <div className="container-wide max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-lg text-muted-foreground">
              Have questions? We'd love to hear from you. Reach out to our leadership team directly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* CEO Contact Card */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 shadow-sm border border-amber-100">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-200 to-amber-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">AI</span>
                </div>
                <h3 className="text-xl font-bold mb-1">Ashraf Islam Ashfaq</h3>
                <p className="text-primary font-semibold">CEO, AquiVira</p>
              </div>

              {/* CEO Contact Details */}
              <div className="space-y-3">
                <a
                  href="mailto:ashrafislam@aquivira.com"
                  className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">ashrafislam@aquivira.com</span>
                </a>
                <a
                  href="tel:01678738503"
                  className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">01678738503</span>
                </a>
              </div>
            </div>

            {/* COO Contact Card */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 shadow-sm border border-amber-100">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-200 to-amber-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">MB</span>
                </div>
                <h3 className="text-xl font-bold mb-1">Mobassara Jannat</h3>
                <p className="text-primary font-semibold">COO, AquiVira</p>
              </div>

              {/* COO Contact Details */}
              <div className="space-y-3">
                <a
                  href="mailto:Jannat@aquivira.com"
                  className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">Jannat@aquivira.com</span>
                </a>
                <a
                  href="tel:+8801864727230"
                  className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">+880-1864-727230</span>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground">
              Whether you have product inquiries, partnership opportunities, or just want to learn more about
              AquiVira, we're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-border py-12">
        <div className="container-wide px-4 md:px-8 text-center">
          <p className="text-muted-foreground text-sm">© AquiVira — Pure Water, Naturally.</p>
          <p className="text-xs text-muted-foreground mt-2">Handcrafted for families in Bangladesh</p>
        </div>
      </footer>
    </div>
  )
}
