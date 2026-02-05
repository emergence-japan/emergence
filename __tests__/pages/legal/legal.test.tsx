import { render, screen } from '@testing-library/react'
import PrivacyPage from '@/app/privacy/page'
import TermsPage from '@/app/terms/page'
import LegalPage from '@/app/legal/page'

describe('Legal Pages', () => {
  it('renders Privacy Policy page', () => {
    render(<PrivacyPage />)
    expect(screen.getByRole('heading', { name: /プライバシーポリシー/i })).toBeInTheDocument()
  })

  it('renders Terms of Service page', () => {
    render(<TermsPage />)
    expect(screen.getByRole('heading', { name: /利用規約/i })).toBeInTheDocument()
  })

  it('renders Specified Commercial Transactions Act page', () => {
    render(<LegalPage />)
    expect(screen.getByRole('heading', { name: /特定商取引法に基づく表記/i })).toBeInTheDocument()
  })
})
