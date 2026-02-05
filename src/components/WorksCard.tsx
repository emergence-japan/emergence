'use client'

import { motion } from 'framer-motion'

interface Work {
  title: string
  category: string
  description: string
  imageUrl: string
}

interface WorksCardProps {
  work: Work
  onClick: () => void
}

const WorksCard = ({ work, onClick }: WorksCardProps) => {
  return (
    <motion.button
      whileHover="hover"
      onClick={onClick}
      className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 group bg-white/5"
    >
      {/* Background Image Placeholder */}
      <motion.div
        variants={{
          hover: { scale: 1.1 }
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="absolute inset-0 flex items-center justify-center text-gray-600 italic bg-white/5"
      >
        Project Visual
      </motion.div>

      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        variants={{
          hover: { opacity: 1 }
        }}
        className="absolute inset-0 bg-black/60 backdrop-blur-[2px] flex flex-col justify-end p-6 text-left"
      >
        <motion.span
          initial={{ y: 10, opacity: 0 }}
          variants={{
            hover: { y: 0, opacity: 1 }
          }}
          transition={{ delay: 0.1 }}
          className="text-accent font-mono text-[10px] uppercase tracking-widest mb-2"
        >
          {work.category}
        </motion.span>
        <motion.h3
          initial={{ y: 10, opacity: 0 }}
          variants={{
            hover: { y: 0, opacity: 1 }
          }}
          transition={{ delay: 0.2 }}
          className="text-xl font-bold text-white mb-1"
        >
          {work.title}
        </motion.h3>
        <motion.p
          initial={{ y: 10, opacity: 0 }}
          variants={{
            hover: { y: 0, opacity: 1 }
          }}
          transition={{ delay: 0.3 }}
          className="text-sm text-gray-300 line-clamp-2"
        >
          {work.description}
        </motion.p>
      </motion.div>

      {/* Static corner tag for visibility when not hovered */}
      <div className="absolute top-4 left-4 px-2 py-1 bg-black/40 backdrop-blur-md rounded border border-white/10 text-[9px] uppercase tracking-tighter text-white font-bold group-hover:opacity-0 transition-opacity">
        {work.category}
      </div>
    </motion.button>
  )
}

export default WorksCard
