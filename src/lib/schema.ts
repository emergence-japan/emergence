import { z } from 'zod'

export const contactSchema = z.object({
  inquiryType: z.string().min(1, { message: 'お問い合わせ種別を選択してください' }),
  company: z.string().optional(),
  name: z.string().min(1, { message: 'お名前を入力してください' }),
  email: z.string().email({ message: '無効なメールアドレス形式です' }),
  phone: z.string().optional(),
  message: z.string().min(10, { message: 'お問い合わせ内容は10文字以上で入力してください' })
})

export const schoolApplicationSchema = z.object({
  name: z.string().min(1, { message: 'お名前を入力してください' }),
  email: z.string().email({ message: '無効なメールアドレス形式です' }),
  phone: z.string().optional(),
  occupation: z.string().min(1, { message: 'ご職業を選択してください' }),
  ageRange: z.string().min(1, { message: '年代を選択してください' }),
  aiLevel: z.string().min(1, { message: '現在の活用状況を選択してください' }),
  goal: z.string().min(1, { message: '特に学びたいことを選択してください' }),
  source: z.string().min(1, { message: '知ったきっかけを選択してください' }),
  paymentMethod: z.string().min(1, { message: 'お支払い方法を選択してください' }),
  agreeTax: z.boolean().refine(val => val === true, { message: '規約への同意が必要です' })
})

export type ContactFormData = z.infer<typeof contactSchema>
export type SchoolApplicationData = z.infer<typeof schoolApplicationSchema>
