'use client'

import { motion } from 'framer-motion'
import CEOSection from './CEOSection'
import CompanyInfoTable from './CompanyInfoTable'

const companyData = [
  { label: '蝠・捷', value: 'Emergence-Japan LLC (繧ｨ繝槭・繧ｸ繧ｧ繝ｳ繧ｹ繝ｻ繧ｸ繝｣繝代Φ蜷亥酔莨夂､ｾ)' },
  { label: '謇蝨ｨ蝨ｰ', value: '縲・50-0014 螟ｧ髦ｪ蠎懷､ｧ髦ｪ蟶り･ｿ蛹ｺ蛹怜豎・-4-6' },
  { label: '險ｭ遶・, value: '2017蟷ｴ4譛・譌･' },
  { label: '莉｣陦ｨ閠・, value: '豬懃伐髯ｽ莉・ },
  { label: '莠区･ｭ蜀・ｮｹ', value: '逕滓・AI繧ｽ繝ｪ繝･繝ｼ繧ｷ繝ｧ繝ｳ髢狗匱縲仝eb/繧｢繝励Μ髢狗匱縲．X繧ｳ繝ｳ繧ｵ繝ｫ繝・ぅ繝ｳ繧ｰ縲∽ｺｺ譚占ご謌・ },
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
            繝・け繝弱Ο繧ｸ繝ｼ縺ｮ蜉帙〒縲・br />
            <span className="text-accent">譁ｰ縺溘↑蜿ｯ閭ｽ諤ｧ</span>繧貞卸蜃ｺ縺吶ｋ縲・          </motion.h2>
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
