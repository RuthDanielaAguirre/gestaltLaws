import { useRef, useState, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { CANDY_ARRAY } from '../../utils/colors'

/**
 * CubeGroup - Grupo de cubos 3D adaptativo al tema (dark / light)
 * 
 * Props:
 * - animation: Tipo de animación ('rotation', 'proximity', 'opacity', 'mirror')
 * - count: Número de cubos (default: 6)
 * - colors: Array de colores (default: CANDY_ARRAY)
 * - spacing: Espacio entre cubos (default: 2)
 */
function CubeGroup({ 
  animation = 'rotation',
  count = 6,
  colors = CANDY_ARRAY,
  spacing = 2
}) {
  const groupRef = useRef()
  const meshRefs = useRef([])

  // Detectar tema (dark/light)
  const [theme, setTheme] = useState(document.body.dataset.theme || 'dark')

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setTheme(document.body.dataset.theme)
    })
    observer.observe(document.body, { attributes: true, attributeFilter: ['data-theme'] })
    return () => observer.disconnect()
  }, [])

  // 🎨 Paletas
  const lightColors = ['#cdbaff', '#ffc3c3', '#ffe6a8', '#b3e5f9'] // perlados con contraste

  // 💫 Propiedades del material
  const getMaterialProps = () => {
    if (theme === 'dark') {
      return {
        metalness: 0.95,
        roughness: 0.22,
        emissive: '#6b7cff',
        emissiveIntensity: 0.2,
        envMapIntensity: 1.2
      }
    } else {
      return {
        metalness: 0.75,
        roughness: 0.45,
        emissive: '#b7c4ff', // leve brillo azulado para destacar sobre fondo claro
        emissiveIntensity: 0.15,
        envMapIntensity: 0.9
      }
    }
  }

  // 🌀 Animaciones
  useFrame((state) => {
    const time = state.clock.elapsedTime
    switch (animation) {
      case 'rotation':
        meshRefs.current.forEach((mesh, i) => {
          if (mesh) {
            mesh.rotation.x = time + i * 0.4
            mesh.rotation.y = time * 0.6 + i * 0.2
          }
        })
        break
      case 'proximity':
        meshRefs.current.forEach((mesh, i) => {
          if (mesh) {
            const offset = Math.sin(time + i * 0.5) * spacing * 0.3
            mesh.position.x = i * spacing - (count * spacing) / 2 + offset
          }
        })
        break
      case 'opacity':
        meshRefs.current.forEach((mesh, i) => {
          if (mesh) {
            const opacity = (Math.sin(time * 2 + i * 0.8) + 1) / 2
            mesh.material.opacity = opacity * 0.7 + 0.3
          }
        })
        break
      case 'mirror':
        meshRefs.current.forEach((mesh, i) => {
          if (mesh) {
            const isLeft = i < count / 2
            const mirrorIndex = isLeft ? i : count - 1 - i
            mesh.position.y = Math.sin(time + mirrorIndex * 0.5) * 1.5
          }
        })
        break
      default:
        break
    }
  })

  // Material según tema
  const materialProps = getMaterialProps()

  return (
    <group ref={groupRef}>
      {/* 🌫️ Sombra base sutil para modo claro */}
      {theme === 'light' && (
        <mesh receiveShadow position={[0, -1.2, 0]}>
          <planeGeometry args={[20, 20]} />
          <shadowMaterial opacity={0.2} />
        </mesh>
      )}

      {/* 🧱 Cubos */}
      {Array.from({ length: count }).map((_, i) => (
        <mesh
          key={i}
          ref={(el) => (meshRefs.current[i] = el)}
          position={[
            i * spacing - (count * spacing) / 2,
            0,
            0
          ]}
          castShadow
          receiveShadow
        >
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial
            color={theme === 'dark' ? colors[i % colors.length] : lightColors[i % lightColors.length]}
            {...materialProps}
            toneMapped={false}
            transparent={animation === 'opacity'}
          />
        </mesh>
      ))}
    </group>
  )
}

export default CubeGroup
