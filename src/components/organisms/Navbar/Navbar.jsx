import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar as BsNavbar, Nav, Container } from 'react-bootstrap';
import { useTheme } from '../../../contexts/ThemeContext';  
import '../../../styles/components/Navbar.scss';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <BsNavbar 
      fixed="top" 
      expand="lg"
      variant="dark"
      className={`navbar-candy ${scrolled ? 'scrolled' : ''}`}
    >
      <Container>
        <Link to="/" className="navbar-brand">
          Gestalt Laws
        </Link>
        
        <BsNavbar.Toggle aria-controls="navbar-nav" />
        
        <BsNavbar.Collapse id="navbar-nav">
          <Nav className="ms-auto align-items-center"> 
            <Link 
              to="/" 
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
            >
              About Gestalt
            </Link>

            <Link 
              to="/laws" 
              className={`nav-link ${location.pathname === '/laws' ? 'active' : ''}`}
            >
              All Laws
            </Link>

            <button
              onClick={toggleTheme}
              className="theme-toggle-btn"
              aria-label="Toggle theme"
              title={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
            >
              <i className={`bi ${isDark ? 'bi-sun-fill' : 'bi-moon-stars-fill'}`}></i>
            </button>
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
}

export default Navbar;