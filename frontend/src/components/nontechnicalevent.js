import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "../App.css"

const CardData = [
  { id: 1, header: 'Event 13', title: 'Dark card title 1', imageUrl: '' },
  { id: 2, header: 'Event 2', title: 'Dark card title 2', imageUrl: 'path_to_image_2'},
  { id: 3, header: 'Event 3', title: 'Dark card title 3', imageUrl: 'path_to_image_3' },
  { id: 4, header: 'Event 3', title: 'Dark card title 4', imageUrl: 'path_to_image_4' },
  { id: 5, header: 'Event 5', title: 'Dark card title 5', imageUrl: 'path_to_image_5' },
];

const CardComponent = ({ id, header, title, imageUrl }) => (
  <Col xs={12} sm={6} md={4} lg={3} className="mb-3">
    <Link to={`/${id}`} style={{ textDecoration: 'none' }}>
      <Card className="text-white cardbg h-100">
        <Card.Header>{header}</Card.Header>
        <Card.Body>
          <Card.Img variant="top" src={imageUrl} alt={`Event ${id} Image`} className="img-fluid" />
        </Card.Body>
      </Card>
    </Link>
  </Col>
);

const NonTechnicalEvent = () => (
  <Row className="d-flex justify-content-center">
    {CardData.map((card) => (
      <CardComponent key={card.id} {...card} />
    ))}
  </Row>
);

export default NonTechnicalEvent;
