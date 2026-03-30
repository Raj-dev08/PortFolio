"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { userData } from "@/data/data"

type HistoryItem = {
  type: "input" | "output"
  text: string
}

const allSkills = {
          Frontend: "React, Next.js, TailwindCSS ...",
          Languages: "JavaScript, TypeScript, Python, Go ...",
          Mobile: "React Native (Expo)", 
          Backend: "Node.js, Express, MongoDB, Redis, Sockets, Kafka, BullMq ...",
          DevOps: "Docker, Kubernetes, CI/CD, Monitoring, AWS, Terraform, NGINX ...",
          AI: "RAG, Embeddings, Vector DB, Tool calling ...",
}

export const Terminal = ({setShowTerminal} : {setShowTerminal: (value: boolean) => void}) => {
  const [history, setHistory] = useState<HistoryItem[]>([
    { type: "output", text: "Type 'help' to see available commands." },
  ])
  const [input, setInput] = useState("")
  const [minimized, setMinimized] = useState(false)

  const containerRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    containerRef.current?.scrollTo({
      top: containerRef.current.scrollHeight,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    scrollToBottom()
  }, [history])

  const runCommand = (cmd: string) => {
    const args = cmd.trim().split(" ")
    const base = args[0].toLowerCase()

    let output: string[] = []

    switch (base) {
      case "help":
        output = [
          "Available commands:",
          "help", "projects", "project <name>",
          "skills", "skill <name>",  "contact", "clear",
          "ls", "pwd", "whoami", "open <project name>",
          "cat"
        ]
        break

      case "projects":
        output = userData.projects.map(
          (p) => `• ${p.name} (#${p.index})`
        )
        break

      case "project":
        const name = args.slice(1).join(" ").toLowerCase()
        const project = userData.projects.find((p) =>
          p.name.toLowerCase().includes(name)
        )

        if (!project) {
          output = ["Project not found."]
        } else {
          output = [
            `Name: ${project.name}`,
            `Type: ${project.type}`,
            `Description: ${project.description}`,
            ...(project.features?.slice(0, 4).map((f) => `→ ${f}`) || []),
            project.link ? `GitHub: ${project.link}` : "",
          ]
        }
        break

      case "skills":
        output = allSkills ? Object.entries(allSkills).map(([key, value]) => `${key} : ${value}`) : []
        break
    
      case "skill":
        const skill = allSkills[args[1] as keyof typeof allSkills]

        if(!skill){
            output = ["Skill not found. Type 'skills' to see all skills."]
        }else{
            output = [skill]
        }
        break

      case "contact":
        output = [
          `GitHub: ${userData.github}`,
          `LinkedIn: ${userData.linkedin}`,
          `Email: ${userData.email.replace("mailto:","")}`,
        ]
        break

      case "clear":
        setHistory([])
        return
    
      case "ls":
        output = ["projects", "skills", "contact"]
        break

      case "pwd":
        output = ["/home/raj"]
        break

      case "whoami":
        output = ["raj"]
        break

      case "cat":
        window.open(userData.email, "_blank")
        break

      case "open":
        const projectName = args.slice(1).join(" ").toLowerCase()
        const projectToOpenLink = userData.projects.find((p) =>
          p.name.toLowerCase().includes(projectName)
        )
        if (projectToOpenLink?.liveLink) {
          window.open(projectToOpenLink.liveLink, "_blank")
        } else if (projectToOpenLink?.link) {
          window.open(projectToOpenLink.link, "_blank")
        } else {
          output = ["Project not found."]
        }
        break

      default:
        output = ["Command not found. Type 'help'."]
    }

    setHistory((prev: HistoryItem[]) => [
      ...prev,
      { type: "input", text: `$ ${cmd}` },
      ...output.map((o) => ({ type: "output" as const, text: o })),
    ])
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return
    runCommand(input)
    setInput("")
  }

  return (
    <motion.div
      animate={{
        height: minimized ? "40px" : "260px",
      }}
      transition={{ duration: 0.25 }}
      className="w-full  mt-10 max-w-4xl rounded-xl border border-zinc-800 bg-black shadow-xl overflow-hidden"
    >

      {/* HEADER */}
      <div className="flex items-center justify-between px-4 py-2 bg-zinc-900 border-b border-zinc-800">
        
        <div className="flex items-center gap-2">
          {/* Close */}
          <button
            onClick={() => setShowTerminal(false)}
            className="w-3 h-3 rounded-full bg-red-500"
          />

          {/* MINIMIZE */}
          <button
            onClick={() => setMinimized(true)}
            className="w-3 h-3 rounded-full bg-yellow-500"
            title="Minimize"
          />

          {/* RESTORE */}
          <button
            onClick={() => setMinimized(false)}
            className="w-3 h-3 rounded-full bg-green-500"
            title="Expand"
          />
        </div>

        <span className="text-xs text-zinc-500 font-mono">
          raj@portfolio:~
        </span>
      </div>

      {/* BODY */}
      {!minimized && (
        <div
          ref={containerRef}
          className="p-4 text-sm font-mono no-scrollbar text-zinc-300 space-y-1 overflow-y-auto h-[220px]"
        >
          {history.map((line, i) => (
            <div
              key={i}
              className={
                line.type === "input"
                  ? "text-green-400"
                  : "text-zinc-300"
              }
            >
              {line.text}
            </div>
          ))}

          {/* INPUT */}
          <form onSubmit={handleSubmit} className="flex mt-2">
            <span className="text-green-400 mr-1">$</span>

            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="bg-transparent outline-none flex-1 text-white"
              autoFocus
            />

          </form>
        </div>
      )}
    </motion.div>
  )
}