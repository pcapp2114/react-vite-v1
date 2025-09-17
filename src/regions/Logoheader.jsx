import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, NavLink } from 'react-router-dom';
import './../index.scss'
import logo from './../assets/images/logo-doe-dark-v2.svg';



const Logoheader = () => {
  return (

    <Container fluid className="LogoheaderRegion">
      <div className="grid-container">


        <div className="logoheader">


          <div><NavLink to="/">
            <img src={logo} className="logo-img" alt="U.S. Department of Energy" />
          </NavLink>
          </div>


          {/* This div is hidden on mobile (xs and sm), visible on md and larger */}
          <div className="search-secondary-form d-none d-md-block">

            <div className="search">
              
              <input
                type="text"
                placeholder="Search"
              /><button type="submit">Submit</button>


            </div>

             
            <div className="secondary-menu">
              <nav>
                <ul className='SecondaryMenulinks'>
                  <li><NavLink to="/" className='secondary-menu-link'>Dashboard</NavLink></li>
                  <li><NavLink to="/contactus" className='secondary-menu-link'>Contact</NavLink></li>
                  <li><NavLink to="/contactus" className='secondary-menu-link'>Login</NavLink></li>
                </ul>

              </nav>
            </div>
          </div>



        </div>


      </div>
    </Container>
  )
}

export default Logoheader;