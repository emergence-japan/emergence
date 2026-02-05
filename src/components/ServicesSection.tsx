'use client'

import { motion } from 'framer-motion'
import { Brain, Code, Cpu, Cloud, Rocket, Shield } from 'lucide-react'
import ServiceCard from './ServiceCard'

const services = [
  {
    title: 'AIソリューション開発',
    description: '最新の生成AIや機械学習を活用し、ビジネスプロセスを自動化・高度化するカスタムソリューションを提供します。',
    icon: Brain,
    href: '#services/ai'
  },
  {
    title: 'Web / アプリ開発',
    description: 'モダンな技術スタック（React, Next.js等）を用いた、スケーラブルでパフォーマンスの高いWebサイトやアプリケーションを構築します。',
    icon: Code,
    href: '#services/web'
  },
  {
    title: 'DXコンサルティング',
    description: 'デジタル技術の導入から組織文化の変革まで、企業のデジタルトランスフォーメーションをトータルでサポートします。',
    icon: Rocket,
    href: '#services/dx'
  },
  {
    title: 'クラウドインフラ構築',
    description: 'AWSやVercelを活用し、セキュアで高可用なクラウドインフラの設計から構築、運用までを一貫して提供します。',
    icon: Cloud,
    href: '#services/cloud'
  },
  {
    title: 'システムモダナイゼーション',
    description: 'レガシーシステムの刷新やマイクロサービス化により、ビジネスの柔軟性と保守性を向上させます。',
    icon: Cpu,
    href: '#services/modernization'
  },
  {
    title: 'セキュリティ・監査',
    description: '最先端のセキュリティ技術に基づき、システムの脆弱性診断やセキュリティ体制の構築を支援します。',
    icon: Shield,
    href: '#services/security'
  }
]

const ServicesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold tracking-tighter mb-6"
          >
            Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-lg text-gray-400"
          >
            Emergence-Japan LLC は、最先端のテクノロジーを駆使して、お客様のビジネスの進化を加速させる幅広いソリューションを提供します。
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              href={service.href}
            />
          ))}
        </motion.div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] -z-10" />
    </section>
  )
}

export default ServicesSection
