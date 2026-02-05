'use client'

import { motion } from 'framer-motion'
import Image from 'next/link'

const CEOSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-12 py-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/3 aspect-square relative rounded-2xl overflow-hidden bg-white/5 border border-white/10"
      >
        <div className="absolute inset-0 flex items-center justify-center text-gray-500 italic">
          {/* Placeholder for CEO Image */}
          <span role="img" aria-label="CEO Profile">Profile Image</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-2/3"
      >
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <span className="w-8 h-px bg-accent"></span>
          CEO Message
        </h3>
        <p className="text-gray-300 leading-relaxed mb-6 italic">
          "Emergence-Japan LLC は、テクノロジーの力を信じています。私たちは、単にシステムを構築するのではなく、未来を形作り、お客様と共に新たな価値を創造することを目指しています。私たちの情熱が、皆様のビジネスに革新的な飛躍をもたらすことをお約束します。"
        </p>
        <div>
          <p className="font-bold text-white text-lg">代表社員</p>
          <p className="text-accent font-mono text-sm uppercase tracking-widest">Chief Executive Officer</p>
        </div>
      </motion.div>
    </div>
  )
}

export default CEOSection
