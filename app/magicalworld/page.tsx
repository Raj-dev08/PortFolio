"use client"

import { useEffect, useState } from "react"
import { userData } from "@/data/data"

export default function Page() {
  const [lightOn, setLightOn] = useState(false)
  const [fullLight, setFullLight] = useState(false)
  const [revealed, setRevealed] = useState(false)
  const [query, setQuery] = useState("")
  const [showProjects, setShowProjects] = useState(false)
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const [casting, setCasting] = useState(false)

  const [mapOpen, setMapOpen] = useState(false)
  const [decodeMap, setDecodeMap] = useState(false)
  const [prank, setPrank] = useState(false)

  const [showPatronus, setShowPatronus] = useState(false)
  const [expelliarmus, setExpelliarmus] = useState(false)

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [])

  useEffect(() => {
    let timer: NodeJS.Timeout

    const start = () => {
      timer = setTimeout(() => {
        setExpelliarmus(true)
        setTimeout(() => setExpelliarmus(false), 2000)
      }, 2000) // long press threshold
    }

    const cancel = () => clearTimeout(timer)

    window.addEventListener("mousedown", start)
    window.addEventListener("mouseup", cancel)
    window.addEventListener("mouseleave", cancel)

    window.addEventListener("touchstart", start)
    window.addEventListener("touchend", cancel)

    return () => {
      window.removeEventListener("mousedown", start)
      window.removeEventListener("mouseup", cancel)
      window.removeEventListener("mouseleave", cancel)

      window.removeEventListener("touchstart", start)
      window.removeEventListener("touchend", cancel)
    }
  }, [])

  const castSpell = (type: string) => {
    
    

    if (type === "lumos") {
      setCasting(true)
      setLightOn(true)
    }
    if (type === "lumos maxima"){
      setFullLight(true)
      setCasting(true)
    } 

    if (type === "nox") {
      setLightOn(false)
      setFullLight(false)
      setCasting(true)
    }

    // REVELIO UPGRADED
    if (type === "revelio") {
      if (mapOpen) setPrank(true)
      else {
        setRevealed(true)
        setTimeout(() => setRevealed(false), 5000)
      }
    }

    if (type === "accio") setShowProjects(true)
    if (type === "fidelius") setRevealed(false)
    if (type === "reparo") setShowProjects(false)

    if (type === "map-open") {
      setMapOpen(true)
      setPrank(false)
    }

    if (type === "map-open-decode") {
      setMapOpen(true)
      setDecodeMap(true)
      setCasting(true)
      setPrank(false)
    }

    if (type === "map-close") {
      setMapOpen(false)
      setCasting(true)
      setDecodeMap(false)
      setPrank(false)
    }

    if (type === "patronus-charm") {
      setShowPatronus(true)
      setTimeout(() => setShowPatronus(false), 5000)
    }

    setTimeout(() => setCasting(false), 350)
  }

  const handleSpell = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const spell = query.toLowerCase()

      if (spell === "lumos") castSpell("lumos")
      if (spell === "lumos maxima") castSpell("lumos maxima")
      if (spell.includes("nox")) castSpell("nox")
      if (spell.includes("revelio")) castSpell("revelio")
      if (spell.includes("fidelius")) castSpell("fidelius")
      if (spell.includes("accio")) castSpell("accio")
      if (spell.includes("reparo")) castSpell("reparo")

      if (spell.includes("map-open")) castSpell("map-open")
      if (spell.includes("i solemnly swear")) castSpell("map-open-decode")
      if (spell.includes("mischief managed")) castSpell("map-close")

      if (spell.includes("expecto patronum")) castSpell("patronus-charm")

      setQuery("")
    }
  }

  const lumosActive = lightOn || fullLight

  return (
    <div className="relative h-screen w-screen overflow-hidden cursor-none bg-black text-white">

      {/* BASE */}
      <div className="absolute inset-0 bg-black" />

      {/* LUMOS */}
     
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: lumosActive
              ? `radial-gradient(circle at ${mouse.x}px ${mouse.y}px,
                rgba(255,255,210,0.2),
                rgba(0,0,0,0.97) ${fullLight? `450px`:`160px`})`
              : "black",
          }}
        />

      {/* HELP stays same */}
      <div className={`absolute top-6 left-6 z-30 ${lumosActive ? "block" : "hidden"}`}>
        <div className="w-[240px] p-4 rounded-xl bg-transparent backdrop-blur-md text-black">
          <h3 className="text-sm font-semibold mb-2">Spell Guide</h3>
          <ul className="text-xs space-y-1">
            <li>lumos/lumos maxima → torch</li>
            <li>nox → torch off</li>
            <li>map-open → opens map</li>
            <li>revelio → reveals hidden details</li>
            <li>accio/reparo → shows/hides projects</li>
            <li>fidelius → hides projects</li>
            <li>expecto patronum → patronus charm</li>
          </ul>
        </div>
      </div>


      {mapOpen && (
      <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/90">

        {/* background vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,black_90%)]" />

        {/* MAP FRAME */}
        <div className="relative w-[min(700px,88vw)] h-[min(480px,72vh)] rounded-2xl overflow-hidden border border-amber-200/30 shadow-[0_0_60px_rgba(255,200,120,0.15)]">

          {/* parchment texture (fixed scale feel) */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/map-texture.jpg')",
              backgroundSize: "120%", // key fix: prevents huge stretched look
              backgroundPosition: "center",
              filter: "sepia(0.9) brightness(0.85) contrast(1.1)",
            }}
          />

          {/* subtle magical dust overlay */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_40%,black_1px,transparent_1px)] bg-[size:32px_32px]" />

          {/* CONTENT */}
          <div className="relative z-10 flex items-center justify-center h-full text-black text-center px-8">

            {!prank ? (
              <div className="backdrop-blur-md bg-white/10 border border-black/10 p-6 rounded-xl max-w-sm shadow-lg">

                <h1 className="text-xl font-serif mb-3 tracking-wide">
                  The Marauder’s Map
                </h1>

                {decodeMap ? (
                  <div className="space-y-2">
                    <p className="text-sm italic">
                      I solemnly swear that I am up to no good.
                    </p>

                    <div className="mt-3">
                      <p className="font-semibold">{userData.name}</p>
                      <p className="text-xs opacity-80">{userData.title}</p>
                    </div>

                    <div className="text-xs mt-3 opacity-70 leading-relaxed">
                      Skills: {Object.keys(userData.skills).join(", ")}
                    </div>
                  </div>
                ) : (
                  <p className="text-sm opacity-70">
                    Speak the phrase to reveal the map
                  </p>
                )}
              </div>
            ) : (
              <div className="backdrop-blur-md bg-white/10 border border-black/10 p-6 rounded-xl max-w-sm">
                <h2 className="text-lg font-serif mb-2">Caught by Moony</h2>
                <p className="text-sm opacity-80">
                  Stop snooping around.
                </p>
              </div>
            )}

          </div>
        </div>
      </div>
    )}

      {/* ================= REVELIO CARD ================= */}
      {!mapOpen && revealed && (
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-700`}
        >
          <div className="w-[340px] p-6 rounded-2xl backdrop-blur-xl border border-amber-200/20
            bg-gradient-to-br from-[#1a1208]/90 via-[#0c0c0c]/95 to-black">

            <h2 className="text-xl text-amber-100">{userData.name}</h2>
            <p className="text-sm text-amber-200/70 mt-2">{userData.title}</p>
          </div>
        </div>
      )}

      {/* ================= PROJECT ARCHIVE OVERLAY ================= */}
      {showProjects && (
        <div className="absolute inset-0 z-40 flex flex-col items-center justify-center bg-black/60 pointer-events-none">

          {/* CONTENT (clickable) */}
          <div className="pointer-events-auto flex flex-col items-center">

            <h1 className="text-2xl mb-6 text-amber-200">
              Project Archive
            </h1>

            <div className="grid grid-cols-2 gap-4 max-w-3xl">
              {userData.projects.map((p: any) => (
                <div
                  key={p.index}
                  className="p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md"
                >
                  <h3 className="font-semibold">{p.name}</h3>
                  <p className="text-xs text-white/70 mt-2">
                    {p.summary}
                  </p>
                </div>
              ))}
            </div>

            <button
              onClick={() => setShowProjects(false)}
              className="mt-6 text-xs text-red-300"
            >
              Close Archive
            </button>

          </div>
        </div>
      )}

      {/* INPUT */}
      <div className="absolute bottom-4 w-full flex justify-center z-20">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleSpell}
          placeholder="use lumos to search for help"
          className="bg-white/10 border border-white/20 w-[min(600px,90%)] px-4 py-2 rounded-md text-sm backdrop-blur-md outline-none"
        />
      </div>

      {/* WAND */}
      <div
        className="pointer-events-none fixed z-50"
        style={{
          left: mouse.x,
          top: mouse.y,
          transform: `translate(-20%, -50%) ${
            casting ? "rotate(25deg)" : "rotate(0deg)"
          }`,
        }}
      >

        {expelliarmus && (
          <>
          <div
            className="absolute left-12 top-12 -translate-y-1/2"
            style={{
              width: "360px",
              height: "6px",
              background:
                "linear-gradient(90deg, transparent, rgba(255,0,0,0.4), rgba(255,0,0,0.9))",
              filter: "blur(3px)",
              transform: "rotate(-135deg)",
              transformOrigin: "left center",
            }}
          />
          <div
            className="absolute -left-50 -top-50 -translate-y-1/2 rounded-full"
            style={{
              width: "28px",
              height: "28px",
              background:
                "linear-gradient(90deg, rgba(255,0,0,0.9), rgba(0,0,0,0.4), transparent)",
              filter: "blur(3px)",
              transform: "rotate(45deg)",
              transformOrigin: "left center",
            }}
          />


           <img src="/voldemort.png" className="w-12 h-12 z-10 absolute -left-100 -top-100" style={{ transform: "rotate(180deg)",}} />

           <div
            className="absolute -left-50 -top-50 -translate-y-1/2"
            style={{
              width: "260px",
              height: "6px",
              background:
                "linear-gradient(90deg, rgba(0,255,0,0.9), rgba(0,255,0,0.4), transparent)",
              filter: "blur(3px)",
              transform: "rotate(-135deg)",
              transformOrigin: "left center",
            }}
          />
          <div
            className="absolute -left-54 -top-54 -translate-y-1/2 rounded-full"
            style={{
              width: "24px",
              height: "24px",
              background:
                "linear-gradient(90deg, transparent, rgba(0,255,0,0.3), rgba(0,255,0,0.9)  )",
              filter: "blur(3px)",
              transform: "rotate(45deg)",
              transformOrigin: "left center",
            }}
          />

          </>
      )}
        {/* PATRONUS GLOW */}
        {showPatronus && (
          <div
            className="absolute -left-24 -top-8 w-48 h-16 rounded-full animate-pulse"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(180,240,255,0.9), rgba(80,180,255,0.2), transparent 70%)",
              filter: "blur(6px)",
              transform: "rotate(-30deg)",
            }}
          />
        )}

        {/* WAND */}
        <img src="/harrywand.png" className="w-12 h-12 relative z-10" />
      </div>
    </div>
  )
}