import { services, ServiceSlug } from '@/lib/services'
import Link from 'next/link'
import HeroScene from '@/components/HeroScene'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'
import { Metadata } from 'next'
import { motion } from 'framer-motion'
// Note: framer-motion components need to be in a client component.
// We will create a wrapper for the animations.
import ServiceDetailClient from './ServiceDetailClient'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const service = services[slug as ServiceSlug]
  return {
    title: `${service?.title || 'Service'} | Emergence-Japan LLC`,
    description: service?.description || '',
  }
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = services[slug as ServiceSlug]

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <p>Service not found.</p>
      </div>
    )
  }

  return (
    <div className="relative min-h-screen bg-background">
      <HeroScene />
      <ServiceDetailClient service={service} />
    </div>
  )
}