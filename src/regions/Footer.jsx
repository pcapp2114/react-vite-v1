import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, NavLink } from 'react-router-dom';
import './../index.scss'
import footerlogo from './../assets/images/logo-doe-dark-v2.svg';

const Footer = () => {
  return (

    <Container fluid className="FooterRegion">

      <div className="footerlogo">
        <Row>
          <Col className="FooterBrand">
            <div className="grid-container">
              <div className="footer-branding">
                <img src={footerlogo} alt="Logo" />
                <span className='d-none d-md-block'></span>
              </div>
            </div>

          </Col>
        </Row>

      </div>

      <div className="grid-container">
        <div className="footer-links">
          <Row>
            <Col sm={4}>
              <p>Policy and Statements</p>
              <nav>
                <ul className='Footerlinks'>
                  <li><NavLink to="/aboutus" className='footer-link'>Accessibility Statement</NavLink></li>
                  <li><NavLink to="/aboutus" className='footer-link'>Information Quality</NavLink></li>
                  <li><NavLink to="/aboutus" className='footer-link'>Privacy Policy</NavLink></li>
                </ul>

              </nav>
            </Col>
            <Col sm={4}><nav>
              <p>Related Sites</p>
              <ul className='Footerlinks'>
                <li><NavLink to="/aboutus" className='footer-link'>Office of the Inspector</NavLink></li>
                <li><NavLink to="/aboutus" className='footer-link'>Careers</NavLink></li>
                <li><NavLink to="/aboutus" className='footer-link'>Contact Us</NavLink></li>
              </ul>

            </nav></Col>
            <Col sm={4}><nav>
              <p>Resources</p>
              <ul className='Footerlinks'>
                <li><NavLink to="/aboutus" className='footer-link'>Federal Website Inventory</NavLink></li>
                <li><NavLink to="/aboutus" className='footer-link'>USDA Performance</NavLink></li>
                <li><NavLink to="/aboutus" className='footer-link'>Sitemap</NavLink></li>
              </ul>

            </nav></Col>


          </Row>
        </div>
      </div> {/* end grid container */}
    </Container>

  )
}
export default Footer;