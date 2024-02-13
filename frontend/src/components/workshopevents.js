import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Cyber from '../images/cyber1.svg';
import webdev from '../images/webDev1.svg';
import rpa from '../images/rpa1.svg';
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS


const CardData = [
  { id: 1, header: 'Cyber Security', title: 'Dark card title 1', imageUrl: Cyber, route: '/cybersecurity' },
  { id: 2, header: 'Web Development', title: 'Dark card title 2', imageUrl: webdev, route: '/webdevelopment' },
  { id: 3, header: 'Robotic Automation Process', title: 'Dark card title 3', imageUrl: rpa, route: '/robot' },
];

const CardComponent = ({ id, header, title, imageUrl, route }) => (
  <Col xs={12} sm={6} md={4} lg={3} className="mb-3">
    <Link to={route} style={{ textDecoration: 'none' }}>
      <Card className="text-white cardbg1 h-100">
        <Card.Header>{header}</Card.Header>
        <Card.Body>
          <Card.Img variant="top" src={imageUrl} alt={`Event ${id} Image`} className="img-fluid" />
        </Card.Body>
      </Card>
    </Link>
  </Col>
);

const WorkshopEvents = () => (
  <Row className="d-flex justify-content-center">
    {CardData.map((card) => (
      <CardComponent key={card.id} {...card} />
    ))}
  </Row>
);

export default WorkshopEvents;
