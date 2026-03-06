'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import WorksCard from './WorksCard'
import WorksModal from './WorksModal'
import { worksData, WorkItem } from '@/lib/works'

const WorksSection = () => {
  const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = (work: WorkItem) => {
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