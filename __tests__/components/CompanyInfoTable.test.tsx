import { render, screen } from '@testing-library/react'
import CompanyInfoTable from '@/components/CompanyInfoTable'

describe('CompanyInfoTable', () => {
  const mockData = [
    { label: '社名', value: 'Emergence-Japan LLC' },
    { label: '設立', value: '2026年2月' },
  ]

  it('renders all info rows provided in data', () => {
    render(<CompanyInfoTable data={mockData} />)
    expect(screen.getByText('社名')).toBeInTheDocument()
    expect(screen.getByText('Emergence-Japan LLC')).toBeInTheDocument()
    expect(screen.getByText('設立')).toBeInTheDocument()
    expect(screen.getByText('2026年2月')).toBeInTheDocument()
  })
})
