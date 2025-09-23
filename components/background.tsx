"use client"

import { motion } from "framer-motion"

export const Background = () => {
  const words = ["Building", "Scalable", "Websites"]

  return (
    <div
      className="relative flex flex-col justify-center items-start 
                 min-h-[500px] w-full bg-black"
    >
      
      <div className="flex flex-col mt-28 px-8 lg:px-40 gap-3 absolute">
        <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative inline-block text-4xl sm:text-5xl lg:text-6xl font-black font-mono
                       bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
                       bg-clip-text text-transparent drop-shadow-lg cursor-pointer 
                       hover:brightness-105 hover:scale-105 transition-all duration-300 ease-out"
          >
        Hi, I&apos;m Raj
      </motion.h1>
        {words.map((word, i) => (
          <motion.h2
            key={word}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: i * 0.3,
              duration: 0.7,
              ease: "easeOut",
            }}
            className="relative inline-block text-4xl sm:text-5xl lg:text-6xl font-black font-mono
                       bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
                       bg-clip-text text-transparent drop-shadow-lg cursor-pointer 
                       hover:brightness-105 hover:scale-105 transition-all duration-300 ease-out"
          >
            {word}
          </motion.h2>
        ))}

        <div className="mt-6 space-y-1 mb-4">
          {[
            "Crafting seamless experiences,",
            "powered by modern tech,",
            "designed for real impact.",
          ].map((line, i) => (
            <motion.span
              key={line}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: words.length * 0.3 + i * 0.2,
                duration: 0.6,
              }}
              className={`block text-xs sm:text-sm font-bold font-mono cursor-pointer leading-relaxed
                ${
                  i === 0 || i === 1
                    ? "text-gray-400 hover:text-gray-500"
                    : "text-gray-600 hover:text-gray-700 hover:brightness-105"
                } mb`}
            >
              {line}
            </motion.span>
          ))}
        </div>
      </div>

      {/* <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute right-6 top-52 -translate-y-1/2 flex flex-col gap-6 p-6 bg-accent-foreground/30 rounded-full"
      >
        <a
          href={userData.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors duration-300"
        >
          <FaGithub size={22} />
        </a>
        <a
          href={userData.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
        >
          <FaLinkedin size={22} />
        </a>
        <a
          href={userData.x}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-gray-200 transition-colors duration-300"
        >
          <FaXTwitter size={22} />
        </a>
      </motion.div> */}

      <div className="h-[500px] w-full bg-half-radial" />
    </div>
  )
}
