"use client"

import { motion } from "framer-motion"
import { userData } from "@/data/data"
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6"
import { MdEmail } from "react-icons/md";

export const About = () => {
  return (
    <div className="flex flex-col max-h-screen w-full bg-black ">

      <div className="w-full h-[500px] bg-half-radial-inverted" />
      <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full max-w-3xl mx-auto px-6 z-10 py-16 flex flex-col items-center text-center absolute left-1/2 -translate-x-1/2"
      >

      
      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-4xl sm:text-5xl lg:text-6xl font-black font-mono
                   bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
                   bg-clip-text text-transparent drop-shadow-lg mb-4"
      >
        {userData.name}
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-300 font-mono mb-8"
      >
        {userData.title}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="text-gray-400 max-w-3xl leading-relaxed text-sm sm:text-base font-mono mb-12"
      >
        I’m an 17-year-old developer passionate about{" "}
        <span className="text-purple-400">building scalable full-stack apps</span>,{" "}
        exploring <span className="text-pink-400">DevOps practices</span>, and diving into{" "}
        <span className="text-indigo-400">AI/ML projects</span>.  
        Over the past year, I’ve built production-ready platforms including{" "}
        <span className="text-gray-200">social media apps, e-commerce platforms, 
        project collaboration tools with real-time chat & video</span>, and more.  
        I love experimenting with modern technologies and constantly push myself to 
        learn faster by shipping real-world projects.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="flex gap-6 mb-16"
      >
        <a
          href={userData.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors duration-300"
        >
          <FaGithub size={28} />
        </a>
        <a
          href={userData.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
        >
          <FaLinkedin size={28} />
        </a>
        <a
          href={userData.x}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-gray-200 transition-colors duration-300"
        >
          <FaXTwitter size={28} />
        </a>
        <a
          href={userData.email}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
        >
          <MdEmail  size={28} />
        </a>
      </motion.div>
      </motion.div>
    </div>
  )
}
