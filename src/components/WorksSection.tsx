'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import WorksCard from './WorksCard'
import WorksModal from './WorksModal'

const worksData = [
  {
    title: '次世代AIチャットプラットフォーム開発',
    category: 'System Development',
    description: '生成AIを活用した、企業向けの高度なカスタマーサポートチャットプラットフォーム。自然言語処理による正確な回答と、既存CRMとのスムーズな連携を実現しました。',
    client: '大手テック企業',
    imageUrl: '/works/ai-chat.jpg'
  },
  {
    title: 'DXリーダー育成セミナー',
    category: 'Seminar',
    description: '企業の経営層およびマネジメント層を対象とした、実践的なDX推進セミナー。最新のテクノロジートレンドから、組織変革の具体的なステップまでを網羅しました。',
    client: '製造業・サービス業各社',
    imageUrl: '/works/seminar-01.jpg'
  },
  {
    title: 'グローバルEコマースサイト構築',
    category: 'Web Development',
    description: 'Next.jsとヘッドレスCMSを採用した、超高速なグローバルECサイト。多言語・多通貨対応に加え、高度な在庫管理システムとのリアルタイム同期を実装。',
    client: 'ファッションブランド',
    imageUrl: '/works/ec-site.jpg'
  },
  {
    title: 'AI技術活用 企業内研修',
    category: 'Training',
    description: 'エンジニア向けのAI技術習得ワークショップ。プロンプトエンジニアリングから、APIを活用した自社ツールの開発まで、ハンズオン形式で実施しました。',
    client: 'ITコンサルティング会社',
    imageUrl: '/works/training-01.jpg'
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