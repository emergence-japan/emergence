'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, CheckCircle2, HelpCircle, BookOpen, Newspaper, Mail, TrendingUp, Users, Sparkles, Briefcase, Clock, Tag, MessageSquare, User, ChevronDown } from 'lucide-react'
import { ServiceData } from '@/lib/services'

export default function ServiceDetailClient({ service }: { service: ServiceData }) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const isPublishing = service.title.includes('出版') || (service.books && service.books.length > 0);
  const isSchool = service.title.includes('ブートキャンプ');
  const isTraining = !!service.programs;

  // Unified Deep Theme
  const theme = {
    container: "min-h-screen text-white",
    header: "text-white",
    description: "text-gray-200 bg-white/[0.02] backdrop-blur-[2px] border-accent shadow-[0_0_30px_rgba(255,255,255,0.02)]",
    card: "bg-white/[0.03] backdrop-blur-md border border-white/10 shadow-2xl hover:border-accent/30 transition-all duration-500",
    grid: "linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)"
  };

  return (
    <div className={`relative z-10 transition-all duration-1000 ${theme.container}`}>
      {/* Dynamic Background */}
      <div 
        className="fixed inset-0 -z-10 pointer-events-none"
        style={{ 
          backgroundImage: theme.grid,
          backgroundSize: '80px 80px'
        }}
      />
      
      {/* Ambient Glows */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className={`absolute top-[-10%] left-[10%] w-[1000px] h-[1000px] bg-accent/10 rounded-full blur-[180px] opacity-50`} />
        <div className={`absolute bottom-[-10%] right-[5%] w-[800px] h-[800px] bg-blue-400/5 rounded-full blur-[150px] opacity-30`} />
      </div>

      <div className="container mx-auto px-4 py-20">
        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12 flex items-center justify-between"
        >
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold tracking-widest text-gray-400 hover:text-accent transition-colors">
            <ArrowLeft size={18} />
            <span>BACK TO LIST</span>
          </Link>
          {service.logoImage && (
            <img src={service.logoImage} alt="Logo" className="h-12 w-auto object-contain opacity-90" />
          )}
        </motion.div>

        {/* Hero Section */}
        <header className="max-w-5xl mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row md:items-center gap-8 mb-10"
          >
            {service.logoImage && (
              <div className="shrink-0 p-4 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 shadow-xl">
                <img src={service.logoImage} alt="Logo" className="h-20 w-auto object-contain" />
              </div>
            )}
            <h1 className="text-4xl md:text-7xl font-black tracking-tighter">
              {service.title}
            </h1>
            {isSchool && (
              <div className="shrink-0 mt-4 md:mt-2">
                <Link href="/school-application" className="relative z-50 inline-flex items-center gap-3 px-8 py-3.5 bg-orange-600 text-white font-bold rounded-full hover:bg-orange-500 hover:scale-105 transition-all shadow-[0_10px_30px_rgba(234,88,12,0.3)] text-base md:text-lg">
                  {service.cta || 'コミュニティに参加する'}
                </Link>
              </div>
            )}
          </motion.div>
          {service.description && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className={`text-xl md:text-2xl leading-relaxed border-l-8 border-accent pl-10 py-10 rounded-r-[3rem] whitespace-pre-wrap font-medium ${theme.description}`}
            >
              {service.description}
            </motion.div>
          )}
        </header>

        {/* Dynamic AI Update Ticker */}
        {isSchool && (
          <div className="mb-24 overflow-hidden py-4 bg-accent/10 border-y border-accent/20 backdrop-blur-sm -mx-4">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="flex whitespace-nowrap gap-12 text-accent font-black tracking-[0.2em] text-sm md:text-lg uppercase"
            >
              {[...Array(6)].map((_, i) => (
                <div key={i} className="flex items-center gap-4">
                  <span>★ LATEST AI INFORMATION UPDATED DAILY IN DISCORD COMMUNITY</span>
                  <Sparkles size={18} />
                  <span>常に最新のAIトレンドをキャッチアップ</span>
                  <Sparkles size={18} />
                </div>
              ))}
            </motion.div>
          </div>
        )}

        {/* Bespoke Layout for School (Comparison) */}
        {isSchool && (
          <section className="mb-32">
            <h2 className="text-3xl font-black mb-16 flex flex-col items-center gap-4 text-center">
              <TrendingUp className="text-accent" size={40} />
              圧倒的な投資対効果
            </h2>
            <div className="max-w-5xl mx-auto overflow-hidden rounded-[3rem] border border-white/10 bg-white/5 backdrop-blur-3xl shadow-2xl">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="bg-white/10">
                    <th className="p-8 text-xs font-black uppercase tracking-[0.2em] text-gray-400">比較対象</th>
                    <th className="p-8 text-center text-xs font-black uppercase tracking-[0.2em] bg-accent/20 text-accent text-lg">価格</th>
                    <th className="p-8 text-center text-xs font-black uppercase tracking-[0.2em] text-gray-400">コストパフォーマンス</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-accent/5">
                    <td className="p-8 font-black text-xl text-white border-b border-white/5">生成AIブートキャンプ</td>
                    <td className="p-8 text-center text-accent font-black text-3xl italic border-b border-white/5">11,000円</td>
                    <td className="p-8 text-center text-accent font-bold italic border-b border-white/5">圧倒的（基準）</td>
                  </tr>
                  {service.comparison?.items.map((item, index) => (
                    <tr key={index} className="border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors group">
                      <td className="p-8 font-bold text-gray-400">{item.label}</td>
                      <td className="p-8 text-center text-gray-300">{item.others}</td>
                      <td className="p-8 text-center">
                        <span className="text-red-400 font-black text-lg">
                          {index === 0 ? '約18倍' : index === 1 ? '約15倍' : index === 2 ? '約20倍' : '約21倍'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* School Curriculum Section */}
        {isSchool && service.curriculum && (
          <section className="mb-32">
            <h2 className="text-3xl font-black mb-16 flex flex-col items-center gap-4 text-center">
              <BookOpen className="text-accent" size={40} />
              カリキュラム
            </h2>
            <div className="max-w-4xl mx-auto space-y-8">
              {service.curriculum.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-8 md:p-12 rounded-[3rem] border ${theme.card} flex flex-col md:flex-row gap-8 items-start relative overflow-hidden`}
                >
                  <div className="shrink-0 px-8 py-3 rounded-2xl bg-accent text-accent-foreground font-black text-2xl italic shadow-[0_10px_30px_rgba(var(--accent),0.3)]">
                    {item.session}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-black mb-6 text-white leading-tight">{item.title}</h3>
                    <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-wrap font-medium">
                      {item.detail}
                    </p>
                  </div>
                  {/* Decorative number in background */}
                  <div className="absolute -bottom-10 -right-4 text-white/[0.02] text-[12rem] font-black pointer-events-none">
                    {index + 1}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* Community Voices (Luxury Member Style for School) */}
        {isSchool && service.voices && (
          <section className="mb-32">
            <h2 className="text-3xl font-black mb-20 text-center flex flex-col items-center gap-4">
              <MessageSquare className="text-accent" size={40} />
              コミュニティメンバーの声
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {service.voices.map((voice, vIndex) => {
                const isFemale = ['Nさん', 'Rさん', 'Yさん'].some(name => voice.name.includes(name));
                return (
                  <motion.div
                    key={vIndex}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={`flex flex-col p-10 rounded-[3.5rem] bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-2xl relative group hover:border-accent/30 transition-all duration-500`}
                  >
                    <div className="flex items-center gap-6 mb-8">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center shadow-inner ${isFemale ? 'bg-pink-500/20 text-pink-400' : 'bg-blue-500/20 text-blue-400'}`}>
                        <User size={40} />
                      </div>
                      <div>
                        <p className="text-lg font-black text-white">{voice.name}</p>
                        <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Certified Member</p>
                      </div>
                    </div>
                    <p className="text-gray-200 text-xl leading-relaxed font-bold italic relative z-10">
                      「{voice.content}」
                    </p>
                    <div className="absolute top-8 right-10 text-white/[0.02] group-hover:text-accent/[0.05] transition-colors pointer-events-none">
                      <MessageSquare size={120} />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </section>
        )}

        {/* Discord Community Section */}
        {isSchool && service.discordInfo && (
          <section className="mb-32">
            <div className={`p-10 md:p-20 rounded-[4rem] border ${theme.card} relative overflow-hidden`}>
              <div className="absolute top-0 right-0 p-10 opacity-5">
                <MessageSquare size={300} />
              </div>
              
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row gap-12 items-start">
                  <div className="flex-1">
                    <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight flex items-center gap-6">
                      {service.discordInfo.logoImage && (
                        <img src={service.discordInfo.logoImage} alt="Discord Logo" className="w-16 h-16 md:w-20 md:h-20 object-contain rounded-2xl shadow-lg" />
                      )}
                      {service.discordInfo.title}
                    </h2>
                    <div className="bg-accent/10 border border-accent/20 p-8 rounded-3xl mb-8">
                      <h3 className="text-xl font-bold text-accent mb-4 flex items-center gap-2">
                        <HelpCircle size={24} />
                        {service.discordInfo.question}
                      </h3>
                      <p className="text-gray-200 leading-relaxed text-lg">
                        {service.discordInfo.answer}
                      </p>
                    </div>
                    <p className="text-gray-400 font-medium whitespace-pre-wrap mb-10">
                      {service.discordInfo.support}
                    </p>
                    
                    {service.discordInfo.innerImage && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group"
                      >
                        <img 
                          src={service.discordInfo.innerImage} 
                          alt="Discord Community" 
                          className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
                      </motion.div>
                    )}
                  </div>
                  
                  <div className="flex-1 grid grid-cols-1 gap-6">
                    {service.discordInfo.benefits.map((benefit, bIndex) => (
                      <div key={bIndex} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-accent/30 transition-colors group">
                        <div className="flex items-start gap-4">
                          <div className="p-3 rounded-2xl bg-accent/20 text-accent group-hover:scale-110 transition-transform">
                            <CheckCircle2 size={24} />
                          </div>
                          <div>
                            <h4 className="text-xl font-bold mb-2">{benefit.label}</h4>
                            <p className="text-gray-400 leading-relaxed">{benefit.detail}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Lecturer Section */}
        {isSchool && service.lecturer && (
          <section className="mb-32">
            <h2 className="text-3xl font-black mb-20 text-center flex flex-col items-center gap-4">
              <User className="text-accent" size={40} />
              講師紹介
            </h2>
            <div className={`p-10 md:p-20 rounded-[4rem] border ${theme.card} relative overflow-hidden bg-gradient-to-br from-accent/5 to-transparent`}>
              <div className="flex flex-col lg:flex-row gap-16 items-center lg:items-start">
                {/* Lecturer Image & Logo */}
                <div className="w-full lg:w-2/5 space-y-8">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl group"
                  >
                    {service.lecturer.image ? (
                      <img src={service.lecturer.image} alt={service.lecturer.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    ) : (
                      <div className="w-full h-full bg-white/5 flex items-center justify-center italic text-gray-500">Instructor Photo</div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                    <div className="absolute bottom-10 left-10">
                      <p className="text-3xl font-black text-white mb-2">{service.lecturer.name}</p>
                      <p className="text-accent font-bold tracking-[0.3em] uppercase text-sm">{service.lecturer.role}</p>
                    </div>
                  </motion.div>
                  
                  {service.lecturer.logo && (
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="p-6 rounded-3xl bg-white/5 border border-white/10 flex items-center gap-6"
                    >
                      <div className="bg-white p-3 rounded-2xl shadow-xl flex items-center justify-center shrink-0">
                        <img src={service.lecturer.logo} alt="Certification Logo" className="h-12 w-auto object-contain" />
                      </div>
                      <div className="text-left border-l border-white/10 pl-6">
                        <p className="text-xs font-black text-gray-500 uppercase tracking-widest mb-1">Certification</p>
                        <p className="text-sm font-bold text-gray-200">生成AIパスポート認定</p>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="inline-block px-6 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs font-black tracking-widest uppercase mb-10">
                    Background & Philosophy
                  </div>
                  <h3 className="text-3xl md:text-5xl font-black mb-12 italic leading-tight text-white">
                    「{service.lecturer.message}」
                  </h3>
                  
                  <ul className="space-y-6 mb-16">
                    {service.lecturer.achievements.map((item, aIndex) => (
                      <motion.li 
                        key={aIndex}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: aIndex * 0.1 }}
                        className="flex items-start gap-5 group"
                      >
                        <div className="mt-1.5 p-1 rounded-full bg-accent/20 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                          <CheckCircle2 size={18} />
                        </div>
                        <span className="text-xl font-bold text-gray-200 group-hover:text-white transition-colors">{item}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                    <p className="text-gray-400 leading-relaxed font-medium">
                      これまでに全国の多くの受講生をサポートし、一度も挫折者を出したことがありません。技術の習得だけでなく、それをどう生活や仕事に活かすかという「本質」を、誰にでもわかる言葉で丁寧にお伝えします。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Training Programs */}
        {isTraining && service.programs && (
          <div className="space-y-24 mb-16">
            {service.programs.map((program, pIndex) => (
              <motion.section
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`relative p-8 md:p-12 rounded-[3.5rem] border overflow-hidden ${theme.card}`}
              >
                <div className="flex flex-wrap items-center gap-4 mb-8">
                  <span className="px-4 py-1.5 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-bold">{program.tag}</span>
                  <div className="flex items-center gap-2 text-gray-400 text-sm font-mono"><Clock size={16} />{program.duration}</div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">{program.name}</h2>
                <p className="text-xl mb-12 max-w-4xl leading-relaxed text-gray-300">{program.overview}</p>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                  <div className="lg:col-span-2">
                    <h3 className="text-lg font-bold mb-6 flex items-center gap-2 text-accent/80 uppercase tracking-widest"><BookOpen size={20} /> カリキュラム</h3>
                    <div className="space-y-4">
                      {program.curriculum.map((item, cIndex) => (
                        <div key={cIndex} className="p-6 rounded-2xl bg-white/5 border border-white/5 flex gap-6">
                          <span className="text-accent font-mono font-bold shrink-0">{item.step}</span>
                          <div>
                            <h4 className="font-bold text-white mb-1">{item.title}</h4>
                            <p className="text-sm text-gray-400 whitespace-pre-wrap">{item.detail}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="lg:col-span-1">
                    <div className="p-8 rounded-3xl bg-accent/5 border border-accent/20 sticky top-24 shadow-2xl">
                      <h3 className="text-lg font-bold mb-6 flex items-center gap-2 text-accent uppercase tracking-widest"><Tag size={20} /> 費用</h3>
                      <div className="text-2xl font-bold text-white mb-2">{program.price}</div>
                      <p className="text-sm text-gray-400 leading-relaxed">{program.note}</p>
                      <Link href="/#contact" className="mt-8 flex items-center justify-center w-full py-4 rounded-xl bg-white text-black font-bold hover:bg-accent transition-all shadow-lg">相談する</Link>
                    </div>
                    {program.images && (
                      <div className="mt-8 grid grid-cols-2 gap-4">
                        {program.images.map((img, iIndex) => (
                          <div key={iIndex} className={`relative rounded-2xl overflow-hidden border border-white/10 ${iIndex % 3 === 0 ? 'col-span-2 aspect-video' : 'aspect-square'}`}>
                            <img src={img} alt="image" className="w-full h-full object-cover" />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.section>
            ))}
          </div>
        )}

        {/* Publishing Items */}
        {isPublishing && (
          <div className="space-y-24 mb-16">
            <section>
              <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
                <BookOpen className="text-accent" size={32} />
                著書実績
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {service.books?.map((book, index) => (
                  <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={`group relative flex flex-col gap-8 p-8 rounded-3xl border transition-all ${theme.card}`}>
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="w-full md:w-40 aspect-[3/4] bg-white/10 rounded-lg shrink-0 flex items-center justify-center border border-white/5 group-hover:scale-105 transition-transform overflow-hidden relative shadow-lg">
                        {book.image ? (
                          <img src={book.image} alt={book.title} className="w-full h-full object-cover" />
                        ) : (
                          <div className="text-gray-500 text-[10px] text-center px-2 uppercase tracking-widest font-bold">Book Cover</div>
                        )}
                      </div>
                      <div className="flex flex-col justify-center">
                        <h3 className="text-xl font-bold mb-4 text-accent">{book.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">{book.description}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-auto">
                      {book.amazonUrl && <Link href={book.amazonUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#FF9900]/10 border border-[#FF9900]/30 text-[#FF9900] font-bold text-sm hover:bg-[#FF9900] hover:text-white transition-all">Amazon</Link>}
                      {book.rakutenUrl && <Link href={book.rakutenUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#BF0000]/10 border border-[#BF0000]/30 text-[#BF0000] font-bold text-sm hover:bg-[#BF0000] hover:text-white transition-all">楽天ブックス</Link>}
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
            {service.media && service.media.length > 0 && (
              <section>
                <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
                  <Newspaper className="text-accent" size={32} />
                  メディア寄稿・連載
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {service.media.map((m, index) => (
                    <motion.div key={index} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className={`group p-6 rounded-2xl border transition-all flex flex-col ${theme.card}`}>
                      <div className="w-full aspect-[4/3] bg-white/5 rounded-lg mb-6 flex items-center justify-center border border-white/5 overflow-hidden group-hover:bg-white/10 transition-colors relative">
                        {m.image ? <img src={m.image} alt={m.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /> : <span className="text-gray-600 text-[10px] uppercase font-bold">Cover</span>}
                      </div>
                      <h4 className="text-lg font-bold mb-2">{m.name}</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">{m.detail}</p>
                    </motion.div>
                  ))}
                </div>
              </section>
            )}
          </div>
        )}

        {/* Case Studies (AI, Web etc) */}
        {!isSchool && !isTraining && service.caseStudies && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
              <Briefcase className="text-accent" size={32} />
              導入事例
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {service.caseStudies.map((study, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={`group flex flex-col gap-6 p-8 rounded-[2.5rem] border overflow-hidden transition-all ${theme.card}`}>
                  <div className="w-full aspect-video rounded-2xl overflow-hidden bg-white/10 border border-white/5">
                    <img src={study.image} alt={study.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-accent transition-colors whitespace-pre-wrap">{study.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{study.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* Targets & Benefits */}
        {(service.targets || service.benefits) && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {service.targets && service.targets.length > 0 && (
              <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={`p-10 rounded-[2.5rem] border ${theme.card}`}>
                <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-accent"><Users size={28} /> こんな方におすすめ</h2>
                <ul className="space-y-4">
                  {service.targets.map((target, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
                      <span className="text-lg leading-relaxed text-gray-300">{target}</span>
                    </li>
                  ))}
                </ul>
              </motion.section>
            )}
            {service.benefits && service.benefits.length > 0 && (
              <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className={`p-10 rounded-[2.5rem] border bg-accent/[0.03] border-accent/20 shadow-2xl`}>
                <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-accent"><Sparkles size={28} /> {service.benefitsTitle || '導入のメリット'}</h2>
                <ul className="space-y-4">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-100">
                      <CheckCircle2 className="text-accent shrink-0 mt-1" size={20} />
                      <span className="text-lg font-medium leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.section>
            )}
          </div>
        )}

        {/* FAQ Section */}
        {service.faq && service.faq.length > 0 && (
          <section className="max-w-4xl mx-auto mb-32">
            <h2 className="text-3xl font-black mb-16 text-center">よくあるご質問</h2>
            <div className="space-y-4">
              {service.faq.map((item, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={`rounded-[2rem] border transition-all duration-300 overflow-hidden ${
                      isOpen ? 'bg-white/10 border-accent/50 shadow-2xl' : 'bg-white/5 border-white/10 hover:border-white/20'
                    }`}
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      className="w-full p-8 md:p-10 flex items-center justify-between gap-6 text-left"
                    >
                      <div className="flex items-center gap-6">
                        <div className={`p-3 rounded-xl transition-colors ${isOpen ? 'bg-accent text-accent-foreground' : 'bg-white/5 text-accent'}`}>
                          <HelpCircle size={24} />
                        </div>
                        <h4 className="text-xl md:text-2xl font-black">{item.q}</h4>
                      </div>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        className="shrink-0 text-gray-500"
                      >
                        <ChevronDown size={28} />
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                        >
                          <div className="px-8 pb-10 md:px-24 md:pb-12 border-t border-white/5">
                            <p className="text-gray-300 leading-relaxed text-lg md:text-xl font-medium pt-8">
                              {item.a}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </section>
        )}

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          className="relative z-40 p-16 md:p-32 rounded-[4rem] text-center overflow-hidden shadow-2xl bg-gradient-to-br from-accent/30 via-background to-background border border-accent/30"
        >
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none" />
          <Mail className="mx-auto mb-10 text-accent animate-pulse" size={64} />
          <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight">
            {service.cta ? service.cta : '理想を現実に変える一歩を'}
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            {isPublishing 
              ? '書籍の執筆依頼、雑誌への寄稿、連載、または講演のご依頼など、多角的な視点からのアウトプットを通じて、貴社のプロジェクトに貢献いたします。お気軽にご相談ください。'
              : isSchool
              ? 'AIの波に乗り、あなたの可能性を最大限に引き出す準備はできていますか？同じ志を持つ仲間と共に、新しい時代のスキルを身につけましょう。'
              : '貴社の課題や個人の目標に合わせ、最適なソリューションをオーダーメイドでご提案いたします。まずはお気軽にご相談ください。'
            }
          </p>
          <Link 
            href={isSchool ? "/school-application" : "/#contact"} 
            className="relative z-50 inline-flex items-center gap-4 px-16 py-6 bg-orange-600 text-white font-bold rounded-full hover:bg-orange-500 hover:scale-105 transition-all shadow-[0_20px_50px_rgba(234,88,12,0.4)] text-2xl"
          >
            {service.cta ? service.cta : '無料で相談を始める'}
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
