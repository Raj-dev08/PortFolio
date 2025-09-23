"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { userData } from "@/data/data"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

export const Projects = () => {
  const { projects } = userData
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return
    const { scrollLeft, clientWidth } = scrollRef.current
    const scrollAmount = clientWidth * 0.8 
    scrollRef.current.scrollTo({
      left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
      behavior: "smooth",
    })
  }

  return (
    <div className="flex flex-col">
      <section id="projects" className="w-full relative text-white pb-16 sm:min-h-[2000px] md:min-h-[1300px] xl:min-h-[1000px]">
        <div className="w-full h-[500px] bg-half-radial-inverted" />

        <div className="w-full max-w-[2000px] mx-auto px-6 absolute top-0 left-1/2 -translate-x-1/2 z-10 sm:pt-10 flex flex-col items-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black font-mono
                       bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400
                       bg-clip-text text-transparent drop-shadow-lg text-center mb-12 mt-8"
          >
            Projects
          </motion.h2>
          <div className="relative w-full">
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-black/50 p-2 rounded-full hover:bg-black/70 transition flex sm:hidden"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6 text-purple-400" />
            </button>

            <div
              ref={scrollRef}
              className="w-full flex flex-row gap-4 overflow-x-scroll no-scrollbar py-4 px-2
                         sm:grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 scroll-smooth"
            >
              {projects.map((project, idx) => (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <Card className="bg-neutral-900/70 border-neutral-800 backdrop-blur-xl 
                                   h-full flex flex-col hover:border-purple-500/40 transition-all min-w-[300px] sm:min-w-[350px] lg:min-w-[400px]">
                    <CardHeader>
                      <CardTitle className="text-lg font-semibold text-purple-400">
                        {project.name}
                      </CardTitle>
                      {project.description && (
                        <CardDescription className="text-zinc-400 text-sm mt-1">
                          {project.description}
                        </CardDescription>
                      )}
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col justify-between space-y-4">
                      {project.features && (
                        <ul className="text-sm text-zinc-300 list-disc pl-4 space-y-1">
                          {project.features.map((f, fIdx) => (
                            <li key={fIdx}>{f}</li>
                          ))}
                        </ul>
                      )}
                      {project.link && (
                       <div className="flex gap-3 w-full mt-4">
                      
                      <Button
                        asChild
                          className="flex-1 text-white font-semibold shadow-lg rounded-lg py-2
                          bg-gradient-to-r from-gray-800 via-black to-gray-800
                          bg-[length:200%_200%] bg-left-top
                          hover:bg-right-bottom
                          transition-all duration-700 ease-in-out"
                      >
                      
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          
                            <FaGithub className="w-4 h-4 mr-2 inline" />
                            View Github
                        </a>
                      </Button>

                    
                    <Button
                    asChild
                    className="relative flex-1 overflow-hidden text-black font-semibold shadow-lg rounded-lg py-2
                              bg-gradient-to-r from-green-400 via-teal-500 to-cyan-500
                              transition-all duration-500 ease-in-out
                              hover:brightness-110
                              before:absolute before:top-0 before:left-0 before:w-full before:h-full
                              before:bg-white before:opacity-0 before:blur-[15px] before:transition-opacity before:duration-500
                              hover:before:opacity-20"
                  >
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 relative z-10">
                      <FaExternalLinkAlt className="w-4 h-4 inline" />
                      Live Link
                    </a>
                  </Button>

                    </div>

                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-black/50 p-2 rounded-full hover:bg-black/70 transition flex sm:hidden"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6 text-purple-400" />
            </button>
          </div>
        </div>
      </section>

      <div style={{ height: 100 }} aria-hidden className="bg-half-radial" />
    </div>
  )
}


