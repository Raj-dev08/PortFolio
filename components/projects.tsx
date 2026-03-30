"use client"

import { useMemo, useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { userData } from "@/data/data"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

const INITIAL_COUNT = 4
const LOAD_STEP = 4

const getTypeStyles = (type?: string) => {
  switch (type) {
    case "ai":
      return "bg-purple-500/10 text-purple-300 border-purple-500/20"
    case "microservices":
      return "bg-blue-500/10 text-blue-300 border-blue-500/20"
    default:
      return "bg-emerald-500/10 text-emerald-300 border-emerald-500/20"
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
  const [search, setSearch] = useState("")
  const [typeFilter, setTypeFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT)

  const projects = useMemo(() => {
    return [...userData.projects].sort((a, b) => a.index - b.index)
  }, [])

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const q = search.toLowerCase()

      const matchesSearch =
        p.name.toLowerCase().includes(q) ||
        p.description?.toLowerCase().includes(q)

      const matchesType = typeFilter === "all" || p.type === typeFilter
      const matchesStatus = statusFilter === "all" || p.status === statusFilter

      return matchesSearch && matchesType && matchesStatus
    })
  }, [projects, search, typeFilter, statusFilter])

  const visibleProjects = filtered.slice(0, visibleCount)

  return (
    <section className="w-full px-6 py-20 max-w-6xl mx-auto">

      {/* HEADER */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white">Projects</h2>
        <p className="text-zinc-400 text-sm mt-1">
          Production systems, AI products, and backend-heavy architectures
        </p>

        {/* SEARCH */}
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search systems, AI, backend, Kafka, Redis..."
          className="mt-5 w-full px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-white outline-none focus:border-zinc-600"
        />

        {/* FILTER BAR (ATS STYLE) */}
        <div className="mt-4 flex flex-wrap gap-2">
          {["all", "ai", "fullstack", "microservices","mobile"].map((t) => (
            <button
              key={t}
              onClick={() => setTypeFilter(t)}
              className={`px-3 py-1 text-xs rounded-md border transition ${
                typeFilter === t
                  ? "bg-white text-black"
                  : "border-zinc-700 text-zinc-400 hover:border-zinc-500"
              }`}
            >
              {t.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="mt-2 flex flex-wrap gap-2">
          {["all", "active", "completed", "demo ready"].map((s) => (
            <button
              key={s}
              onClick={() => setStatusFilter(s)}
              className={`px-3 py-1 text-xs rounded-md border transition ${
                statusFilter === s
                  ? "bg-white text-black"
                  : "border-zinc-700 text-zinc-400 hover:border-zinc-500"
              }`}
            >
              {s.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* MASONRY GRID */}
      <div className="columns-1 md:columns-2 gap-5 space-y-5">

        {visibleProjects.map((project, idx) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: idx * 0.03 }}
            className="break-inside-avoid"
          >
            <Card className="bg-zinc-950 border border-zinc-800 hover:border-zinc-700 transition">

              <CardHeader className="pb-2">
                <div className="flex justify-between">
                  <CardTitle className="text-white text-base">
                    {project.name}
                  </CardTitle>
                  <span className="text-xs text-zinc-500">
                    #{project.index}
                  </span>
                </div>

                <div className="flex gap-2 mt-2 flex-wrap">
                  {project.type && (
                    <Badge className={getTypeStyles(project.type)}>
                      {project.type}
                    </Badge>
                  )}
                  {project.status && (
                    <Badge className={getStatusStyles(project.status)}>
                      {project.status}
                    </Badge>
                  )}
                </div>
              </CardHeader>

              <CardContent className="pt-1">

                {/* DESCRIPTION (ATS FRIENDLY IMPACT LINE) */}
                <p className="text-sm text-zinc-300 leading-snug">
                  {project.description}
                </p>

                {/* FEATURES (SCANABLE) */}
                <div className="mt-3 space-y-1 text-xs text-zinc-400">
                  {project.features?.map((f, i) => (
                    <div key={i} className="flex gap-2">
                      <span className="w-1 h-1 mt-2 rounded-full bg-zinc-500" />
                      {f}
                    </div>
                  ))}
                </div>

                {/* ACTIONS */}
                <div className="flex gap-2 mt-4">
                  {project.link && (
                    <Button
                      asChild
                      variant="outline"
                      className="flex-1 bg-white text-black hover:bg-zinc-200"
                    >
                      <a href={project.link} target="_blank">
                        <FaGithub className="mr-2" />
                        Code
                      </a>
                    </Button>
                  )}

                  {project.liveLink && (
                    <Button asChild className="flex-1 bg-white text-black hover:bg-zinc-200">
                      <a href={project.liveLink} target="_blank">
                        <FaExternalLinkAlt className="mr-2" />
                        Live
                      </a>
                    </Button>
                  )}
                </div>

              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* LOAD MORE / SHOW LESS */}
      <div className="flex justify-center mt-10 gap-3">
        {visibleCount < filtered.length && (
          <Button
            onClick={() => setVisibleCount((p) => p + LOAD_STEP)}
            className="bg-zinc-900 border border-zinc-800 text-white hover:bg-zinc-800"
          >
            Load More
          </Button>
        )}

        {visibleCount > INITIAL_COUNT && (
          <Button
            onClick={() => setVisibleCount(INITIAL_COUNT)}
            className="bg-zinc-900 border border-zinc-800 text-white hover:bg-zinc-800"
          >
            Show Less
          </Button>
        )}
      </div>

      {/* EMPTY */}
      {filtered.length === 0 && (
        <div className="text-center text-zinc-500 mt-16">
          No matching systems found
        </div>
      )}
    </section>
  )
}