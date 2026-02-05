import { z } from 'zod'

export const contactSchema = z.object({
  company: z.string().optional(),
  name: z.string().min(1, { message: 'お名前を入力してください' }),
  email: z.string().email({ message: '無効なメールアドレス形式です' }),
  phone: z.string().optional(),
  message: z.string().min(10, { message: 'お問い合わせ内容は10文字以上で入力してください' })
})

export type ContactFormData = z.infer<typeof contactSchema>
