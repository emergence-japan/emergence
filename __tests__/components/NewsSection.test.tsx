import { render, screen } from '@testing-library/react'
import NewsSection from '@/components/NewsSection'

describe('NewsSection', () => {
  it('renders the news section heading', () => {
    render(<NewsSection />)
    expect(screen.getByText(/News/i)).toBeInTheDocument()
  })

  it('renders a list of news items', () => {
    render(<NewsSection />)
    const newsItems = screen.getAllByRole('listitem')
    expect(newsItems.length).toBeGreaterThan(0)
  })
})
