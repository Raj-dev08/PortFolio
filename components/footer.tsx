"use client"

import { motion } from "framer-motion"
import { FaEnvelope } from "react-icons/fa"
import { userData } from "@/data/data"

export const Footer = () => {
  const email = userData.email

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="text-center py-10 text-sm text-gray-500 bg-base-100 mt-20 sm:mt-10 flex flex-col sm:flex-row justify-center items-center gap-2"
    >
        <h3 className="text-gray-400 mr-4">
      
        <a
            href={`mailto:${email}`}
            className="flex items-center justify-center gap-2 text-gray-400 hover:text-purple-400 transition-colors"
        >
            <FaEnvelope className="w-4 h-4" />
            {email}
        </a>
        </h3>

        <h3 className="text-gray-400">Made by Raj | © {new Date().getFullYear()}</h3>
    </motion.footer>
  )
}
