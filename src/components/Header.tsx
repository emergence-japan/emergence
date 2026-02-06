'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Top', href: '/' },
    { name: 'Services', href: '/#services' },
    { name: 'Works', href: '/#works' },
    { name: 'Company', href: '/#about' },
  ]

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <h1 className="text-xl md:text-2xl font-bold tracking-tighter group-hover:text-accent transition-colors">
            Emergence <span className="text-accent group-hover:text-white transition-colors">Japan</span>
          </h1>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="text-sm font-medium text-gray-400 hover:text-accent transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <Link 
                href="/#contact" 
                className="px-6 py-2.5 bg-accent text-accent-foreground rounded-full text-sm font-bold hover:scale-105 transition-all shadow-[0_0_20px_rgba(0,240,255,0.3)]"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-white/10 overflow-hidden"
          >
            <ul className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-lg font-medium block"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  href="/#contact" 
                  className="inline-block w-full text-center px-6 py-4 bg-accent text-accent-foreground rounded-xl text-lg font-bold"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
