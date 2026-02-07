'use client'

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import { LucideIcon } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { MouseEvent } from 'react'

interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
  href: string
  tags?: string[]
  image?: string
}

const ServiceCard = ({ title, description, icon: Icon, href, tags = [], image }: ServiceCardProps) => {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <Link href={href} className="block group h-full">
      <motion.div
        onMouseMove={handleMouseMove}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative h-full rounded-[2rem] bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden transition-all duration-500 hover:bg-white/[0.08] hover:border-accent/30"
      >
        {/* Spotlight Effect Overlay */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition duration-300 group-hover:opacity-100 z-30"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                600px circle at ${mouseX}px ${mouseY}px,
                rgba(0, 240, 255, 0.1),
                transparent 80%
              )
            `,
          }}
        />

        {/* Image Section */}
        <div className="relative h-48 w-full overflow-hidden">
          {image ? (
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-accent/20 to-transparent" />
          )}
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent z-10" />
        </div>

        <div className="relative z-20 p-8 -mt-12 flex flex-col h-[calc(100%-12rem+3rem)]">
          {/* Icon Header */}
          <div className="mb-6 relative inline-block">
            <div className="w-14 h-14 rounded-2xl bg-[#0a0a0a] border border-white/10 flex items-center justify-center text-accent relative z-10 group-hover:scale-110 transition-transform duration-500 shadow-xl">
              <Icon size={28} strokeWidth={1.5} />
            </div>
            {/* Icon Glow */}
            <div className="absolute inset-0 bg-accent/30 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-3 tracking-tight group-hover:text-accent transition-colors duration-300">
              {title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3 group-hover:text-gray-300 transition-colors">
              {description}
            </p>
          </div>

          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {tags.map((tag) => (
                <span 
                  key={tag} 
                  className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-medium text-gray-400 uppercase tracking-wider group-hover:border-accent/30 group-hover:text-accent/80 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          
          <div className="flex items-center text-xs font-bold uppercase tracking-[0.2em] text-accent mt-auto">
            <span className="relative">
              Explore Solution
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
            </span>
            <motion.span 
              className="ml-2"
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              &rarr;
            </motion.span>
          </div>
        </div>
      </motion.div>
    </Link>
  )
}

export default ServiceCard
