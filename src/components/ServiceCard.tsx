'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'
import Link from 'next/link'

interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
  href: string
}

const ServiceCard = ({ title, description, icon: Icon, href }: ServiceCardProps) => {
  return (
    <Link href={href} className="block">
      <motion.div
        whileHover={{ 
          scale: 1.05,
          boxShadow: "0 0 25px rgba(0, 240, 255, 0.3)",
          borderColor: "rgba(0, 240, 255, 0.5)"
        }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="h-full p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 transition-colors hover:bg-white/10 flex flex-col gap-4 relative group"
      >
        <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
          <Icon size={24} />
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
            {title}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            {description}
          </p>
        </div>
        
        <div className="mt-auto pt-4 flex items-center text-xs font-bold uppercase tracking-widest text-accent opacity-0 group-hover:opacity-100 transition-opacity">
          Learn More &rarr;
        </div>
      </motion.div>
    </Link>
  )
}

export default ServiceCard
