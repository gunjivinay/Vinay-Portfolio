'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Download, Mail, ArrowDown } from 'lucide-react'
import Image from 'next/image'
import ParticlesBackground from '@/components/ParticlesBackground'

// Typewriter Effect Component with Loop and Colors
interface TextConfig {
  text: string
  color: string // Tailwind gradient classes
}

function Typewriter({ texts, speed = 100, delay = 2000 }: { texts: TextConfig[]; speed?: number; delay?: number }) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const currentTextConfig = texts[currentTextIndex]
    const currentText = currentTextConfig.text
    
    if (!isDeleting && currentIndex < currentText.length) {
      // Typing
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + currentText[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, speed)
      return () => clearTimeout(timeout)
    } else if (!isDeleting && currentIndex === currentText.length) {
      // Finished typing, wait then start deleting
      const timeout = setTimeout(() => {
        setIsDeleting(true)
      }, delay)
      return () => clearTimeout(timeout)
    } else if (isDeleting && currentIndex > 0) {
      // Deleting
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev.slice(0, -1))
        setCurrentIndex(prev => prev - 1)
      }, speed / 2) // Delete faster than typing
      return () => clearTimeout(timeout)
    } else if (isDeleting && currentIndex === 0) {
      // Finished deleting, move to next text
      setIsDeleting(false)
      setCurrentTextIndex(prev => (prev + 1) % texts.length)
    }
  }, [currentIndex, currentTextIndex, isDeleting, texts, speed, delay])

  const currentTextConfig = texts[currentTextIndex]

  return (
    <span className={`bg-gradient-to-r ${currentTextConfig.color} bg-clip-text text-transparent`}>
      {displayText}<span className="animate-pulse text-gray-700 dark:text-gray-300">|</span>
    </span>
  )
}

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToAbout = () => {
    const element = document.querySelector('#about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 animated-gradient opacity-20 dark:opacity-10" />
      
      {/* Particles Background */}
      {mounted && <ParticlesBackground />}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[500px] md:min-h-[600px]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center lg:text-left space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="space-y-4"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Hi, I&apos;m
                </span>
                <br />
                <span className="text-gray-900 dark:text-white">
                  Gunji Vinaykumar
                </span>
              </h1>
              
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold min-h-[2.5rem] sm:h-12 flex items-center justify-center lg:justify-start">
                <Typewriter 
                  texts={[
                    { text: 'Full Stack Developer', color: 'from-primary-500 via-purple-500 to-pink-500' },
                    { text: 'Web Developer', color: 'from-blue-500 via-cyan-500 to-teal-500' },
                    { text: 'Software Engineer', color: 'from-green-500 via-emerald-500 to-teal-500' }
                  ]} 
                  speed={100} 
                  delay={2000}
                />
              </div>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0">
                Results-driven Full Stack Developer with proven experience in fintech 
                applications and multi-tenant SaaS platforms. Passionate about building 
                scalable, secure solutions that drive user engagement and business growth.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="https://drive.google.com/file/d/1QCZYPWrpYaYdTItlDQQ_5gRbkfV9x0Te/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary-500 to-purple-600 text-white rounded-full font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Download size={18} className="sm:w-5 sm:h-5" />
                <span>Download Resume</span>
              </motion.a>
              
              <motion.button
                onClick={scrollToContact}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-6 sm:px-8 py-3 sm:py-4 border-2 border-primary-500 text-primary-500 dark:text-primary-400 rounded-full font-semibold text-sm sm:text-base hover:bg-primary-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Mail size={18} className="sm:w-5 sm:h-5 group-hover:text-white transition-colors" />
                <span className="group-hover:text-white transition-colors">Contact Me</span>
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="flex gap-6 justify-center lg:justify-start pt-4"
            >
              <motion.a
                href="https://github.com/gunjivinay"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                className="text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </motion.a>
              
              <motion.a
                href="https://www.linkedin.com/in/gunjivinaykumar"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                className="text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </motion.a>
              
              <motion.a
                href="https://leetcode.com/u/GunjiVinaykumar/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                className="text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s.357.195.824.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.038-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.365-.037-1.9-.535-.535-1.386-.553-1.899-.039l-4.319 4.38c-.467.467-.702 1.15-.702 1.863s.235 1.357.702 1.824l4.332 4.363c.467.467 1.111.662 1.824.662s1.357-.195 1.823-.662l2.697-2.607c.514-.514 1.365-.497 1.9.038.535.535.553 1.387.038 1.901zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z"/>
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Profile Image with Rotation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex justify-center lg:justify-end items-center w-full lg:w-auto"
          >
            <div className="relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] flex-shrink-0 mx-auto lg:mx-0">
              {/* Floating Glow Effect */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-400 to-purple-500 blur-3xl"
                style={{ zIndex: 1 }}
              />
              
              {/* Static Border */}
              <div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 via-purple-500 via-pink-500 to-primary-500 p-1.5 md:p-2"
                style={{ zIndex: 2 }}
              >
                <div className="w-full h-full rounded-full bg-white dark:bg-gray-900" />
              </div>
              
              {/* Static Image Container */}
              <div
                className="absolute inset-2 md:inset-3 rounded-full overflow-hidden shadow-2xl"
                style={{ zIndex: 3 }}
              >
                <div className="relative w-full h-full rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700">
                  <Image
                    src="/profile.jpg"
                    alt="Gunji Vinaykumar - Full Stack Developer"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-full"
                    priority
                    sizes="(max-width: 768px) 300px, (max-width: 1024px) 400px, 500px"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, repeat: Infinity, repeatType: 'reverse', duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
        >
          <motion.button
            onClick={scrollToAbout}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors"
          >
            <ArrowDown size={32} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
