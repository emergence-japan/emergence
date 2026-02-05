import { render, screen } from '@testing-library/react'
import Header from '@/components/Header'

describe('Header', () => {
  it('renders the navigation', () => {
    render(<Header />)
    const nav = screen.getByRole('navigation')
    expect(nav).toBeInTheDocument()
  })

  it('renders the company name or logo', () => {
    render(<Header />)
    // Replace 'Your Company' with actual company name when known, or just check for heading
    const logo = screen.getByRole('heading', { level: 1 }) 
    expect(logo).toBeInTheDocument()
  })
})
