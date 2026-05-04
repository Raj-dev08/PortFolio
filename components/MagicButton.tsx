"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function MagicButton() {
  const [hover, setHover] = useState(false)
  const [active, setActive] = useState(false)
  const router = useRouter()

  return (
    <a
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onMouseMove={() => setHover(true)}
      onClick={(e) => {
        e.preventDefault()
        if (active) return

        setActive(true)

        setTimeout(() => {
          router.push("/magic")
        }, 600)
      }}
      className={`relative w-full sm:w-auto text-center px-5 py-2.5 rounded-md
        transition-all duration-300 overflow-visible border cursor-pointer
        ${
          active
            ? "text-amber-200 border-amber-500/40 shadow-[0_0_20px_rgba(255,215,120,0.25)]"
            : "text-zinc-100 border-zinc-700 hover:border-amber-400/50"
        }`}
      style={{
        background: active
          ? "radial-gradient(circle at 50% 40%, rgba(60,40,20,0.9), rgba(10,10,10,0.95) 70%)"
          : "linear-gradient(145deg, rgba(30,30,30,0.9), rgba(10,10,10,0.95))",
        boxShadow: active
          ? "inset 0 0 40px rgba(0,0,0,0.8), 0 0 20px rgba(255,215,120,0.2)"
          : "inset 0 0 20px rgba(0,0,0,0.6)",
      }}
    >
      {/* TEXT */}
      <span className="relative z-10">
        {active ? "Apparating..." : "The real fun"}
      </span>

      {/* WAND */}
      <span
        className={`pointer-events-none absolute top-1/2 transition-all duration-500 ease-out ${
          hover || active ? "left-[105%] opacity-100" : "left-[-80px] opacity-0"
        }`}
        style={{
          width: "70px",
          height: "70px",
          backgroundImage: "url('/wand.png')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          transform: "translateY(-50%)",
          filter: active
            ? "drop-shadow(0 0 16px rgba(180,120,255,0.9))"
            : "drop-shadow(0 0 12px rgba(255,255,200,0.8))",
        }}
      />

      {/* MAGIC LIGHT (LUMOS) */}
      <span
        className={`pointer-events-none absolute top-1/2 transition-all duration-500 ease-out ${
          hover || active ? "left-[160%] opacity-100" : "left-[-80px] opacity-0"
        }`}
        style={{
          width: "7px",
          height: "7px",
          borderRadius: "100%",
          transform: "translateY(-50%)",

          // bright core + fade
          background:
            "radial-gradient(circle, rgba(255,255,255,1) 40%, rgba(255,255,255,0.6) 60%, transparent 70%)",

          // layered glow
          boxShadow: active
            ? `
              0 0 8px rgba(255,255,255,0.9),
              0 0 18px rgba(180,120,255,0.8),
              0 0 35px rgba(180,120,255,0.6),
              0 0 60px rgba(180,120,255,0.4)
            `
            : `
              0 0 6px rgba(255,255,255,0.8),
              0 0 14px rgba(255,255,200,0.7),
              0 0 60px rgba(255,255,200,0.5)
            `,
        }}
      />
    </a>
  )
}