import { SUPPORTERS } from "@/lib/data/siteData"

interface SupportedByProps {
  variant?: "light" | "dark"
  showHeading?: boolean
  badge?: string
  title?: string
  subtitle?: string
  className?: string
}

export default function SupportedBy({
  variant = "light",
  showHeading = true,
  badge = "Institutional Backing & Partnerships",
  title = "Proudly Supported By",
  subtitle = "AquiVira is honored to be supported by international development leaders driving clean water access, public health, and sustainable enterprise in Bangladesh.",
  className = "",
}: SupportedByProps) {
  const isDark = variant === "dark"

  return (
    <div className={`w-full ${className}`}>
      {showHeading && (
        <div className="text-center mb-10 sm:mb-12">
          {badge && (
            <span
              className={`text-xs font-bold uppercase tracking-wider mb-2 block ${
                isDark ? "text-amber-400" : "text-primary"
              }`}
            >
              {badge}
            </span>
          )}
          {title && (
            <h2
              className={`text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-3 ${
                isDark ? "text-white" : "text-stone-900"
              }`}
            >
              {title}
            </h2>
          )}
          {subtitle && (
            <p
              className={`text-sm sm:text-base max-w-2xl mx-auto leading-relaxed ${
                isDark ? "text-stone-300" : "text-muted-foreground"
              }`}
            >
              {subtitle}
            </p>
          )}
        </div>
      )}

      <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto items-stretch">
        {SUPPORTERS.map((s, idx) => (
          <div
            key={idx}
            className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between items-center text-center transition-all duration-300 ${
              isDark
                ? "bg-white text-stone-900 border border-white/20 shadow-xl hover:-translate-y-1 hover:shadow-2xl"
                : "bg-white border border-border/80 shadow-sm hover:shadow-md hover:border-primary/30 hover:-translate-y-1"
            }`}
          >
            {/* Logo Well */}
            <div className="w-full flex flex-col items-center">
              <div
                className={`w-full h-24 rounded-2xl flex items-center justify-center p-3 mb-5 ${
                  isDark ? "bg-stone-50" : "bg-stone-50/80"
                } border border-stone-100`}
              >
                <img
                  src={s.logo}
                  alt={s.alt}
                  className={`w-auto object-contain transition-transform duration-300 hover:scale-105 ${
                    s.logo.endsWith(".jpg")
                      ? "max-h-14 sm:max-h-16 rounded-md shadow-sm"
                      : "max-h-11 sm:max-h-12"
                  }`}
                />
              </div>

              {/* Tag / Role */}
              <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full mb-3">
                {s.role}
              </span>

              {/* Name & Subtitle */}
              <h3 className="font-bold text-lg text-stone-900 leading-snug mb-1">
                {s.name}
              </h3>
              {s.bengaliName && (
                <p className="text-xs font-semibold text-stone-500 mb-3">
                  {s.bengaliName}
                </p>
              )}
            </div>

            {/* Description */}
            <p className="text-xs text-stone-600 leading-relaxed mt-2 pt-3 border-t border-stone-100 w-full">
              {s.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
