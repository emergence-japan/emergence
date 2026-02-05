'use client'

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial, Float } from '@react-three/drei'
import { useScroll, useTransform } from 'framer-motion'
import * as THREE from 'three'

const AnimatedSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null)
  const { scrollYProgress } = useScroll()
  
  // Scrolly parallax values
  const yPos = useTransform(scrollYProgress, [0, 1], [0, -2])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useFrame((state) => {
    if (!meshRef.current) return
    const t = state.clock.getElapsedTime()
    meshRef.current.rotation.x = Math.cos(t / 4) / 2
    meshRef.current.rotation.y = Math.sin(t / 4) / 2
    meshRef.current.rotation.z = Math.sin(t / 4) / 2
    meshRef.current.position.y = (Math.sin(t / 1.5) / 10) + yPos.get()
  })

  return (
    <Float speed={1.4} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 100, 100]} scale={1.5}>
        <MeshDistortMaterial
          color="#00f0ff"
          speed={3}
          distort={0.4}
          radius={1}
          transparent
          opacity={opacity.get() as unknown as number}
        />
      </Sphere>
    </Float>
  )
}

const HeroScene = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        <AnimatedSphere />
      </Canvas>
    </div>
  )
}

export default HeroScene
