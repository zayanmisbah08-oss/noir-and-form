import { useRef, useEffect, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function GridPlane({ size = 12, divs = 12, rotation = [0,0,0], position = [0,0,0], opacity = 0.2, color = '#b0b8b4' }) {
  const geo = useMemo(() => {
    const pts = []
    const step = size / divs
    for (let i = 0; i <= divs; i++) {
      const p = -size / 2 + i * step
      pts.push(-size/2, 0, p,  size/2, 0, p)
      pts.push(p, 0, -size/2,  p, 0,  size/2)
    }
    const arr = new Float32Array(pts.length)
    pts.forEach((v, i) => { arr[i] = v })
    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.BufferAttribute(arr, 3))
    return g
  }, [size, divs])

  return (
    <group position={position} rotation={rotation}>
      <lineSegments geometry={geo}>
        <lineBasicMaterial color={color} transparent opacity={opacity} />
      </lineSegments>
    </group>
  )
}

function Scene({ mouseRef }) {
  const groupRef = useRef()

  useFrame(({ clock }) => {
    if (!groupRef.current) return
    const t = clock.getElapsedTime()
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      mouseRef.current.x * 0.28 + t * 0.028,
      0.03
    )
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      -mouseRef.current.y * 0.14 + 0.22,
      0.03
    )
  })

  return (
    <group ref={groupRef}>
      <GridPlane size={16} divs={14} rotation={[0, 0, 0]}              opacity={0.18} color="#c0c8c4" />
      <GridPlane size={16} divs={14} rotation={[Math.PI/2, 0, 0]}      opacity={0.12} color="#b0b8b4" />
      <GridPlane size={16} divs={14} rotation={[0, 0, Math.PI/2]}      opacity={0.09} color="#a8b0ac" />
      <GridPlane size={9}  divs={8}  rotation={[0.35, 0.55, 0]}   position={[0, 2.5, 0]}  opacity={0.07} color="#ffffff" />
      <GridPlane size={9}  divs={8}  rotation={[-0.3, -0.4, 0]}   position={[0, -2.5, 0]} opacity={0.05} color="#ffffff" />
    </group>
  )
}

export default function WireframeGrid() {
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
      camera={{ position: [0, 3, 9], fov: 50 }}
      gl={{ alpha: true, antialias: true }}
      style={{ width: '100%', height: '100%', background: 'transparent' }}
    >
      <Scene mouseRef={mouseRef} />
    </Canvas>
  )
}
