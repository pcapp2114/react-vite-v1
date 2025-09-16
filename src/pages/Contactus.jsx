import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const Contactus = () => {
  return (
    <Container fluid className="PageContent">
      <div className="grid-container">


          <h1 className='content-title'>Contact us</h1>

          <p>
            You can send an email to the Secretary of Energy at The.Secretary@hq.doe.gov
          </p>
            <p>
            202-586-5000 (Main Switchboard)
If you are deaf, hard of hearing or have a speech disability, use 7-1-1 to access Text Telephone (TTY) Telecommunications Access Services 
          </p>

           <p>
           U.S. Department of Energy
1000 Independence Ave., SW
Washington, DC 20585

*Please note: mail may take up to 3 weeks to arrive.  As such, we strongly encourage you to use the email address provided above or the form provided below.
          </p>



      </div>
    </Container>

  )
}

export default Contactus;