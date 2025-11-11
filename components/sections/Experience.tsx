'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const experiences = [
  {
    title: 'Software Engineering Intern',
    company: 'Nexzap',
    period: 'Feb 2025 - Present',
    summary: 'Working as an active engineering intern, focusing on customer-facing features, wallet UI, and backend integrations. Contributing to multi-tenant SaaS platform development.',
    technologies: ['React', 'UI Development', 'Voucher Systems', 'Arcjet Security', 'Performance Optimization', 'Backend Integration', 'Code Review'],
    details: {
      'Enhancements': [
        'Enhanced Data Security with user-scope filtering for Analytics modules, eliminating unauthorized access and improving query performance by 40%',
        'Automated Email Workflow: Designed voucher tracking email templates with dynamic URLs, reducing support queries by 60%',
        'UI/UX Optimization: Redesigned 6+ admin pages using React.js and Tailwind CSS, achieving 30% reduction in design issues',
        'Multi-Tenant Architecture: Built scalable tenant isolation system supporting multiple client domains with role-based access control and concurrent user handling',
        'Payment Integration: Integrated Stripe and Adyen payment gateways with high transaction volume processing and 99.9% uptime',
        'API Development: Built 20+ RESTful APIs with Swagger documentation, implementing JWT authentication and role-based authorization'
      ]
    }
  },
  {
    title: 'Software Consultant',
    company: 'Nexzap',
    period: 'Jun 2024 - Nov 2024',
    summary: 'Contributed to Nexzap\'s early-stage startup setup—laying foundational development systems and kickstarting product development.',
    technologies: ['Startup Engineering', 'React', 'Project Bootstrapping', 'Version Control'],
    details: {
      'Foundation': [
        'Contributed to Nexzap\'s early-stage startup setup—laying foundational development systems and kickstarting product development.',
        'Established development workflows and best practices for the team',
        'Built initial product prototypes and core features'
      ]
    }
  },
]

function ExperienceCard({ experience, index, isHovered, onHover, totalExperiences }: { 
  experience: typeof experiences[0]; 
  index: number; 
  isHovered: boolean;
  onHover: (hovered: boolean) => void;
  totalExperiences: number;
}) {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true })

  return (
    <div ref={ref} className="relative flex gap-4 sm:gap-6 pb-8">
      {/* Timeline Line & Circle */}
      <div className="flex flex-col items-center relative flex-shrink-0">
        {/* Vertical Timeline Line */}
        {index < totalExperiences - 1 && (
          <div className="absolute left-3 sm:left-4 top-10 sm:top-12 bottom-0 w-0.5 sm:w-1 bg-gradient-to-b from-primary-500 to-purple-600" />
        )}
        {/* Circle Marker */}
        <div className="relative z-10 w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-gradient-to-r from-primary-500 to-purple-600 border-2 sm:border-4 border-gray-50 dark:border-gray-900 flex items-center justify-center flex-shrink-0">
          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-white" />
        </div>
      </div>

      {/* Experience Card */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        onMouseEnter={() => onHover(true)}
        onMouseLeave={() => onHover(false)}
        onClick={() => onHover(!isHovered)}
        className={`flex-1 glass rounded-2xl p-4 sm:p-6 md:p-8 transition-all duration-300 cursor-pointer ${
          isHovered ? 'shadow-2xl scale-[1.02] sm:scale-105' : 'shadow-lg hover:shadow-xl'
        }`}
      >
        {/* Company Logo/Icon */}
        <div className="mb-4">
          <div className="relative w-12 h-12 rounded-lg overflow-hidden shadow-lg">
            <Image src="/logo.png" alt={`${experience.company} logo`} fill className="object-cover" sizes="48px" />
          </div>
        </div>

        {/* Title & Company */}
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-1">
          {experience.title}
        </h3>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-2">
          {experience.company}
        </p>
        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-500 mb-4">
          {experience.period}
        </p>

        {/* Summary */}
        <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
          {experience.summary}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {experience.technologies.map((tech, i) => (
            <span
              key={i}
              className="px-2 sm:px-3 py-1 text-xs font-semibold bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Detailed Content (shown on hover/click) */}
        <AnimatePresence mode="wait">
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 space-y-6 overflow-hidden"
            >
            {Object.entries(experience.details).map(([section, points], sectionIndex) => (
              <div key={sectionIndex} className="space-y-3">
                <h4 className="text-base sm:text-lg font-bold text-primary-500 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary-500 flex-shrink-0"></span>
                  {section}
                </h4>
                <ul className="space-y-2 ml-4 sm:ml-6">
                  {points.map((point: string, pointIndex: number) => (
                    <li key={pointIndex} className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed flex items-start gap-2">
                      <span className="text-gray-400 dark:text-gray-600 mt-1 flex-shrink-0">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

export default function Experience() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section
      id="experience"
      className="section-padding bg-white dark:bg-gray-900"
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
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto rounded-full" />
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
            My professional journey and key contributions
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-0">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              experience={experience}
              index={index}
              isHovered={hoveredIndex === index}
              onHover={(hovered) => setHoveredIndex(hovered ? index : null)}
              totalExperiences={experiences.length}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
