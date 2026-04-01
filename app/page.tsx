"use client"

import { Background } from "@/components/background"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { About } from "@/components/about"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { FaRobot } from "react-icons/fa"
import ChatPage from "@/components/ChatWidget"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { useState } from "react"
import { X } from "lucide-react"

export default function Home() {
  const [open, setOpen] = useState(false)
  return (
    <div className="relative flex flex-col min-h-screen bg-black text-white no-scrollbar">

      {/* NAVBAR */}
      <Navbar />
      
      {/* MAIN CONTENT */}
      <main className="flex flex-col no-scrollbar">
        <section id="background" className="pt-10 px-1 md:px-6 max-w-7xl mx-auto w-full">
          <Background />
        </section>

        <section id="skills" className="px-1 md:px-6 max-w-7xl mx-auto w-full">
          <Skills />
        </section>

        <section id="projects" className="px-1 md:px-6 max-w-7xl mx-auto w-full">
          <Projects />
        </section>

        <section id="about" className="px-1 md:px-6 max-w-5xl mx-auto w-full">
          <About />
        </section>

        <section id="footer" className="px-1 md:px-6 max-w-5xl mx-auto w-full">
          <Footer />
        </section>
        
      </main>

      {/* FOOTER */}
      <ChatPage setOpen={setOpen} open={open}/> 
      {/* FLOATING AI BUTTON */}
      <div className="fixed bottom-6 right-6 z-20">
        
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={() => setOpen((prev) => !prev)}
              className="p-3 rounded-full bg-purple-500 text-white shadow-lg hover:bg-purple-600 transition cursor-pointer pointer-events-auto"
            >
              { open ? <X className="text-lg text-white" /> : <FaRobot className="text-lg text-white" />  }
            </button>
          </TooltipTrigger>

          { !open && (
            <TooltipContent className="bg-zinc-900 border border-zinc-700 text-zinc-300">
              <p className="text-sm">Chat with AI Assistant</p>
            </TooltipContent>
          )}
        </Tooltip>
      </div>

    </div>
  )
}