'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { useEffect } from 'react'
import Image from 'next/image'

interface Work {
  title: string
  category: string
  description: string
  client: string
  imageUrl: string
}

interface WorksModalProps {
  isOpen: boolean
  work: Work | null
  onClose: () => void
}

const WorksModal = ({ isOpen, work, onClose }: WorksModalProps) => {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!work) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-background border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="close"
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            >
              <X size={24} />
            </button>

            <div className="flex flex-col md:flex-row">
              {/* Image Section */}
              <div className="w-full md:w-1/2 aspect-video md:aspect-auto bg-white/5 relative">
                <Image
                  src={work.imageUrl}
                  alt={work.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Text Section */}
              <div className="w-full md:w-1/2 p-8 md:p-12">
                <span className="text-accent font-mono text-xs uppercase tracking-widest block mb-2">
                  {work.category}
                </span>
                <h2 className="text-3xl font-bold mb-6 tracking-tighter">
                  {work.title}
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Description</h4>
                    <p className="text-gray-300 leading-relaxed">
                      {work.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Client</h4>
                    <p className="text-white font-medium">
                      {work.client}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default WorksModal
