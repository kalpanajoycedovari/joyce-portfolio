'use client'
import Navbar from '@/components/Navbar'
import Contact from '@/components/Contact'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const posts = [
  {
    title: 'Building a Multi-Agent Pipeline with LangGraph',
    excerpt: 'How I built CaptionCook — a three-agent system where each agent specialises in research, planning, and writing. The surprises, the failures, and what actually worked.',
    date: 'April 2025',
    tag: 'AI Agents',
    readTime: '6 min read',
    emoji: '🤖',
  },
  {
    title: 'Deploying AI at the Edge with Cloudflare Workers',
    excerpt: 'My experience building ScamCheck Agent — running Llama 3.1 inference on Cloudflare\'s edge network with Durable Objects and WebSockets. What edge AI actually feels like.',
    date: 'March 2025',
    tag: 'Edge AI',
    readTime: '8 min read',
    emoji: '⚡',
  },
  {
    title: 'Fine-tuning Wav2Vec 2.0 for Noisy Audio',
    excerpt: 'Speech recognition in the real world is messy. Here\'s how I fine-tuned Wav2Vec 2.0 on domain-specific audio and what I learned about handling noise in PyTorch.',
    date: 'February 2025',
    tag: 'ML',
    readTime: '10 min read',
    emoji: '🎙️',
  },
  {
    title: 'From Figma to Firebase: Building Solite\'s Corner',
    excerpt: 'What it actually takes to build a social platform from scratch — invite systems, real-time notifications, mood filters, and the bug that taught me how Firestore UIDs work.',
    date: 'January 2025',
    tag: 'Full Stack',
    readTime: '7 min read',
    emoji: '🌿',
  },
  {
    title: 'What 1.6 Million Job Listings Taught Me About the UK AI Market',
    excerpt: 'I scraped and visualised 1.6M job listings for my UK Job Market Dashboard. The salary gaps, the skill mismatches, and what companies are actually hiring for in 2025.',
    date: 'December 2024',
    tag: 'Data',
    readTime: '5 min read',
    emoji: '📊',
  },
  {
    title: 'Learning Go at 2am: A Beginner\'s Honest Diary',
    excerpt: 'I\'ve been learning Go and Zig alongside my MSc. This is an honest account of the confusion, the aha moments, and why systems programming makes you a better AI engineer.',
    date: 'November 2024',
    tag: 'Learning',
    readTime: '4 min read',
    emoji: '📝',
  },
]

function BlogCard({ post, index }: { post: typeof posts[0], index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        padding: '36px',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
      }}
      whileHover={{
        y: -10,
        boxShadow: '0 32px 80px rgba(139,105,20,0.13), 0 8px 24px rgba(139,105,20,0.08)',
        borderColor: 'rgba(201,168,76,0.4)',
      }}
    >
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, var(--gold), transparent)', opacity: 0, transition: 'opacity 0.4s' }} className="top-line" />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontSize: '1.8rem' }}>{post.emoji}</span>
          <span className="gold-tag">{post.tag}</span>
        </div>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.1em' }}>{post.readTime}</span>
          <span style={{ fontSize: '0.65rem', color: 'var(--gold-dark)', letterSpacing: '0.1em', opacity: 0.8 }}>{post.date}</span>
        </div>
      </div>

      <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.5rem', fontWeight: 500, color: 'var(--ink)', marginBottom: '12px', lineHeight: 1.3 }}>
        {post.title}
      </h2>
      <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '24px' }}>{post.excerpt}</p>

      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--gold-dark)', fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: "'Jost', sans-serif" }}>
        <span>Coming Soon</span>
        <span>→</span>
      </div>
    </motion.article>
  )
}

export default function BlogPage() {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })

  return (
    <main>
      <Navbar />
      <div className="page-hero">
        <motion.div ref={heroRef} initial={{ opacity: 0, y: 30 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}>
          <p style={{ fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold-dark)', marginBottom: '12px', fontFamily: "'Jost', sans-serif" }}>Writing</p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 300, color: 'var(--ink)', lineHeight: 1.1 }}>
            The <span className="gold-text">Blog</span>
          </h1>
          <p style={{ maxWidth: '500px', marginTop: '16px', color: 'var(--text-muted)', fontSize: '0.95rem', fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic' }}>
            Thoughts on AI, engineering, building in public, and learning out loud.
          </p>
        </motion.div>
      </div>

      <section style={{ padding: '80px 8vw 120px', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '800px', margin: '0 auto' }}>
          {posts.map((post, i) => (
            <BlogCard key={i} post={post} index={i} />
          ))}
        </div>
      </section>
      <Contact />
    </main>
  )
}
