import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "../NavigationBar.css";

const NavigationBar = () => {
  return (
    <Navbar expand="lg" sticky="top" className="custom-navbar">
      <Container>
        <div className="nav-social">
          <a
            href="https://github.com/mateyab"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>

          <a
            href="https://www.linkedin.com/in/mateya-berezowsky-48a160229"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="mailto:mateyaberezowsky@gmail.com"
            className="social-email"
            aria-label="Email"
          >
            <FaEnvelope size={24} />
            <span>mateyaberezowsky@gmail.com</span>
          </a>
          
        </div>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav-links">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/experience">Experience</Nav.Link>
            <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
