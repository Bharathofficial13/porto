'use client'

import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/motion'
import Image from 'next/image'
import profileImage from './profile.png'

export function About() {
  const skills = [
    'SaaS & CRM Development',
    'Next.js / Node.js / Python',
    'Real-Time Systems & WebSocket',
    'Microservices Architecture',
    'Database Design & Optimization',
    'Scalable Backend Systems'
  ]

  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} viewport={{ once: true }}>
          <div className="flex items-center justify-center">
            <div className="relative w-72 h-72 rounded-2xl overflow-hidden bg-surface shadow-lg">
                <Image
                  src={profileImage}
                  alt="Bharath S"
                  className="w-full h-full object-cover"
                />
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          <p className="mt-4 text-lg text-muted leading-relaxed">
            I'm Bharath, a full-stack developer with 5+ years building high-performance applications. I specialize in designing systems that scale, writing code that lasts, and shipping products that users love.
          </p>
          <p className="mt-4 text-lg text-muted leading-relaxed">
            My focus is on SaaS platforms, CRM systems, real-time collaboration tools, and automation—turning complex problems into elegant, maintainable solutions.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {skills.map((skill, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: i * 0.05 }} viewport={{ once: true }}>
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span className="text-sm">{skill}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
