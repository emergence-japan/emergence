import { render, screen } from '@testing-library/react'
import Footer from '@/components/Footer'

describe('Footer', () => {
  it('renders the copyright text', () => {
    render(<Footer />)
    const copyright = screen.getByText(/All rights reserved/i)
    expect(copyright).toBeInTheDocument()
  })
})
