/* ArchPlanes — deconstructed architectural model for Studio hero
   Intersecting thin slab planes suggesting spatial volumes.
   Warm limestone material, dark background — visually distinct from Home's chrome sphere */
import { useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const PANELS = [
  // Large horizontal slab — floor/datum
  { size: [4.6, 0.07, 2.8],  pos: [0, -0.9, 0],     rot: [0, 0.1, 0] },
  // Tall back wall panel
  { size: [3.8, 2.6, 0.07],  pos: [-0.3, 0.5, -1.2], rot: [0, 0.14, 0] },
  // Side wall panel (perpendicular)
  { size: [0.07, 2.2, 2.5],  pos: [-2.1, 0.3, 0],    rot: [0, 0, 0.03] },
  // Raised horizontal slab — mezzanine/table
  { size: [2.4, 0.07, 1.4],  pos: [0.8, 0.9, 0.2],   rot: [0.06, -0.16, 0] },
  // Accent vertical panel — slightly angled
  { size: [1.6, 1.5, 0.07],  pos: [1.5, -0.1, 0.8],  rot: [0, -0.32, 0.04] },
]

const MATERIAL_COLOR = '#c0b8ac'

function Scene({ mouseRef }) {
  const groupRef = useRef()

  useFrame(({ clock }) => {
    if (!groupRef.current) return
    const t = clock.getElapsedTime()
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      mouseRef.current.x * 0.14 + t * 0.016,
      0.028
    )
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      -mouseRef.current.y * 0.07 + 0.06,
      0.028
    )
  })

  return (
    <group ref={groupRef}>
      {PANELS.map((p, i) => (
        <mesh key={i} position={p.pos} rotation={p.rot}>
          <boxGeometry args={p.size} />
          <meshStandardMaterial
            color={MATERIAL_COLOR}
            roughness={0.70}
            metalness={0.06}
          />
        </mesh>
      ))}
    </group>
  )
}

export default function ArchPlanes() {
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
      camera={{ position: [0, 1.5, 9], fov: 48 }}
      gl={{ alpha: true, antialias: true }}
      style={{ width: '100%', height: '100%', background: 'transparent' }}
    >
      <ambientLight intensity={0.45} />
      <directionalLight position={[5, 8, 4]}  intensity={1.4} color="#fff4e8" />
      <directionalLight position={[-4, 2, -3]} intensity={0.3} color="#e0e8ff" />
      <Scene mouseRef={mouseRef} />
    </Canvas>
  )
}
