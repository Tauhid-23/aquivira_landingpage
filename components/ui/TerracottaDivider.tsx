import React from "react"

interface TerracottaDividerProps {
  className?: string
  color?: string
}

export default function TerracottaDivider({
  className = "",
  color = "#C05621",
}: TerracottaDividerProps) {
  return (
    <div className={`w-full overflow-hidden flex items-center justify-center py-4 select-none pointer-events-none opacity-40 ${className}`}>
      <svg
        className="w-full max-w-2xl h-3"
        viewBox="0 0 600 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <pattern id="terracotta-pattern" x="0" y="0" width="30" height="12" patternUnits="userSpaceOnUse">
          {/* Subtle clay pottery geometric motif */}
          <path d="M 0 6 L 15 0 L 30 6 L 15 12 Z" stroke={color} strokeWidth="1" fill="none" opacity="0.6" />
          <circle cx="15" cy="6" r="2" fill={color} opacity="0.8" />
        </pattern>
        <rect x="0" y="0" width="600" height="12" fill="url(#terracotta-pattern)" />
      </svg>
    </div>
  )
}
