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
  const [isMobile, setIsMobile] = useState(false);
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Closes toggle mobile menu when a menu link is clicked
  const handleLinkClick = () => {
    setIsOpen(false);
    setAboutDropdownOpen(false);
  };

  const handleAboutClick = () => {
    setAboutDropdownOpen(!aboutDropdownOpen);
  };

  // Detect mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle click outside to close mobile menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close mobile menu if clicked outside
      if (mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        !event.target.classList.contains('menu-toggle')) {
        setIsOpen(false);
      }

      // Close mega menu dropdown if clicked outside
      if (dropdownRef.current &&
        !dropdownRef.current.contains(event.target)) {
        setAboutDropdownOpen(false);
      }
    };

    if (isOpen || aboutDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, aboutDropdownOpen]);

  return (
    <div className="MenuheaderRegion">
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
            <ul className={`nav-links ${isOpen ? "open" : ""}`} ref={mobileMenuRef}>
              {/* Desktop: Mega Menu, Mobile: Simple Link */}
              {!isMobile ? (
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

                  {/* Mega Menu Dropdown (Desktop only) */}
                  {aboutDropdownOpen && (
                    <div className={styles.megaMenu}>
                      <div className={styles.megaMenuContent}>
                        <div className={styles.megaMenuSection}>
                          <div className={styles.megaMenuTitle}>Who we are</div>
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
                          <div className={styles.megaMenuTitle}>What we do</div>
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
                          <div className={styles.megaMenuTitle}>Resources</div>
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
                </li>
              ) : (
                <li>
                  <NavLink to="/aboutus" className='t'
                    onClick={handleLinkClick}>About</NavLink>
                </li>
              )}

              <li><NavLink to="/mission" className='t'
                onClick={handleLinkClick}>Our Mission</NavLink></li>
              <li><NavLink to="/new-horizons" className='t'
                onClick={handleLinkClick}>New Horizons</NavLink></li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Menuheader;