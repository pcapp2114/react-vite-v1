import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

const Home = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true
  };
  return (

    <Container fluid className="PageContent">
      <div className="grid-container">

        <h1 className='content-title'>Home</h1>
        <Slider {...settings} className='slider-container'>
          <div>
            <img src={'https://picsum.photos/id/26/300'} fluid alt="My Image" />
          </div>
          <div>
            <img src={'https://picsum.photos/id/27/300'} fluid alt="My Image" />
          </div>
          <div>
            <img src={'https://picsum.photos/id/28/300'} fluid alt="My Image" />
          </div>
          <div>
            <img src={'https://picsum.photos/id/29/300'} fluid alt="My Image" />
          </div>

        </Slider>

        <div>
          
          <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus similique, facere error dignissimos ea impedit doloremque esse, minima suscipit odio magni porro totam sit ad at deserunt soluta vel nihil non. Quasi repellendus quam qui possimus molestias aspernatur ipsam ad voluptatem, quod cumque fugit porro voluptatibus, laborum soluta expedita reprehenderit odit? Sequi, perferendis alias porro libero soluta eveniet veritatis ratione fuga quo. Praesentium delectus soluta eius voluptatum dolorum molestias corporis suscipit unde asperiores, magni nemo et fugiat in ut, dignissimos ullam quasi. Voluptates consectetur accusantium similique velit eius! Reprehenderit eos mollitia animi numquam exercitationem consequuntur vero impedit sint, soluta quisquam.
          </p>
        </div>


      </div>
    </Container>
  );
}
export default Home;
