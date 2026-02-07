'use client'

import { motion } from 'framer-motion'

const newsData = [
  {
    id: 1,
    date: '2025.10.01',
    category: 'Publication',
    title: '代表の浜田陽介が「すぐ動けない人のための思考を放つ100項（明日香出版社）」を上梓しました。',
  }
]

const NewsSection = () => {
  return (
    <section id="news" className="py-24 bg-transparent">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-end justify-between mb-12">
            <h2 className="text-4xl font-bold tracking-tighter">News</h2>
            <a href="#" className="text-sm font-medium text-gray-400 hover:text-accent transition-colors">
              View All &rarr;
            </a>
          </div>

          <ul className="divide-y divide-white/10">
            {newsData.map((item) => (
              <motion.li
                key={item.id}
                role="listitem"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: item.id * 0.1 }}
                className="group"
              >
                <a href="#" className="flex flex-col md:flex-row md:items-center py-6 gap-4 md:gap-12">
                  <div className="flex items-center gap-4 min-w-[180px]">
                    <span className="text-sm text-gray-500 font-mono">{item.date}</span>
                    <span className="text-[10px] uppercase tracking-widest px-2 py-0.5 border border-white/20 rounded-full text-gray-400 group-hover:border-accent group-hover:text-accent transition-colors">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-medium group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

export default NewsSection