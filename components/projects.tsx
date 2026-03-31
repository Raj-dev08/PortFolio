"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { userData } from "@/data/data"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

const getTypeStyles = (type?: string) => {
  switch (type) {
    case "ai":
      return "bg-purple-500/10 text-purple-300 border-purple-500/20"
    case "fullstack":
      return "bg-emerald-500/10 text-emerald-300 border-emerald-500/20 "
    case "microservices":
      return "bg-blue-500/10 text-blue-300 border-blue-500/20"
    case "mobile":
      return "bg-pink-500/10 text-pink-300 border-pink-500/20"
    default:
      return "bg-zinc-500/10 text-white border-zinc-500/20"
  }
}

const getStatusStyles = (status?: string) => {
  switch (status) {
    case "active":
      return "bg-green-500/10 text-green-300 border-green-500/20"
    case "completed":
      return "bg-zinc-800/40 text-zinc-300 border-zinc-700"
    case "demo ready":
      return "bg-yellow-500/10 text-yellow-300 border-yellow-500/20"
    default:
      return "bg-zinc-900 text-zinc-400 border-zinc-800"
  }
}

export const Projects = () => {

  const spineRef = useRef<HTMLDivElement>(null)
  const particleDotRef = useRef<HTMLDivElement>(null)
  const rowRefs = useRef<(HTMLDivElement | null)[]>([])
  const connectorRefs = useRef<(HTMLDivElement | null)[]>([])
  const connectorFillRefs = useRef<(HTMLDivElement | null)[]>([])
  const cardGlowRefs = useRef<(HTMLDivElement | null)[]>([])

  //using red cuz states are read only once not during updates
  const isHitRef = useRef<boolean[]>([])
  const checkpointYs = useRef<number[]>([])
  const fillProgress = useRef<number[]>([])

  const projects = useMemo(() => {
    return [...userData.projects].sort((a, b) => a.index - b.index)
  }, [])


  // Measure checkpoint Y positions relative to the spine top
  useEffect(() => {
    const measureCheckpoints = () => {
      if (!spineRef.current) return
      const spineTop = spineRef.current.getBoundingClientRect().top
      checkpointYs.current = rowRefs.current.map((row) => {
        if (!row) return 0
        const rect = row.getBoundingClientRect()
        return rect.top + rect.height / 2 - spineTop
      })
      fillProgress.current = new Array(projects.length).fill(0)
    }
    const timer = setTimeout(measureCheckpoints, 150)
    window.addEventListener("resize", measureCheckpoints)
    return () => {
      clearTimeout(timer)
      window.removeEventListener("resize", measureCheckpoints)
    }
  }, [projects])

  useEffect(() => {
    const spine = spineRef.current
    if (!spine) return

    let y = 0
    let dir = 1
    const speed = 1.5
    const TRIGGER_RANGE = 10

    const FILL_SPEED_IN = 0.025 // fill speed if trigger range is lowered it should be increased to make sure the fill reaches 100% within the smaller range
    let raf: number

    const loop = () => {
      const spineHeight = spine.offsetHeight
      if (dir == 0 ){
        return
      }
      y += speed * dir
      if (y >= spineHeight) { y = spineHeight; dir = 0 }
      if (y <= 0) { y = 0; dir = 1 }

      if (particleDotRef.current) {
        particleDotRef.current.style.top = `${y}px`
      }

      checkpointYs.current.forEach((cy, i) => {
        const fill = connectorFillRefs.current[i]
        const glow = cardGlowRefs.current[i]
        if (!fill && !glow) return

        const dist = Math.abs(y - cy)
        const hit = dist <= TRIGGER_RANGE

        if(hit && !isHitRef.current[i]){
          isHitRef.current[i] = true
        }


        let p = fillProgress.current[i] ?? 0
        if (isHitRef.current[i] && p < 1) {
          p = Math.min(1, p + FILL_SPEED_IN)
        }
        fillProgress.current[i] = p

        if (fill) {
          fill.style.width = `${p * 100}%`
          fill.style.opacity = String(0.4 + p * 0.6)
        }

        // Card background glow — fade in/out
        if (glow) {
          glow.style.opacity = String(p)
        }
      })

      raf = requestAnimationFrame(loop)
    }

    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
  }, [projects])

  return (
    <section className="w-full px-6 py-20 max-w-6xl mx-auto">

      {/* HEADER */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white">Projects</h2>
        <p className="text-zinc-400 text-sm mt-1">
          Systems I've built backend-heavy, real-time, and AI-driven
        </p>
      </div>

      {/* TIMELINE */}
      <div className="relative mt-10 min-h-full">

        {/* TIMELINE SPINE */}
        <div
          ref={spineRef}
          className="absolute left-1/2 top-0 bottom-0 w-px hidden md:block"
          style={{ transform: "translateX(-50%)" }}
        >
          {/* Static line */}
          <div className="absolute inset-0 w-px bg-zinc-800" />

          {/* RAF-driven particle dot */}
          <div
            ref={particleDotRef}
            className="absolute hidden md:block"
            style={{
              left: "50%",
              top: 0,
              transform: "translate(-50%, -50%)",
              width: "1px",
              height: "8px",
              backgroundColor: "#22d3ee",
              boxShadow: "0 0 6px #22d3ee, 0 0 12px #22d3ee88",
              pointerEvents: "none",
              zIndex: 10,
            }}
          />
        </div>

        <div className="space-y-10">
          {projects.map((project, idx) => {
            const isLeft = idx % 2 === 0

            return (
              <motion.div
                key={project.index}
                ref={(el) => { rowRefs.current[idx] = el }}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: idx * 0.03 }}
                className="relative w-full flex flex-col md:flex-row items-center"
              >
                {/* LEFT HALF */}
                <div className="flex-1">
                  {isLeft && (
                    <div className="flex items-center">
                      {/* Card wrapper with glow bg */}
                      <div className="md:ml-4 w-full md:w-2/3 relative">
                        {/* Glow background layer */}
                        <div
                          ref={(el) => { cardGlowRefs.current[idx] = el }}
                          className="absolute inset-0 pointer-events-none"
                          style={{
                            opacity: 0,
                            background:"#22d3ee",
                          }}
                        />
                        <Card className="bg-zinc-950 border border-zinc-800 relative z-10">
                          <CardHeader className="pb-2">
                            <div className="flex justify-between items-start">
                              <CardTitle className="text-white text-base font-semibold">
                                {project.name}
                              </CardTitle>
                              <span className="text-xs text-zinc-500">
                                #{project.index}
                              </span>
                            </div>
                            <div className="flex gap-2 mt-2 flex-wrap">
                              {project.type?.map((t) => (
                                <Badge key={t} className={getTypeStyles(t)}>
                                  {t}
                                </Badge>
                              ))}
                              {project.status && (
                                <Badge className={getStatusStyles(project.status)}>
                                  {project.status}
                                </Badge>
                              )}
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-zinc-300">
                              {project.description}
                            </p>
                            <div className="mt-4 flex flex-wrap gap-2">
                              {project.tech?.map((t, i) => (
                                <div
                                  key={i}
                                  className="flex items-center gap-1.5 px-2 py-1 text-xs bg-zinc-900 border border-zinc-800 rounded-md text-zinc-300"
                                >
                                  {t.icon && <t.icon className="text-[12px]" />}
                                  {t.name}
                                </div>
                              ))}
                            </div>
                            <div className="flex gap-2 mt-4">
                              {project.link && (
                                <Button asChild variant="outline" className="flex-1 bg-white text-black hover:bg-zinc-300">
                                  <a href={project.link} target="_blank">
                                    <FaGithub className="mr-2" /> Code
                                  </a>
                                </Button>
                              )}
                              {project.liveLink && (
                                <Button asChild className="flex-1 bg-white text-black hover:bg-zinc-300">
                                  <a href={project.liveLink} target="_blank">
                                    <FaExternalLinkAlt className="mr-2" /> Live
                                  </a>
                                </Button>
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      </div>

                      {/* Connector with animated fill */}
                      <div
                        ref={(el) => { connectorRefs.current[idx] = el }}
                        className="h-[2px] flex-1 hidden md:block relative overflow-hidden"
                        style={{ backgroundColor: "#27272a" }}
                      >
                        {/* Filled layer — grows from spine toward card (right to left for left cards) */}
                        <div
                          ref={(el) => { connectorFillRefs.current[idx] = el }}
                          className="absolute top-0 right-0 h-full"
                          style={{
                            width: "0%",
                            backgroundColor: "#22d3ee",
                            boxShadow: "0 0 6px #22d3ee",
                            opacity: 0,
                          }}
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* RIGHT HALF */}
                <div className="flex-1">
                  {!isLeft && (
                    <div className="flex items-center flex-row-reverse">
                      {/* Card wrapper with glow bg */}
                      <div className="md:mr-4 w-full md:w-2/3 relative">
                        {/* Glow background layer */}
                        <div
                          ref={(el) => { cardGlowRefs.current[idx] = el }}
                          className="absolute inset-0 pointer-events-none"
                          style={{
                            opacity: 0,
                            background:"#22d3ee",
                          }}
                        />
                        <Card className="bg-zinc-950 border border-zinc-800 relative z-10">
                          <CardHeader className="pb-2">
                            <div className="flex justify-between items-start">
                              <CardTitle className="text-white text-base font-semibold">
                                {project.name}
                              </CardTitle>
                              <span className="text-xs text-zinc-500">
                                #{project.index}
                              </span>
                            </div>
                            <div className="flex gap-2 mt-2 flex-wrap">
                              {project.type?.map((t) => (
                                <Badge key={t} className={getTypeStyles(t)}>
                                  {t}
                                </Badge>
                              ))}
                              {project.status && (
                                <Badge className={getStatusStyles(project.status)}>
                                  {project.status}
                                </Badge>
                              )}
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-zinc-300">
                              {project.description}
                            </p>
                            <div className="mt-4 flex flex-wrap gap-2">
                              {project.tech?.map((t, i) => (
                                <div
                                  key={i}
                                  className="flex items-center gap-1.5 px-2 py-1 text-xs bg-zinc-900 border border-zinc-800 rounded-md text-zinc-300"
                                >
                                  {t.icon && <t.icon className="text-[12px]" />}
                                  {t.name}
                                </div>
                              ))}
                            </div>
                            <div className="flex gap-2 mt-4">
                              {project.link && (
                                <Button asChild variant="outline" className="flex-1 bg-white text-black hover:bg-zinc-300">
                                  <a href={project.link} target="_blank">
                                    <FaGithub className="mr-2" /> Code
                                  </a>
                                </Button>
                              )}
                              {project.liveLink && (
                                <Button asChild className="flex-1 bg-white text-black hover:bg-zinc-300">
                                  <a href={project.liveLink} target="_blank">
                                    <FaExternalLinkAlt className="mr-2" /> Live
                                  </a>
                                </Button>
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      </div>

                      {/* Connector with animated fill */}
                      <div
                        ref={(el) => { connectorRefs.current[idx] = el }}
                        className="h-[2px] flex-1 hidden md:block relative overflow-hidden"
                        style={{ backgroundColor: "#27272a" }}
                      >
                        {/* Filled layer — grows from spine toward card (left to right for right cards) */}
                        <div
                          ref={(el) => { connectorFillRefs.current[idx] = el }}
                          className="absolute top-0 left-0 h-full"
                          style={{
                            width: "0%",
                            backgroundColor: "#22d3ee",
                            boxShadow: "0 0 6px #22d3ee",
                            opacity: 0,
                          }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* EMPTY */}
      {projects.length === 0 && (
        <div className="text-center text-zinc-500 mt-16">
          No matching systems found
        </div>
      )}
    </section>
  )
}