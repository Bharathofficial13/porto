'use client'

import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

interface Shape {
  id: number
  type: 'circle' | 'blob' | 'square'
  size: number
  x: number
  y: number
  delay: number
  duration: number
  opacity: number
}

interface Keyword {
  id: number
  text: string
  x: number
  y: number
  delay: number
  duration: number
  size: 'sm' | 'md' | 'lg'
}

const KEYWORDS = ['Products', 'CRM', 'Sales', 'Automation', 'SaaS', 'Growth']

const generateShapes = (count: number): Shape[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    type: (['circle', 'blob', 'square'] as const)[Math.floor(Math.random() * 3)],
    size: Math.random() * 200 + 80,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
    duration: Math.random() * 8 + 12,
    opacity: Math.random() * 0.15 + 0.08,
  }))
}

const generateKeywords = (keywords: string[]): Keyword[] => {
  return keywords.map((text, i) => ({
    id: i,
    text,
    x: Math.random() * 85 + 5,
    y: Math.random() * 70 + 15,
    delay: Math.random() * 1.5,
    duration: Math.random() * 10 + 14,
    size: (['sm', 'md', 'lg'] as const)[Math.floor(Math.random() * 3)],
  }))
}

const getShapeClasses = (type: 'circle' | 'blob' | 'square', isDark: boolean) => {
  const baseClasses = 'absolute will-change-transform blur-xl'

  if (type === 'circle') {
    return `${baseClasses} rounded-full ${
      isDark
        ? 'bg-gradient-to-r from-blue-600 to-purple-600'
        : 'bg-gradient-to-r from-blue-200 to-purple-200'
    }`
  }

  if (type === 'blob') {
    return `${baseClasses} rounded-3xl ${
      isDark
        ? 'bg-gradient-to-br from-purple-700 to-pink-600'
        : 'bg-gradient-to-br from-purple-200 to-pink-200'
    }`
  }

  return `${baseClasses} rounded-2xl ${
    isDark
      ? 'bg-gradient-to-r from-cyan-600 to-blue-700'
      : 'bg-gradient-to-r from-cyan-200 to-blue-200'
  }`
}

const getKeywordClasses = (isDark: boolean, size: 'sm' | 'md' | 'lg') => {
  const sizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
  }

  return `absolute font-medium will-change-transform whitespace-nowrap ${sizeClasses[size]} ${
    isDark
      ? 'text-blue-300/40 bg-gradient-to-r from-blue-400/10 to-purple-400/10'
      : 'text-blue-600/30 bg-gradient-to-r from-blue-300/10 to-purple-300/10'
  } px-3 py-1 rounded-full backdrop-blur-sm`
}

export function HeroBackground({
  numShapes = 12,
  keywords = KEYWORDS,
}: {
  numShapes?: number
  keywords?: string[]
}) {
  const { theme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [shapes, setShapes] = useState<Shape[]>([])
  const [keywordElements, setKeywordElements] = useState<Keyword[]>([])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const isDark =
    theme === 'dark' || (theme === 'system' && systemTheme === 'dark')

  useEffect(() => {
    setMounted(true)
    setShapes(generateShapes(numShapes))
    setKeywordElements(generateKeywords(keywords))
  }, [numShapes, keywords])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const centerX = window.innerWidth / 2
      const centerY = window.innerHeight / 2

      setMousePosition({
        x: (clientX - centerX) * 0.02,
        y: (clientY - centerY) * 0.02,
      })
    }

    // Only track mouse on desktop
    if (typeof window !== 'undefined' && window.innerWidth > 768) {
      window.addEventListener('mousemove', handleMouseMove)
      return () => window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  if (!mounted) return null

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Shapes */}
      {shapes.map((shape) => (
        <motion.div
          key={`shape-${shape.id}`}
          className={getShapeClasses(shape.type, isDark)}
          style={{
            width: shape.size,
            height: shape.size,
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            opacity: shape.opacity,
            x: mousePosition.x,
            y: mousePosition.y,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Keywords */}
      {keywordElements.map((keyword) => (
        <motion.div
          key={`keyword-${keyword.id}`}
          className={getKeywordClasses(isDark, keyword.size)}
          style={{
            left: `${keyword.x}%`,
            top: `${keyword.y}%`,
            x: mousePosition.x * 0.5,
            y: mousePosition.y * 0.5,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, Math.random() * 20 - 10, 0],
            rotate: [0, 5, -5, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: keyword.duration,
            delay: keyword.delay,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
          }}
        >
          {keyword.text}
        </motion.div>
      ))}

      {/* Subtle radial gradient overlay for depth */}
      <div
        className={`absolute inset-0 ${
          isDark
            ? 'bg-radial-to-center from-transparent via-transparent to-bg/50'
            : 'bg-radial-to-center from-transparent via-transparent to-bg/30'
        }`}
        style={{
          background: isDark
            ? 'radial-gradient(ellipse at center, transparent 0%, rgba(10, 10, 10, 0.3) 100%)'
            : 'radial-gradient(ellipse at center, transparent 0%, rgba(255, 255, 255, 0.2) 100%)',
        }}
      />
    </div>
  )
}
