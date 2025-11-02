'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react'

const socialLinks = [
  { icon: <Github size={18} />, href: 'https://github.com/gunjivinay', label: 'GitHub' },
  { icon: <Linkedin size={18} />, href: 'https://www.linkedin.com/in/gunjivinaykumar', label: 'LinkedIn' },
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
