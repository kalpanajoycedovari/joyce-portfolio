'use client'
import dynamic from 'next/dynamic'

const GoldenCanvas = dynamic(() => import('./GoldenCanvas'), { ssr: false })

export default function ClientCanvas() {
  return <GoldenCanvas />
}
