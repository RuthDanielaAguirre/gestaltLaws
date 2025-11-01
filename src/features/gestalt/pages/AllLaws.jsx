import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { gestaltLaws } from '../data/gestaltLaws';

function Laws() {
  return (
    <section className="py-5 mt-5 min-vh-100">
        <Container>
          <h2 className="text-center text-white mb-5">The 8 Laws of Gestalt</h2>
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
  );
}

export default Laws;