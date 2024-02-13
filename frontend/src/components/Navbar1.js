import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../images/ThreadsLogo.png";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import Download from "./Download";
import "../App.css"; // Import the custom CSS file

export const Navbar1 = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [downloadUser, setDownloadUser] = useState(null);

  const askemail = async (e) => {
    e.preventDefault();
    const email = prompt("enter");

    const details = { email };

    const response = await fetch("threads/download", {
      method: "POST",
      body: JSON.stringify(details),
      headers: {
        "Content-Type": "application/json",
        // 'Authorization': Beared ${user.token}
      },
    });

    const json = await response.json();

    if (response.ok) {
      if (json.length > 0) {
        setDownloadUser(json[0]);
      } else {
        alert("This email is not registered!");
      }
    } else {
      console.log(response);
    }
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{ backgroundColor: "rgba(9, 9,9, 0.5)" }}
    >
      <div className="container-fluid ">
        <Link
          to="/"
          className="navbar-brand d-flex align-items-center"
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src={logo}
            alt=""
            className="logo"
            style={{
              backgroundImage:
                "-webkit-linear-gradient(bottom, #ffffdb, #a16422)",
              WebkitBackgroundClip: "text",
              color: "transparent",
              marginRight: "10px",
              width: "1.8em",
              // height: "50px" // Adjust the spacing between logo and text
            }}
          />
          <h3
            className="btn-text-gradient--gold dark"
            style={{
              // backgroundImage:
              //   "-webkit-linear-gradient(bottom, #ffffdb, #a16422)",
              // WebkitBackgroundClip: "text",
              // color: "transparent",
              margin: "0", // Remove margin to align text and logo
            }}
          >
            Threads'24
          </h3>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          style={{
            width: "50px",
            height: "50px",
            border: "none",
            // position: "relative",
            background: "none",
          }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className="navbar-toggler-icon"
            style={{
              color: "white",
              width: "40px",
              height: "40px",
              textAlign: "center",
            }}
          ></span>
        </button>

        <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}>
          <ul className="navbar-nav d-flex justify-content-end ">
            <li className="nav-item ">
              <NavLink
                to="/events"
                className="nav-link px-3"
                activeClassName=""
                style={{
                  color: "white",
                  // fontFamily: "Lora, sans-serif",
                  fontFamily: "Source Code Pro, monospace",
                }}
              >
                EVENTS
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink
                to="/workshops"
                className="nav-link px-3"
                activeClassName=""
                style={{
                  color: "white",
                  fontFamily: "Lora, sans-serif",
                  fontFamily: "Source Code Pro, monospace",
                }}
              >
                WORKSHOPS
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink
                to="/register"
                className="nav-link"
                activeClassName=""
                style={{
                  color: "white",
                  fontFamily: "Source Code Pro, monospace",
                }}
              >
                REGISTER
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink
                to="/download"
                className="nav-link"
                onClick={askemail}
                activeClassName=""
                style={{
                  color: "white",
                  fontFamily: "Source Code Pro, monospace",
                }}
              >
                DOWNLOAD ID
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      {downloadUser && (
        <div style={{ position: "absolute", left: "-9999px", top: "-9999px" }}>
          <Download user={downloadUser} />
        </div>
      )}
    </nav>
  );
};

export default Navbar1;
