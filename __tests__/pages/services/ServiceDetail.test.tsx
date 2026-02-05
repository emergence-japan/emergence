import { render, screen } from '@testing-library/react'
import ServiceDetailPage from '@/app/services/[slug]/page'
import React from 'react'

// Mock the HeroScene to avoid canvas issues in tests
jest.mock('../../../src/components/HeroScene', () => () => <div data-testid="hero-scene" />)

// Mock the Client component to simplify Server Component testing
jest.mock('../../../src/app/services/[slug]/ServiceDetailClient', () => {
  return function MockClient({ service }: { service: any }) {
    return (
      <div data-testid="service-client">
        <h1>{service.title}</h1>
        <a href="/">サービス一覧に戻る</a>
      </div>
    )
  }
})

describe('Service Detail Page', () => {
  it('renders correctly for AI Solution', async () => {
    const params = Promise.resolve({ slug: 'ai' })
    
    // Server components are just async functions that return JSX
    const Result = await ServiceDetailPage({ params })
    render(Result)
    
    expect(screen.getByText(/AIソリューション開発/i)).toBeInTheDocument()
  })

  it('renders the back to top link', async () => {
    const params = Promise.resolve({ slug: 'ai' })
    
    const Result = await ServiceDetailPage({ params })
    render(Result)
    
    expect(screen.getByText(/サービス一覧に戻る/i)).toBeInTheDocument()
  })
})