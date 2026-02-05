import { render, screen, fireEvent } from '@testing-library/react'
import CTAButton from '@/components/CTAButton'

describe('CTAButton', () => {
  it('renders with children', () => {
    render(<CTAButton>Contact Us</CTAButton>)
    expect(screen.getByRole('button', { name: /Contact Us/i })).toBeInTheDocument()
  })

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn()
    render(<CTAButton onClick={handleClick}>Contact Us</CTAButton>)
    fireEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
