"use client"

import { useState, useRef, useEffect } from "react"
import { Volume2, VolumeX, Sparkles } from "lucide-react"
import { useLanguage } from "@/lib/i18n/LanguageContext"

export default function WaterPourAudio({ className = "" }: { className?: string }) {
  const { t, language } = useLanguage()
  const [isPlaying, setIsPlaying] = useState(false)
  const audioContextRef = useRef<AudioContext | null>(null)
  const activeNodesRef = useRef<{ stop: () => void }[]>([])

  useEffect(() => {
    return () => {
      // Clean up audio context on unmount
      activeNodesRef.current.forEach((n) => {
        try {
          n.stop()
        } catch {}
      })
      if (audioContextRef.current && audioContextRef.current.state !== "closed") {
        audioContextRef.current.close().catch(() => {})
      }
    }
  }, [])

  const startWaterPourSound = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
      if (!AudioCtx) return

      const ctx = new AudioCtx()
      audioContextRef.current = ctx

      const duration = 4.2 // seconds
      const now = ctx.currentTime

      // 1. Pink/Brownian noise buffer for fluid stream texture
      const bufferSize = ctx.sampleRate * duration
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate)
      const output = noiseBuffer.getChannelData(0)
      let lastOut = 0.0

      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1
        output[i] = (lastOut + 0.025 * white) / 1.025
        lastOut = output[i]
        output[i] *= 2.8 // gain boost
      }

      const whiteNoise = ctx.createBufferSource()
      whiteNoise.buffer = noiseBuffer

      // 2. Dual Bandpass Filters modeling water stream resonance into a clay vessel
      const filter1 = ctx.createBiquadFilter()
      filter1.type = "bandpass"
      filter1.frequency.setValueAtTime(450, now)
      filter1.frequency.exponentialRampToValueAtTime(780, now + duration) // Pitch rises slightly as vessel fills!
      filter1.Q.setValueAtTime(3.2, now)

      const filter2 = ctx.createBiquadFilter()
      filter2.type = "bandpass"
      filter2.frequency.setValueAtTime(1100, now)
      filter2.frequency.exponentialRampToValueAtTime(1550, now + duration)
      filter2.Q.setValueAtTime(4.0, now)

      // 3. Gain Envelope
      const gainNode = ctx.createGain()
      gainNode.gain.setValueAtTime(0.001, now)
      gainNode.gain.linearRampToValueAtTime(0.35, now + 0.3) // Soft attack
      gainNode.gain.setValueAtTime(0.35, now + duration - 0.7)
      gainNode.gain.exponentialRampToValueAtTime(0.001, now + duration) // Soft decay

      // 4. Subtle bubble frequency modulation
      const lfo = ctx.createOscillator()
      lfo.frequency.setValueAtTime(8, now)
      lfo.frequency.linearRampToValueAtTime(14, now + duration)
      const lfoGain = ctx.createGain()
      lfoGain.gain.setValueAtTime(60, now)
      lfo.connect(lfoGain)
      lfoGain.connect(filter1.frequency)

      // Connect pipeline
      whiteNoise.connect(filter1)
      filter1.connect(gainNode)
      whiteNoise.connect(filter2)
      filter2.connect(gainNode)
      gainNode.connect(ctx.destination)

      whiteNoise.start(now)
      lfo.start(now)

      activeNodesRef.current.push({
        stop: () => {
          try {
            whiteNoise.stop()
            lfo.stop()
          } catch {}
        },
      })

      setIsPlaying(true)

      const timer = setTimeout(() => {
        setIsPlaying(false)
      }, duration * 1000)

      return () => clearTimeout(timer)
    } catch {
      setIsPlaying(false)
    }
  }

  const stopSound = () => {
    activeNodesRef.current.forEach((n) => {
      try {
        n.stop()
      } catch {}
    })
    activeNodesRef.current = []
    setIsPlaying(false)
  }

  const toggleSound = () => {
    if (isPlaying) {
      stopSound()
    } else {
      startWaterPourSound()
    }
  }

  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <button
        type="button"
        onClick={toggleSound}
        className={`group relative inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 border shadow-sm ${
          isPlaying
            ? "bg-amber-600 text-white border-amber-500 shadow-md ring-2 ring-amber-400/40"
            : "bg-white/95 hover:bg-stone-50 text-stone-800 border-stone-200/90 hover:border-amber-500/50 hover:shadow"
        }`}
        title={t("audio.tooltip")}
        aria-label={isPlaying ? t("audio.playing") : t("audio.listenPour")}
      >
        {isPlaying ? (
          <>
            <VolumeX className="w-4 h-4 text-white animate-pulse" />
            <span className="font-semibold tracking-wide">
              {language === "bn" ? "শব্দ বন্ধ করুন" : "Stop Sound"}
            </span>
            {/* Animated Sound Waves */}
            <span className="flex items-center gap-0.5 ml-1">
              <span className="w-1 h-3 bg-white rounded-full animate-bounce [animation-delay:-0.3s]" />
              <span className="w-1 h-4 bg-white rounded-full animate-bounce [animation-delay:-0.15s]" />
              <span className="w-1 h-2 bg-white rounded-full animate-bounce" />
            </span>
          </>
        ) : (
          <>
            <div className="w-5 h-5 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Volume2 className="w-3 h-3" />
            </div>
            <span className="text-stone-700 group-hover:text-amber-800 transition-colors">
              {t("audio.listenPour")}
            </span>
            <Sparkles className="w-3 h-3 text-amber-500 group-hover:rotate-12 transition-transform" />
          </>
        )}
      </button>
    </div>
  )
}
