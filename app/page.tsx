"use client"

import { Background } from "@/components/background"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { About } from "@/components/about"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { FaRobot } from "react-icons/fa"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen bg-black text-white no-scrollbar">

      {/* NAVBAR */}
      <Navbar />

      {/* MAIN CONTENT */}
      <main className="flex flex-col no-scrollbar">
        <section id="background" className="pt-10 px-6 max-w-7xl mx-auto w-full">
          <Background />
        </section>

        <section id="skills" className="px-6 max-w-7xl mx-auto w-full">
          <Skills />
        </section>

        <section id="projects" className="px-6 max-w-7xl mx-auto w-full">
          <Projects />
        </section>

        <section id="about" className="px-6 max-w-5xl mx-auto w-full">
          <About />
        </section>

        <section id="footer" className="px-6 max-w-5xl mx-auto w-full">
          <Footer />
        </section>

      </main>

      {/* FOOTER */}
      

      {/* FLOATING AI BUTTON */}
      <div className="fixed bottom-6 right-6 z-20">
        <Tooltip>
          <TooltipTrigger asChild>
            <a
              href="/chat"
              className="
                flex items-center justify-center
                w-14 h-14 rounded-full
                bg-zinc-900 border border-zinc-700
                shadow-md hover:shadow-lg
                hover:border-zinc-500
                transition-all duration-300
              "
            >
              <FaRobot className="text-lg text-white" />
            </a>
          </TooltipTrigger>

          <TooltipContent className="bg-zinc-900 border border-zinc-700 text-zinc-300">
            <p className="text-sm">Chat with AI Assistant</p>
          </TooltipContent>
        </Tooltip>
      </div>

    </div>
  )
}