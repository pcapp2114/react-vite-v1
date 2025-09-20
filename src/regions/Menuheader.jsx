import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, NavLink } from 'react-router-dom';
import { useState } from "react";

const Menuheader = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Closes toggle mobile menu when a menu link is clicked
  const handleLinkClick = () => {
    setIsOpen(false);
  };


  return (

    <Container fluid className="MenuheaderRegion">

      <div>
      

          <nav className="custom-navbar">

            {/* Hamburger button menu (only shows on mobile) */}
            <button
              className="menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              ☰ menu
            </button>

<div className="grid-container">
            <ul className={`nav-links ${isOpen ? "open" : ""}`}>

              <li><NavLink to="/aboutus" className='t' onClick={handleLinkClick}>About</NavLink></li>
              <li><NavLink to="/mission" className='t' onClick={handleLinkClick}>Our Mission</NavLink></li>
              <li><NavLink to="/new-horizons" className='t' onClick={handleLinkClick}>New Horizons</NavLink></li>
            </ul>
</div>
          </nav>


      

      </div>
    </Container>
  )
}

export default Menuheader;