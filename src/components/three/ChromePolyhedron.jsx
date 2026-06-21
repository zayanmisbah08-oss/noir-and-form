/* ChromePolyhedron — React Three Fiber
   Faceted icosahedron (subdivisions=1) with chrome MeshStandardMaterial
   Auto-rotation Y + X · Mouse parallax tilts the group via useFrame lerp
   Environment preset="studio" provides the reflective HDRI */
import { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Float } from '@react-three/drei'
import * as THREE from 'three'

function PolyhedronMesh({ mouse }) {
  const meshRef = useRef(null)
  const groupRef = useRef(null)

  useFrame((_, delta) => {
    if (!meshRef.current || !groupRef.current) return
    /* Auto-rotation — continuous clockwise/slight tilt */
    meshRef.current.rotation.y += delta * 0.45
    meshRef.current.rotation.x += delta * 0.18

    /* Mouse parallax — smooth lerp toward mouse position */
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      mouse.current.x * 0.55,
      0.06
    )
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      -mouse.current.y * 0.35,
      0.06
    )
  })

  return (
    <group ref={groupRef}>
      <Float speed={1.4} rotationIntensity={0.15} floatIntensity={0.6}>
        <mesh ref={meshRef} castShadow>
          {/* Subdivisions=1 keeps the faceted chrome look */}
          <icosahedronGeometry args={[2.0, 1]} />
          <meshStandardMaterial
            metalness={1}
            roughness={0.05}
            color="#999999"
            envMapIntensity={3.5}
          />
        </mesh>
      </Float>
    </group>
  )
}

export default function ChromePolyhedron() {
  const mouse = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (e) => {
      mouse.current = {
        x: (e.clientX / window.innerWidth)  * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      }
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 48 }}
      gl={{ alpha: true, antialias: true, toneMapping: THREE.ACESFilmicToneMapping }}
      style={{ background: 'transparent', width: '100%', height: '100%' }}
    >
      {/* Key light — warm */}
      <pointLight position={[6,  5,  5]} intensity={4}  color="#ffffff" />
      {/* Fill light — cool blue */}
      <pointLight position={[-5, -3,  4]} intensity={2}  color="#b8c8ff" />
      {/* Rim light */}
      <spotLight
        position={[2, 8, -2]}
        intensity={5}
        angle={0.25}
        penumbra={0.8}
        color="#ffffff"
      />
      {/* Bounce */}
      <pointLight position={[0, -6, 2]} intensity={0.8} color="#888888" />

      {/* Studio HDRI — provides realistic chrome reflections */}
      <Environment preset="studio" />

      <PolyhedronMesh mouse={mouse} />
    </Canvas>
  )
}
