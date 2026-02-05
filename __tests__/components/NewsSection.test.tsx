import { render, screen } from '@testing-library/react'
import NewsSection from '@/components/NewsSection'

describe('NewsSection', () => {
  it('renders the news section heading', () => {
    render(<NewsSection />)
    expect(screen.getByText(/News/i)).toBeInTheDocument()
  })

  it('renders the specific news about corporate site launch', () => {
    render(<NewsSection />)
    expect(screen.getByText(/Emergence-Japan LLC のコーポレートサイトを公開いたしました。/i)).toBeInTheDocument()
  })
})
