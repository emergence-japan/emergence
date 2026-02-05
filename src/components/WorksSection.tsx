'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import WorksCard from './WorksCard'
import WorksModal from './WorksModal'

const worksData = [
  {
    title: '東京大学 大学院情報学環 藤本研究室 AI活用サポート',
    category: 'AI Solution',
    description: '最先端のメディア学習研究を支援するため、AIの高度な活用方法に関する技術サポートおよびコンサルティングを提供。',
    client: '東京大学 大学院情報学環 藤本研究室',
    imageUrl: '/works/utokyo.jpg'
  },
  {
    title: '介護施設向けラーニングマネジメントシステム (LMS) のリリース',
    category: 'System Development',
    description: '介護現場の教育課題を解決するため、効率的な学習管理を実現するLMSを独自開発。現場の生産性向上とスキルアップを支援。',
    client: '介護業界各社',
    imageUrl: '/works/lms.jpg'
  },
  {
    title: '就労継続支援B型事業 専用アプリ開発',
    category: 'App Development',
    description: '障害福祉現場の業務効率化と利用者支援の利便性向上のため、就労継続支援B型事業に特化した専用アプリケーションを開発。',
    client: '障害福祉サービス事業所',
    imageUrl: '/works/welfare-app.jpg'
  },
  {
    title: '商工会議所・商工会でのセミナー実績',
    category: 'Seminar',
    description: '中小企業の経営者や担当者を対象に、AI活用やDX推進をテーマとしたセミナーを多数実施。実務に即した具体的な手法を解説。',
    client: '全国各地の商工会議所・商工会',
    imageUrl: '/works/seminar.jpg'
  },
  {
    title: '株式会社サンワ 社員研修',
    category: 'Training',
    description: '組織全体のデジタルリテラシー底上げのため、AI活用を中心とした全社的な社員研修プログラムを提供。',
    client: '株式会社サンワ',
    imageUrl: '/works/sanwa.jpg'
  },
  {
    title: '大阪デザイン＆テクノロジー専門学校 AI講師',
    category: 'Education',
    description: '次世代のクリエイターやエンジニアを目指す学生に向け、実務で使えるAI技術の講義を担当。',
    client: '大阪デザイン＆テクノロジー専門学校',
    imageUrl: '/works/tech-school.jpg'
  }
]

const WorksSection = () => {
  const [selectedWork, setSelectedWork] = useState<typeof worksData[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = (work: typeof worksData[0]) => {
    setSelectedWork(work)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <section id="works" className="py-24 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold tracking-tighter mb-6"
          >
            Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-lg text-gray-400"
          >
            プロジェクト開発から教育・研修まで、Emergence-Japan LLC が積み上げてきた確かな実績の一部をご紹介します。
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {worksData.map((work, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <WorksCard
                work={work}
                onClick={() => handleOpenModal(work)}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <WorksModal
        isOpen={isModalOpen}
        work={selectedWork}
        onClose={handleCloseModal}
      />
    </section>
  )
}

export default WorksSection