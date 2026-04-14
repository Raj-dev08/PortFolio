"use client"

import { motion } from "framer-motion"
import { userData } from "@/data/data"
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6"
import { MdEmail } from "react-icons/md"

export const About = () => {
  const getAge = () => {
    const birthDate = new Date(2008, 5, 6); 
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  };
  return (
    <section className="w-full min-h-[70vh] flex items-center justify-center px-6 bg-black text-white">

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="w-full max-w-3xl text-center"
      >

        {/* NAME BLOCK */}
        <div className="mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            {userData.name}
          </h1>

          <p className="mt-3 text-zinc-400 text-sm sm:text-base">
            {getAge()} · Fullstack Developer · India
          </p>

          {/* TAGS */}
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {["Backend", "DevOps", "AI Systems", "Builder"].map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* ABOUT CARDS */}
        <div className="grid gap-3 text-left text-sm sm:text-base text-zinc-400 leading-relaxed">

          <div className="p-4 rounded-xl border border-zinc-900 bg-zinc-950/40">
            I focus on real-world systems: backend architecture, AI flows,
            automation, and scalable fullstack apps
          </div>

          <div className="p-4 rounded-xl border border-zinc-900 bg-zinc-950/40">
            I like building things that feel “alive”  not static projects,
            but systems that react, adapt, and evolve with users and data
          </div>

        </div>

        {/* CONTACT */}
        <div className="mt-10 flex items-center justify-center gap-6">

          <a
            href={userData.github}
            className="p-2 rounded-full  transition hover:scale-110"
          >
            <FaGithub size={20} />
          </a>

          <a
            href={userData.linkedin}
            className="p-2 rounded-full  hover:text-blue-400 transition hover:scale-110"
          >
            <FaLinkedin size={20} />
          </a>

          <a
            href={userData.x}
            className="p-2 rounded-full  transition hover:scale-110"
          >
            <FaXTwitter size={20} />
          </a>

          <a
            href={`mailto:${userData.email}`}
            className="p-2 rounded-full  hover:text-green-400 transition hover:scale-110"
          >
            <MdEmail size={20} />
          </a>

        </div>

      </motion.div>
    </section>
  )
}