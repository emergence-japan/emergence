import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

// Mock HeroScene to avoid canvas issues
jest.mock('../../src/components/HeroScene', () => () => <div data-testid="hero-scene" />)

describe('Home Page', () => {
  it('renders the main heading', () => {
    render(<Home />)
    expect(screen.getByRole('heading', { name: /Innovating the Future/i })).toBeInTheDocument()
  })

  it('renders the action buttons', () => {
    render(<Home />)
    expect(screen.getByRole('button', { name: /Get Started/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Learn More/i })).toBeInTheDocument()
  })
})
