'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const experiences = [
  {
    title: 'Software Engineering',
    company: 'Nexzap',
    period: 'Nov 2025 - Present',
    summary: 'Working as an active engineering intern, focusing on customer-facing features, wallet UI, and backend integrations. Contributing to multi-tenant SaaS platform development.',
    technologies: ['Next.js', 'UI Development', 'PostgreSQL', 'Arcjet Security', 'Performance Optimization', 'New Relic', 'Vercel Deployment', 'User Authentication', 'Code Review'],
    details: {
      'Enhancements': [
        '𝐃𝐚𝐭𝐚𝐛𝐚𝐬𝐞 𝐌𝐢𝐠𝐫𝐚𝐭𝐢𝐨𝐧: Led the critical migration of the application\'s database from NeonDB to a self-hosted PostgreSQL instance using Prisma ORM. This strategic move resolved persistent latency issues and improved overall query performance by 40%.',
        '𝐀𝐧𝐚𝐥𝐲𝐭𝐢𝐜𝐬 𝐌𝐨𝐝𝐮𝐥𝐞: Designed and implemented a robust Analytics system featuring Sales Reports, User Scope filtering, and Site-based metrics. This empowered the management team with real-time, actionable data.',
        '𝐒𝐞𝐜𝐮𝐫𝐢𝐭𝐲 𝐄𝐧𝐡𝐚𝐧𝐜𝐞𝐦𝐞𝐧𝐭𝐬: Strengthened application security by implementing granular Role-Based Access Control (RBAC) and removing unauthorized access points in the User Management module.',
        '𝐁𝐮𝐥𝐤 𝐎𝐩𝐞𝐫𝐚𝐭𝐢𝐨𝐧𝐬: Developed a "Bulk Voucher Activation" feature utilizing database transactions to ensure data integrity while processing thousands of records simultaneously.',
        '𝐃𝐞𝐯𝐎𝐩𝐬 & 𝐌𝐨𝐧𝐢𝐭𝐨𝐫𝐢𝐧𝐠: Integrated New Relic for full-stack observability, allowing for proactive error detection and resolution. Streamlined deployments using Vercel CLI.',
      ]
    }
  },
  {
    title: 'Software Engineering Intern',
    company: 'Nexzap',
    period: 'Nov 2024 - Oct 2025',
    summary: 'Working as an active engineering intern, focusing on customer-facing features, wallet UI, and backend integrations. Contributing to multi-tenant SaaS platform development.',
    technologies: ['React', 'UI Development', 'Prompt Engineering', 'JSON Web Token (JWT)', 'Performance Optimization', 'MongoDB', 'Code Review'],
    details: {
      'Enhancements': [
        '𝐅𝐫𝐨𝐧𝐭𝐞𝐧𝐝 𝐎𝐩𝐭𝐢𝐦𝐢𝐳𝐚𝐭𝐢𝐨𝐧: Significantly improved the Homepage load speed by refactoring heavy image grids into optimized text-based layouts and implementing lazy loading strategies.',
        '𝐅𝐞𝐚𝐭𝐮𝐫𝐞 𝐈𝐦𝐩𝐥𝐞𝐦𝐞𝐧𝐭𝐚𝐭𝐢𝐨𝐧: Developed key user-facing features including "Search & Apply" filters, Order Grouping by timestamp, and dynamic Bar Chart visualizations.',
        '𝐂𝐨𝐝𝐞 𝐑𝐞𝐟𝐚𝐜𝐭𝐨𝐫𝐢𝐧𝐠: Refactored the VoucherQRScanner and getOrganizationUsers functions to leverage Prisma\'s type-safe queries, reducing runtime errors and improving maintainability.',
        '𝐔𝐬𝐞𝐫 𝐄𝐧𝐠𝐚𝐠𝐞𝐦𝐞𝐧𝐭: Integrated Resend.js to automate "Order Delivered" emails, providing customers with real-time tracking URLs and enhancing the post-purchase experience.'
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
        'Built initial product prototypes and core features',
        '𝐔𝐈/𝐔𝐗 𝐏𝐨𝐥𝐢𝐬𝐡: focused on stabilizing the application\'s frontend. Fixed 30+ UI issues including Drawer alignment, Action Popup positioning, and responsive design glitches.',
 '𝐈𝐧𝐭𝐞𝐫𝐚𝐜𝐭𝐢𝐯𝐞 𝐄𝐥𝐞𝐦𝐞𝐧𝐭𝐬: Added micro-interactions and animation effects to buttons and transitions, creating a more engaging user experience.',
 '𝐑𝐚𝐩𝐢𝐝 𝐋𝐞𝐚𝐫𝐧𝐢𝐧𝐠: Quickly adapted to the company\'s folder structure, coding standards, and git workflow, successfully closing 30+ Pull Requests in a short timeframe.'
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
