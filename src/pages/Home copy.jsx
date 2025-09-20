import { useEffect, useState } from "react";
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import { usePollinationsImage } from '@pollinations/react';

const Home = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {

    const prompts = [
      "Futuristic city skyline glowing with electric power",
      "Electric power grid at night with neon lights",
      "High voltage power lines with dramatic sunset",
      "Hydroelectric dam generating electricity",
      "Wind turbines producing clean electric power",
      "Solar panels field under a bright sky",
      "Abstract art of electricity and lightning"
    ];

// Pick 3 random prompts each reload
    const randomPrompts = prompts
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);


    const photoData = randomPrompts.map((p) => ({
  url: `https://image.pollinations.ai/prompt/${encodeURIComponent(p)}?width=1600&height=900&nologo=true`,
  title: p.split(" ")[0] + " Power",
  description: p
    }));

    setPhotos(photoData);
  }, []); // runs once on reload

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true
  };


  return (
    <div className="w-full max-w-3xl mx-auto">
      {photos.length > 0 ? (
        <Slider {...settings}>
          {photos.map((photo, index) => (
            <div key={index} className="px-2 text-center">
              <img
                src={photo.url}
                alt={photo.title}
                className="w-full h-[400px] rounded-xl shadow-lg"
              />
<div className="grid-container">
              <h3 className="slide-title">{photo.title}</h3>
              <p className="slide-description">{photo.description}</p>
              <p className="slide-learn">learn more</p>
</div>
            </div>
          ))}
        </Slider>
      ) : (
        <p className="text-center">Loading AI-generated electric power images...</p>
      )}
      {/* End photo Slider */}
      
<p>The U.S. Department of Energy’s four Power Marketing Administrations are responsible for selling the electrical output from federally owned and operated hydroelectric dams. Together, the reach of these four Power Marketing Administrations — Bonneville Power Administration, Southeastern Power Administration, Southwestern Power Administration, and Western Area Power Administration — spans 34 states and supplies power to various regions throughout the country.</p>

    </div>
  );

}
export default Home;
