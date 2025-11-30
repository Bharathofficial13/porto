"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { fadeUp, staggerList } from '@/lib/motion'
import { HeroBackground } from './HeroBackground'

export function Hero() {
  const stats = [
    { label: '50+ Clients' },
    { label: '50+ Projects' }
  ]

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Animation */}
      <HeroBackground numShapes={12} keywords={['Products', 'CRM', 'Sales', 'Automation', 'SaaS', 'Growth']} />
      
      {/* Hero Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-24 md:py-32 text-center w-full">
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeUp}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            Full-Stack Developer <br /> & SaaS Builder
          </h1>
          
          <p className="mt-6 text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            I design and ship production-ready applications. SaaS platforms, CRM systems, automation tools, and scalable backend architectures for ambitious teams.
          </p>
        </motion.div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.div
            variants={staggerList}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={fadeUp}>
              <Link href="#projects" className="inline-block px-8 py-3 bg-accent text-white rounded-lg font-semibold hover:opacity-90 transition-opacity">
                View Work
              </Link>
            </motion.div>
            <motion.div variants={fadeUp}>
              <Link href="#contact" className="inline-block px-8 py-3 border border-gray-300 dark:border-gray-700 rounded-lg font-semibold hover:bg-surface transition-colors">
                Let's Talk
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-12">
          <motion.div
            variants={staggerList}
            initial="initial"
            animate="animate"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <motion.div variants={fadeUp}>
                  <div className="mt-1 text-sm text-muted">{stat.label}</div>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
