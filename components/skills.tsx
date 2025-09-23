"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { userData } from "@/data/data"
import { ChevronLeft, ChevronRight } from "lucide-react"

export const Skills = () => {
  const { skills } = userData
  const scrollRef = useRef<HTMLDivElement>(null)
  
    const scroll = (direction: "left" | "right") => {
      if (!scrollRef.current) return
      const { scrollLeft, clientWidth } = scrollRef.current
      const scrollAmount = clientWidth * 0.2 
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      })
    }

  return (
    <div>

  
    <section
      id="skills"
      className="w-full relative overflow-hidden text-white pb-10"
    >
      <div className="w-full h-[500px] bg-half-radial-inverted" />


      <div
        className="w-full max-w-7xl mx-auto px-6 absolute top-0 left-1/2 -translate-x-1/2 z-10
                   sm:pt-10 flex flex-col items-center"
        style={{ maxHeight: "500px" }}
      >
   
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-black font-mono
                     bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400
                     bg-clip-text text-transparent drop-shadow-lg text-center mb-6 mt-8"
        >
          Skills & Technologies
        </motion.h2>

       
        <div className="w-full flex-1 flex flex-col">
          <Tabs defaultValue="languages" className="w-full flex-1 flex flex-col">
            
            <TabsList className="flex flex-wrap justify-center gap-3 mb-4 bg-transparent z-20">
              {Object.keys(skills).map((key) => (
                <TabsTrigger
                  key={key}
                  value={key}
                  className="capitalize text-sm sm:text-base 
                             text-white/90 hover:text-zinc-300 
                             border-white/20 hover:border-white
                             focus:text-black data-[state=active]:text-black cursor-pointer transition-colors duration-200"
                >
                  {key.replace("_", " ")}
                </TabsTrigger>
              ))}
            </TabsList>

    
            <div className="w-full flex-1 mt-10">
              {Object.entries(skills).map(([key, values]) => (
                <TabsContent key={key} value={key} className="h-full">
                  <Card className="bg-neutral-900/70 border-neutral-800 backdrop-blur-md h-full flex flex-col mt-10">
                    <CardHeader>
                      <CardTitle className="capitalize text-white/90">
                        {key.replace("_", " ")}
                      </CardTitle>
                    </CardHeader>
                    <div className="relative w-full">
                                <button
                                  onClick={() => scroll("left")}
                                  className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-black/50 p-2 rounded-full hover:bg-black/70 transition flex lg:hidden"
                                  aria-label="Scroll left"
                                >
                                  <ChevronLeft className="w-6 h-6 text-purple-400" />
                                </button>

                    <div className="flex overflow-y-auto no-scrollbar p-4 max-h-[300px]">
                      <CardContent
                      ref={scrollRef}
                       className="flex flex-row justify-between gap-4 overflow-scroll no-scrollbar
                      lg:grid lg:grid-cols-4 xl:grid-cols-5 auto-rows-fr">
                        {values.map((skill, i) => {
                          const Icon = (skill as any).icon
                          return (
                            <motion.div
                              key={skill.name}
                              className="flex min-w-[200px] cursor-pointer justify-center items-center gap-2 bg-neutral-800/40 p-3 rounded-lg hover:bg-neutral-700/60 transition-all"
                              initial={{ opacity: 0, scale: 0.95, y: 12 }}
                              animate={{ opacity: 1, scale: 1, y: 0 }}
                              transition={{
                                delay: i * 0.06,
                                duration: 0.5,
                                ease: "easeOut",
                              }}
                            >
                              {Icon && <Icon className="text-purple-400" />}
                              <span className="text-sm font-medium text-white/90">
                                {skill.name}
                              </span>
                            </motion.div>
                          )
                        })}
                      </CardContent>
                    </div>
                     <button
                          onClick={() => scroll("right")}
                          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-black/50 p-2 rounded-full hover:bg-black/70 transition flex lg:hidden"
                          aria-label="Scroll right"
                        >
                          <ChevronRight className="w-6 h-6 text-purple-400" />
                        </button>
                      </div>
                  </Card>
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </div>
      </div>
    </section>
    <div style={{ height: 100 }} aria-hidden className="bg-half-radial" />
    </div>
  )
}


