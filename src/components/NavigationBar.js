import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "../NavigationBar.css";

const NavigationBar = () => {
  const location = useLocation();

  return (
    <Navbar collapseOnSelect expand="lg" sticky="top" className="custom-navbar">
      <Container>
        {/* Left Side: Socials */}
        <div className="nav-social">
          <a
            href="https://github.com/mateyab"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="GitHub"
          >
            <FaGithub size={22} />
          </a>

          <a
            href="https://www.linkedin.com/in/mateya-berezowsky-48a160229"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={22} />
          </a>

          <a
            href="mailto:mateyaberezowsky@gmail.com"
            className="social-email"
            aria-label="Email"
          >
            <FaEnvelope size={22} />
            <span className="ms-2 d-none d-lg-inline">mateyaberezowsky@gmail.com</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        {/* Right Side: Links */}
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto nav-links">
            <Nav.Link 
              as={Link} 
              to="/" 
              active={location.pathname === "/"}
            >
              Home
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/experience" 
              active={location.pathname === "/experience"}
            >
              Experience
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/projects" 
              active={location.pathname === "/projects"}
            >
              Projects
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;