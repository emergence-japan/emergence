import { render } from '@testing-library/react'
import HeroScene from '@/components/HeroScene'

// Mocking React Three Fiber
jest.mock('@react-three/fiber', () => ({
  Canvas: ({ children }: { children: React.ReactNode }) => <div data-testid="canvas">{children}</div>,
  useFrame: jest.fn(),
}))

// Mocking Framer Motion scroll hooks
jest.mock('framer-motion', () => ({
  ...jest.requireActual('framer-motion'),
  useScroll: () => ({ scrollYProgress: { get: () => 0 } }),
  useTransform: () => ({ get: () => 0 }),
}))

// Mocking React Three Drei to avoid issues with specialized components
jest.mock('@react-three/drei', () => ({
  Sphere: ({ children }: { children: React.ReactNode }) => <div data-testid="sphere">{children}</div>,
  MeshDistortMaterial: () => <div data-testid="material" />,
  Float: ({ children }: { children: React.ReactNode }) => <div data-testid="float">{children}</div>,
}))

describe('HeroScene', () => {
  it('renders the 3D canvas container', () => {
    render(<HeroScene />)
    expect(document.querySelector('[data-testid="canvas"]')).toBeInTheDocument()
  })
})
