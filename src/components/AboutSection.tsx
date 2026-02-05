'use client'

import { motion } from 'framer-motion'
import CEOSection from './CEOSection'
import CompanyInfoTable from './CompanyInfoTable'

const companyData = [
  { label: '商号', value: 'Emergence-Japan LLC (エマージェンス・ジャパン合同会社)' },
  { label: '所在地', value: '〒550-0014 大阪府大阪市西区北堀江4-4-6' },
  { label: '設立', value: '2017年4月2日' },
  { label: '代表者', value: '代表社員' },
  { label: '事業内容', value: '生成AIソリューション開発、Web/アプリ開発、DXコンサルティング、人材育成' },
  { label: '資本金', value: '1,000,000円' },
]

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Mission & Vision Typography */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-accent font-mono text-sm uppercase tracking-[0.3em] block mb-4"
          >
            Mission & Vision
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight"
          >
            テクノロジーの力で、<br />
            <span className="text-accent">新たな可能性</span>を創出する。
          </motion.h2>
        </div>

        {/* CEO Message */}
        <div className="mb-24">
          <CEOSection />
        </div>

        {/* Company Details Table */}
        <div className="max-w-4xl mx-auto">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-8 text-center"
          >
            Company Profile
          </motion.h3>
          <CompanyInfoTable data={companyData} />
        </div>
      </div>

      {/* Subtle Background decoration */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] -z-10 translate-x-1/2 translate-y-1/2" />
    </section>
  )
}

export default AboutSection
