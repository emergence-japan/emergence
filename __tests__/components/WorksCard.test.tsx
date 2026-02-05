import { render, screen, fireEvent } from '@testing-library/react'
import WorksCard from '@/components/WorksCard'

describe('WorksCard', () => {
  const mockWork = {
    title: 'Test Project',
    category: 'Development',
    description: 'Brief description.',
    imageUrl: '/test.jpg'
  }

  it('renders the title and category', () => {
    render(<WorksCard work={mockWork} onClick={() => {}} />)
    expect(screen.getByText('Test Project')).toBeInTheDocument()
    const categories = screen.getAllByText('Development')
    expect(categories.length).toBeGreaterThanOrEqual(1)
  })

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn()
    render(<WorksCard work={mockWork} onClick={handleClick} />)
    fireEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
