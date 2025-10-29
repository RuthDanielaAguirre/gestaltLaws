import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { gestaltLaws } from '../data/gestaltLaws.js';

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
    <div style={{ paddingTop: '80px' }}>
      <Container className="py-5">
        <Row className="align-items-center min-vh-100">
          <Col lg={6}>
            <div 
              style={{
                width: '60px',
                height: '4px',
                background: law.color,
                borderRadius: '2px',
                marginBottom: '1rem'
              }}
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
              <Link to="/" className="btn btn-light">
                ← Volver
              </Link>
              {nextLaw && (
                <Link 
                  to={`/ley/${nextLaw.id}`}
                  className="btn"
                  style={{
                    background: law.color,
                    color: 'white',
                    border: 'none'
                  }}
                >
                  Siguiente: {nextLaw.title} →
                </Link>
              )}
            </div>
          </Col>
          
          <Col lg={6}>
            <div className="glass p-5 rounded-4">
              <p className="text-center text-white">
                Ejemplo visual de {law.title}
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LeyDetail;