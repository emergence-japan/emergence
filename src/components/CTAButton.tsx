'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface CTAButtonProps {
  children: ReactNode
  onClick?: () => void
  className?: string
  variant?: 'primary' | 'secondary'
}

const CTAButton = ({ children, onClick, className = '', variant = 'primary' }: CTAButtonProps) => {
  const baseStyles = "px-8 py-3 rounded-full font-bold transition-all relative overflow-hidden group"
  
  const variants = {
    primary: "bg-accent text-accent-foreground shadow-[0_0_15px_rgba(0,240,255,0.3)]",
    secondary: "border border-white/20 hover:bg-white/5 text-white"
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05, boxShadow: variant === 'primary' ? "0 0 25px rgba(0,240,255,0.5)" : "0 0 15px rgba(255,255,255,0.1)" }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      <span className="relative z-10">{children}</span>
      
      {variant === 'primary' && (
        <motion.div
          className="absolute inset-0 bg-white/20"
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
          transition={{ duration: 0.6 }}
        />
      )}
    </motion.button>
  )
}

export default CTAButton
