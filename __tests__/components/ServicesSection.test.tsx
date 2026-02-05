import { render, screen } from '@testing-library/react'
import ServicesSection from '@/components/ServicesSection'

// Mock ServiceCard to verify it's being used
jest.mock('../../src/components/ServiceCard', () => {
  return function MockServiceCard({ title }: { title: string }) {
    return <div data-testid="service-card">{title}</div>
  }
})

describe('ServicesSection', () => {
  it('renders the section title', () => {
    render(<ServicesSection />)
    expect(screen.getByText(/Services/i)).toBeInTheDocument()
  })

  it('renders exactly 6 service cards', () => {
    render(<ServicesSection />)
    const cards = screen.getAllByTestId('service-card')
    expect(cards.length).toBe(6)
  })
})
