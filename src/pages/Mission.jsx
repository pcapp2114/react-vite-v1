
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PhotoCard from './PhotoCard';


const Mission = () => {
  return (
    <Container fluid className="PageContent">
      <div className="grid-container">

        <div>
          <h1 className='content-title'>Our Mission</h1>

          <p>
            The mission of the Energy Department is to ensure America's security and prosperity by addressing its energy, environmental and nuclear challenges through transformative science and technology solutions.
          </p>

          <PhotoCard />

          <p>The U.S. Department of Energy (DOE) Office of Legacy Management (LM) has completed its High Performing Organization (HPO) Plan for FY 2021 to FY 2025. The HPO is an internal planning document LM staff use to set management excellence and program performance goals the organization will strive to meet over the next five years. A link to the plan is provided below. The new HPO plan summarizes LM's performance alongside its HPO goals and milestones between FY 2017 and FY 2020, as well as goals and milestones that LM will pursue for the next five years. LM exceeded the majority of its goals set in the previous plan, including maintaining a worker safety record better than the DOE average.</p>
          <p>Fuel cells produce electricity from a number of domestic fuels, including hydrogen and renewables, and can provide power for virtually any application -- from cars and buses to commercial buildings. The Fuel Cell Technologies Office (FCTO) focuses on applied research, development, and innovation to advance hydrogen and fuel cells for transportation and diverse applications enabling energy security, resiliency, and a strong domestic economy in emerging technologies.</p>

<p>The DOE Directives Program in the Office of Management (MA-1.2) oversees the development and maintenance of directives, established as the primary means to set, communicate, and institutionalize policies, requirements, and responsibilities for Department of Energy (DOE) elements and contractors. Directives facilitate the achievement of DOE's strategic and operational goals, while ensuring safe, secure, efficient, cost-effective operations and compliance with applicable legal requirements. 
</p><p>
The Delegations Program serves as the central point of contact for the development and maintenance of DOE delegations and designations of the authorities necessary to run the Department of Energy. These authorities stem from laws; statutes; Executive Orders or proclamations; and regulations issued by other agencies, such as the Office of Management and Budget (OMB), the Office of Personnel Management (OPM), and the Government Accountability Office (GAO).</p>

        </div>

      </div>
    </Container>

  )
}

export default Mission;