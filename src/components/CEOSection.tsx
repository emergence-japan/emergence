'use client'

import { motion } from 'framer-motion'
import { Award, BookOpen, GraduationCap, Briefcase, Users } from 'lucide-react'

const CEOSection = () => {
  const experiences = [
    { year: '2017', event: 'エマージェンス・ジャパン合同会社 設立' },
    { year: '2019', event: '大手介護施設向けLMSの独自開発・運営開始' },
    { year: '2022', event: '著書『自分の頭で考えるコツを教えてください』出版（総合法令出版）' },
    { year: '2024', event: '著書『すぐ動けない人のための思考を放つ100項』出版（明日香出版社）' },
    { year: 'Present', event: '東京大学をはじめとする研究機関との共同開発・AIコンサルティングに従事' },
  ]

  const expertises = [
    '生成AI（LLM）の業務実装・カスタム開発',
    '思考法・知的生産性の向上プログラム設計',
    '大規模システム（Next.js / Python / AWS）のアーキテクチャ設計',
    '組織変革（DX）および高度人材育成のコンサルティング'
  ]

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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-10 rounded-3xl bg-white/5 border border-white/10"
        >
          <h4 className="text-xl font-bold mb-8 flex items-center gap-3">
            <Briefcase className="text-accent" size={24} />
            Background
          </h4>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="flex gap-6">
                <span className="font-mono text-accent text-sm w-16 shrink-0 pt-1">{exp.year}</span>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">{exp.event}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="p-10 rounded-3xl bg-white/5 border border-white/10"
        >
          <h4 className="text-xl font-bold mb-8 flex items-center gap-3">
            <Award className="text-accent" size={24} />
            Expertise
          </h4>
          <ul className="space-y-4">
            {expertises.map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-300">
                <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                <span className="text-sm md:text-base leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          
          <div className="mt-12 pt-8 border-t border-white/5 grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <span className="text-accent flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                <BookOpen size={14} /> Author
              </span>
              <span className="text-sm text-gray-400">2 Publications</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-accent flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                <GraduationCap size={14} /> Advisor
              </span>
              <span className="text-sm text-gray-400">AI / DX Expert</span>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}

export default CEOSection