import { render, screen, fireEvent } from '@testing-library/react'
import WorksModal from '@/components/WorksModal'

describe('WorksModal', () => {
  const mockWork = {
    title: 'Test Project',
    category: 'Development',
    description: 'Detailed description of the test project.',
    client: 'Test Client',
    imageUrl: '/test-image.jpg'
  }

  it('renders the project details when open', () => {
    render(<WorksModal isOpen={true} work={mockWork} onClose={() => {}} />)
    expect(screen.getByText('Test Project')).toBeInTheDocument()
    expect(screen.getByText('Detailed description of the test project.')).toBeInTheDocument()
    expect(screen.getByText('Test Client')).toBeInTheDocument()
  })

  it('calls onClose when the close button is clicked', () => {
    const handleClose = jest.fn()
    render(<WorksModal isOpen={true} work={mockWork} onClose={handleClose} />)
    const closeButton = screen.getByRole('button', { name: /close/i })
    fireEvent.click(closeButton)
    expect(handleClose).toHaveBeenCalledTimes(1)
  })

  it('does not render anything when isOpen is false', () => {
    const { container } = render(<WorksModal isOpen={false} work={mockWork} onClose={() => {}} />)
    expect(container).toBeEmptyDOMElement()
  })
})
