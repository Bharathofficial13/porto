'use client'

import { motion } from 'framer-motion'
import { projects } from '@/lib/data'

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.div key={project.id} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ y: -6, scale: 1.01 }} transition={{ duration: 0.45, delay: i * 0.05 }} viewport={{ once: true }}>
            <div className="h-full p-6 bg-surface rounded-xl border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{project.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
