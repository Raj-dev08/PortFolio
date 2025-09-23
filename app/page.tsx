"use client"

import { Background } from "@/components/background"
import { Skills } from "@/components/skills"
import { motion } from "framer-motion"
import { useState } from "react"
import { Projects } from "@/components/projects"
import { About } from "@/components/about"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { FaRobot } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
    const colorScheme = [
      "from-purple-500/30 via-pink-500/30 to-indigo-500/30",
  ]

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setMousePos({ x: e.pageX, y: e.pageY })
  }



  return (
    <div
      className="relative flex flex-col min-h-screen bg-black overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <Navbar />

      <motion.div
        className={`absolute w-72 h-72 rounded-full pointer-events-none
                   bg-gradient-to-r ${colorScheme[Math.floor(mousePos.x/100) % colorScheme.length]}
                   blur-3xl z-10`}
        animate={{
          x: mousePos.x - 144,
          y: mousePos.y - 144,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 30,
        }}
      />

      <section id="background"><Background /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><Projects /></section>
      <section id="about"><About /></section>
      <section id="footer"><Footer /></section>

      <div className="fixed bottom-4 right-4 lg:right-20 z-20">
        <Tooltip>
          <TooltipTrigger asChild>
            <a
              href="/chat"
              className="flex items-center justify-center w-16 h-16 bg-gradient-to-r
              from-black via-gray-800 to-gray-500  bg-[length:200%_200%] 
              bg-left-top hover:bg-right-bottom
              rounded-full shadow-lg hover:shadow-xl transition-all duration-700 ease-in-out
              border border-purple-400
              hover:scale-105"
              title="Chat with AI Assistant"
            >
              <FaRobot className="text-white text-2xl" />
            </a>
            </TooltipTrigger>
            <TooltipContent className="mr-10 bg-black/80 backdrop-blur-lg">
              <p className="p-2 text-md font-bold font-mono">Chat with my AI Assistant</p>
          </TooltipContent>
        </Tooltip>

      </div>

    </div>
  )
}
