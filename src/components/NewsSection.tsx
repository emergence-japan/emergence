'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface NewsItem {
  date: string;
  category: string;
  title: string;
  link?: string;
}

const GAS_ENDPOINT = 'https://script.google.com/macros/s/AKfycbw-yHE2Bo63J8cmdmHKAU5RA3iOmuRMINgPKr3I8EGavYtMlxZbaxDpQC7OBse1QS_LkQ/exec';

const NewsSection = () => {
  const [newsList, setNewsList] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(GAS_ENDPOINT);
        const data = await response.json();
        if (Array.isArray(data)) {
          setNewsList(data);
        }
      } catch (error) {
        console.error('Failed to fetch news:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

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
            <span className="text-sm font-medium text-gray-500">
              Latest Updates
            </span>
          </div>

          {loading ? (
            <div className="py-12 text-center text-gray-500 animate-pulse">
              Loading news...
            </div>
          ) : newsList.length > 0 ? (
            <ul className="divide-y divide-white/10">
              {newsList.map((item, index) => (
                <motion.li
                  key={index}
                  role="listitem"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <a 
                    href={item.link || '#'} 
                    target={item.link ? "_blank" : undefined}
                    rel={item.link ? "noopener noreferrer" : undefined}
                    className={`flex flex-col md:flex-row md:items-center py-6 gap-4 md:gap-12 ${!item.link ? 'cursor-default' : ''}`}
                    onClick={(e) => !item.link && e.preventDefault()}
                  >
                    <div className="flex items-center gap-4 min-w-[180px]">
                      <span className="text-sm text-gray-500 font-mono">{item.date}</span>
                      <span className="text-[10px] uppercase tracking-widest px-2 py-0.5 border border-white/20 rounded-full text-gray-400 group-hover:border-accent group-hover:text-accent transition-colors">
                        {item.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-medium group-hover:text-accent transition-colors flex-1">
                      {item.title}
                      {item.link && <span className="ml-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity">↗</span>}
                    </h3>
                  </a>
                </motion.li>
              ))}
            </ul>
          ) : (
            <div className="py-12 text-center text-gray-500">
              現在、新しいお知らせはありません。
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default NewsSection