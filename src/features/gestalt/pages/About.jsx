import { Container } from "react-bootstrap";

function About() {
  return (
    <Container className="py-5 min-vh-100" style={{ paddingTop: "100px" }}>
      <div className="glass p-5 rounded-4">
        <h1 className="text-white mb-4">About Gestalt</h1>
        <h2 className="text-white fs-5 mb-4"> Gestalt is the study of how the mind brings order to chaos.
        </h2>
        <p className="text-white-50 fs-5">
          It shows that we
          don’t just see shapes or colors — we see relationships, patterns, and
          meaning. Our eyes, our memory, and our emotions work together to
          connect what seems separate.
        </p>
        <p className="text-white-50 fs-5">
          We complete what’s missing. We find unity in fragments. We search for
          balance where things feel uncertain.
        </p>
        <p className="text-white-50 fs-5">
          Gestalt reminds us that perception is an act of creation — that every
          person carries their own way of connecting the dots. It’s not only
          about design or psychology; it’s about being human. Because in the
          end, we all see the world not as it is, but as something we try to
          make whole.
        </p>
      </div>
    </Container>
  );
}

export default About;
