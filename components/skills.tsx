"use client"

import { useMemo, useState } from "react"
import { motion } from "framer-motion"
import { userData, SkillCategory, SkillItem } from "@/data/data"

export const Skills = () => {
  const { skills } = userData
  const [query, setQuery] = useState("")

  const filteredSkills = useMemo(() => {
    const q = query.toLowerCase()

    return Object.fromEntries(
      (Object.keys(skills) as SkillCategory[]).map((category) => [
        category,
        skills[category].filter((skill) =>
          skill.name.toLowerCase().includes(q)
        ),
      ])
    ) as Record<SkillCategory, SkillItem[]>
  }, [query, skills])

  return (
    <section id="skills" className="w-full py-20 text-white">

      {/* HEADER */}
      <div className="max-w-5xl mx-auto px-6 text-center mb-10">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
          Skills & Stack
        </h2>

        <p className="text-zinc-400 mt-3 text-sm">
          Backend-heavy fullstack • DevOps • AI systems
        </p>

        <div className="mt-6 flex justify-center">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search skills (e.g. Redis, Docker, AI...)"
            className="w-full max-w-md px-4 py-2 rounded-xl bg-zinc-900/60 border border-zinc-800 text-sm text-white placeholder-zinc-500 outline-none focus:border-zinc-600 transition"
          />
        </div>
      </div>

      {/* MASONRY */}
      <div className="max-w-6xl mx-auto px-6 columns-1 sm:columns-2 lg:columns-3 gap-6">

        {(Object.keys(filteredSkills) as SkillCategory[]).map((key, index) => {
          const values = filteredSkills[key]
          if (!values.length) return null

          return (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="break-inside-avoid rounded-2xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-md p-5 mb-6 transition"
            >

              {/* CATEGORY */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-zinc-200 capitalize">
                  {key.replace("_", " ")}
                </h3>

                <span className="text-xs text-zinc-500">
                  {values.length}
                </span>
              </div>

              {/* SKILLS */}
              <div className="flex flex-wrap gap-2">
                {values.map((skill) => {
                  const Icon = skill.icon

                  const isMatch =
                    query.trim().length > 0 &&
                    skill.name.toLowerCase().includes(query.toLowerCase())

                  return (
                    <span
                      key={skill.name}
                      className={`flex items-center gap-2 px-2.5 py-1 rounded-full text-xs border transition ${
                        isMatch
                          ? "bg-purple-500/20 border-purple-500 text-white"
                          : "bg-zinc-950/40 border-zinc-800 text-zinc-300 "
                      }`}
                    >
                      {Icon && <Icon className="text-purple-400 text-xs" />}
                      {skill.name}
                    </span>
                  )
                })}
              </div>

            </motion.div>
          )
        })}

      </div>
    </section>
  )
}