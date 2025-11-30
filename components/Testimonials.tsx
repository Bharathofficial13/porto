'use client'

import { motion } from 'framer-motion'
import { testimonials } from '@/lib/data'

export function Testimonials() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {testimonials.map((testimonial, i) => (
        <motion.div key={testimonial.id} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: i * 0.1 }} viewport={{ once: true }} className="p-6 bg-surface rounded-xl border border-gray-200 dark:border-gray-800">
          <div className="text-4xl text-accent mb-3">"</div>
          <p className="text-sm leading-relaxed italic text-muted">{testimonial.quote}</p>
          <p className="mt-4 text-sm font-semibold">{testimonial.nameOrInitials}</p>
        </motion.div>
      ))}
    </div>
  )
}
