/* Floating Books — ambient continuous loop, no mouse interaction
   Journal page hero · warm paper tones + dark covers
   Bigger scale, plays like a looping ambient video */
import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

function ClosedBook({ coverColor = '#2a2015', pageColor = '#d8d0c0', w = 0.7, h = 0.95, d = 0.11 }) {
  return (
    <group>
      <mesh>
        <boxGeometry args={[w, h, d]} />
        <meshStandardMaterial color={coverColor} roughness={0.85} metalness={0} />
      </mesh>
      <mesh position={[0, 0, d * 0.46]}>
        <boxGeometry args={[w - 0.04, h - 0.04, 0.025]} />
        <meshStandardMaterial color={pageColor} roughness={0.9} />
      </mesh>
      <mesh position={[0, 0, -d * 0.46]}>
        <boxGeometry args={[w - 0.04, h - 0.04, 0.025]} />
        <meshStandardMaterial color={pageColor} roughness={0.9} />
      </mesh>
      <mesh position={[-w * 0.48, 0, 0]}>
        <boxGeometry args={[0.02, h, d + 0.01]} />
        <meshStandardMaterial color={coverColor} roughness={0.8} metalness={0.04} />
      </mesh>
    </group>
  )
}

function OpenBook({ coverColor = '#1e1a10', pageColor = '#e4ddd0', w = 0.7, h = 0.9, d = 0.045 }) {
  const angle = Math.PI / 9
  const xOffset = (w * 0.5) * Math.cos(angle)
  const zOffset = (w * 0.5) * Math.sin(angle)

  return (
    <group>
      <mesh rotation={[0, angle, 0]} position={[-xOffset, 0, zOffset * 0.5]}>
        <boxGeometry args={[w, h, d]} />
        <meshStandardMaterial color={pageColor} roughness={0.88} side={THREE.DoubleSide} />
      </mesh>
      <mesh rotation={[0, -angle, 0]} position={[xOffset, 0, zOffset * 0.5]}>
        <boxGeometry args={[w, h, d]} />
        <meshStandardMaterial color={pageColor} roughness={0.88} side={THREE.DoubleSide} />
      </mesh>
      <mesh position={[0, 0, -d * 0.5]}>
        <boxGeometry args={[0.07, h, d * 1.2]} />
        <meshStandardMaterial color={coverColor} roughness={0.82} metalness={0.04} />
      </mesh>
    </group>
  )
}

function BookStack({ coverColors, w = 0.72, h = 0.95 }) {
  const depths = [0.13, 0.11, 0.1]
  let yOff = 0
  return (
    <group>
      {depths.map((d, i) => {
        const y = yOff + d / 2
        yOff += d + 0.01
        return (
          <group key={i} position={[0, y - yOff / 2, 0]} rotation={[0, (i - 1) * 0.09, 0]}>
            <ClosedBook coverColor={coverColors[i]} w={w - i * 0.04} h={h - i * 0.02} d={d} />
          </group>
        )
      })}
    </group>
  )
}

// Bigger scale — books are 1.4× larger than previous version
const BOOKS = [
  {
    type: 'closed', position: [0, 0.2, 0], rotation: [0.1, 0.4, 0.08],
    floatSpeed: 0.55, floatIntensity: 0.55,
    coverColor: '#282018', w: 1.0, h: 1.38, d: 0.18,
  },
  {
    type: 'open', position: [3.5, 0.8, -1.0], rotation: [-0.12, -0.35, 0.15],
    floatSpeed: 0.42, floatIntensity: 0.62,
    coverColor: '#1e2a18', pageColor: '#dfd6c4', w: 1.1, h: 1.44, d: 0.055,
  },
  {
    type: 'closed', position: [-3.8, -0.7, -0.5], rotation: [0.2, 0.6, -0.1],
    floatSpeed: 0.65, floatIntensity: 0.42,
    coverColor: '#1c1820', w: 0.82, h: 1.12, d: 0.13,
  },
  {
    type: 'stack', position: [1.6, -3.2, -1.8], rotation: [0.08, -0.4, 0.05],
    floatSpeed: 0.45, floatIntensity: 0.48,
    coverColors: ['#222a18', '#1e1c20', '#28201a'],
  },
  {
    type: 'open', position: [-2.4, 3.6, -2.0], rotation: [-0.18, 0.5, -0.12],
    floatSpeed: 0.6, floatIntensity: 0.38,
    coverColor: '#28180e', pageColor: '#e8e0d0', w: 0.92, h: 1.24, d: 0.05,
  },
  {
    type: 'closed', position: [4.8, -2.2, -3.0], rotation: [-0.1, -0.55, 0.18],
    floatSpeed: 0.5, floatIntensity: 0.58,
    coverColor: '#201416', w: 0.9, h: 1.2, d: 0.14,
  },
  {
    type: 'closed', position: [-4.5, 1.8, -2.5], rotation: [0.22, 0.28, -0.08],
    floatSpeed: 0.7, floatIntensity: 0.32,
    coverColor: '#181c24', w: 1.12, h: 1.48, d: 0.22,
  },
]

function Scene() {
  const groupRef = useRef()

  useFrame(({ clock }) => {
    if (!groupRef.current) return
    const t = clock.getElapsedTime()
    groupRef.current.rotation.y += 0.0022
    groupRef.current.rotation.x = Math.sin(t * 0.18) * 0.05
  })

  return (
    <group ref={groupRef}>
      {BOOKS.map((book, i) => {
        const { type, position, rotation, floatSpeed, floatIntensity, ...props } = book
        return (
          <Float key={i} speed={floatSpeed} floatIntensity={floatIntensity} rotationIntensity={0.18}>
            <group position={position} rotation={rotation}>
              {type === 'closed' && <ClosedBook {...props} />}
              {type === 'open'   && <OpenBook   {...props} />}
              {type === 'stack'  && <BookStack  {...props} />}
            </group>
          </Float>
        )
      })}
    </group>
  )
}

export default function FloatingBooks() {
  return (
    <Canvas
      camera={{ position: [0, 0.8, 8], fov: 56 }}
      gl={{ alpha: true, antialias: true }}
      style={{ width: '100%', height: '100%', background: 'transparent' }}
    >
      <ambientLight intensity={0.38} />
      <directionalLight position={[4, 6, 4]}  intensity={1.2} color="#fff8f0" />
      <directionalLight position={[-4, 2, -3]} intensity={0.28} color="#c8d0e8" />
      <pointLight position={[0, 5, 3]} intensity={0.5} color="#ffe8d0" />
      <Scene />
    </Canvas>
  )
}
