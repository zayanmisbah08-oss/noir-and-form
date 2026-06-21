import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Float } from '@react-three/drei'
import * as THREE from 'three'

const SHAPES = [
  { geoType: 'TetrahedronGeometry',  geoArgs: [0.85],    pos: [-2.8,  0.8,  0],    color: '#c8b4a0', speed: 0.32 },
  { geoType: 'OctahedronGeometry',   geoArgs: [0.75],    pos: [ 0,   -0.8,  0.5],  color: '#a0c0b0', speed: 0.44 },
  { geoType: 'IcosahedronGeometry',  geoArgs: [0.68, 0], pos: [ 2.8,  0.5, -0.5],  color: '#b0a8c8', speed: 0.36 },
  { geoType: 'DodecahedronGeometry', geoArgs: [0.55],    pos: [-0.9,  1.9, -1.0],  color: '#aaaaaa', speed: 0.28 },
  { geoType: 'IcosahedronGeometry',  geoArgs: [0.4,  0], pos: [ 1.3, -1.6,  0.9],  color: '#cccccc', speed: 0.52 },
]

function PolyShape({ geoType, geoArgs, pos, color, speed }) {
  const ref = useRef()
  const geo = useMemo(() => new THREE[geoType](...geoArgs), [geoType, geoArgs])

  useFrame(({ clock }) => {
    if (!ref.current) return
    const t = clock.getElapsedTime() * speed
    ref.current.rotation.x = t * 0.9
    ref.current.rotation.y = t * 1.3
  })

  return (
    <Float speed={speed * 2.5} floatIntensity={0.65} rotationIntensity={0.18}>
      <mesh ref={ref} position={pos}>
        <primitive object={geo} attach="geometry" />
        <meshStandardMaterial
          metalness={0.92}
          roughness={0.06}
          color={color}
          envMapIntensity={3.5}
        />
      </mesh>
    </Float>
  )
}

function Scene() {
  const groupRef = useRef()
  useFrame(({ clock }) => {
    if (!groupRef.current) return
    groupRef.current.rotation.y = clock.getElapsedTime() * 0.065
  })

  return (
    <group ref={groupRef}>
      {SHAPES.map((s, i) => (
        <PolyShape key={i} {...s} />
      ))}
    </group>
  )
}

export default function GeometricConstellation() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7.5], fov: 55 }}
      gl={{ alpha: true, antialias: true, toneMapping: THREE.ACESFilmicToneMapping }}
      style={{ width: '100%', height: '100%', background: 'transparent' }}
    >
      <ambientLight intensity={0.2} />
      <pointLight position={[5, 5, 5]}   intensity={3.5} color="#ffffff" />
      <pointLight position={[-3, -2, 4]} intensity={2.5} color="#c0d0ff" />
      <Environment preset="studio" />
      <Scene />
    </Canvas>
  )
}
