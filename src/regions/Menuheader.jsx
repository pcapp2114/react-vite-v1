 import Container from 'react-bootstrap/Container';
  import Row from 'react-bootstrap/Row';
  import Col from 'react-bootstrap/Col';
  import { Link, NavLink } from 'react-router-dom';
  import { useState, useEffect, useRef } from "react";
  import styles from './Menuheader.module.css';
  import { ChevronDown } from 'lucide-react';

  const Menuheader = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);      
    const dropdownRef = useRef(null);

    // Closes toggle mobile menu when a menu link is clicked
    const handleLinkClick = () => {
      setIsOpen(false);
      setAboutDropdownOpen(false);
    };

    const handleAboutClick = () => {
      setAboutDropdownOpen(!aboutDropdownOpen);
    };

    // Handle click outside to close dropdown
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (dropdownRef.current &&
  !dropdownRef.current.contains(event.target)) {
          setAboutDropdownOpen(false);
        }
      };

      if (aboutDropdownOpen) {
        document.addEventListener('mousedown', handleClickOutside);
      }

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);      
      };
    }, [aboutDropdownOpen]);

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
                <li className={styles.dropdownWrapper} 
  ref={dropdownRef}>
                  <button 
                    className={`${styles.dropdownTrigger} t`} 
                    onClick={handleAboutClick}
                    aria-expanded={aboutDropdownOpen}
                  >
                    About <ChevronDown className={styles.dropdownIcon}      
  />
                  </button>

                  {/* Mega Menu Dropdown */}
                  {aboutDropdownOpen && (
                    <div className={styles.megaMenu}>
                      <div className={styles.megaMenuContent}>
                      
                        
{/* Mega Menu Dropdown */}
  {aboutDropdownOpen && (
    <div className={styles.megaMenu}>
      <div className={styles.megaMenuContent}>
        <div className={styles.megaMenuSection}>
          <h3>About us</h3>
          <ul>
            <li><NavLink to="/aboutus" 
  onClick={handleLinkClick}>Overview</NavLink></li>
            <li><NavLink to="/aboutus" 
  onClick={handleLinkClick}>History</NavLink></li>
            <li><NavLink to="/aboutus" 
  onClick={handleLinkClick}>Leadership</NavLink></li>
          </ul>
        </div>
        <div className={styles.megaMenuSection}>
          <h3>What we do</h3>
          <ul>
            <li><NavLink to="/aboutus" 
  onClick={handleLinkClick}>Departments</NavLink></li>
            <li><NavLink to="/aboutus" 
  onClick={handleLinkClick}>Offices</NavLink></li>
            <li><NavLink to="/aboutus" 
  onClick={handleLinkClick}>Locations</NavLink></li>
          </ul>
        </div>
        <div className={styles.megaMenuSection}>
          <h3>Resources</h3>
          <ul>
            <li><NavLink to="/aboutus" 
  onClick={handleLinkClick}>Careers</NavLink></li>
            <li><NavLink to="/aboutus" 
  onClick={handleLinkClick}>Contact</NavLink></li>
            <li><NavLink to="/aboutus" 
  onClick={handleLinkClick}>News</NavLink></li>
          </ul>
        </div>
      </div>
    </div>
  )}



                      </div>
                    </div>
                  )}
                </li>

                <li><NavLink to="/mission" className='t' 
  onClick={handleLinkClick}>Our Mission</NavLink></li>
                <li><NavLink to="/new-horizons" className='t' 
  onClick={handleLinkClick}>New Horizons</NavLink></li>
              </ul>
            </div>
          </nav>
        </div>
      </Container>
    )
  }

  export default Menuheader;