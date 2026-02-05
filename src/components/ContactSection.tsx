'use client'

import { motion } from 'framer-motion'
import ContactForm from './ContactForm'

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-white/[0.02]">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold tracking-tighter mb-6"
          >
            Contact
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-lg text-gray-400"
          >
            プロジェクトのご相談、お見積りのご依頼など、お気軽にお問い合わせください。<br className="hidden md:block" />
            通常2営業日以内に担当者よりご返信させていただきます。
          </motion.p>
        </div>

        <ContactForm />
      </div>

      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  )
}

export default ContactSection
