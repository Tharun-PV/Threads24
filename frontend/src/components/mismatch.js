import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import jam1 from '../images/jam1.svg';
import spaceTorchImage from '../images/space_torch.jpg';
const PaperPresentation = () => {
  return (
    <div>
      <Navbar />
      <Container fluid style={{ backgroundColor: 'black', backgroundImage: `url(${spaceTorchImage})`, backgroundSize: 'cover' }}>
        <h1 className="eventName welcometag">Paper Presentation</h1>
        <p className="eventDesc" style={{ textAlign: "center", marginTop: '20px', color: '#E4A732' }}>
          <FontAwesomeIcon icon={faClock} size='xs' className="mr-2" />
          This event is to inculcate and boost the corporate communication, develop the public speaking, encourage self-learning amongst the students.
        </p>

        <div className="block">
          <Row>
            <Col md={6}>
              <div className="banner">
                <img src={jam1} alt="jam1" className="img-fluid rounded shadow-lg mx-auto d-block" style={{ width: '70%' }} />
              </div>
              <div className="details text-center">
                <FontAwesomeIcon icon={faClock} className="mr-2" />
                <p className="detailsTxt custom-text-color">25/02/2023, 10AM - 4PM</p>
              </div>
              <div className="details text-center">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                <p className="detailsTxt custom-text-color">IOT lab & 402 Lab</p>
              </div>
            </Col>
            <Col md={6}>
              <h1 className="heads custom-text-color">RULES</h1>
              <ul className="points custom-text-color">
                <li>Mail your abstract & PPt to this mail ID <u>sonapaperpresentation@gmail.com</u> before 23rd February 2023</li>
                <li>Participation can be solo or duo.</li>
                <li>Must have hard copy.</li>
              </ul>

              <h1 className="heads custom-text-color">TOPICS</h1>

              <ul className="points custom-text-color">
                <p>Any technical topic of your choice. Like,</p>
                <br />
                <li>Data Analytics</li>
                <li>Machine Learning</li>
                <li>Artificial Intelligence</li>
                <li>BlockChain</li>
                <li>IOT</li>

                <br />
                <p>Note: You can also present your research papers and projects.</p>
              </ul>

              <h1 className="heads custom-text-color">Staff Coordinators</h1>

              <ul className="points custom-text-color">
                <li>DR K C RAJESHWARI</li>
                <li>DR V NANDHINI</li>
                <li>MS P BHUVANESHWARI</li>
                <li>MS P RAMYA</li>
              </ul>

              <h1 className="heads custom-text-color">Coordinators</h1>

              <ul className="points custom-text-color">
                <li>Abinaya K - 6374961295</li>
                <li>Harshitha - 8667780159</li>
              </ul>
            </Col>
          </Row>
        </div>

        <div className="bottom text-center mt-5 pt-5 pb-5" style={{ width: '100%' }}>
          <h1 className="bottomHead">Register Now!!</h1>
          <br />
          <p className="bottomTxt">
            Don't miss out on one of the most exciting events that you will ever experience. Get ready to be excited and enhanced.
          </p>
          <Link to="/register">
            <Button variant="primary" size="lg" className="registerBtn">
              REGISTER EVENT
            </Button>
          </Link>
        </div>

        <div className="footer container-fluid bg-dark text-white pt-5 pb-5">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-4 text-center">
              <h1 className="footerHeadTxt">THREADS'23.</h1>
              <p className="footerDesc">
                A National Level Technical symposium hosted by the Department of Computer Science and Engineering in Sona College of Technology, Salem. It provides a dias to exhibit the talents of the student enthusiasts of numerous facets of computer science.
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

export default PaperPresentation;
