import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import ContactForm from '@/components/ContactForm'

describe('ContactForm', () => {
  it('renders all form fields', () => {
    render(<ContactForm />)
    expect(screen.getByLabelText(/お名前/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/メールアドレス/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/お問い合わせ内容/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /送信/i })).toBeInTheDocument()
  })

  it('shows error messages on invalid submission', async () => {
    render(<ContactForm />)
    fireEvent.click(screen.getByRole('button', { name: /送信/i }))

    await waitFor(() => {
      expect(screen.getByText(/お名前を入力してください/i)).toBeInTheDocument()
      expect(screen.getByText(/無効なメールアドレス形式です/i)).toBeInTheDocument()
      expect(screen.getByText(/お問い合わせ内容は10文字以上で入力してください/i)).toBeInTheDocument()
    })
  })

  it('calls onSuccess on valid submission', async () => {
    const handleSuccess = jest.fn()
    render(<ContactForm onSuccess={handleSuccess} />)

    fireEvent.change(screen.getByLabelText(/お名前/i), { target: { value: '浜田 陽介' } })
    fireEvent.change(screen.getByLabelText(/メールアドレス/i), { target: { value: 'test@example.com' } })
    fireEvent.change(screen.getByLabelText(/お問い合わせ内容/i), { target: { value: 'これはテストメッセージです。10文字以上です。' } })

    fireEvent.click(screen.getByRole('button', { name: /送信/i }))

    await waitFor(() => {
      expect(handleSuccess).toHaveBeenCalledTimes(1)
    }, { timeout: 3000 })
  })
})
