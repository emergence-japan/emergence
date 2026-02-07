'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, CheckCircle2, ShieldCheck, CreditCard, Landmark, ExternalLink, AlertCircle, ArrowRight, Sparkles } from 'lucide-react'
import { schoolApplicationSchema, SchoolApplicationData } from '@/lib/schema'

export default function SchoolApplicationPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [selectedPayment, setSelectedPayment] = useState<string>('')

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
    watch
  } = useForm<SchoolApplicationData>({
    resolver: zodResolver(schoolApplicationSchema),
    defaultValues: {
      agreeTax: false
    }
  })

  const paymentMethod = watch('paymentMethod')

  useEffect(() => {
    if (isSubmitted && Object.keys(errors).length > 0) {
      console.error('Form Validation Errors:', errors)
    }
  }, [errors, isSubmitted])

  const onSubmit = async (data: SchoolApplicationData) => {
    const endpoint = process.env.NEXT_PUBLIC_SCHOOL_FORM_ENDPOINT || process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT
    
    if (!endpoint || endpoint.includes('xxxx')) {
      console.error('GAS Endpoint not configured.')
      alert('システム設定エラー：申し込みフォームのエンドポイントが設定されていません。お手数ですが info@emergence-japan.com までご連絡ください。')
      return
    }

    setIsSubmitting(true)
    setSelectedPayment(data.paymentMethod)
    try {
      // GASに確実にデータを届けるためのフォーム形式
      const params = new URLSearchParams()
      Object.entries(data).forEach(([key, value]) => {
        params.append(key, value as string)
      })
      params.append('type', 'school_application')

      await fetch(endpoint, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params.toString(),
      })
      
      setSubmitted(true)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } catch (error) {
      console.error('Submission failed:', error)
      alert('送信に失敗しました。お手数ですが、info@emergence-japan.com まで直接ご連絡ください。')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white py-20 flex items-center relative overflow-hidden">
        {/* Sunset Background for Success */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute bottom-[-20%] left-[-10%] w-[1000px] h-[1000px] bg-orange-600/20 rounded-full blur-[150px] opacity-60" />
          <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[120px] opacity-40" />
        </div>

        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-10 shadow-[0_0_50px_rgba(249,115,22,0.4)] border border-orange-400/30">
              <CheckCircle2 className="text-white" size={48} />
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-orange-100 to-amber-200">
              お申し込み完了
            </h1>
            <p className="text-gray-300 text-xl leading-relaxed max-w-2xl mx-auto mb-16">
              新しい世界へようこそ。<br />
              {selectedPayment === 'bank' 
                ? 'ご入力いただいたメールアドレス宛に、振込先案内をお送りしました。' 
                : '最後に、以下のボタンより決済のお手続きをお願いいたします。'
              }
            </p>

            {selectedPayment === 'paypal' && (
              <div className="space-y-8">
                <Link 
                  href="https://www.paypal.com/ncp/payment/89ZQRL79Q95ZU"
                  className="inline-flex items-center gap-4 px-16 py-8 bg-[#0070ba] text-white font-black text-3xl rounded-3xl hover:bg-[#005ea6] hover:scale-105 transition-all shadow-[0_25px_60px_rgba(0,112,186,0.4)] group border border-white/10"
                >
                  <CreditCard size={32} />
                  PayPalで支払う
                  <ArrowRight size={32} className="group-hover:translate-x-2 transition-transform" />
                </Link>
                <p className="text-base text-orange-400/80 font-bold animate-pulse">
                  ※決済完了後にコミュニティへ招待されます
                </p>
              </div>
            )}

            {selectedPayment === 'bank' && (
              <div className="p-8 md:p-12 rounded-[4rem] bg-white/[0.03] backdrop-blur-3xl border border-orange-500/20 text-left space-y-8 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                <h3 className="text-2xl font-black flex items-center gap-4 text-orange-400">
                  <Landmark size={28} /> お振込のご案内
                </h3>
                <div className="space-y-4 relative z-10">
                  <div className="bg-black/40 p-8 rounded-3xl font-mono text-lg md:text-xl border border-white/5 leading-relaxed text-white shadow-inner">
                    銀行名：住信SBIネット銀行<br />
                    支店名：法人第一支店<br />
                    預金種目：普通<br />
                    口座番号：１２９１９９６<br />
                    口座名義：EMERGENCE-JAPAN合同会社
                  </div>
                </div>
                <div className="flex justify-between items-center bg-orange-500/10 p-6 rounded-2xl border border-orange-500/30">
                  <span className="text-lg font-bold text-orange-200 uppercase tracking-widest">Amount</span>
                  <span className="text-3xl font-black text-white">11,000円<span className="text-sm ml-2 font-medium text-gray-400">（税込）</span></span>
                </div>
              </div>
            )}

            <div className="mt-20 pt-10 border-t border-white/5">
              <Link href="/" className="text-gray-500 hover:text-orange-400 transition-all font-bold flex items-center justify-center gap-2 tracking-[0.2em]">
                EXIT TO HOME <ExternalLink size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    )
  }

  const inputStyles = "w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all text-white appearance-none backdrop-blur-sm"
  const labelStyles = "block text-xs font-black text-orange-200/60 mb-2 ml-2 uppercase tracking-[0.2em]"
  const errorStyles = "text-red-400 text-xs mt-2 ml-2 flex items-center gap-1 font-bold"

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white relative overflow-hidden py-20 font-sans">
      {/* Dramatic Sunset Background */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        {/* Sky glow */}
        <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-purple-900/10 to-transparent" />
        {/* The Sunset Horizon */}
        <div className="absolute bottom-0 inset-x-0 h-2/3 bg-gradient-to-t from-orange-900/20 via-orange-600/5 to-transparent" />
        {/* Solar orbs */}
        <div className="absolute bottom-[-10%] right-[-5%] w-[800px] h-[800px] bg-orange-600/10 rounded-full blur-[150px] opacity-60" />
        <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-rose-600/10 rounded-full blur-[120px] opacity-40" />
        {/* Moving technology elements */}
        <div className="absolute inset-0 opacity-20 bg-[url('/grid.svg')] [mask-image:radial-gradient(ellipse_at_center,black,transparent)]" />
      </div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <Link href="/services/school" className="group inline-flex items-center gap-3 text-gray-500 hover:text-orange-400 mb-16 transition-all font-black tracking-[0.3em] text-[10px] uppercase">
          <div className="w-8 h-px bg-gray-700 group-hover:bg-orange-500 transition-all" />
          BACK TO SERVICE
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          {/* Main Visual Banner */}
          <div className="relative w-full aspect-[21/9] rounded-[3rem] overflow-hidden border border-white/5 mb-16 shadow-[0_30px_80px_rgba(0,0,0,0.5)] group">
            <Image 
              src="/bootcamp/AI Boot Camp02.png" 
              alt="生成AIブートキャンプ" 
              fill 
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-8 left-8 flex items-center gap-2">
              <Sparkles className="text-orange-400" size={20} />
              <span className="text-white font-black tracking-[0.2em] text-xs uppercase">Transform your future</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-end gap-8 mb-12 border-l-4 border-orange-500 pl-8">
            <div className="shrink-0 w-24 h-24 rounded-[2rem] bg-white/5 border border-white/10 p-3 backdrop-blur-2xl shadow-2xl">
              <Image 
                src="/bootcamp/aibootcamp.png" 
                alt="Logo" 
                width={100} 
                height={100} 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <span className="text-orange-500 font-black text-sm tracking-[0.4em] uppercase block mb-2">Registration</span>
              <h1 className="text-4xl md:text-7xl font-black tracking-tighter text-white">
                生成AIブートキャンプ <span className="text-orange-500">参加申し込み</span>
              </h1>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-gradient-to-r from-orange-500/10 to-transparent border border-orange-500/20 backdrop-blur-sm flex items-start gap-6 shadow-xl">
            <ShieldCheck className="text-orange-500 shrink-0 mt-1" size={28} />
            <p className="text-base text-gray-200 leading-relaxed font-medium">
              ご入力いただいた情報は、当スクールの運営および各種ご案内のみに使用いたします。<br />
              お申し込み後、通常数分以内に詳細な案内メールをお送りします。
            </p>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-12 p-8 md:p-16 rounded-[4rem] bg-white/[0.02] border border-white/10 backdrop-blur-3xl shadow-[0_50px_100px_rgba(0,0,0,0.4)] relative"
        >
          {/* Rim light effect */}
          <div className="absolute -inset-px rounded-[4rem] border border-gradient-to-br from-orange-500/30 to-transparent pointer-events-none" />

          <section className="space-y-8">
            <h2 className="text-lg font-black tracking-[0.3em] uppercase text-gray-500 flex items-center gap-4">
              <span className="w-12 h-px bg-gray-800" />
              お客様情報
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative">
                <label htmlFor="name" className={labelStyles}>お名前</label>
                <input id="name" {...register('name')} className={inputStyles} placeholder="山田 太郎" />
                {errors.name && <p className={errorStyles}><AlertCircle size={14} /> {errors.name.message}</p>}
              </div>
              <div className="relative">
                <label htmlFor="email" className={labelStyles}>メールアドレス</label>
                <input id="email" type="email" {...register('email')} className={inputStyles} placeholder="test@example.com" />
                {errors.email && <p className={errorStyles}><AlertCircle size={14} /> {errors.email.message}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="phone" className={labelStyles}>電話番号（任意）</label>
                <input id="phone" {...register('phone')} className={inputStyles} placeholder="090-1234-5678" />
              </div>
              <div>
                <label htmlFor="ageRange" className={labelStyles}>年代</label>
                <select id="ageRange" {...register('ageRange')} className={inputStyles}>
                  <option value="" className="bg-[#1a1a1a]">選択してください</option>
                  <option value="under20" className="bg-[#1a1a1a]">20代未満</option>
                  <option value="20s" className="bg-[#1a1a1a]">20代</option>
                  <option value="30s" className="bg-[#1a1a1a]">30代</option>
                  <option value="40s" className="bg-[#1a1a1a]">40代</option>
                  <option value="50s" className="bg-[#1a1a1a]">50代</option>
                  <option value="60s" className="bg-[#1a1a1a]">60代</option>
                  <option value="70s" className="bg-[#1a1a1a]">70代以上</option>
                </select>
                {errors.ageRange && <p className={errorStyles}><AlertCircle size={14} /> {errors.ageRange.message}</p>}
              </div>
            </div>
          </section>

          <section className="space-y-8 pt-8 border-t border-white/5">
            <h2 className="text-lg font-black tracking-[0.3em] uppercase text-gray-500 flex items-center gap-4">
              <span className="w-12 h-px bg-gray-800" />
              プロフィール
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="occupation" className={labelStyles}>ご職業</label>
                <select id="occupation" {...register('occupation')} className={inputStyles}>
                  <option value="" className="bg-[#1a1a1a]">選択してください</option>
                  <option value="employee" className="bg-[#1a1a1a]">会社員</option>
                  <option value="public" className="bg-[#1a1a1a]">公務員</option>
                  <option value="executive" className="bg-[#1a1a1a]">経営者・役員</option>
                  <option value="freelance" className="bg-[#1a1a1a]">自営業・フリーランス</option>
                  <option value="homemaker" className="bg-[#1a1a1a]">主婦・主夫</option>
                  <option value="student" className="bg-[#1a1a1a]">学生</option>
                  <option value="other" className="bg-[#1a1a1a]">その他</option>
                </select>
                {errors.occupation && <p className={errorStyles}><AlertCircle size={14} /> {errors.occupation.message}</p>}
              </div>
              <div>
                <label htmlFor="aiLevel" className={labelStyles}>AIの活用状況</label>
                <select id="aiLevel" {...register('aiLevel')} className={inputStyles}>
                  <option value="" className="bg-[#1a1a1a]">選択してください</option>
                  <option value="none" className="bg-[#1a1a1a]">全く使ったことがない</option>
                  <option value="beginner" className="bg-[#1a1a1a]">触ったことはある</option>
                  <option value="intermediate" className="bg-[#1a1a1a]">日常的に使っている</option>
                  <option value="advanced" className="bg-[#1a1a1a]">業務でフル活用している</option>
                </select>
                {errors.aiLevel && <p className={errorStyles}><AlertCircle size={14} /> {errors.aiLevel.message}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="goal" className={labelStyles}>特に学びたいこと</label>
              <select id="goal" {...register('goal')} className={inputStyles}>
                <option value="" className="bg-[#1a1a1a]">選択してください</option>
                <option value="basic" className="bg-[#1a1a1a]">生成AIの基本操作をマスターしたい</option>
                <option value="efficiency" className="bg-[#1a1a1a]">実務での効率化手法を知りたい</option>
                <option value="prompt" className="bg-[#1a1a1a]">プロンプト設計を深く学びたい</option>
                <option value="app" className="bg-[#1a1a1a]">自分専用のAIアプリを作ってみたい</option>
                <option value="latest" className="bg-[#1a1a1a]">常に最新情報をキャッチアップしたい</option>
              </select>
              {errors.goal && <p className={errorStyles}><AlertCircle size={14} /> {errors.goal.message}</p>}
            </div>

            <div>
              <label htmlFor="source" className={labelStyles}>どこで当スクールを知りましたか？</label>
              <select id="source" {...register('source')} className={inputStyles}>
                <option value="" className="bg-[#1a1a1a]">選択してください</option>
                <option value="sns" className="bg-[#1a1a1a]">SNS (X, Facebook等)</option>
                <option value="referral" className="bg-[#1a1a1a]">知人からの紹介</option>
                <option value="seminar" className="bg-[#1a1a1a]">セミナー・講演</option>
                <option value="other" className="bg-[#1a1a1a]">その他</option>
              </select>
              {errors.source && <p className={errorStyles}><AlertCircle size={14} /> {errors.source.message}</p>}
            </div>
          </section>

          {/* Payment Method */}
          <section className="space-y-8 pt-8 border-t border-white/5">
            <h3 className="text-xl font-black flex items-center gap-4 text-white">
              <CreditCard className="text-orange-500" />
              お支払い方法の選択
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <label className={`relative p-8 rounded-[2rem] border transition-all cursor-pointer flex flex-col gap-6 overflow-hidden group ${paymentMethod === 'bank' ? 'bg-orange-500/10 border-orange-500 shadow-[0_0_40px_rgba(249,115,22,0.2)]' : 'bg-white/5 border-white/10 hover:border-white/20'}`}>
                {paymentMethod === 'bank' && <motion.div layoutId="glow" className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent pointer-events-none" />}
                <input type="radio" {...register('paymentMethod')} value="bank" className="absolute top-6 right-6 accent-orange-500 w-6 h-6" />
                <Landmark className={paymentMethod === 'bank' ? 'text-orange-500' : 'text-gray-500 group-hover:text-orange-400 transition-colors'} size={40} />
                <div>
                  <p className="font-black text-xl text-white">銀行振込</p>
                  <p className="text-sm text-gray-400 mt-2 leading-relaxed font-medium">送信後に振込先口座を案内します。確実な手続きを希望される方へ。</p>
                </div>
              </label>
              <label className={`relative p-8 rounded-[2rem] border transition-all cursor-pointer flex flex-col gap-6 overflow-hidden group ${paymentMethod === 'paypal' ? 'bg-[#0070ba]/10 border-[#0070ba] shadow-[0_0_40px_rgba(0,112,186,0.2)]' : 'bg-white/5 border-white/10 hover:border-white/20'}`}>
                {paymentMethod === 'paypal' && <motion.div layoutId="glow" className="absolute inset-0 bg-gradient-to-br from-[#0070ba]/20 to-transparent pointer-events-none" />}
                <input type="radio" {...register('paymentMethod')} value="paypal" className="absolute top-6 right-6 accent-[#0070ba] w-6 h-6" />
                <CreditCard className={paymentMethod === 'paypal' ? 'text-[#0070ba]' : 'text-gray-500 group-hover:text-blue-400 transition-colors'} size={40} />
                <div>
                  <p className="font-black text-xl text-white">PayPal / Card</p>
                  <p className="text-sm text-gray-400 mt-2 leading-relaxed font-medium">クレジット決済が可能です。即時の申し込み確定が可能です。</p>
                </div>
              </label>
            </div>
            {errors.paymentMethod && <p className={errorStyles}><AlertCircle size={14} /> {errors.paymentMethod.message}</p>}
          </section>

          <div className="pt-8 p-10 rounded-[3rem] bg-gradient-to-br from-orange-500/20 to-transparent border border-orange-500/30 relative overflow-hidden group">
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-orange-500/10 rounded-full blur-[50px] group-hover:scale-150 transition-transform duration-1000" />
            <label className="flex items-center gap-6 cursor-pointer relative z-10">
              <input type="checkbox" {...register('agreeTax')} className="w-8 h-8 rounded-lg border-white/20 bg-white/5 text-orange-500 focus:ring-orange-500 accent-orange-500 shadow-xl" />
              <span className="text-xl md:text-2xl font-black text-white group-hover:text-orange-300 transition-colors tracking-tighter">
                参加費用 11,000円（税込）は一括払いです。
              </span>
            </label>
            {errors.agreeTax && <p className={`${errorStyles} mt-4 text-base`}><AlertCircle size={16} /> {errors.agreeTax.message}</p>}
          </div>

          <div className="pt-4">
            {Object.keys(errors).length > 0 && (
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="p-6 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-400 text-base flex items-center gap-3 mb-8 font-bold shadow-xl"
              >
                <AlertCircle size={20} />
                入力内容に不備があります。赤枠の項目を確認してください。
              </motion.div>
            )}

            <motion.button
              whileHover={{ scale: 1.02, translateY: -2 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting}
              type="submit"
              className="w-full py-8 rounded-[2.5rem] bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 text-white font-black text-2xl md:text-3xl shadow-[0_25px_60px_rgba(234,88,12,0.4)] hover:shadow-[0_30px_80px_rgba(234,88,12,0.6)] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-4 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-[-20deg]" />
              {isSubmitting ? (
                <span className="flex items-center gap-3">
                  <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                  PROCESSING...
                </span>
              ) : (
                <>
                  <Sparkles size={28} />
                  この内容で参加を申し込む
                  <ArrowRight size={28} className="group-hover:translate-x-2 transition-transform" />
                </>
              )}
            </motion.button>
          </div>
        </motion.form>
      </div>
    </div>
  )
}
