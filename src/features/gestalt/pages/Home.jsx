import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { gestaltLaws } from '../data/gestaltLaws.js';

function Home() {
  return (
    <>
      {/* Hero */}
      <section 
        className="min-vh-100 d-flex align-items-center justify-content-center"
        style={{ paddingTop: '80px' }}
      >
        <Container className="text-center">
          <h1 className="display-1 fw-bold gradient-text mb-4">
            Leyes de la Gestalt
          </h1>
          <p className="lead text-white-50 mb-5">
            Descubre cómo percibimos patrones visuales
          </p>
          <div className="d-flex gap-3 justify-content-center">
            <Link to="/todas" className="btn btn-lg glass px-4 py-3 text-white">
              Ver todas
            </Link>
          </div>
        </Container>
      </section>

      {/* Grid de Leyes */}
      <section className="py-5" style={{ minHeight: '50vh' }}>
        <Container>
          <h2 className="text-center text-white mb-5">Las 8 Leyes</h2>
          <Row className="g-4">
            {gestaltLaws.map((law) => (
              <Col key={law.id} md={6} lg={3}>
                <Link 
                  to={`/ley/${law.id}`} 
                  className="text-decoration-none d-block h-100"
                >
                  <div 
                    className="glass p-4 rounded-4 h-100 d-flex flex-column"
                    style={{ 
                      borderLeft: `4px solid ${law.color}`,
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-8px)';
                      e.currentTarget.style.boxShadow = `0 12px 40px ${law.color}40`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '';
                    }}
                  >
                    <h3 className="h5 text-white mb-2">{law.title}</h3>
                    <p className="text-white-50 small mb-0 flex-grow-1">
                      {law.subtitle}
                    </p>
                    <div 
                      className="mt-3"
                      style={{
                        width: '40px',
                        height: '3px',
                        background: law.color,
                        borderRadius: '2px'
                      }}
                    />
                  </div>
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Home;