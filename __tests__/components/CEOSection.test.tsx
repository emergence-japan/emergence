import { render, screen } from '@testing-library/react'
import CEOSection from '@/components/CEOSection'

describe('CEOSection', () => {
  it('renders the CEO message and name', () => {
    render(<CEOSection />)
    expect(screen.getByText(/Message/i)).toBeInTheDocument()
    expect(screen.getByText(/CEO/i)).toBeInTheDocument()
  })

  it('renders an image placeholder or profile picture', () => {
    render(<CEOSection />)
    const img = screen.getByRole('img')
    expect(img).toBeInTheDocument()
  })
})
