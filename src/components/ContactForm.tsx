'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import { contactSchema, ContactFormData } from '@/lib/schema'
import { useState } from 'react'
import SuccessMessage from './SuccessMessage'

interface ContactFormProps {
  onSuccess?: () => void
}

const ContactForm = ({ onSuccess }: ContactFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  })

  // バリデーションエラーを監視
  if (Object.keys(errors).length > 0) {
    console.log('入力エラーあり:', errors)
  }

  const onSubmit = async (data: ContactFormData) => {
    const endpoint = process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT
    
    console.log('--- フォーム送信開始 ---')
    console.log('宛先URL:', endpoint)
    console.log('送信データ:', data)

    if (!endpoint || endpoint.includes('xxxx')) {
      console.error('GAS Endpoint not configured.')
      alert('システム設定エラー：お問い合わせフォームのエンドポイントが設定されていません。管理者にお問い合わせください。')
      return
    }

    setIsSubmitting(true)
    
    try {
      const params = new URLSearchParams()
      Object.entries(data).forEach(([key, value]) => {
        params.append(key, value as string)
      })

      console.log('送信パラメータ:', params.toString())

      await fetch(endpoint, {
        method: 'POST',
        mode: 'no-cors',
        body: params, // URLSearchParamsをそのまま渡すとブラウザが自動でContent-Typeを設定します
      })
      
      console.log('fetch完了（no-corsモードのためレスポンス詳細は不明）')
      setIsSubmitting(false)
      setSubmitted(true)
      if (onSuccess) onSuccess()
    } catch (error) {
      console.error('Submission failed:', error)
      alert('送信に失敗しました。時間をおいて再度お試しいただくか、お電話にてご連絡ください。')
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return <SuccessMessage />
  }

  const inputStyles = "w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-white"
  const labelStyles = "block text-sm font-medium text-gray-400 mb-2"
  const errorStyles = "text-red-400 text-xs mt-1"

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-2xl mx-auto p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-xl">
      <div>
        <label htmlFor="inquiryType" className={labelStyles}>お問い合わせ種別 <span className="text-accent">*</span></label>
        <select
          id="inquiryType"
          {...register('inquiryType')}
          className={`${inputStyles} appearance-none cursor-pointer`}
          defaultValue=""
        >
          <option value="" disabled className="bg-gray-900">選択してください</option>
          <option value="ai_solution" className="bg-gray-900">AIソリューション開発について</option>
          <option value="web_app" className="bg-gray-900">Web / アプリ開発について</option>
          <option value="dx_consulting" className="bg-gray-900">DXコンサルティングについて</option>
          <option value="training" className="bg-gray-900">社員研修について</option>
          <option value="publishing" className="bg-gray-900">出版・執筆のご依頼について</option>
          <option value="other" className="bg-gray-900">その他のお問い合わせ</option>
        </select>
        {errors.inquiryType && <p className={errorStyles}>{errors.inquiryType.message}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className={labelStyles}>お名前 <span className="text-accent">*</span></label>
          <input
            id="name"
            {...register('name')}
            className={inputStyles}
            placeholder="浜田 陽介"
          />
          {errors.name && <p className={errorStyles}>{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="company" className={labelStyles}>会社名</label>
          <input
            id="company"
            {...register('company')}
            className={inputStyles}
            placeholder="Emergence-Japan LLC"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className={labelStyles}>メールアドレス <span className="text-accent">*</span></label>
          <input
            id="email"
            type="email"
            {...register('email')}
            className={inputStyles}
            placeholder="test@example.com"
          />
          {errors.email && <p className={errorStyles}>{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="phone" className={labelStyles}>電話番号</label>
          <input
            id="phone"
            {...register('phone')}
            className={inputStyles}
            placeholder="090-1234-5678"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelStyles}>お問い合わせ内容 <span className="text-accent">*</span></label>
        <textarea
          id="message"
          rows={5}
          {...register('message')}
          className={inputStyles}
          placeholder="お問い合わせ内容を入力してください"
        />
        {errors.message && <p className={errorStyles}>{errors.message.message}</p>}
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 rounded-xl bg-accent text-accent-foreground font-bold text-lg shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? '送信中...' : '送信する'}
      </motion.button>
    </form>
  )
}

export default ContactForm
