'use client'

import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { useEffect, useState, useMemo } from 'react'

interface Shape {
  id: number
  type: 'circle' | 'blob' | 'square'
  size: number
  left: string
  top: string
  delay: number
  duration: number
  opacity: number
  rotation: number
}

interface BackgroundAnimationProps {
  numShapes?: number
  sizeRange?: [number, number]
  speed?: [number, number]
  opacityRange?: [number, number]
}

const shapeVariants = {
  animate: (custom: { duration: number; rotation: number }) => ({
    y: [0, -30, 0],
    rotate: [0, custom.rotation, 0],
    scale: [1, 1.05, 1],
    transition: {
      duration: custom.duration,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  })
}

export function BackgroundAnimation({
  numShapes = 8,
  sizeRange = [60, 180],
  speed = [8, 16],
  opacityRange = [0.15, 0.35]
}: BackgroundAnimationProps) {
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Generate shapes once on component mount
  const shapes: Shape[] = useMemo(() => {
    return Array.from({ length: numShapes }, (_, i) => ({
      id: i,
      type: ['circle', 'blob', 'square'][Math.floor(Math.random() * 3)] as 'circle' | 'blob' | 'square',
      size: Math.random() * (sizeRange[1] - sizeRange[0]) + sizeRange[0],
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: Math.random() * 2,
      duration: Math.random() * (speed[1] - speed[0]) + speed[0],
      opacity: Math.random() * (opacityRange[1] - opacityRange[0]) + opacityRange[0],
      rotation: Math.random() * 360
    }))
  }, [numShapes, sizeRange, speed, opacityRange])

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isDark = resolvedTheme === 'dark'

  const getShapeClasses = (shapeType: 'circle' | 'blob' | 'square', isDark: boolean) => {
    const baseClasses = 'absolute will-change-transform'

    const shapeClasses = {
      circle: `${baseClasses} rounded-full`,
      blob: `${baseClasses} rounded-3xl`,
      square: `${baseClasses} rounded-lg`
    }

    return shapeClasses[shapeType]
  }

  const getGradientClasses = (isDark: boolean) => {
    if (isDark) {
      return [
        'bg-gradient-to-br from-blue-600 to-purple-700',
        'bg-gradient-to-tr from-purple-600 to-pink-700',
        'bg-gradient-to-bl from-indigo-600 to-blue-700',
        'bg-gradient-to-r from-blue-700 to-indigo-700',
        'bg-gradient-to-t from-purple-700 to-indigo-600',
        'bg-gradient-to-b from-pink-600 to-purple-700',
        'bg-gradient-to-br from-indigo-700 to-blue-800',
        'bg-gradient-to-tr from-blue-700 to-purple-800'
      ]
    } else {
      return [
        'bg-gradient-to-br from-blue-200 to-purple-200',
        'bg-gradient-to-tr from-purple-200 to-pink-200',
        'bg-gradient-to-bl from-indigo-200 to-blue-200',
        'bg-gradient-to-r from-blue-300 to-indigo-200',
        'bg-gradient-to-t from-purple-200 to-indigo-200',
        'bg-gradient-to-b from-pink-200 to-purple-200',
        'bg-gradient-to-br from-indigo-200 to-blue-300',
        'bg-gradient-to-tr from-blue-200 to-purple-300'
      ]
    }
  }

  const gradients = getGradientClasses(isDark)

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-bg dark:bg-bg pointer-events-none">
      {/* Ambient glow layer (dark mode only) */}
      {isDark && (
        <div className="absolute inset-0 bg-radial-gradient from-blue-900/10 via-transparent to-transparent" />
      )}

      {/* Animated shapes */}
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className={`${getShapeClasses(shape.type, isDark)} ${gradients[shape.id % gradients.length]}`}
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.left,
            top: shape.top,
            opacity: shape.opacity,
            filter: isDark ? 'blur(40px)' : 'blur(35px)'
          }}
          variants={shapeVariants}
          animate="animate"
          custom={{
            duration: shape.duration,
            rotation: shape.rotation
          }}
          initial={{
            y: 0,
            rotate: 0,
            scale: 1
          }}
          transition={{
            delay: shape.delay
          }}
        />
      ))}

      {/* Subtle radial overlay for depth */}
      <div className="absolute inset-0 bg-radial-to-r from-transparent via-transparent to-bg/5 dark:to-bg/10" />
    </div>
  )
}
