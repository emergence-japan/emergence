import { contactSchema } from '@/lib/schema'

describe('contactSchema', () => {
  const validData = {
    company: 'Emergence-Japan LLC',
    name: '浜田 陽介',
    email: 'test@example.com',
    phone: '090-1234-5678',
    message: 'これはテストメッセージです。10文字以上である必要があります。'
  }

  it('validates a correct set of data', () => {
    const result = contactSchema.safeParse(validData)
    expect(result.success).toBe(true)
  })

  it('validates without optional fields', () => {
    const { company, phone, ...requiredData } = validData
    const result = contactSchema.safeParse(requiredData)
    expect(result.success).toBe(true)
  })

  it('fails when name is missing', () => {
    const { name, ...invalidData } = validData
    const result = contactSchema.safeParse(invalidData)
    expect(result.success).toBe(false)
  })

  it('fails when email is invalid', () => {
    const invalidData = { ...validData, email: 'not-an-email' }
    const result = contactSchema.safeParse(invalidData)
    expect(result.success).toBe(false)
  })

  it('fails when message is too short', () => {
    const invalidData = { ...validData, message: 'Too short' }
    const result = contactSchema.safeParse(invalidData)
    expect(result.success).toBe(false)
  })
})
