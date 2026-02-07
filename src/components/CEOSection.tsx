'use client'

import { motion } from 'framer-motion'

const CEOSection = () => {
  return (
    <div className="space-y-20">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/3 aspect-[4/5] relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-white/10 to-transparent border border-white/10 group"
        >
          <img 
            src="/bootcamp/hamada2.jpg" 
            alt="浜田 陽介" 
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
          <div className="absolute bottom-8 left-8">
            <p className="text-2xl font-bold text-white">浜田 陽介</p>
            <p className="text-accent font-mono text-sm tracking-widest">Yosuke Hamada</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-2/3"
        >
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-accent">
            <span className="w-8 h-px bg-accent"></span>
            Message from CEO
          </h3>
          <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
            <p>
              私たちは今、テクノロジーが「道具」から「パートナー」へと進化する、人類史上最大の転換点に立っています。Emergence-Japan LLC という社名には、個々の要素が組み合わさることで、単体では予想もできなかった高度な性質が現れる「創発（Emergence）」という願いを込めています。
            </p>
            <p>
              単なる効率化のためのシステム開発に留まらず、AIと人間が共創し、互いの知性を拡張し合える社会の実現。それが私たちのミッションです。
            </p>
            <p>
              東京大学をはじめとする最前線の研究現場で培った技術力と、2冊の著書で培った「思考の型」を融合させ、貴社のビジネスに本質的な変化をもたらすことをお約束します。
            </p>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="text-gray-400 text-sm mb-1 uppercase tracking-widest font-bold">Representative Director</p>
            <p className="text-xl font-bold">浜田 陽介 (Emergence-Japan LLC 代表社員)</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default CEOSection