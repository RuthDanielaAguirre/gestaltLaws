import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { gestaltLaws } from '../../gestalt/data/gestaltLaws.js';
import ButtonGlass from '../../../components/atoms/ButtonGlass/ButtonGlass.jsx';
import Scene3D from '../../../components/3d/Scene3D.jsx';
import CubeGroup from '../../../components/3d/CubeGroup.jsx';

function LeyDetail() {
  const { id } = useParams();
  const law = gestaltLaws.find(l => l.id === id);
  
  if (!law) {
    return (
      <div className="min-vh-100 d-flex align-items-center justify-content-center">
        <div className="text-center">
          <h1 className="text-white">Law not found</h1>
          <ButtonGlass to="/laws" variant="secondary">← Back to Laws</ButtonGlass>
        </div>
      </div>
    );
  }

  const currentIndex = gestaltLaws.findIndex(l => l.id === id);
  const nextLaw = gestaltLaws[currentIndex + 1];

  return (
    <section className="pt-5 pb-5 py-5 mt-5 min-vh-100 d-flex align-items-center">
      <Container>
        <Row className="align-items-center g-5">
         
          <Col lg={6}>
            <div className="mb-4"/>
            
            <h1 className="display-3 fw-bold text-white mb-3">
              {law.title}
            </h1>
            
            <p className="fs-4 mb-4" style={{ color: law.color }}>
              {law.subtitle}
            </p>
            
            <p className="text-white-50 fs-5 mb-5">
              {law.description}
            </p>
            
            <div className="d-flex gap-3 flex-wrap">
              <ButtonGlass to="/laws" variant="secondary">
                ← Back
              </ButtonGlass>
              
              {nextLaw && (
                <ButtonGlass to={`/ley/${nextLaw.id}`} variant="primary">
                  Next: {nextLaw.title} →
                </ButtonGlass>
              )}
            </div>
          </Col>

       <Col lg={6} >
  <div className="scene3d-wrapper">
    <Scene3D>
      <CubeGroup 
      key={law.id} 
        animation={law.animation}
        lawId={law.id}
        count={6}
        spacing={2}
      />
    </Scene3D>
  </div>
</Col>
        </Row>
      </Container>
    </section>
  );
}

export default LeyDetail;