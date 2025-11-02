'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Award, Briefcase, GraduationCap } from 'lucide-react'

const achievements = [
  { icon: <Briefcase />, text: 'Reduced support queries by 60%' },
  { icon: <Award />, text: 'Improved query performance by 40%' },
  { icon: <Award />, text: '30% reduction in design issues' },
  { icon: <GraduationCap />, text: '99.9% uptime for payment processing' },
]

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section
      id="about"
      className="section-padding bg-gray-50 dark:bg-gray-800/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-500 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Professional Background */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mb-8"
          >
            <div className="glass rounded-2xl p-6 sm:p-8 space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                Professional Background
              </h3>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm a <span className="font-semibold text-primary-500">Results-driven Full Stack Developer</span> with proven experience in fintech applications and multi-tenant SaaS platforms. Currently working as a Software Development Engineer Intern at Nexzap, where I've delivered measurable business impact including significant reduction in support queries and performance improvements.
              </p>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                Passionate about building scalable, secure solutions that drive user engagement and business growth. I specialize in modern web technologies and have a strong foundation in both frontend and backend development.
              </p>
            </div>
          </motion.div>

          {/* Key Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
            >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass rounded-xl p-3 sm:p-4 text-center"
              >
                <div className="text-primary-500 mb-2 flex justify-center">
                  <div className="w-5 h-5 sm:w-6 sm:h-6">{achievement.icon}</div>
                </div>
                <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-medium leading-tight">
                  {achievement.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
