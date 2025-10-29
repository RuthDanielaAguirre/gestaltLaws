import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { CANDY_COLORS, CANDY_ARRAY } from '../../utils/colors'

/**
 * CubeGroup - Componente reutilizable de cubos 3D
 * 
 * Props:
 * - animation: Tipo de animación ('proximity', 'colorChange', 'rotation', 'opacity', 'mirror')
 * - count: Número de cubos (default: 6)
 * - colors: Array de colores a usar (default: CANDY_ARRAY)
 * - spacing: Espacio entre cubos (default: 2)
 * - roughness: Mate (1) o brillante (0) (default: 0.4)
 * - metalness: Plástico (0) o metal (1) (default: 0.2)
 */
function CubeGroup({ 
  animation = 'rotation',
  count = 6,
  colors = CANDY_ARRAY,
  spacing = 2,
  roughness = 0.4,
  metalness = 0.2
}) {
  const groupRef = useRef()
  const meshRefs = useRef([])
  
  // useFrame se ejecuta cada frame (60 veces por segundo)
  useFrame((state) => {
    const time = state.clock.elapsedTime // Tiempo total transcurrido
    
    // ANIMACIÓN según tipo
    switch (animation) {
      
      case 'proximity':
        // Cubos se acercan y alejan
        meshRefs.current.forEach((mesh, i) => {
          if (mesh) {
            const offset = Math.sin(time + i * 0.5) * spacing * 0.3
            mesh.position.x = i * spacing - (count * spacing) / 2 + offset
          }
        })
        break
      
      case 'colorChange':
        // Cubos cambian de color suavemente
        meshRefs.current.forEach((mesh, i) => {
          if (mesh) {
            const hue = (time * 50 + i * 60) % 360
            mesh.material.color.setHSL(hue / 360, 0.8, 0.6)
          }
        })
        break
      
      case 'rotation':
        // Cubos giran continuamente
        meshRefs.current.forEach((mesh, i) => {
          if (mesh) {
            mesh.rotation.x = time + i * 0.5
            mesh.rotation.y = time * 0.7 + i * 0.3
          }
        })
        break
      
      case 'opacity':
        // Cubos aparecen y desaparecen
        meshRefs.current.forEach((mesh, i) => {
          if (mesh) {
            const opacity = (Math.sin(time * 2 + i * 0.8) + 1) / 2
            mesh.material.opacity = opacity * 0.7 + 0.3 // Entre 0.3 y 1
          }
        })
        break
      
      case 'mirror':
        // Cubos se reflejan en eje Y
        meshRefs.current.forEach((mesh, i) => {
          if (mesh) {
            const isLeft = i < count / 2
            const mirrorIndex = isLeft ? i : count - 1 - i
            mesh.position.y = Math.sin(time + mirrorIndex * 0.5) * 1.5
          }
        })
        break
      
      default:
        // Sin animación
        break
    }
  })
  
  return (
    <group ref={groupRef}>
      {Array.from({ length: count }).map((_, i) => (
        <mesh 
          key={i}
          ref={(el) => (meshRefs.current[i] = el)}
          position={[
            i * spacing - (count * spacing) / 2,  // Centrar el grupo
            0, 
            0
          ]}
        >
          {/* GEOMETRÍA - Tamaño del cubo */}
          <boxGeometry args={[1, 1, 1]} />
          
          {/* MATERIAL - Apariencia del cubo */}
          <meshStandardMaterial 
            color={colors[i % colors.length]}
            roughness={roughness}
            metalness={metalness}
            transparent={animation === 'opacity'} // Solo para animación opacity
          />
        </mesh>
      ))}
    </group>
  )
}

export default CubeGroup