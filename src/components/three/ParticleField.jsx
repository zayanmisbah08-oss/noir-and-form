import { useRef, useEffect, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const COUNT = 2000

function Particles({ mouseRef }) {
  const pointsRef = useRef()

  const geo = useMemo(() => {
    const positions = new Float32Array(COUNT * 3)
    for (let i = 0; i < COUNT; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * 18
      positions[i * 3 + 1] = (Math.random() - 0.5) * 14
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    return g
  }, [])

  useFrame(({ clock }) => {
    if (!pointsRef.current) return
    const t = clock.getElapsedTime() * 0.055
    pointsRef.current.rotation.y = t
    pointsRef.current.rotation.x = Math.sin(t * 0.45) * 0.1 - mouseRef.current.y * 0.06
    pointsRef.current.rotation.z = Math.cos(t * 0.3)  * 0.04
  })

  return (
    <points ref={pointsRef} geometry={geo}>
      <pointsMaterial
        size={0.055}
        color="#ffffff"
        transparent
        opacity={0.52}
        sizeAttenuation
      />
    </points>
  )
}

export default function ParticleField() {
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (e) => {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth)  * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      }
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 60 }}
      gl={{ alpha: true, antialias: false }}
      style={{ width: '100%', height: '100%', background: 'transparent' }}
    >
      <Particles mouseRef={mouseRef} />
    </Canvas>
  )
}
