'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'

interface Service {
  title: string
  description: string
  features: string[]
  flow: string[]
}

export default function ServiceDetailClient({ service }: { service: Service }) {
  return (
    <div className="container mx-auto px-4 py-20 relative z-10 text-white">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-12"
      >
        <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-accent transition-colors">
          <ArrowLeft size={20} />
          <span>サービス一覧に戻る</span>
        </Link>
      </motion.div>

      <header className="max-w-4xl mb-24">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold tracking-tighter mb-8"
        >
          {service.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-xl text-gray-300 leading-relaxed"
        >
          {service.description}
        </motion.p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
        {/* Features */}
        <section>
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="w-8 h-px bg-accent"></span>
            特長・メリット
          </h2>
          <ul className="space-y-6">
            {service.features.map((feature, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 rounded-xl bg-white/5 border border-white/10"
              >
                <CheckCircle2 className="text-accent shrink-0 mt-1" size={24} />
                <span className="text-lg font-medium">{feature}</span>
              </motion.li>
            ))}
          </ul>
        </section>

        {/* Flow */}
        <section>
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="w-8 h-px bg-accent"></span>
            導入フロー
          </h2>
          <div className="space-y-0 relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-white/10" />
            {service.flow.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative flex items-center gap-8 pb-12 last:pb-0"
              >
                <div className="w-16 h-16 rounded-full bg-background border border-accent flex items-center justify-center text-accent font-bold z-10">
                  {index + 1}
                </div>
                <span className="text-xl font-bold">{step}</span>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-32 p-12 rounded-3xl bg-gradient-to-r from-accent/20 to-transparent border border-accent/20 text-center"
      >
        <h2 className="text-3xl font-bold mb-6">詳しくはお問い合わせください</h2>
        <p className="text-gray-400 mb-10 max-w-xl mx-auto">
          貴社の課題に合わせた最適なプランをご提案いたします。まずはお気軽にご相談ください。
        </p>
        <Link
          href="/#contact"
          className="inline-block px-12 py-4 bg-accent text-accent-foreground font-bold rounded-full hover:scale-105 transition-transform"
        >
          お問い合わせフォームへ
        </Link>
      </motion.div>
    </div>
  )
}
