import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, NavLink } from 'react-router-dom';
import './../index.scss'
import logo from './../assets/images/logo-doe-dark-v2.svg';
import HeaderSearch from '../components/HeaderSearch';

const Logoheader = () => {
  const [open, setOpen] = useState(false);
  const [logoVisible, setLogoVisible] = useState(true);

  return (

    <Container fluid className="LogoheaderRegion">
      <div className="grid-container">

        <div className="xx">

          <div className="test-other">

            {logoVisible && (
              <div className="test-left">
                <div className="logo ${!logoVisible ? 'logo-hidden' : ''}`}">
                  <NavLink to="/">
                    <img src={logo} className="logo-img" alt="U.S. Department of Energy" />
                  </NavLink>
                </div>
              </div>

            )}

            <div className="test-right">
              <HeaderSearch setLogoVisible={setLogoVisible} />
            </div>



          </div>


        </div>
      </div>
    </Container>
  )
}
export default Logoheader;