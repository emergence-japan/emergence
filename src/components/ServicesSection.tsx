'use client'

import { motion } from 'framer-motion'
import { Brain, Code, Rocket, Users, GraduationCap, BookOpen } from 'lucide-react'
import ServiceCard from './ServiceCard'

const services = [
  {
    title: 'AIソリューション開発',
    description: '生成AIを活用し、ビジネスプロセスを自動化・高度化するカスタムソリューションを提供します。',
    icon: Brain,
    href: '/services/ai',
    tags: ['LLM', 'RAG', 'Automation', 'Python'],
    image: '/works/LMS_new.png'
  },
  {
    title: 'Web / アプリ開発',
    description: 'モダンな技術スタックを用いた、スケーラブルでパフォーマンスの高いWebサイトやアプリケーションを構築します。',
    icon: Code,
    href: '/services/web',
    tags: ['Next.js', 'TypeScript', 'React', 'AWS'],
    image: '/services/surfapp.png'
  },
  {
    title: 'DXコンサルティング',
    description: 'AIノウハウを組織の「頭脳」となる部署へ直接移植。自律的に業務を改善・自動化し続けられる「自走するコア」を構築します。',
    icon: Rocket,
    href: '/services/dx',
    tags: ['Strategy', 'Efficiency', 'Innovation'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: '社員研修',
    description: '企業のAI活用力を高めるための実践的なプログラムを提供。プロンプトエンジニアリングから業務自動化まで、即戦力となるスキルを習得します。',
    icon: Users,
    href: '/services/training',
    tags: ['Training', 'Prompt Eng', 'Digital Literacy'],
    image: '/services/soukoukai.jpg'
  },
  {
    title: '個人向けAIスクール',
    description: 'コミュニティで仲間と共に学ぶオンラインスクール。入会費のみで教材が学び放題、さらに月2回のオンラインセミナーで最新の知見を共有します。',
    icon: GraduationCap,
    href: '/services/school',
    tags: ['Community', 'Education', 'Lifelong Learning'],
    image: '/bootcamp/AI Boot Camp02.png'
  },
  {
    title: '出版・執筆',
    description: 'AI時代にこそ問われる「人間の思考力」をテーマにした書籍を2冊出版。哲学、心理学、科学、文学、芸術といったあらゆる教養を横断した知見を基に、テクノロジーを使いこなすための本質的な知性を発信しています。',
    icon: BookOpen,
    href: '/services/publishing',
    tags: ['Thinking', 'Philosophy', 'Art & Science'],
    image: '/services/9784756924254.png'
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
              tags={service.tags}
              image={service.image}
            />
          ))}
        </motion.div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-accent/10 rounded-full blur-[160px] -z-10 opacity-50" />
    </section>
  )
}

export default ServicesSection
