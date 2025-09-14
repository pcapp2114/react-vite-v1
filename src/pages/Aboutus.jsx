import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const Aboutus = () => {
  return (

    <Container fluid className="PageContent">
      <div className="grid-container">

        <Row>
          <Col>
            <div>
              <h1 className='content-title'>About us</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus similique, facere error dignissimos ea impedit doloremque esse, minima suscipit odio magni porro totam sit ad at deserunt soluta vel noluta quisquam.
              </p>




              <Row className='row-content'>
                <Col sm={4}>
                  <Card>
                    <Card.Img variant="top" src="https://via.assets.so/game.png?id=1&q=95&w=360&h=360&fit=fill" fluid/>
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </Col>

                <Col sm={4}>
                  <Card>
                    <Card.Img variant="top" src="https://picsum.photos/300" fluid/>
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </Col>

                <Col sm={4}>
                  <Card>
                    <Card.Img variant="top" src="https://picsum.photos/id/27/300" fluid/>
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>



              <Row className='row-content'>
                <Col sm={4}><p>Lorem ipsumre omnis iure doloribus, debitis iste optio</p></Col>
                <Col sm={4}><p>Lorem ipsumre omnis iure doloribus, debitis iste optio</p></Col>
                <Col sm={4}><p>Lorem ipsumre omnis iure doloribus, debitis iste optio</p></Col>
              </Row>

              


            </div> {/* end page content */}

          </Col>
        </Row>
      </div>
    </Container>


  )
}

export default Aboutus;
