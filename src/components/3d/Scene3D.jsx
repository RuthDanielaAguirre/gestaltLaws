import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, Stars } from '@react-three/drei'
import { useState, useEffect } from 'react'
import './Scene3D.scss'

function Scene3D({ children, enableControls = true, cameraPosition = [0, 0, 5] }) {
  const [theme, setTheme] = useState(document.body.dataset.theme || 'dark')

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setTheme(document.body.dataset.theme)
    })
    observer.observe(document.body, { attributes: true, attributeFilter: ['data-theme'] })
    return () => observer.disconnect()
  }, [])

  return (
    <div className="scene3d-container w-100 d-flex align-items-center justify-content-center">
      <Canvas
        className="w-100"
        shadows
        camera={{
          position: cameraPosition,
          fov: 75,
          near: 0.1,
          far: 100
        }}
      >
        {/* 🌗 Tema dinámico */}
        {theme === 'dark' ? <DarkSetup /> : <LightSetup />}

        {/* 🎛️ Controles */}
        {enableControls && (
          <OrbitControls enableZoom={false} enablePan={false} minDistance={3} maxDistance={15} />
        )}

        {/* 🧱 Contenido 3D */}
        {children}
      </Canvas>
    </div>
  )
}

function DarkSetup() {
  return (
    <>
      <Stars radius={60} depth={30} count={6000} factor={4} fade />
      <ambientLight intensity={0.9} color="#cfd8ff" />
      <directionalLight position={[3, 5, 2]} intensity={1.2} castShadow color="#ffffff" />
      <directionalLight position={[-3, 2, -5]} intensity={0.3} color="#7faaff" />
      <Environment preset="night" background={false} />
    </>
  )
}

function LightSetup() {
  return (
    <>
      <Environment preset="dawn" background={false} />
      <ambientLight intensity={0.2} color="#07193dff" />
      <directionalLight position={[2, 3, 4]} intensity={0.9} color="#dbe4ff" />
    </>
  )
}

export default Scene3D