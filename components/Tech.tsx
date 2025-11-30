'use client'

import { motion } from 'framer-motion'
import { techStack } from '@/lib/data'

export function Tech() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {techStack.map((tech, i) => (
        <div key={tech.id} className="p-4 bg-surface rounded-lg border border-gray-200 dark:border-gray-800 flex flex-col items-center justify-center text-center hover:border-accent transition-colors cursor-default">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.05 }} transition={{ duration: 0.45, delay: i * 0.03 }} viewport={{ once: true }}>
            <span className="text-3xl mb-2">{tech.icon}</span>
            <span className="text-xs font-medium">{tech.name}</span>
          </motion.div>
        </div>
      ))}
    </div>
  )
}
