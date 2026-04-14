import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import ClientCanvas from '@/components/ClientCanvas'

export default function Home() {
  return (
    <main style={{ position: 'relative' }}>
      <ClientCanvas />
      <div style={{
        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
        background: 'radial-gradient(ellipse at 20% 50%, rgba(201,168,76,0.05) 0%, transparent 60%)',
        pointerEvents: 'none', zIndex: 0,
      }} />
      <Navbar />
      <Hero />
      <About />
      <Projects limit={4} />
      <Contact />
    </main>
  )
}
