"use client"

import { useState } from "react"
import { Check, ShieldCheck, Truck, RefreshCw, Phone, MessageCircle, AlertCircle, Sparkles, CreditCard, Wallet, Banknote, Building2, Flame } from "lucide-react"
import CorporateRfqModal from "@/components/b2b/CorporateRfqModal"
import {
  MAIN_PRODUCT,
  EXTRA_CARTRIDGE_PRICE,
  EXTRA_CARTRIDGE_ORIGINAL_PRICE,
  DELIVERY_FEE,
  HELPLINE_PHONE,
  HELPLINE_PHONE_RAW,
  HELPLINE_WHATSAPP,
  FACEBOOK_URL,
  BD_DIVISIONS_AND_DISTRICTS
} from "@/lib/data/checkoutData"

export default function CheckoutPanel() {
  // Quantity State
  const [purifierQty, setPurifierQty] = useState<number>(1)
  const [extraCartridges, setExtraCartridges] = useState<number>(0)

  // Customer Form State
  const [fullName, setFullName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [email, setEmail] = useState("")
  const [division, setDivision] = useState("Dhaka")
  const [district, setDistrict] = useState("Dhaka")
  const [address, setAddress] = useState("")
  const [deliveryNotes, setDeliveryNotes] = useState("")

  // Payment State
  const [paymentMethod, setPaymentMethod] = useState<"cod" | "bkash" | "nagad" | "card">("cod")
  const [mfsNumber, setMfsNumber] = useState("")
  const [mfsTrxId, setMfsTrxId] = useState("")
  const [cardNumber, setCardNumber] = useState("")
  const [cardExpiry, setCardExpiry] = useState("")
  const [cardCvc, setCardCvc] = useState("")

  // UI Flow State
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [completedOrder, setCompletedOrder] = useState<{
    orderId: string
    purifiers: number
    extraCount: number
    total: number
    customerName: string
    phone: string
    location: string
    payment: string
  } | null>(null)

  const productSubtotal = purifierQty * MAIN_PRODUCT.price
  const cartridgeSubtotal = extraCartridges * EXTRA_CARTRIDGE_PRICE
  const subtotal = productSubtotal + cartridgeSubtotal
  // Free delivery on the purifier
  const delivery = purifierQty > 0 ? 0 : DELIVERY_FEE
  const grandTotal = subtotal + delivery

  const handleDivisionChange = (newDivision: string) => {
    setDivision(newDivision)
    const districts = BD_DIVISIONS_AND_DISTRICTS[newDivision] || []
    if (districts.length > 0) {
      setDistrict(districts[0])
    }
  }

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (purifierQty < 1 && extraCartridges < 1) {
      newErrors.qty = "Please select at least 1 Purifier or 1 Replacement Cartridge."
    }
    if (!fullName.trim() || fullName.trim().length < 3) {
      newErrors.fullName = "Please enter your full name (minimum 3 characters)."
    }
    const cleanPhone = phoneNumber.replace(/[\s-]/g, "")
    const bdPhoneRegex = /^(?:\+?880|0)?1[3-9]\d{8}$/
    if (!bdPhoneRegex.test(cleanPhone)) {
      newErrors.phoneNumber = "Please enter a valid 11-digit Bangladeshi mobile number (e.g. 01712345678)."
    }
    if (!address.trim() || address.trim().length < 5) {
      newErrors.address = "Please provide your street, house number, or road."
    }

    if (paymentMethod === "bkash" || paymentMethod === "nagad") {
      if (!mfsNumber.trim()) {
        newErrors.mfsNumber = "Please enter the sender mobile number."
      }
      if (!mfsTrxId.trim() || mfsTrxId.trim().length < 4) {
        newErrors.mfsTrxId = "Please enter the transaction ID (TrxID)."
      }
    }

    if (paymentMethod === "card") {
      if (!cardNumber.trim() || cardNumber.replace(/\s/g, "").length < 16) {
        newErrors.cardNumber = "Please enter a valid 16-digit card number (mockup)."
      }
      if (!cardExpiry.trim()) {
        newErrors.cardExpiry = "Enter MM/YY."
      }
      if (!cardCvc.trim() || cardCvc.length < 3) {
        newErrors.cardCvc = "Enter 3-digit CVC."
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // NOTE: there is no order database yet. The order reaches the team only via
  // the WhatsApp message, so we open WhatsApp as part of submitting.
  // Replace this with a real backend (sheet/email/DB) before scaling.
  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setIsSubmitting(true)
    const generatedId = `AQV-${Math.floor(100000 + Math.random() * 900000)}`
    // Must run synchronously inside the submit gesture or popup blockers stop it.
    window.open(getWhatsAppLink(generatedId), "_blank", "noopener,noreferrer")
    setCompletedOrder({
      orderId: generatedId,
      purifiers: purifierQty,
      extraCount: extraCartridges,
      total: grandTotal,
      customerName: fullName,
      phone: phoneNumber,
      location: `${district}, ${division}`,
      payment: paymentMethod.toUpperCase(),
    })
    setIsSubmitting(false)
  }

  const getWhatsAppLink = (orderId: string) => {
    const text = encodeURIComponent(
      `Hello AquiVira Team!\nI have placed an order on your website.\nOrder ID: ${orderId}\nPurifiers: ${purifierQty}x (৳${productSubtotal.toLocaleString()})\nExtra Cartridges: ${extraCartridges}x (৳${cartridgeSubtotal.toLocaleString()})\nName: ${fullName}\nPhone: ${phoneNumber}\nDelivery: ${address}, ${district}, ${division}\nTotal: ৳${grandTotal.toLocaleString()}\nPayment: ${paymentMethod.toUpperCase()}\nPlease confirm dispatch.`
    )
    return `https://wa.me/${HELPLINE_WHATSAPP}?text=${text}`
  }

  if (completedOrder) {
    return (
      <div className="max-w-3xl mx-auto my-12 p-8 md:p-12 bg-white rounded-3xl border border-stone-200 shadow-xl text-center animate-fade-in">
        <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full mx-auto flex items-center justify-center mb-6">
          <Check className="w-10 h-10" />
        </div>
        <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-800 mb-3">
          One last step — send your WhatsApp message
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Thank You, {completedOrder.customerName}!</h2>
        <p className="text-stone-600 mb-8 max-w-lg mx-auto text-sm">
          Your order is placed once your WhatsApp message reaches us. If WhatsApp didn&apos;t open, tap the green button below or call our helpline. We&apos;ll confirm delivery and payment with you before dispatch.
        </p>

        {/* Order Card */}
        <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 text-left mb-8 max-w-md mx-auto space-y-3">
          <div className="flex justify-between pb-3 border-b border-stone-200">
            <span className="text-stone-500 text-sm">Order Reference</span>
            <span className="font-mono font-bold text-primary">{completedOrder.orderId}</span>
          </div>
          {completedOrder.purifiers > 0 && (
            <div className="flex justify-between text-sm">
              <span className="text-stone-500">AquiVira Clay Purifier</span>
              <span className="font-semibold">{completedOrder.purifiers}x (৳{(completedOrder.purifiers * MAIN_PRODUCT.price).toLocaleString()})</span>
            </div>
          )}
          {completedOrder.extraCount > 0 && (
            <div className="flex justify-between text-sm">
              <span className="text-stone-500">Replacement Cartridge(s)</span>
              <span className="font-semibold">+{completedOrder.extraCount} (৳{(completedOrder.extraCount * EXTRA_CARTRIDGE_PRICE).toLocaleString()})</span>
            </div>
          )}
          <div className="flex justify-between text-sm">
            <span className="text-stone-500">Delivery Location</span>
            <span className="font-medium">{completedOrder.location}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-stone-500">Payment Mode</span>
            <span className="font-semibold">{completedOrder.payment === "COD" ? "Cash on Delivery" : `Online / ${completedOrder.payment}`}</span>
          </div>
          <div className="flex justify-between pt-3 border-t border-stone-200 text-base font-bold">
            <span>Total Payable</span>
            <span className="text-primary">৳{completedOrder.total.toLocaleString()}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={getWhatsAppLink(completedOrder.orderId)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white rounded-full font-semibold hover:bg-[#1EBE5D] transition-colors shadow-md text-sm"
          >
            <MessageCircle className="w-5 h-5" />
            Send Order on WhatsApp
          </a>
          <button
            onClick={() => {
              setCompletedOrder(null)
              setPurifierQty(1)
              setExtraCartridges(0)
            }}
            className="px-8 py-4 bg-stone-100 hover:bg-stone-200 rounded-full font-semibold transition-colors text-stone-700 text-sm"
          >
            Place Another Order
          </button>
        </div>

        <div className="mt-8 text-xs text-stone-400">
          Helpline Contact: <a href={`tel:${HELPLINE_PHONE_RAW}`} className="underline font-bold text-stone-600">{HELPLINE_PHONE}</a>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto my-12 px-4">
      {/* Top Banner */}
      <div className="mb-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 text-red-700 text-xs font-bold mb-4 border border-red-500/20">
          <Flame className="w-4 h-4 text-red-600" />
          Limited Stock Available • 31% Off Launch Offer (৳9,999)
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Order Your AquiVira Clay Purifier
        </h1>
        <p className="text-lg text-stone-600 max-w-2xl mx-auto">
          Handcrafted in Rajshahi with multi-layer gravity filtration. Zero plastic, zero electricity, and naturally cool water.
        </p>

        {/* Corporate Orders Note with Interactive RFQ Modal */}
        <div className="mt-5 max-w-xl mx-auto p-3.5 bg-amber-50 border border-amber-200 rounded-2xl flex flex-col sm:flex-row items-center justify-between text-xs text-amber-900 gap-3">
          <div className="flex items-center gap-2 text-left">
            <Building2 className="w-5 h-5 text-amber-700 flex-shrink-0" />
            <span>
              <strong>Looking for Corporate or Bulk Orders?</strong> Request official quotation or institutional pricing for offices & schools.
            </span>
          </div>
          <CorporateRfqModal triggerClassName="px-3.5 py-1.5 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-bold flex-shrink-0 transition-colors text-xs" />
        </div>
      </div>

      <form onSubmit={handleOrderSubmit} className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Product Details & Customer Form (7 Cols) */}
        <div className="lg:col-span-7 space-y-8">
          {/* Step 1: Product Selection Card */}
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-stone-200 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-8 rounded-full bg-primary text-white font-bold text-sm flex items-center justify-center">
                1
              </span>
              <h2 className="text-2xl font-bold">Select Products</h2>
            </div>

            {/* Main Product Card */}
            <div className="p-6 rounded-2xl border-2 border-primary bg-primary/5 shadow-sm relative">
              <span className="absolute -top-3 right-6 px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-full shadow-sm flex items-center gap-1">
                <Flame className="w-3.5 h-3.5" /> 31% OFF • Limited Stock
              </span>

              <div className="flex flex-col sm:flex-row items-start justify-between gap-5">
                <div className="w-20 h-28 sm:w-24 sm:h-32 rounded-2xl overflow-hidden bg-stone-100 border border-stone-200/80 shadow-sm flex-shrink-0">
                  <img
                    src="/aquivira-authentic-purifier.jpg"
                    alt="AquiVira Authentic Handcrafted Clay Purifier"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold">{MAIN_PRODUCT.name}</h3>
                  <p className="text-xs text-stone-600 mt-1">{MAIN_PRODUCT.tagline}</p>

                  <ul className="mt-4 space-y-2 text-xs text-stone-700">
                    {MAIN_PRODUCT.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price & Quantity Selector */}
                <div className="text-right sm:text-right w-full sm:w-auto border-t sm:border-t-0 pt-4 sm:pt-0 border-stone-200 flex sm:flex-col justify-between sm:justify-start items-center sm:items-end">
                  <div>
                    <div className="text-3xl font-extrabold text-primary">
                      ৳{MAIN_PRODUCT.price.toLocaleString()}
                    </div>
                    <div className="text-xs text-stone-400 line-through">
                      ৳{MAIN_PRODUCT.originalPrice.toLocaleString()}
                    </div>
                    <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                      Save ৳{(MAIN_PRODUCT.originalPrice - MAIN_PRODUCT.price).toLocaleString()}
                    </span>
                  </div>

                  {/* Quantity Control */}
                  <div className="mt-4 flex items-center gap-3 bg-white px-3 py-1.5 rounded-xl border border-stone-300">
                    <span className="text-xs font-semibold text-stone-500">Qty:</span>
                    <button
                      type="button"
                      onClick={() => setPurifierQty(Math.max(0, purifierQty - 1))}
                      className="w-6 h-6 rounded-full border border-stone-300 flex items-center justify-center font-bold hover:bg-stone-100"
                    >
                      -
                    </button>
                    <span className="font-bold text-sm min-w-[18px] text-center">{purifierQty}</span>
                    <button
                      type="button"
                      onClick={() => setPurifierQty(purifierQty + 1)}
                      className="w-6 h-6 rounded-full border border-stone-300 flex items-center justify-center font-bold hover:bg-stone-100"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Extra Cartridge Addon Card */}
            <div className="mt-6 p-5 rounded-2xl border border-stone-200 bg-stone-50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h4 className="font-bold text-sm">Add Extra Replacement Cartridge</h4>
                  <span className="text-[10px] font-bold bg-amber-100 text-amber-800 px-2 py-0.5 rounded">
                    ৳300 OFF
                  </span>
                </div>
                <p className="text-xs text-stone-500 mt-0.5">
                  Multi-layer media (Biosand + Activated Carbon + Minerals). Provides 6-8 months of high purity water.
                </p>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="font-extrabold text-sm text-stone-900">৳{EXTRA_CARTRIDGE_PRICE.toLocaleString()}</span>
                  <span className="text-xs text-stone-400 line-through">৳{EXTRA_CARTRIDGE_ORIGINAL_PRICE.toLocaleString()}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white px-3 py-1.5 rounded-xl border border-stone-300">
                <button
                  type="button"
                  onClick={() => setExtraCartridges(Math.max(0, extraCartridges - 1))}
                  className="w-7 h-7 rounded-full border border-stone-300 flex items-center justify-center font-bold hover:bg-stone-100"
                >
                  -
                </button>
                <span className="font-bold text-sm min-w-[20px] text-center">{extraCartridges}</span>
                <button
                  type="button"
                  onClick={() => setExtraCartridges(extraCartridges + 1)}
                  className="w-7 h-7 rounded-full border border-stone-300 flex items-center justify-center font-bold hover:bg-stone-100"
                >
                  +
                </button>
              </div>
            </div>
            {errors.qty && <p className="text-red-500 text-xs mt-2">{errors.qty}</p>}
          </div>

          {/* Step 2: Customer & Delivery Details */}
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-stone-200 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-8 rounded-full bg-primary text-white font-bold text-sm flex items-center justify-center">
                2
              </span>
              <h2 className="text-2xl font-bold">Delivery Address (Bangladesh)</h2>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Tanvir Ahmed"
                  className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm"
                />
                {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1.5">
                    Mobile Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="01712345678"
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm"
                  />
                  {errors.phoneNumber && <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1.5">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@gmail.com"
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm"
                  />
                </div>
              </div>

              {/* Division & District Pickers */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1.5">
                    Division *
                  </label>
                  <select
                    value={division}
                    onChange={(e) => handleDivisionChange(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm bg-white"
                  >
                    {Object.keys(BD_DIVISIONS_AND_DISTRICTS).map((divName) => (
                      <option key={divName} value={divName}>
                        {divName} Division
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1.5">
                    District *
                  </label>
                  <select
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm bg-white"
                  >
                    {(BD_DIVISIONS_AND_DISTRICTS[division] || []).map((distName) => (
                      <option key={distName} value={distName}>
                        {distName}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1.5">
                  Detailed Address (House, Road, Area, Thana) *
                </label>
                <textarea
                  rows={2}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="e.g. House 24, Road 5, Block B, Kazla, Motihar"
                  className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm"
                />
                {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1.5">
                  Special Delivery Instructions (Optional)
                </label>
                <input
                  type="text"
                  value={deliveryNotes}
                  onChange={(e) => setDeliveryNotes(e.target.value)}
                  placeholder="e.g. Call before delivery, deliver after 3 PM"
                  className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Order Summary & Payment Gateway Mockup (5 Cols) */}
        <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-stone-200 shadow-xl">
            <h3 className="text-xl font-bold mb-4 pb-3 border-b border-stone-100">
              Order Summary
            </h3>

            {/* Cost Breakdown */}
            <div className="space-y-3 text-sm">
              {purifierQty > 0 && (
                <div className="flex justify-between">
                  <span className="text-stone-600">Clay Purifier ({purifierQty}x)</span>
                  <span className="font-semibold">৳{productSubtotal.toLocaleString()}</span>
                </div>
              )}

              {extraCartridges > 0 && (
                <div className="flex justify-between">
                  <span className="text-stone-600">Replacement Cartridges ({extraCartridges}x)</span>
                  <span className="font-semibold">৳{cartridgeSubtotal.toLocaleString()}</span>
                </div>
              )}

              <div className="flex justify-between items-center">
                <span className="text-stone-600 flex items-center gap-1.5">
                  <Truck className="w-4 h-4 text-primary" /> Delivery Fee
                </span>
                {delivery === 0 ? (
                  <span className="text-emerald-600 font-bold text-xs uppercase bg-emerald-50 px-2 py-0.5 rounded">
                    Free Delivery
                  </span>
                ) : (
                  <span className="font-semibold">৳{delivery}</span>
                )}
              </div>

              <div className="pt-3 border-t border-stone-200 flex justify-between items-baseline">
                <span className="text-base font-bold">Total Amount</span>
                <span className="text-3xl font-extrabold text-primary">
                  ৳{grandTotal.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Payment Method Selector */}
            <div className="mt-8 pt-6 border-t border-stone-100">
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-3">
                Choose Payment Method
              </label>

              <div className="grid grid-cols-2 gap-2 mb-4">
                {/* Cash on Delivery */}
                <button
                  type="button"
                  onClick={() => setPaymentMethod("cod")}
                  className={`p-3 rounded-xl border text-left flex flex-col gap-1 transition-all ${
                    paymentMethod === "cod"
                      ? "border-primary bg-primary/5 text-primary font-bold"
                      : "border-stone-200 hover:border-stone-300 text-stone-700"
                  }`}
                >
                  <Banknote className="w-5 h-5" />
                  <span className="text-xs">Cash on Delivery</span>
                </button>

                {/* bKash */}
                <button
                  type="button"
                  onClick={() => setPaymentMethod("bkash")}
                  className={`p-3 rounded-xl border text-left flex flex-col gap-1 transition-all ${
                    paymentMethod === "bkash"
                      ? "border-[#E2136E] bg-[#E2136E]/5 text-[#E2136E] font-bold"
                      : "border-stone-200 hover:border-stone-300 text-stone-700"
                  }`}
                >
                  <Wallet className="w-5 h-5 text-[#E2136E]" />
                  <span className="text-xs">bKash (Mockup)</span>
                </button>

                {/* Nagad */}
                <button
                  type="button"
                  onClick={() => setPaymentMethod("nagad")}
                  className={`p-3 rounded-xl border text-left flex flex-col gap-1 transition-all ${
                    paymentMethod === "nagad"
                      ? "border-[#F7941D] bg-[#F7941D]/5 text-[#F7941D] font-bold"
                      : "border-stone-200 hover:border-stone-300 text-stone-700"
                  }`}
                >
                  <Wallet className="w-5 h-5 text-[#F7941D]" />
                  <span className="text-xs">Nagad (Mockup)</span>
                </button>

                {/* Credit / Debit Card */}
                <button
                  type="button"
                  onClick={() => setPaymentMethod("card")}
                  className={`p-3 rounded-xl border text-left flex flex-col gap-1 transition-all ${
                    paymentMethod === "card"
                      ? "border-primary bg-primary/5 text-primary font-bold"
                      : "border-stone-200 hover:border-stone-300 text-stone-700"
                  }`}
                >
                  <CreditCard className="w-5 h-5" />
                  <span className="text-xs">Card (Mockup)</span>
                </button>
              </div>

              {/* Payment Method Details (Dynamic Mockup Gateway) */}
              {paymentMethod === "cod" && (
                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-600 flex items-start gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-stone-800">Zero Upfront Payment.</span> Pay in cash to the delivery agent once your purifier arrives at your home.
                  </div>
                </div>
              )}

              {(paymentMethod === "bkash" || paymentMethod === "nagad") && (
                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs space-y-3">
                  <p className="text-[11px] text-amber-800 bg-amber-50 border border-amber-200 px-2 py-1.5 rounded font-semibold">
                    Demo gateway — please don&apos;t send money yet. Our team will confirm the payment number with you on WhatsApp.
                  </p>
                  <div className="flex items-center justify-between text-stone-600 font-semibold">
                    <span>Helpline Account:</span>
                    <span className="font-mono bg-white px-2 py-0.5 rounded border border-stone-200">{HELPLINE_PHONE_RAW}</span>
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase text-stone-500 mb-1">
                      Your {paymentMethod === "bkash" ? "bKash" : "Nagad"} Number *
                    </label>
                    <input
                      type="tel"
                      value={mfsNumber}
                      onChange={(e) => setMfsNumber(e.target.value)}
                      placeholder="01XXXXXXXXX"
                      className="w-full px-3 py-2 rounded-lg border border-stone-300 text-xs"
                    />
                    {errors.mfsNumber && <p className="text-red-500 text-[11px] mt-0.5">{errors.mfsNumber}</p>}
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase text-stone-500 mb-1">
                      Transaction ID (TrxID) *
                    </label>
                    <input
                      type="text"
                      value={mfsTrxId}
                      onChange={(e) => setMfsTrxId(e.target.value)}
                      placeholder="e.g. 9K28DJ819"
                      className="w-full px-3 py-2 rounded-lg border border-stone-300 text-xs font-mono"
                    />
                    {errors.mfsTrxId && <p className="text-red-500 text-[11px] mt-0.5">{errors.mfsTrxId}</p>}
                  </div>
                </div>
              )}

              {paymentMethod === "card" && (
                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs space-y-3">
                  <p className="text-[11px] text-amber-800 bg-amber-50 border border-amber-200 px-2 py-1.5 rounded font-semibold">
                    Demo gateway — cards are not charged and card details are never sent or stored. Our team will arrange payment with you.
                  </p>
                  <div>
                    <label className="block text-[11px] font-bold uppercase text-stone-500 mb-1">Card Number *</label>
                    <input
                      type="text"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      placeholder="4111 2222 3333 4444"
                      className="w-full px-3 py-2 rounded-lg border border-stone-300 text-xs font-mono"
                    />
                    {errors.cardNumber && <p className="text-red-500 text-[11px] mt-0.5">{errors.cardNumber}</p>}
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[11px] font-bold uppercase text-stone-500 mb-1">Expiry *</label>
                      <input
                        type="text"
                        value={cardExpiry}
                        onChange={(e) => setCardExpiry(e.target.value)}
                        placeholder="MM/YY"
                        className="w-full px-3 py-2 rounded-lg border border-stone-300 text-xs font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase text-stone-500 mb-1">CVC *</label>
                      <input
                        type="text"
                        value={cardCvc}
                        onChange={(e) => setCardCvc(e.target.value)}
                        placeholder="123"
                        className="w-full px-3 py-2 rounded-lg border border-stone-300 text-xs font-mono"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting || (purifierQty < 1 && extraCartridges < 1)}
              className="w-full mt-6 py-4 bg-primary text-white rounded-full font-bold text-base hover:opacity-90 active:scale-[0.99] transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <RefreshCw className="w-5 h-5 animate-spin" /> Processing Order...
                </>
              ) : (
                <>
                  Confirm Order (৳{grandTotal.toLocaleString()})
                </>
              )}
            </button>

            {/* Reassurance Badges */}
            <div className="mt-6 pt-6 border-t border-stone-100 space-y-2 text-xs text-stone-500">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary flex-shrink-0" />
                <span>Free delivery with every purifier</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-primary flex-shrink-0" />
                <span>Nationwide delivery — we confirm your delivery date on WhatsApp</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span>Helpline: <a href={`tel:${HELPLINE_PHONE_RAW}`} className="underline font-bold text-stone-700">{HELPLINE_PHONE}</a></span>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
