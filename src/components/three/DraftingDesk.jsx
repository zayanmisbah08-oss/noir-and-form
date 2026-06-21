/* DraftingDesk — studio workspace, completely rebuilt
   No ruler-like objects. Pencils are vertical in a cup holder, not lying flat.
   Auto-rotating ambient loop, no mouse interaction. */
import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Scene() {
  const groupRef = useRef()

  useFrame(({ clock }) => {
    if (!groupRef.current) return
    const t = clock.getElapsedTime()
    groupRef.current.rotation.y = t * 0.12
    groupRef.current.rotation.x = Math.sin(t * 0.18) * 0.08 - 0.15
  })

  return (
    <group ref={groupRef}>

      {/* ── DESK SURFACE ── */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[5.6, 0.14, 3.8]} />
        <meshStandardMaterial color="#2c2015" roughness={0.84} metalness={0.02} />
      </mesh>

      {/* ── DESK LEGS ── */}
      {[[-2.5, -0.75, -1.7], [2.5, -0.75, -1.7], [-2.5, -0.75, 1.7], [2.5, -0.75, 1.7]].map((p, i) => (
        <mesh key={i} position={p}>
          <boxGeometry args={[0.14, 1.5, 0.14]} />
          <meshStandardMaterial color="#221508" roughness={0.86} />
        </mesh>
      ))}

      {/* ── LARGE BLUEPRINT SHEET (clearly paper-shaped, wide) ── */}
      <mesh position={[-0.2, 0.09, 0.1]} rotation={[0, 0.04, 0]}>
        <boxGeometry args={[4.0, 0.014, 3.0]} />
        <meshStandardMaterial color="#e0dbd2" roughness={0.9} />
      </mesh>

      {/* ── BLUEPRINT SHEET 2 (overlapping, rotated) ── */}
      <mesh position={[0.6, 0.11, -0.4]} rotation={[0, -0.16, 0]}>
        <boxGeometry args={[2.8, 0.014, 2.1]} />
        <meshStandardMaterial color="#d8d3c8" roughness={0.9} />
      </mesh>

      {/* ── PENCIL HOLDER CUP ── */}
      <mesh position={[1.8, 0.26, -1.0]}>
        <cylinderGeometry args={[0.14, 0.12, 0.38, 12]} />
        <meshStandardMaterial color="#4a3828" roughness={0.82} />
      </mesh>
      {/* Pencil 1 — vertical, slight tilt */}
      <mesh position={[1.76, 0.60, -0.96]} rotation={[0.12, 0, 0.08]}>
        <cylinderGeometry args={[0.020, 0.020, 0.54, 7]} />
        <meshStandardMaterial color="#e8d060" roughness={0.72} />
      </mesh>
      <mesh position={[1.76 + Math.sin(0.08) * 0.28, 0.60 + 0.27, -0.96 + Math.sin(0.12) * 0.28]}>
        <coneGeometry args={[0.020, 0.09, 7]} />
        <meshStandardMaterial color="#181210" roughness={0.92} />
      </mesh>
      {/* Pencil 2 — slightly different tilt */}
      <mesh position={[1.86, 0.58, -1.04]} rotation={[-0.08, 0, -0.10]}>
        <cylinderGeometry args={[0.020, 0.020, 0.50, 7]} />
        <meshStandardMaterial color="#a8c8e0" roughness={0.72} />
      </mesh>
      {/* Pencil 3 — upright */}
      <mesh position={[1.80, 0.62, -1.06]} rotation={[0.04, 0, 0.04]}>
        <cylinderGeometry args={[0.020, 0.020, 0.56, 7]} />
        <meshStandardMaterial color="#d0a870" roughness={0.72} />
      </mesh>

      {/* ── COFFEE MUG ── */}
      <mesh position={[2.0, 0.28, 1.1]}>
        <cylinderGeometry args={[0.19, 0.16, 0.40, 14]} />
        <meshStandardMaterial color="#ccc4ba" roughness={0.75} />
      </mesh>
      {/* Mug interior */}
      <mesh position={[2.0, 0.44, 1.1]}>
        <cylinderGeometry args={[0.16, 0.16, 0.04, 14]} />
        <meshStandardMaterial color="#110a04" roughness={0.95} />
      </mesh>
      {/* Mug handle */}
      <mesh position={[2.21, 0.28, 1.1]} rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[0.11, 0.022, 8, 14, Math.PI]} />
        <meshStandardMaterial color="#beb6ac" roughness={0.75} />
      </mesh>

      {/* ── DESK LAMP ── */}
      <mesh position={[2.2, 0.1, -1.3]}>
        <cylinderGeometry args={[0.20, 0.20, 0.06, 12]} />
        <meshStandardMaterial color="#3a3a3a" roughness={0.52} metalness={0.42} />
      </mesh>
      <mesh position={[2.2, 0.55, -1.3]} rotation={[0, 0, 0.1]}>
        <boxGeometry args={[0.04, 0.88, 0.04]} />
        <meshStandardMaterial color="#363636" roughness={0.45} metalness={0.45} />
      </mesh>
      <mesh position={[2.30, 1.02, -1.3]} rotation={[0, 0, Math.PI / 2]}>
        <boxGeometry args={[0.04, 0.65, 0.04]} />
        <meshStandardMaterial color="#363636" roughness={0.45} metalness={0.45} />
      </mesh>
      <mesh position={[2.60, 0.96, -1.3]} rotation={[0, 0, -0.28]}>
        <coneGeometry args={[0.26, 0.30, 8, 1, true]} />
        <meshStandardMaterial color="#c8a860" roughness={0.80} side={THREE.DoubleSide} />
      </mesh>

      {/* ── BOOK STACK (two chunky books, clearly book-shaped) ── */}
      <mesh position={[-1.9, 0.22, 0.2]} rotation={[0, 0.06, 0]}>
        <boxGeometry args={[1.1, 0.28, 1.5]} />
        <meshStandardMaterial color="#1e2022" roughness={0.88} />
      </mesh>
      <mesh position={[-1.86, 0.43, 0.14]} rotation={[0, -0.05, 0]}>
        <boxGeometry args={[1.05, 0.24, 1.42]} />
        <meshStandardMaterial color="#2a1e14" roughness={0.88} />
      </mesh>

      {/* ── ERASER (small block on paper) ── */}
      <mesh position={[0.6, 0.118, 1.25]} rotation={[0, 0.18, 0]}>
        <boxGeometry args={[0.26, 0.10, 0.14]} />
        <meshStandardMaterial color="#e8beb8" roughness={0.9} />
      </mesh>

    </group>
  )
}

export default function DraftingDesk() {
  return (
    <Canvas
      camera={{ position: [1.5, 6, 7], fov: 42 }}
      gl={{ alpha: true, antialias: true }}
      style={{ width: '100%', height: '100%', background: 'transparent' }}
    >
      <ambientLight intensity={0.55} />
      <directionalLight position={[4, 10, 5]}  intensity={1.5} color="#ffffff" castShadow />
      <directionalLight position={[-5, 4, -3]} intensity={0.35} color="#dce8f8" />
      <pointLight position={[2.7, 2.0, -1.2]} intensity={1.6} color="#ffffff" />
      <Scene />
    </Canvas>
  )
}
