import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { gestaltLaws } from '../data/gestaltLaws.js';
import ButtonGlass from '../../../components/atoms/ButtonGlass/ButtonGlass.jsx';

function LeyDetail() {
  const { id } = useParams();
  const law = gestaltLaws.find(l => l.id === id);
  
  if (!law) {
    return (
      <div className="min-vh-100 d-flex align-items-center justify-content-center">
        <div className="text-center">
          <h1 className="text-white">Ley no encontrada</h1>
          <Link to="/" className="btn btn-light mt-3">Volver a Home</Link>
        </div>
      </div>
    );
  }

  const currentIndex = gestaltLaws.findIndex(l => l.id === id);
  const nextLaw = gestaltLaws[currentIndex + 1];

  return (
    <>
      <Container className="py-5">
        <Row className="align-items-center min-vh-100">
          <Col lg={6}>
            <div 
              className="mb-4"
            />
            <h1 className="display-3 fw-bold text-white mb-3">
              {law.title}
            </h1>
            <p className="fs-4 mb-4" style={{ color: law.color }}>
              {law.subtitle}
            </p>
            <p className="text-white-50 fs-5 mb-5">
              {law.description}
            </p>
            
            <div className="d-flex gap-3">
              <ButtonGlass to="/laws" variant="secondary">← Back</ButtonGlass>
              {nextLaw && (
                <ButtonGlass to={`/ley/${nextLaw.id}`} variant="primary">
                  Next Law: {nextLaw.title} →
                </ButtonGlass>
              )}
            </div>
          </Col>
          
        <Col lg={6}>
  <div 
    className="glass p-4 rounded-4 d-flex flex-column align-items-center justify-content-center"
    style={{
      height: '480px', // 🔹 altura fija para que no crezca infinito
      overflow: 'hidden', // 🔹 evita que el canvas se salga
    }}
  >
    <p className="text-center text-white mb-3">
      Ejemplo visual de {law.title}
    </p>

    <div style={{ width: '100%', height: '100%', maxHeight: '400px' }}>
      <Scene3D>
        <CubeGroup 
          animation="rotation"  //
          colors={[law.color, '#ffffff']}
          count={6}
          spacing={2}
        />
      </Scene3D>
    </div>
  </div>
</Col>
        </Row>
      </Container>
    </>
  );
}

export default LeyDetail;