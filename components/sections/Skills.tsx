'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const skillCategories = {
  'Frontend': [
    { name: 'React.js', icon: '⚛️', color: 'from-blue-500 to-cyan-500' },
    { name: 'Next.js', icon: '▲', color: 'from-gray-900 to-gray-700' },
    { name: 'TypeScript', icon: '📘', color: 'from-blue-600 to-blue-400' },
    { name: 'Tailwind CSS', icon: '🎨', color: 'from-cyan-500 to-blue-500' },
    { name: 'HTML5', icon: '🌐', color: 'from-orange-500 to-red-500' },
    { name: 'CSS3', icon: '💎', color: 'from-blue-500 to-indigo-500' },
    { name: 'JavaScript', icon: '📜', color: 'from-yellow-500 to-orange-500' },
    { name: 'Axios', icon: '📡', color: 'from-blue-600 to-purple-600' },
  ],
  'Backend': [
    { name: 'Node.js', icon: '🟢', color: 'from-green-600 to-green-400' },
    { name: 'Express.js', icon: '🚂', color: 'from-gray-800 to-gray-600' },
    { name: 'MongoDB', icon: '🍃', color: 'from-green-500 to-emerald-600' },
    { name: 'MySQL', icon: '🐬', color: 'from-teal-500 to-blue-500' },
    { name: 'PostgreSQL', icon: '🐘', color: 'from-blue-700 to-blue-500' },
    { name: 'Prisma ORM', icon: '🗄️', color: 'from-indigo-600 to-purple-500' },
    { name: 'Java', icon: '☕', color: 'from-orange-600 to-red-600' },
    { name: 'RESTful APIs', icon: '🔌', color: 'from-green-500 to-teal-500' },
  ],
  'Payment Systems': [
    { name: 'Stripe API', icon: '💳', color: 'from-purple-600 to-indigo-600' },
    { name: 'Adyen', icon: '💰', color: 'from-blue-600 to-cyan-600' },
    { name: 'Webhooks', icon: '🔔', color: 'from-pink-500 to-red-500' },
  ],
  'DevOps & Tools': [
    { name: 'Docker', icon: '🐳', color: 'from-blue-500 to-cyan-400' },
    { name: 'Vercel', icon: '▲', color: 'from-black to-gray-800' },
    { name: 'Netlify', icon: '🌀', color: 'from-emerald-500 to-teal-500' },
    { name: 'Render', icon: '🚀', color: 'from-purple-500 to-indigo-500' },
    { name: 'Railway', icon: '🚉', color: 'from-blue-500 to-slate-500' },
    { name: 'Git/GitHub', icon: '🔀', color: 'from-gray-800 to-gray-600' },
    { name: 'VS Code', icon: '💻', color: 'from-blue-600 to-indigo-600' },
    { name: 'IntelliJ IDEA', icon: '🧠', color: 'from-purple-600 to-blue-600' },
    { name: 'Eclipse', icon: '🌘', color: 'from-gray-700 to-indigo-700' },
  ],
  'Testing & QA': [
    { name: 'Postman', icon: '📬', color: 'from-orange-500 to-amber-500' },
    { name: 'Thunder Client', icon: '⚡', color: 'from-purple-500 to-pink-500' },
  ],
  'Cloud & Monitoring': [
    { name: 'AWS', icon: '☁️', color: 'from-orange-500 to-yellow-500' },
    { name: 'Azure', icon: '☁️', color: 'from-blue-500 to-cyan-500' },
    { name: 'New Relic', icon: '📊', color: 'from-orange-500 to-red-500' },
  ],
}

function SkillBadge({ skill, index }: { skill: { name: string; icon: string; color: string }; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.2, delay: index * 0.02 }}
      whileHover={{ scale: 1.1, y: -5, rotate: 5 }}
      className="group relative"
    >
      <div className="glass rounded-xl p-4 sm:p-6 text-center cursor-pointer hover:shadow-xl transition-all duration-300">
        <div className={`text-3xl sm:text-4xl mb-2 sm:mb-3 bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>
          {skill.icon}
        </div>
        <h4 className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white group-hover:text-primary-500 transition-colors">
          {skill.name}
        </h4>
      </div>

      {/* Hover Glow Effect */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-20 rounded-xl blur-xl -z-10`}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  )
}

export default function Skills() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section
      id="skills"
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
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto rounded-full" />
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
            Technologies and tools I work with to build amazing products
          </p>
        </motion.div>

        <div className="space-y-12">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-3 sm:gap-4">
                {skills.map((skill, index) => (
                  <SkillBadge key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
