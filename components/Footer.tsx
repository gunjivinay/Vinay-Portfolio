'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react'

const LeetCodeIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s.357.195.824.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.038-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.365-.037-1.9-.535-.535-1.386-.553-1.899-.039l-4.319 4.38c-.467.467-.702 1.15-.702 1.863s.235 1.357.702 1.824l4.332 4.363c.467.467 1.111.662 1.824.662s1.357-.195 1.823-.662l2.697-2.607c.514-.514 1.365-.497 1.9.038.535.535.553 1.387.038 1.901zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z"/>
  </svg>
)

const socialLinks = [
  { icon: <Github size={18} />, href: 'https://github.com/gunjivinay', label: 'GitHub' },
  { icon: <Linkedin size={18} />, href: 'https://www.linkedin.com/in/gunjivinaykumar', label: 'LinkedIn' },
  { icon: <LeetCodeIcon size={18} />, href: 'https://leetcode.com/u/GunjiVinaykumar/', label: 'LeetCode' },
  { icon: <Mail size={18} />, href: 'mailto:gunjivinaykumar2001@gmail.com', label: 'Email' },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-gray-900 dark:bg-black text-white">
      {/* Gradient Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-purple-600 to-pink-500" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <p className="text-sm sm:text-base text-gray-400">
              © {new Date().getFullYear()} Gunji Vinaykumar. All rights reserved.
            </p>
            <p className="text-xs sm:text-sm text-gray-500 mt-1 sm:mt-2">
              Built with Next.js, TypeScript, and Tailwind CSS
            </p>
          </motion.div>

          {/* Social Links & Scroll to Top */}
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex gap-3 sm:gap-4"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2.5 sm:p-3 bg-gray-800 hover:bg-primary-500 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/50 flex items-center justify-center"
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>

            {/* Scroll to Top */}
            <motion.button
              onClick={scrollToTop}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="p-2.5 sm:p-3 bg-primary-500 hover:bg-primary-600 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/50 flex items-center justify-center"
              aria-label="Scroll to top"
            >
              <ArrowUp size={18} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}
