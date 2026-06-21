/* Room Diorama — miniature architectural models, ambient background loop
   Work page hero · warm neutral materials · no mouse interaction
   Continuous slow rotation — plays like a looping ambient video */
import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

function LivingRoom({ wallColor = '#c4bdb0', floorColor = '#7a6a58', sofaColor = '#4a4238', tableColor = '#a09080' }) {
  return (
    <group>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[3.2, 0.06, 2.6]} />
        <meshStandardMaterial color={floorColor} roughness={0.85} metalness={0} />
      </mesh>
      <mesh position={[0, 1.05, -1.3]}>
        <boxGeometry args={[3.2, 2.1, 0.06]} />
        <meshStandardMaterial color={wallColor} roughness={0.9} metalness={0} />
      </mesh>
      <mesh position={[-1.6, 1.05, 0]}>
        <boxGeometry args={[0.06, 2.1, 2.6]} />
        <meshStandardMaterial color={wallColor} roughness={0.9} metalness={0} />
      </mesh>
      <mesh position={[-0.2, 0.28, 0.5]}>
        <boxGeometry args={[1.6, 0.46, 0.72]} />
        <meshStandardMaterial color={sofaColor} roughness={0.9} />
      </mesh>
      <mesh position={[-0.2, 0.6, 0.84]}>
        <boxGeometry args={[1.6, 0.5, 0.1]} />
        <meshStandardMaterial color={sofaColor} roughness={0.9} />
      </mesh>
      <mesh position={[0.7, 0.2, 0]}>
        <boxGeometry args={[0.8, 0.05, 0.5]} />
        <meshStandardMaterial color={tableColor} roughness={0.65} metalness={0.05} />
      </mesh>
      {[[-0.35, 0.1, -0.21], [0.35, 0.1, -0.21], [-0.35, 0.1, 0.21], [0.35, 0.1, 0.21]].map((p, i) => (
        <mesh key={i} position={[p[0] + 0.7, p[1], p[2]]}>
          <boxGeometry args={[0.04, 0.2, 0.04]} />
          <meshStandardMaterial color={tableColor} roughness={0.65} />
        </mesh>
      ))}
      <mesh position={[1.3, 0.65, -0.9]}>
        <boxGeometry args={[0.04, 1.3, 0.04]} />
        <meshStandardMaterial color="#a09888" roughness={0.5} metalness={0.25} />
      </mesh>
      <mesh position={[1.3, 1.35, -0.9]}>
        <cylinderGeometry args={[0.2, 0.14, 0.24, 7]} />
        <meshStandardMaterial color="#ddd4c0" roughness={0.85} />
      </mesh>
    </group>
  )
}

function Bedroom({ wallColor = '#b8b2a4', floorColor = '#6a5e50', bedColor = '#3e3830', headboardColor = '#322e28' }) {
  return (
    <group>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2.8, 0.06, 2.4]} />
        <meshStandardMaterial color={floorColor} roughness={0.85} metalness={0} />
      </mesh>
      <mesh position={[0, 1.0, -1.2]}>
        <boxGeometry args={[2.8, 2.0, 0.06]} />
        <meshStandardMaterial color={wallColor} roughness={0.9} metalness={0} />
      </mesh>
      <mesh position={[1.4, 1.0, 0]}>
        <boxGeometry args={[0.06, 2.0, 2.4]} />
        <meshStandardMaterial color={wallColor} roughness={0.9} metalness={0} />
      </mesh>
      <mesh position={[-0.1, 0.22, 0.2]}>
        <boxGeometry args={[2.0, 0.38, 1.5]} />
        <meshStandardMaterial color={bedColor} roughness={0.9} />
      </mesh>
      <mesh position={[-0.1, 0.44, 0.2]}>
        <boxGeometry args={[1.96, 0.14, 1.46]} />
        <meshStandardMaterial color="#cdc5b5" roughness={0.9} />
      </mesh>
      <mesh position={[-0.1, 0.75, -0.55]}>
        <boxGeometry args={[2.0, 0.9, 0.1]} />
        <meshStandardMaterial color={headboardColor} roughness={0.9} />
      </mesh>
      <mesh position={[1.0, 0.24, -0.5]}>
        <boxGeometry args={[0.42, 0.48, 0.36]} />
        <meshStandardMaterial color={bedColor} roughness={0.9} />
      </mesh>
      <mesh position={[1.0, 0.55, -0.5]}>
        <cylinderGeometry args={[0.1, 0.08, 0.18, 6]} />
        <meshStandardMaterial color="#d0c8b5" roughness={0.85} />
      </mesh>
    </group>
  )
}

function DiningRoom({ wallColor = '#bfb9ab', floorColor = '#80706a', tableColor = '#a09080', chairColor = '#4e4640' }) {
  return (
    <group>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[3.0, 0.06, 2.6]} />
        <meshStandardMaterial color={floorColor} roughness={0.8} />
      </mesh>
      <mesh position={[0, 1.0, -1.3]}>
        <boxGeometry args={[3.0, 2.0, 0.06]} />
        <meshStandardMaterial color={wallColor} roughness={0.9} />
      </mesh>
      <mesh position={[-1.5, 1.0, 0]}>
        <boxGeometry args={[0.06, 2.0, 2.6]} />
        <meshStandardMaterial color={wallColor} roughness={0.9} />
      </mesh>
      <mesh position={[0, 0.4, 0]}>
        <boxGeometry args={[1.9, 0.07, 0.95]} />
        <meshStandardMaterial color={tableColor} roughness={0.6} metalness={0.05} />
      </mesh>
      {[[-0.85, 0.2, -0.4], [0.85, 0.2, -0.4], [-0.85, 0.2, 0.4], [0.85, 0.2, 0.4]].map((p, i) => (
        <mesh key={i} position={p}>
          <boxGeometry args={[0.06, 0.4, 0.06]} />
          <meshStandardMaterial color={tableColor} roughness={0.6} />
        </mesh>
      ))}
      {[-0.72, 0.72].map((x, i) => (
        <group key={i}>
          <mesh position={[x, 0.22, 0]}>
            <boxGeometry args={[0.46, 0.06, 0.46]} />
            <meshStandardMaterial color={chairColor} roughness={0.9} />
          </mesh>
          <mesh position={[x, 0.57, 0.18]}>
            <boxGeometry args={[0.46, 0.62, 0.07]} />
            <meshStandardMaterial color={chairColor} roughness={0.9} />
          </mesh>
        </group>
      ))}
    </group>
  )
}

const ROOMS = [
  { Component: LivingRoom, position: [0, 0.5, 0],    scale: 0.82, rotation: [0.12, 0.38, 0.03],  floatSpeed: 0.5, floatIntensity: 0.35 },
  { Component: Bedroom,    position: [5.6, 0.9, -1.8], scale: 0.74, rotation: [-0.07, -0.32, 0.04], floatSpeed: 0.42, floatIntensity: 0.4  },
  { Component: DiningRoom, position: [-5.0, -1.1, -1.4], scale: 0.70, rotation: [0.05, 0.5, -0.03],  floatSpeed: 0.55, floatIntensity: 0.3  },
  { Component: LivingRoom, position: [2.0, -3.5, -2.8], scale: 0.60, rotation: [0.18, -0.55, 0.06],  floatSpeed: 0.38, floatIntensity: 0.45,
    wallColor: '#b5b0a6', floorColor: '#6a6058', sofaColor: '#524a40' },
  { Component: Bedroom,    position: [-2.8, 3.8, -3.5], scale: 0.58, rotation: [-0.1, 0.62, -0.05],  floatSpeed: 0.62, floatIntensity: 0.28,
    wallColor: '#c0b9ae', floorColor: '#5e5245' },
]

function Scene() {
  const groupRef = useRef()

  useFrame(({ clock }) => {
    if (!groupRef.current) return
    const t = clock.getElapsedTime()
    groupRef.current.rotation.y += 0.0018
    groupRef.current.rotation.x = Math.sin(t * 0.14) * 0.06
  })

  return (
    <group ref={groupRef}>
      {ROOMS.map((room, i) => {
        const { Component, position, scale, rotation, floatSpeed, floatIntensity, ...props } = room
        return (
          <Float key={i} speed={floatSpeed} floatIntensity={floatIntensity} rotationIntensity={0.08}>
            <group position={position} scale={scale} rotation={rotation}>
              <Component {...props} />
            </group>
          </Float>
        )
      })}
    </group>
  )
}

export default function RoomDiorama() {
  return (
    <Canvas
      camera={{ position: [0, 2, 10], fov: 52 }}
      gl={{ alpha: true, antialias: true }}
      style={{ width: '100%', height: '100%', background: 'transparent' }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[6, 9, 5]}  intensity={1.3} color="#fff6ee" />
      <directionalLight position={[-5, 3, -4]} intensity={0.35} color="#e8f0ff" />
      <pointLight position={[0, 6, 4]} intensity={0.5} color="#fff8f0" />
      <Scene />
    </Canvas>
  )
}
