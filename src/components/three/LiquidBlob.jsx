import { useRef, useEffect, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import * as THREE from 'three'

function Blob({ mouseRef }) {
  const meshRef = useRef()

  const geo = useMemo(() => new THREE.SphereGeometry(2.0, 64, 64), [])
  const origPos = useMemo(() => geo.attributes.position.array.slice(), [geo])

  useFrame(({ clock }) => {
    if (!meshRef.current) return
    const t = clock.getElapsedTime() * 0.48
    const pos = geo.attributes.position
    const orig = origPos

    for (let i = 0; i < pos.count; i++) {
      const ox = orig[i * 3]
      const oy = orig[i * 3 + 1]
      const oz = orig[i * 3 + 2]
      const len = Math.sqrt(ox * ox + oy * oy + oz * oz)
      if (len < 0.001) continue
      const nx = ox / len
      const ny = oy / len
      const nz = oz / len
      const wave = (
        Math.sin(ox * 1.6 + t) *
        Math.cos(oy * 1.8 + t * 0.85) *
        Math.sin(oz * 1.4 + t * 0.65)
      ) * 0.36

      pos.setXYZ(i, ox + nx * wave, oy + ny * wave, oz + nz * wave)
    }
    pos.needsUpdate = true
    geo.computeVertexNormals()

    meshRef.current.rotation.y += 0.004
    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x,
      -mouseRef.current.y * 0.28,
      0.04
    )
  })

  return (
    <mesh ref={meshRef}>
      <primitive object={geo} attach="geometry" />
      <meshStandardMaterial
        metalness={0.96}
        roughness={0.04}
        color="#8a8aaa"
        envMapIntensity={4.5}
      />
    </mesh>
  )
}

export default function LiquidBlob() {
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
      camera={{ position: [0, 0, 6], fov: 50 }}
      gl={{ alpha: true, antialias: true, toneMapping: THREE.ACESFilmicToneMapping }}
      style={{ width: '100%', height: '100%', background: 'transparent' }}
    >
      <ambientLight intensity={0.25} />
      <pointLight position={[5, 5, 5]}   intensity={2.5} color="#ffffff" />
      <pointLight position={[-5, -3, 3]} intensity={1.8} color="#a0c0ff" />
      <spotLight   position={[2, 8, -2]} intensity={1.2} color="#ffd0a0" />
      <Environment preset="studio" />
      <Blob mouseRef={mouseRef} />
    </Canvas>
  )
}
