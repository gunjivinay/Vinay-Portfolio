'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Code, X } from 'lucide-react'
import Image from 'next/image'

const projects = [
  {
    title: 'MERN Stack Blog Platform',
    image: '/projects/blog-platform.png',
    description:
      'A secure, multi-user content management system features a decoupled architecture with a React frontend and Node/Express backend. Implemented robust security with authentication and authorization middleware, while delivering a premium, engagement-focused UI using Tailwind CSS.',
    technologies: [
      'React',
      'Tailwind CSS',
      'Axios',
      'Node.js',
      'Express',
      'MongoDB Atlas',
    ],
    github: 'https://github.com/gunjivinay/Blog-App',
    live: 'https://vinay-blog-app.netlify.app/',
    achievements: [
      'Secure Auth & Authorization',
      'Decoupled Architecture',
      'Premium UI/UX',
      'Scalable Backend',
    ],
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    title: 'Full-Stack Todo Platform',
    description:
      'Built a production-ready todo management system with Express.js REST APIs, MySQL persistence, and a responsive vanilla JavaScript interface. Configured environment-based endpoints for seamless deployment across cloud targets.',
    technologies: [
      'Express.js',
      'Node.js',
      'MySQL',
      'Bootstrap',
      'JavaScript',
      'REST API',
    ],
    github: 'https://github.com/gunjivinay/Todolist',
    live: 'https://vinay-checklist.netlify.app/',
    achievements: [
      'Streamlined task tracking',
      '<150ms median API latency',
      'Zero-downtime Render/Railway deploys',
      'Prepared statements & env config',
    ],
    gradient: 'from-orange-500 to-red-500',
  },
  {
    title: 'Multi-Tenant Fintech Voucher Platform',
    image: '/projects/fintech-platform.png',
    description: 'Architected scalable multi-tenant SaaS platform serving multiple clients with role-based access control. Processed high-volume transactions with TimescaleDB optimization. Integrated payment gateways handling significant transaction volume.',
    technologies: ['React.js', 'Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'Adyen'],
    github: '',
    live: 'https://nexzap.com/',
    achievements: ['Reduced support tickets by 60%', '99.9% uptime', 'Scalable architecture'],
    gradient: 'from-blue-500 to-purple-600',
  },
  {
    title: 'Weather Application',
    image: '/projects/weather-app.png',
    description: 'Developed responsive weather app using React.js and OpenWeatherMap API. Real-time updates, AQI metrics, 5-day forecasting with high uptime. Optimized API calls reducing load time by 40%.',
    technologies: ['React.js', 'OpenWeatherMap API', 'CSS3', 'JavaScript'],
    github: 'https://github.com/gunjivinay/Weather-App',
    live: 'https://weather-app-beta-vert-70.vercel.app/',
    achievements: ['40% faster load time', 'Real-time updates', 'AQI metrics'],
    gradient: 'from-green-500 to-blue-600',
  },
  {
    title: 'Expense Tracker',
    image: '/projects/expense-tracker.png',
    description: 'Built a comprehensive expense tracking application with income and expense management. Features include transaction categorization, budget tracking, and financial analytics with local storage persistence.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'LocalStorage'],
    github: 'https://github.com/gunjivinay/Expense-Tracker',
    live: 'https://expense-tracker-ebon-zeta.vercel.app/',
    achievements: ['Budget tracking', 'Transaction categorization', 'Local storage'],
    gradient: 'from-purple-500 to-pink-600',
  },
  {
    title: 'E-commerce Shopping Website',
    image: '/projects/ecommerce-app.png',
    description: 'Built a clean and structured e-commerce shopping cart interface with product catalog and dynamic cart functionality. Features responsive design, add to cart functionality, and an intuitive user interface for seamless shopping experience.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/gunjivinay/E-commerce-Shopping-Website',
    live: 'https://e-commerce-shopping-website-dun.vercel.app/',
    achievements: ['Responsive design', 'Dynamic cart', 'Clean UI/UX'],
    gradient: 'from-indigo-500 to-purple-600',
  },
]

function ProjectCard({ project, index, onImageClick }: { project: typeof projects[0]; index: number; onImageClick: (img: string) => void }) {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -10 }}
      className="group relative"
    >
      <div className="glass rounded-2xl p-6 sm:p-8 h-full flex flex-col hover:shadow-2xl transition-all duration-300">
        {/* Gradient Accent */}
        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient} rounded-t-2xl`} />

        <div className="space-y-4 flex-1">
          <div className="flex justify-between items-start gap-4">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-primary-500 transition-colors">
              {project.title}
            </h3>
            {project.image && (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.stopPropagation()
                  project.image && onImageClick(project.image)
                }}
                className="relative w-24 h-16 sm:w-28 sm:h-20 flex-shrink-0 rounded-lg overflow-hidden cursor-pointer border-2 border-gray-100 dark:border-gray-800 hover:border-primary-500 dark:hover:border-primary-500 transition-colors"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </motion.div>
            )}
          </div>

          <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
            {project.description}
          </p>

          {/* Achievements */}
          <div className="flex flex-wrap gap-2">
            {project.achievements.map((achievement, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs font-semibold bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full"
              >
                {achievement}
              </span>
            ))}
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
          <motion.a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
          >
            <ExternalLink size={18} />
            Live Demo
          </motion.a>
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:border-primary-500 hover:text-primary-500 transition-all"
          >
            <Github size={18} />
            Code
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section
      id="projects"
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
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto rounded-full" />
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              onImageClick={setSelectedImage}
            />
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full max-h-[90vh] rounded-2xl overflow-hidden bg-gray-900 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-white hover:text-black transition-colors"
              >
                <X size={24} />
              </button>
              <div className="relative aspect-video w-full">
                <Image
                  src={selectedImage}
                  alt="Project Preview"
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
