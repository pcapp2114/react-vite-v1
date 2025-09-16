import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, NavLink } from 'react-router-dom';

const Menuheader = () => {
  return (
        
    <Container fluid className="MenuheaderRegion">

      <div className="grid-container">

        <nav>
          <ul className='Menulinks'>
            {/* <li><NavLink to="/home" className='menu-link'>Home</NavLink></li> */}
            <li><NavLink to="/aboutus" className='menu-link'>About</NavLink></li>
            <li><NavLink to="/mission" className='menu-link'>Our Mission</NavLink></li>
            <li><NavLink to="/new-horizons" className='menu-link'>New Horizons</NavLink></li>
          </ul>

        </nav>

      </div>
      </Container>
  )
}

export default Menuheader;