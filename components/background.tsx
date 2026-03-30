"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Terminal } from "./terminal"

export const Background = () => {
  const [showTerminal, setShowTerminal] = useState(true)

  useEffect(() => {
    if (window.innerWidth < 768) {
      setShowTerminal(false)
    }
  }, [])

  return (
    <section className="w-full min-h-screen flex flex-col bg-black">

      {/* HERO */}
      <div className="flex-1 flex items-center justify-center md:justify-start px-4 sm:px-6 lg:px-24 py-10">
        <div className="w-full max-w-3xl space-y-5">

          {/* identity line */}
          <p className="text-sm sm:text-base md:text-lg font-medium text-zinc-400 tracking-wide">
            Souptik Sen · 17 · Kolkata, India
          </p>

          {/* headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-snug sm:leading-tight">
            Full-stack engineer building{" "}
            <span className="text-purple-400">
              distributed backend systems
            </span>{" "}
            and{" "}
            <span className="text-purple-400">
              AI-driven products
            </span>
          </h1>

          {/* description */}
          <p className="text-sm sm:text-base lg:text-lg text-zinc-400 max-w-xl sm:max-w-2xl leading-relaxed">
            Works on production-grade Node.js systems with queues, Redis, microservices,
            and real-time architecture. Builds AI pipelines using embeddings, RAG,
            and long-term memory systems.
          </p>

          {/* tags */}
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {[
              "Backend Systems",
              "Microservices",
              "Realtime Architecture",
              "AI Pipelines"
            ].map((tag) => (
              <span
                key={tag}
                className="text-xs sm:text-sm text-zinc-300 bg-zinc-900 border border-zinc-800 px-2.5 sm:px-3 py-1 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-3 sm:pt-4 items-stretch sm:items-center">
            <a
              href="#projects"
              className="w-full sm:w-auto text-center px-5 py-2.5 bg-white text-black rounded-md hover:bg-zinc-200"
            >
              Projects
            </a>

            <a
              href="https://drive.google.com/file/d/1ihBtombsDoplQfhGhn_vEzsBKka0kQXY/view"
              target="_blank"
              className="w-full sm:w-auto text-center px-5 py-2.5 border border-zinc-700 text-zinc-300 rounded-md hover:bg-zinc-900"
            >
              Resume
            </a>

            <button
              onClick={() => setShowTerminal((prev) => !prev)}
              className="w-full sm:w-auto text-center text-sm px-4 py-2 rounded-md border border-zinc-700 text-zinc-400 hover:text-white hover:border-zinc-500 transition"
            >
              {showTerminal ? "Hide Terminal" : "Show Terminal"}
            </button>
          </div>
        </div>
      </div>

      {/* TERMINAL */}
      <motion.div
        initial={false}
        animate={{
          opacity: showTerminal ? 1 : 0,
          y: showTerminal ? 0 : 10,
          maxHeight: showTerminal ? 500 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="w-full overflow-hidden"
      >
        <div className="w-full flex justify-center px-3 sm:px-6 pb-4 sm:pb-6">
          <Terminal setShowTerminal={setShowTerminal} />
        </div>
      </motion.div>

    </section>
  )
}