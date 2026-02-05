'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface LegalWrapperProps {
  title: string
  children: ReactNode
}

const LegalWrapper = ({ title, children }: LegalWrapperProps) => {
  return (
    <div className="py-20 bg-background min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold tracking-tighter mb-12 border-b border-white/10 pb-6">
            {title}
          </h1>
          <div className="prose prose-invert max-w-none prose-sm md:prose-base text-gray-300 leading-relaxed space-y-8">
            {children}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default LegalWrapper
