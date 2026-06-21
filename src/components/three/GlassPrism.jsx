import { useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Float } from '@react-three/drei'
import * as THREE from 'three'

const PRISMS = [
  { geo: 'OctahedronGeometry',  args: [1.8, 0],  pos: [0, 0, 0],        color: '#c0d0ff', opacity: 0.72 },
  { geo: 'TetrahedronGeometry', args: [1.1, 0],   pos: [2.9, 0.7, -0.5], color: '#ffc0d0', opacity: 0.68 },
  { geo: 'IcosahedronGeometry', args: [0.85, 0],  pos: [-2.4, -0.4, 0.8],color: '#c0ffc0', opacity: 0.65 },
  { geo: 'TetrahedronGeometry', args: [0.65, 0],  pos: [1.2, -1.8, 1.0], color: '#ffe0c0', opacity: 0.60 },
  { geo: 'OctahedronGeometry',  args: [0.55, 0],  pos: [-1.5, 2.0, -0.8],color: '#e0c0ff', opacity: 0.58 },
]

function PrismMesh({ geo, args, pos, color, opacity, floatSpeed = 1, floatIntensity = 0.8 }) {
  const ref = useRef()
  const geoObj = new THREE[geo](...args)

  useFrame(({ clock }) => {
    if (!ref.current) return
    const t = clock.getElapsedTime() * 0.22
    ref.current.rotation.x += 0.003
    ref.current.rotation.y += 0.0045
    ref.current.rotation.z += 0.0015
  })

  return (
    <Float speed={floatSpeed} floatIntensity={floatIntensity} rotationIntensity={0.4}>
      <mesh ref={ref} position={pos}>
        <primitive object={geoObj} attach="geometry" />
        <meshPhysicalMaterial
          metalness={0.05}
          roughness={0.0}
          color={color}
          transparent
          opacity={opacity}
          envMapIntensity={8}
          reflectivity={0.92}
        />
      </mesh>
    </Float>
  )
}

function Scene({ mouseRef }) {
  const groupRef = useRef()

  useFrame(({ clock }) => {
    if (!groupRef.current) return
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      mouseRef.current.x * 0.18 + clock.getElapsedTime() * 0.06,
      0.03
    )
  })

  return (
    <group ref={groupRef}>
      {PRISMS.map((p, i) => (
        <PrismMesh key={i} {...p} floatSpeed={0.8 + i * 0.25} floatIntensity={0.7 + i * 0.1} />
      ))}
    </group>
  )
}

export default function GlassPrism() {
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
      camera={{ position: [0, 0, 8], fov: 52 }}
      gl={{ alpha: true, antialias: true, toneMapping: THREE.ACESFilmicToneMapping }}
      style={{ width: '100%', height: '100%', background: 'transparent' }}
    >
      {/* Chromatic aberration simulation via colored lights */}
      <ambientLight intensity={0.5} />
      <pointLight position={[ 6,  4,  5]} intensity={6}   color="#ff3a6e" />
      <pointLight position={[-5, -3,  4]} intensity={6}   color="#3a6eff" />
      <pointLight position={[ 0,  6, -4]} intensity={5}   color="#3aff6e" />
      <pointLight position={[ 4, -5,  2]} intensity={3.5} color="#ffcc3a" />
      <pointLight position={[-3,  4,  3]} intensity={3}   color="#cc3aff" />
      <Environment preset="warehouse" />
      <Scene mouseRef={mouseRef} />
    </Canvas>
  )
}
