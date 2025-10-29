import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

/**
 * Scene3D - Contenedor base para todos los ejemplos 3D
 * 
 * Props:
 * - children: Componentes 3D a renderizar
 * - enableControls: Permitir rotar con mouse (default: true)
 * - cameraPosition: Posición inicial de la cámara (default: [0, 0, 5])
 */
function Scene3D({ 
  children, 
  enableControls = true,
  cameraPosition = [0, 0, 5]
}) {
  return (
    <div style={{ width: '100%', height: '500px' }}>
      <Canvas
        camera={{ 
          position: cameraPosition,
          fov: 75,           // Ángulo de visión (estándar)
          near: 0.1,         // No renderizar más cerca de 0.1
          far: 100           // No renderizar más lejos de 100
        }}
      >
        {/* LUZ AMBIENTE - Ilumina todo suavemente */}
        <ambientLight intensity={0.5} />
        
        {/* LUZ DIRECCIONAL - Como el sol, crea sombras */}
        <directionalLight 
          position={[5, 5, 5]}    // [x, y, z]
          intensity={0.8}
          castShadow
        />
        
        {/* LUZ ADICIONAL desde atrás - Para definición */}
        <directionalLight 
          position={[-3, 2, -5]}
          intensity={0.3}
        />
        
        {/* CONTROLES DE ÓRBITA - Rotar con mouse */}
        {enableControls && (
          <OrbitControls 
            enableZoom={true}      // Zoom con rueda
            enablePan={false}      // No mover escena
            minDistance={3}        // Zoom mínimo
            maxDistance={15}       // Zoom máximo
          />
        )}
        
        {/* CONTENIDO - Aquí van tus cubos, esferas, etc */}
        {children}
      </Canvas>
    </div>
  )
}

export default Scene3D