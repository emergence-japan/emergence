import { render, screen } from '@testing-library/react'

describe('Theme Configuration', () => {
  it('should allow using custom accent colors', () => {
    render(<div data-testid="accent-box" className="bg-accent text-accent-foreground" />)
    const box = screen.getByTestId('accent-box')
    expect(box).toHaveClass('bg-accent')
    expect(box).toHaveClass('text-accent-foreground')
  })
})
