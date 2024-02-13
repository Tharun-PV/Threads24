import React from "react";
import { useState } from "react";
import BannerBackground from "../images/space_torch.jpg";
import { Navbar1 } from "./Navbar1";
import WorkshopEvents from "./workshopevents";
// import RegisterButton from "./registerbutton";
import { Link } from "react-router-dom";
// import HomeFooter from "./HomeFooter";
import Footer from "./Footer";
import uiux from "../images/uiux.png";
import cybersecurity from "../images/cybersecurity.png";
import flutter from "../images/flutter.png";
import webdev from "../images/webdev.png";

function Workshops() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="whole">
      <Navbar1 />
      <div className="section3">
        <div className="container ">
          <div className="">
            <p className="text-light h3 mt-3">WORKSHOPS</p>
            <p className="text-light ">
              Workshop allows participants to learn new techniques, improve
              their skills, and gain practical knowledge in a specific area of
              interest. During the workshop, the expert will typically lead the
              participants through a series of activities or demonstrations,
              providing instruction and feedback along the way.
            </p>
            <div className="d-flex justify-content-center my-3">
              <a className="register_btn" href="/register" target="_blank">
                <span> </span>
                <span> </span>
                <span> </span>
                <span> </span>
                Register NOW
              </a>
            </div>
            <div>
              <hr style={{ color: "white" }} />
              <p className="text-light">
                Note: Click on the tiles to know more about the workshops
              </p>
            </div>
            <div className="row d-flex justify-content-around">
              <div className="col-5 col-md-2 my-2 rounded-border hover">
                <div className="card bg-transparent card3">
                  <div className="card-body bg-transparent card3">
                    <h4
                      style={{ textAlign: "center", fontSize: "1.2em" }}
                      className="card-title text-light d-flex justify-content-center btn-text-gradient--gold"
                    >
                      UI/UX
                    </h4>
                    <img
                      className="d-flex justify-content-center"
                      src={uiux}
                      style={{ width: "100%" }}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="col-5 col-md-2 my-2 rounded-border hover">
                <div className="card bg-transparent card3">
                  <div className="card-body bg-transparent card3">
                    <h4
                      style={{ fontSize: "1.3em" }}
                      className="card-title text-light d-flex justify-content-center btn-text-gradient--gold"
                    >
                      Flutter
                    </h4>
                    <img
                      className="d-flex justify-content-center"
                      src={flutter}
                      style={{ width: "120%" }}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="col-5 col-md-2 my-2 rounded-border hover">
                <div className="card bg-transparent card3">
                  <div className="card-body bg-transparent card3">
                    <h4
                      style={{ textAlign: "center", fontSize: "1.2em" }}
                      className="card-title text-light d-flex  justify-content-center btn-text-gradient--gold"
                    >
                      Cyber Security
                    </h4>
                    <img
                      className="d-flex justify-content-center"
                      src={cybersecurity}
                      style={{ width: "100%" }}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="col-5 col-md-2 my-2 rounded-border hover">
                <div className="card bg-transparent card3">
                  <div className="card-body bg-transparent card3">
                    <h4
                      style={{ textAlign: "center", fontSize: "1.2em" }}
                      className="card-title text-light d-flex justify-content-center btn-text-gradient--gold"
                    >
                      Web Development
                    </h4>
                    <img
                      className="d-flex justify-content-center"
                      src={webdev}
                      style={{ width: "100%" }}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <hr style={{ color: "white" }} />
              <p className="text-light">
                Participants will have the opportunity to ask questions, share
                their own experiences, and engage with the material in a
                collaborative and interactive setting.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Workshops;
