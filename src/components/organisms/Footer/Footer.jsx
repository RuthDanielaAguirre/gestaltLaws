import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="py-5 mt-5 glass">
      <Container>
        <Row className="align-items-center">
          <Col md={4} className="text-center text-md-start mb-3 mb-md-0">
            <h5 className="fw-bold text-white mb-2">Gestalt Laws</h5>
            <p className="text-white-50 mb-0 small">
              Psicología de la percepción visual aplicada al diseño
            </p>
          </Col>
          
          <Col md={4} className="text-center mb-3 mb-md-0">
            <div className="d-flex flex-column gap-2 align-items-center">
              <Link to="/" className="text-white-50 text-decoration-none small">
                Home
              </Link>
              <Link to="/todas" className="text-white-50 text-decoration-none small">
                Todas las Leyes
              </Link>
              <Link to="/about" className="text-white-50 text-decoration-none small">
                Sobre
              </Link>
            </div>
          </Col>
          
          <Col md={4} className="text-center text-md-end">
            <div className="d-flex gap-3 justify-content-center justify-content-md-end mb-3">
              {/* GitHub */}
              <a 
                href="https://github.com/ruth-daniela-aguirre" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white-50"
                style={{ 
                  fontSize: '1.5rem',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#c084fc';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'rgba(248, 250, 252, 0.5)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <i className="bi bi-github"></i>
              </a>
              
              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/ruth-daniela-aguirre" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white-50"
                style={{ 
                  fontSize: '1.5rem',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#c084fc';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'rgba(248, 250, 252, 0.5)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
            
            <p className="text-white-50 mb-0 small">
              &copy; 2025 Ruth Daniela Aguirre
            </p>
         
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;