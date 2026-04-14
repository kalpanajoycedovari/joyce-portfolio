import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Journey from '@/components/Journey'
import Projects from '@/components/Projects'
import Stack from '@/components/Stack'
import Contact from '@/components/Contact'
import ClientCanvas from '@/components/ClientCanvas'

export default function Home() {
  return (
    <main style={{ position: 'relative', minHeight: '100vh' }}>
      <ClientCanvas />

      <div style={{
        position: 'fixed',
        top: 0, left: 0, right: 0, bottom: 0,
        background: 'radial-gradient(ellipse at 20% 50%, rgba(201,168,76,0.04) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(139,105,20,0.05) 0%, transparent 50%)',
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      <Navbar />
      <Hero />
      <About />
      <Journey />
      <Projects />
      <Stack />
      <Contact />
    </main>
  )
}
