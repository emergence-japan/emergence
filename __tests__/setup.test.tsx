import { render } from '@testing-library/react'
import { motion } from 'framer-motion'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'

describe('Environment Setup', () => {
  it('should import framer-motion', () => {
    expect(motion).toBeDefined()
  })

  it('should import three', () => {
    expect(THREE).toBeDefined()
  })

  it('should import @react-three/fiber', () => {
    expect(Canvas).toBeDefined()
  })
})
