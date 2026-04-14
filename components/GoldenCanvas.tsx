'use client'
import { useEffect, useRef } from 'react'

export default function GoldenCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    let THREE: typeof import('three')
    let renderer: import('three').WebGLRenderer
    let scene: import('three').Scene
    let camera: import('three').PerspectiveCamera
    let particles: import('three').Points
    let animationId: number
    let mouseX = 0
    let mouseY = 0

    const init = async () => {
      THREE = await import('three')

      const canvas = canvasRef.current
      if (!canvas) return

      // Scene
      scene = new THREE.Scene()
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
      camera.position.z = 5

      renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      renderer.setClearColor(0x000000, 0)

      // Gold particle geometry — large cloud of floating dust
      const particleCount = 2000
      const positions = new Float32Array(particleCount * 3)
      const colors = new Float32Array(particleCount * 3)
      const sizes = new Float32Array(particleCount)

      // Gold color palette
      const goldPalette = [
        [0.788, 0.659, 0.298], // #C9A84C
        [0.910, 0.788, 0.494], // #E8C97E
        [0.831, 0.596, 0.165], // #D4982A
        [0.545, 0.408, 0.078], // #8B6814
        [0.969, 0.910, 0.710], // #F7E8B5
      ]

      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 20
        positions[i * 3 + 1] = (Math.random() - 0.5) * 20
        positions[i * 3 + 2] = (Math.random() - 0.5) * 10

        const color = goldPalette[Math.floor(Math.random() * goldPalette.length)]
        colors[i * 3] = color[0]
        colors[i * 3 + 1] = color[1]
        colors[i * 3 + 2] = color[2]

        sizes[i] = Math.random() * 3 + 0.5
      }

      const geometry = new THREE.BufferGeometry()
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
      geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1))

      const material = new THREE.PointsMaterial({
        size: 0.04,
        vertexColors: true,
        transparent: true,
        opacity: 0.7,
        sizeAttenuation: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      })

      particles = new THREE.Points(geometry, material)
      scene.add(particles)

      // Nebula-like glow layers
      for (let layer = 0; layer < 3; layer++) {
        const layerCount = 300
        const layerPositions = new Float32Array(layerCount * 3)
        const layerColors = new Float32Array(layerCount * 3)

        const cx = (Math.random() - 0.5) * 8
        const cy = (Math.random() - 0.5) * 8

        for (let i = 0; i < layerCount; i++) {
          const theta = Math.random() * Math.PI * 2
          const r = Math.random() * 3
          layerPositions[i * 3] = cx + Math.cos(theta) * r
          layerPositions[i * 3 + 1] = cy + Math.sin(theta) * r
          layerPositions[i * 3 + 2] = (Math.random() - 0.5) * 2

          const t = Math.random()
          layerColors[i * 3] = 0.6 + t * 0.3
          layerColors[i * 3 + 1] = 0.4 + t * 0.3
          layerColors[i * 3 + 2] = t * 0.1
        }

        const layerGeo = new THREE.BufferGeometry()
        layerGeo.setAttribute('position', new THREE.BufferAttribute(layerPositions, 3))
        layerGeo.setAttribute('color', new THREE.BufferAttribute(layerColors, 3))

        const layerMat = new THREE.PointsMaterial({
          size: 0.06,
          vertexColors: true,
          transparent: true,
          opacity: 0.15,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        })
        scene.add(new THREE.Points(layerGeo, layerMat))
      }

      // Mouse tracking
      const onMouseMove = (e: MouseEvent) => {
        mouseX = (e.clientX / window.innerWidth - 0.5) * 2
        mouseY = -(e.clientY / window.innerHeight - 0.5) * 2
      }
      window.addEventListener('mousemove', onMouseMove)

      // Resize
      const onResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
      }
      window.addEventListener('resize', onResize)

      // Animate
      let time = 0
      const animate = () => {
        animationId = requestAnimationFrame(animate)
        time += 0.001

        particles.rotation.y = time * 0.05 + mouseX * 0.15
        particles.rotation.x = time * 0.03 + mouseY * 0.1

        const pos = particles.geometry.attributes.position.array as Float32Array
        for (let i = 0; i < particleCount; i++) {
          pos[i * 3 + 1] += Math.sin(time + i * 0.01) * 0.0003
        }
        particles.geometry.attributes.position.needsUpdate = true

        camera.position.x += (mouseX * 0.3 - camera.position.x) * 0.02
        camera.position.y += (mouseY * 0.2 - camera.position.y) * 0.02
        camera.lookAt(scene.position)

        renderer.render(scene, camera)
      }
      animate()

      return () => {
        window.removeEventListener('mousemove', onMouseMove)
        window.removeEventListener('resize', onResize)
      }
    }

    const cleanup = init()

    return () => {
      cancelAnimationFrame(animationId)
      if (renderer) renderer.dispose()
      cleanup.then(fn => fn && fn())
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.65,
      }}
    />
  )
}
