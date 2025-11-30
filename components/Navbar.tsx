'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ThemeToggle } from './ThemeToggle'
import { motion } from 'framer-motion'

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#tech', label: 'Tech' },
    { href: '#contact', label: 'Contact' }
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-bg/80 dark:bg-bg/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors">
      <nav className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          Bharath S
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-gray-700 dark:text-gray-300 hover:text-accent transition-colors">
              {link.label}
            </a>
          ))}
        </div>

        {/* Theme Toggle */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-surface rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-surface dark:bg-surface border-b border-gray-200 dark:border-gray-800"
        >
          <div className="px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-sm text-gray-700 dark:text-gray-300 hover:text-accent transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  )
}

