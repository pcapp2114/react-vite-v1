import React, { useState, useEffect } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { FaBolt } from "react-icons/fa"; // small lightning icon
import "./PhotoCard.css";

const PhotoCard = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const items = [
      {
        prompt: "renewable energy wind turbines",
        title: "Wind Energy",
        description: "Harnessing the power of wind to generate clean electricity.",
      },
      {
        prompt: "solar panels producing electricity",
        title: "Solar Power",
        description: "Capturing sunlight and converting it into renewable energy.",
      },
      {
        prompt: "electric car charging station",
        title: "Electric Vehicles",
        description: "Charging infrastructure powering the future of transport.",
      },
    ];

    const fetchedPhotos = items.map((item) => ({
      url: `https://image.pollinations.ai/prompt/${encodeURIComponent(
        item.prompt
      )}?nologo=true&width=600&height=400`,
      title: item.title,
      description: item.description,
    }));

    setPhotos(fetchedPhotos);
  }, []);

  return (
    <Container className="mt-4">
      <Row>
        {photos.map((photo, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card className="h-100 shadow-sm photo-card">
              <div className="photo-container">
                <Card.Img
                  variant="top"
                  src={photo.url}
                  alt={photo.title}
                  className="photo-img"
                />
                <div className="overlay">
                  <FaBolt className="overlay-icon" />
                  <p className="overlay-text">{photo.title}</p>
                </div>
              </div>
              <Card.Body>
                <Card.Title>{photo.title}</Card.Title>
                <Card.Text>{photo.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PhotoCard;
