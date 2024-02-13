import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import spaceTorchImage from '../images/space_torch.jpg';
import mismatchimg from '../images/techShow1.svg';

const robot = () => {
  return (
    <div>
      <Navbar />
      <Container fluid style={{ backgroundColor: 'black', backgroundImage: `url(${spaceTorchImage})`, backgroundSize: 'cover' }}>
        <h1 className="eventName welcometag">Robotic Process Automation Workshop</h1>
        <p className="eventDesc" style={{ textAlign: "center", marginTop: '20px', color: '#E4A732' }}>
          <FontAwesomeIcon icon={faClock} size='xs' className="mr-2" />
          Join us for an immersive workshop on Robotic Process Automation (RPA). Learn to automate repetitive tasks and streamline workflows efficiently.
        </p>

        <div className="block">
          <Row>
            <Col md={6}>
              <div className="banner">
                <img src={mismatchimg} alt="RPA Workshop" className="img-fluid rounded shadow-lg mx-auto d-block" style={{ width: '70%' }} />
              </div>
              <div className="details text-center">
                <FontAwesomeIcon icon={faClock} className="mr-2" />
                <p className="detailsTxt custom-text-color">Date: 24/02/2023, Time: 10AM - 4PM</p>
              </div>
              <div className="details text-center">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                <p className="detailsTxt custom-text-color">Location: IBM Lab</p>
              </div>
            </Col>
            <Col md={6}>
              <h1 className="heads custom-text-color">About the Workshop</h1>
              <p className="points custom-text-color">
                Robotic Process Automation (RPA) is a technology that automates repetitive, rule-based tasks, allowing organizations to increase productivity and efficiency. In this workshop, you'll learn the basics of RPA and how to implement automation solutions using cutting-edge tools and techniques.
              </p>

              <h1 className="heads custom-text-color">Agenda</h1>
              <ul className="points custom-text-color">
                <li>Introduction to RPA</li>
                <li>Hands-on sessions on automation tools</li>
                <li>Case studies and real-world applications</li>
              </ul>

              <h1 className="heads custom-text-color">Instructors</h1>
              <ul className="points custom-text-color">
                <li>Dr. R C NARAYANAN</li>
                <li>Dr. S SAKTHIVEL</li>
              </ul>

              <h1 className="heads custom-text-color">Contact</h1>
              <ul className="points custom-text-color">
                <li>Vijayasri D R - 7200218344</li>
                <li>Vijayavarshini R - 9043768344</li>
              </ul>
            </Col>
          </Row>
        </div>

        <div className="bottom text-center mt-5 pt-5 pb-5" style={{ width: '100%' }}>
          <h1 className="bottomHead">Register Now!!</h1>
          <br />
          <p className="bottomTxt">
            Don't miss out on this opportunity to enhance your skills and knowledge in RPA. Reserve your spot now!
          </p>
          <Link to="/register">
            <Button variant="primary" size="lg" className="registerBtn">
              REGISTER NOW
            </Button>
          </Link>
        </div>

        <div className="footer container-fluid bg-dark text-white pt-5 pb-5">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-4 text-center">
              <h1 className="footerHeadTxt">THREADS'24</h1>
              <p className="footerDesc">
                A National Level Technical symposium hosted by the Department of Computer Science and Engineering in Sona College of Technology, Salem. It provides a platform to showcase the talents of student enthusiasts in various fields of computer science.
              </p>
            </div>
            <div className="col-md-4 text-center">
              <h3 className="footerLinksHead">Connect with Us</h3>
              <a href="https://instagram.com/sonathreads?igshid=OTJlNzQ0NWM=" className="footerLink">
                Instagram: @sonathreads
              </a>
              <p className="footerLink">Email: threads.cse@sonatech.ac.in</p>
            </div>
          </div>

          <hr className="line line2" />

          <div className="row justify-content-center align-items-center">
            <div className="col-md-12 text-center">
              <p className="copyRight">© 2024 Threads'24. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default robot;
