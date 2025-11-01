import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

function Home() {
  return (
    <>
      <section className="min-vh-100 d-flex align-items-center justify-content-center">
        <Container className="text-center">
          <h1 className="display-1 fw-bold gradient-text mb-4">Gestalt Laws</h1>
          <p className="lead text-white-70 mb-5">How we see order in chaos. </p>
          <p className="text-white-50 mb-5 text-start">
            The Gestalt principles explain how our minds naturally organize
            shapes, colors, and patterns into meaningful forms. Instead of
            focusing on separate parts, we perceive unified wholes — groups,
            flows, and balance. From proximity and similarity to closure and
            symmetry, these laws reveal the hidden logic behind how we interpret
            what we see every day.{" "}
          </p>
          <div className="d-flex gap-3 justify-content-center">
            <Link to="/Laws" className="btn btn-lg glass px-4 py-3 text-white">
              Discover ↓
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Home;
