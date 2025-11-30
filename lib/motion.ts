import { motion, Variants } from 'framer-motion'
import { ReactNode } from 'react'

export const fadeUp: Variants = {
  initial: { y: 12, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.45, ease: [0.2, 0.8, 0.2, 1] } }
}

export const staggerList = {
  animate: {
    transition: { staggerChildren: 0.08 }
  }
}

export const hoverLift = {
  whileHover: { y: -6, scale: 1.01, transition: { duration: 0.18 } }
}
