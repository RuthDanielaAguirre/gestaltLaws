import Scene3D from '../../../components/3d/Scene3D'
import CubeGroup from '../../../components/3d/CubeGroup'
import { CANDY_COLORS } from '../../../utils/colors'

function Test3D() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>🧪 Test 3D - Leyes de Gestalt</h1>
      <p>Prueba de componentes 3D antes de integrar</p>
      
      {/* EJEMPLO 1: Rotación básica */}
      <section style={{ marginBottom: '3rem' }}>
        <h2>1. Rotación básica</h2>
        <Scene3D>
          <CubeGroup animation="rotation" count={5} />
        </Scene3D>
      </section>
      
      {/* EJEMPLO 2: Proximidad */}
      <section style={{ marginBottom: '3rem' }}>
        <h2>2. Proximidad (se acercan/alejan)</h2>
        <Scene3D>
          <CubeGroup 
            animation="proximity" 
            count={6}
            colors={[CANDY_COLORS.pink, CANDY_COLORS.purple]}
          />
        </Scene3D>
      </section>
      
      {/* EJEMPLO 3: Cambio de color */}
      <section style={{ marginBottom: '3rem' }}>
        <h2>3. Similitud (cambio de color)</h2>
        <Scene3D>
          <CubeGroup 
            animation="colorChange" 
            count={8}
            roughness={0.6}
          />
        </Scene3D>
      </section>
      
      {/* EJEMPLO 4: Opacity */}
      <section style={{ marginBottom: '3rem' }}>
        <h2>4. Cierre (opacity)</h2>
        <Scene3D>
          <CubeGroup 
            animation="opacity" 
            count={7}
            colors={[CANDY_COLORS.cyan]}
            metalness={0}
          />
        </Scene3D>
      </section>
      
      {/* EJEMPLO 5: Mirror */}
      <section style={{ marginBottom: '3rem' }}>
        <h2>5. Simetría (mirror)</h2>
        <Scene3D>
          <CubeGroup 
            animation="mirror" 
            count={8}
            colors={[CANDY_COLORS.blue, CANDY_COLORS.pink]}
          />
        </Scene3D>
      </section>
    </div>
  )
}

export default Test3D