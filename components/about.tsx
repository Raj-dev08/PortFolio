"use client"

import { motion } from "framer-motion"
import { userData } from "@/data/data"
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6"
import { MdEmail } from "react-icons/md"

export const About = () => {
  return (
    <section className="w-full min-h-[60vh] flex items-center justify-center px-6 bg-black text-white">

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
        className="w-full max-w-2xl text-center"
      >

        {/* NAME + BASIC INFO */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            {userData.name}
          </h1>

          <p className="mt-2 text-zinc-400 text-sm sm:text-base">
            17 years old · Builder · India
          </p>
        </div>

        {/* ABOUT TEXT */}
        <div className="text-sm sm:text-base text-zinc-400 space-y-3 leading-relaxed">
          <p>
            Hi I am Souptik but you can call me Raj , I’m a fullstack developer with devops and ai knowledge
          </p>
          
          <p>
            I’ve been building things since 2024 starting out of curiosity, and
            slowly turning it into a habit of creating and improving systems.
          </p>

          <p>
            I enjoy working on ideas that feel alive not just code, but things
            that actually do something useful or interesting.
          </p>

          <p>
            Outside of tech, I’m into sports and science  anything that involves
            patterns, competition, or understanding how things work.
          </p>
        </div>

        

        {/* CONTACT */}
        <div className="mt-8 flex items-center justify-center gap-6">
          <a href={userData.github} className="text-zinc-500 hover:text-white">
            <FaGithub size={20} />
          </a>

          <a href={userData.linkedin} className="text-zinc-500 hover:text-blue-500">
            <FaLinkedin size={20} />
          </a>

          <a href={userData.x} className="text-zinc-500 hover:text-white">
            <FaXTwitter size={20} />
          </a>

          <a href={userData.email} className="text-zinc-500 hover:text-green-500">
            <MdEmail size={20} />
          </a>
        </div>

      </motion.div>
    </section>
  )
}