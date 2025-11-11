'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

type EducationEntry = {
  institution: string
  degree: string
  period: string
  description: string
  emblem: string
  gradient: string
}

const educationHistory: EducationEntry[] = [
  {
    institution: 'Saint Marys Group of Institutions Hyderabad',
    degree: 'Bachelor of Technology — BTech, Electrical and Electronics Engineering(EEE)',
    period: 'Oct 2020 – Jun 2023',
    description:
      'Earned a Bachelor’s degree in Information Technology with a focus on Data Structures, Algorithms, OOP, Database Management Systems, Operating Systems, and Computer Networks.',
    emblem: 'ST',
    gradient: 'from-purple-500 to-indigo-500',
  },
  {
    institution: 'Government Polytechnic College, Kotagiri',
    degree: 'TSSBTET (Diploma in Electrical and Electronics Engineering)',
    period: 'Jun 2017 – Apr 2020',
    description:
      'Earned a Diploma in Electrical and Electronics Engineering with a focus on Circuit Theory, Digital Electronics, Power Electronics, Control Systems, and Industrial Electronics.',
    emblem: 'GP',
    gradient: 'from-blue-500 to-cyan-500',
  },
]

function EducationCard({ entry, index }: { entry: EducationEntry; index: number }) {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="glass rounded-3xl p-6 sm:p-8 md:p-10 space-y-4 border border-white/10 dark:border-white/5 hover:shadow-2xl transition-all duration-300"
    >
      <div className="flex items-center gap-4 sm:gap-6">
        <div
          className={`flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${entry.gradient} text-white text-lg sm:text-xl font-bold shadow-lg`}
        >
          {entry.emblem}
        </div>
        <div className="space-y-1">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">
            {entry.institution}
          </h3>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
            {entry.degree}
          </p>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-500">
            {entry.period}
          </p>
        </div>
      </div>

      <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
        {entry.description}
      </p>
    </motion.div>
  )
}

export default function Education() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section
      id="education"
      className="section-padding bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-400 to-purple-500 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto rounded-full" />
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4">
            Academic milestones that shaped my technical and analytical problem-solving skills.
          </p>
        </motion.div>

        <div className="space-y-6 sm:space-y-8">
          {educationHistory.map((entry, index) => (
            <EducationCard key={entry.institution} entry={entry} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

