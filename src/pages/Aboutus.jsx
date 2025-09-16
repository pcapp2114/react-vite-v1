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
                A successful transmission network requires deliberate planning, and a new and different approach. One that identifies long-term, flexible, and interregional solutions that will meet national interests. Modernizing transmission planning can provide greater certainty to drive investment to the highest-need transmission projects and enable development of the projects with the largest long-term benefit for consumers.
              </p>
              <p>On October 3, 2024, the U.S. Department of Energy (DOE) released the final National Transmission Planning (NTP) Study, a set of long-term planning tools and analyses that examine a wide range of potential future scenarios through 2050 to identify pathways to maintain grid reliability, increase resilience, and reduce costs, while meeting local, regional, interregional, and national interests and supporting the changing energy landscape. The NTP Study was developed in partnership with the National Renewable Energy Laboratory (NREL) and the Pacific Northwest National Laboratory (PNNL).</p>
              <p>Released on October 30, 2023, the National Transmission Needs Study serves as DOE's triennial state of the grid report and is a robust assessment of current and near-term future transmission needs through 2040. The Needs Study is not intended to displace existing transmission planning processes and is not intended to identify specific transmission solutions to address identified needs, but it does identify key national needs that can inform investments and planning decisions. Where previous National Transmission Congestion Studies were limited to consider only historic congestion, this study considers both historic and anticipated future transmission needs driven by the rapidly increasing electric load, distributed generation and grid-edge devices.</p>




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
