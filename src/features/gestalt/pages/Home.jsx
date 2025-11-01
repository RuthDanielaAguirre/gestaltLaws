import { Container, Row, Col } from "react-bootstrap";
import ButtonGlass from "../../../components/atoms/ButtonGlass/ButtonGlass";
import AllLaws from "./AllLaws";

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
         <ButtonGlass to="/laws" size="lg" variant="primary">Discover ↓</ButtonGlass>
        </Container>
      </section>
      <AllLaws/>
    </>
  );
}

export default Home;
