
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Contactus = () => {
  return (
    <Container fluid className="PageContent">
      <div className="grid-container">

        <div>
          <h1 className='content-title'>Contact us</h1>


          <FontAwesomeIcon icon="fa-solid fa-chevron-down" />
<FontAwesomeIcon icon="fa-solid fa-dog" />

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus similique, facere error dignissimos ea impedit doloremque esse, minima suscipit odio magni porro totam sit ad at deserunt soluta vel nihil non. Quasi repellendus quam qui possimus molestias aspernatur ipsam ad voluptatem, quod cumque fugit porquam.
          </p>

        </div>

      </div>
    </Container>

  )
}

export default Contactus;