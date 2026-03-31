"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const navItems = [
  { label: "Home", href: "#background" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
]

export const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-4 right-4 z-50">
      <div className="hidden sm:block lg:px-10  sm:p-2 rounded-lg bg-black backdrop-blur-md 2xl:mr-52">
        <ul className="flex space-x-4">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-gray-300 hover:text-purple-400 transition py-3 px-2 hover:bg-accent-foreground rounded-2xl font-mono font-bold"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

     <div className="sm:hidden relative">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 rounded-lg bg-black/60 backdrop-blur-md border border-white/10
         text-white hover:bg-black/80 transition cursor-pointer"
        aria-label="Toggle Menu"
      >
        {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>


      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-40 bg-black/80 backdrop-blur-lg border border-white/10 rounded-xl shadow-lg p-3 space-y-2"
          >
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)} // close menu on click
                  className="block px-3 py-2 text-gray-300 rounded-md hover:bg-white/10 hover:text-purple-400 transition"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
      </div>
    </nav>
  )
}
