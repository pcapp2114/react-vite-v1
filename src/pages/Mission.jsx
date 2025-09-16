
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Mission = () => {
  return (
    <Container fluid className="PageContent">
      <div className="grid-container">

        <div>
          <h1 className='content-title'>Our Mission</h1>

          <p>
            Deploying innovative solutions and advancing transmission systems across the country are essential to building out a better grid that achieves the U.S. Department of Energy’s (DOE) goals to meet the growing demand for electricity and provide clean, reliable, secure, and resilient power to all Americans, with emphasis on Tribal nations, rural and remote communities, disadvantaged communities, and energy transition communities. Through historic investments from the Bipartisan Infrastructure Law and Inflation Reduction Act that have allowed for stronger public-private partnerships, DOE is expanding access to affordable, reliable electricity by maintaining and investing in critical generation facilities, increasing grid resilience, and modernizing and expanding transmission and distribution systems. With our current momentum, DOE plans to expand long-distance transmission line capacity by 16% by 2030, including building 7,500 miles of new transmission lines so as to connect low-cost energy with more communities.
          </p>
          <p>A successful transmission network requires deliberate planning, and a new and different approach. One that identifies long-term, flexible, and interregional solutions that will meet national interests. Modernizing transmission planning can provide greater certainty to drive investment to the highest-need transmission projects and enable development of the projects with the largest long-term benefit for consumers.</p>
          <p>Released on October 30, 2023, the National Transmission Needs Study serves as DOE's triennial state of the grid report and is a robust assessment of current and near-term future transmission needs through 2040. The Needs Study is not intended to displace existing transmission planning processes and is not intended to identify specific transmission solutions to address identified needs, but it does identify key national needs that can inform investments and planning decisions. Where previous National Transmission Congestion Studies were limited to consider only historic congestion, this study considers both historic and anticipated future transmission needs driven by the rapidly increasing electric load, distributed generation and grid-edge devices.</p>
          <p>To inform the integration of offshore wind (OSW), DOE conducted supportive analyses to identify transmission pathways and develop transmission strategies to integrate OSW. In November 2021, DOE launched the Atlantic Offshore Wind Transmission Study, a two-year study led by NREL and PNNL. Through robust engagement with diversified stakeholder groups, this work evaluated coordinated transmission solutions to enable OSW energy deployment along the U.S. Atlantic Coast, addressing gaps in existing analyses.</p>
        </div>

      </div>
    </Container>

  )
}

export default Mission;