import { render, screen } from '@testing-library/react'
import ServiceCard from '@/components/ServiceCard'
import { Activity } from 'lucide-react'

describe('ServiceCard', () => {
  const defaultProps = {
    title: 'Test Service',
    description: 'This is a test description.',
    icon: Activity,
    href: '/services/test'
  }

  it('renders title and description', () => {
    render(<ServiceCard {...defaultProps} />)
    expect(screen.getByText('Test Service')).toBeInTheDocument()
    expect(screen.getByText('This is a test description.')).toBeInTheDocument()
  })

  it('renders the icon', () => {
    render(<ServiceCard {...defaultProps} />)
    // Lucide icons render as SVG, we check if an SVG is present or use a data-testid if we add one
    const svg = document.querySelector('svg')
    expect(svg).toBeInTheDocument()
  })

  it('is wrapped in a link with the correct href', () => {
    render(<ServiceCard {...defaultProps} />)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/services/test')
  })
})
