import { Container } from 'react-bootstrap';

function About() {
  return (
    <Container className="py-5 min-vh-100" style={{ paddingTop: '100px' }}>
      <div className="glass p-5 rounded-4">
        <h1 className="text-white mb-4">Sobre este proyecto</h1>
        <p className="text-white-50 fs-5">
          Proyecto educativo sobre las Leyes de la Gestalt, creado con React, 
          Bootstrap, SASS y React Router DOM.
        </p>
        <p className="text-white-50">
          Las leyes de la Gestalt son principios fundamentales de la percepción 
          visual que explican cómo organizamos y entendemos la información visual.
        </p>
      </div>
    </Container>
  );
}

export default About;