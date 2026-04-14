import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kalpana Joyce Dovari — AI/ML Engineer',
  description: 'MSc Artificial Intelligence student at Northumbria University. Building intelligent systems that solve real-world problems.',
  keywords: ['AI Engineer', 'ML Engineer', 'Data Scientist', 'London', 'Portfolio'],
  authors: [{ name: 'Kalpana Joyce Dovari', url: 'https://github.com/kalpanajoycedovari' }],
  openGraph: {
    title: 'Kalpana Joyce Dovari — AI/ML Engineer',
    description: 'MSc AI · London · Building intelligent systems',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
