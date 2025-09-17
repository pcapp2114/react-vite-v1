import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import flag from './../assets/images/US_Flag.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const GovernmentSite = () => {
    return (
        <Container fluid className="GovernmentSite-region">
            <div className="grid-container">


                <Row>
                    <Col sm={8}>




                        <img src={flag} className="flag-img" alt="US Flag icon" />



                        <div className="usa-banner-title">
                            An official website of the United States government
                        </div>



                        <Accordion defaultActiveKey="1"> {/* defaultActiveKey sets the initially open item */}
                            <Accordion.Item eventKey="0">
                                <Accordion.Header><span class="how-you-know">Here's how you know <span class="arrow"><FontAwesomeIcon icon="fa-solid fa-chevron-down fa-xs" /></span></span></Accordion.Header>


                                <Accordion.Body>
                                    
                                        <Row>
                                        <Col>
                                            <p>Official websites use .gov
                                                A .gov Website belongs to an official government organization in the United States.</p>
                                        </Col>
                                        <Col>
                                            <p>Official websites use .gov
                                                A .gov Website belongs to an official government organization in the United States.</p>
                                    </Col>
                                    </Row>

                                    
                                </Accordion.Body>



                            </Accordion.Item>

                        </Accordion>




                    </Col>
                    <Col sm={4}>
                    <div className="usa-banner-title d-none d-md-block">
                            U.S. Department of Agriculture
                        </div>
                    </Col>
                </Row>





            </div>
        </Container>

    )
}
export default GovernmentSite