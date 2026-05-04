"use client"

import { useRouter } from "next/navigation"
import { useRef } from "react"

export default function Page() {
  const router = useRouter()
  const videoRef = useRef<HTMLVideoElement | null>(null)

  const goNext = () => {
    router.push("/magicalworld") 
  }

  return (
    <div
      onClick={goNext}
      className="relative h-screen w-screen overflow-hidden bg-black cursor-pointer"
    >
      {/* VIDEO */}
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        onEnded={goNext}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hogwarts.mp4" type="video/mp4" />
      </video>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/50" />

      {/* TEXT */}
      <div className="absolute bottom-10 w-full text-center text-white/70 text-sm">
        Click to skip
      </div>
    </div>
  )
}