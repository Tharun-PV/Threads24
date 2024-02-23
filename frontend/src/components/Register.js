import React from "react";
import { Navbar1 } from "./Navbar1";
import { useState, useEffect } from "react";
import "./registration.css";
import { useNavigate } from "react-router-dom";
import eventQR from "../images/eventQR.jpeg";
import workshopQR from "../images/workshopQR.jpeg";
import workshopEventsQr from "../images/workshopEventsQr.jpeg";

import gpay from "../images/GPAY.jpeg";
import phonePe from "../images/phonepe.jpeg";
import paytm from "../images/PAYTM.jpeg";

const Register = () => {
  const details = {};
  const navigate = useNavigate();
  const [showPage, setShowPage] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const [UPI, setUPI] = useState("");

  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [college, setCollege] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState(null);
  const [showHiddenDiv, setShowHiddenDiv] = useState(false);
  const [showHiddenDiv2, setShowHiddenDiv2] = useState(false);
  const [checked, setChecked] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [selectedCollege, setSelectedCollege] = useState(
    "Sona College Of Technology"
  );
  const [selectedEvents, setSelectedEvents] = useState(false);
  const [selectedWorkshops, setSelectedWorkshops] = useState("");
  const [selectedYear, setSelectedYear] = useState("1");

  const [otp, setOtp] = useState("");
  const [showModal, setShowModal] = useState(false);

  function revert(e) {
    setChecked(!checked);
    setSelectedEvents(!selectedEvents);
  }

  function revert2(e) {
    setChecked2(!checked2);
    setShowHiddenDiv2(checked2);
  }

  useEffect(() => {
    console.log(selectedCollege);

    console.log(selectedWorkshops);

    if (selectedCollege === "Sona College Of Technology") {
      setShowHiddenDiv(false);
    } else {
      setShowHiddenDiv(true);
      setSelectedCollege(college);
    }
    setShowHiddenDiv2(checked2);
    if (!checked2) {
      setSelectedWorkshops(false);
    }
  }, [selectedCollege, checked2, selectedWorkshops, showPage, showModal]);

  const handleCollegeChange = (event) => {
    setSelectedCollege(event.target.value);
  };

  const handleWorkshopChange = (event) => {
    setSelectedWorkshops(event.target.value);
  };

  const handleOptionChange4 = (event) => {
    setSelectedYear(event.target.value);
  };

  const handleUPIchange = (event) => {
    setUPI(event.target.value);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const sendOTP = async (e) => {
    if (selectedEvents == false && checked2 == false) {
      e.preventDefault();
      alert("Select atleast one participation");
    } else {
      setShowModal(true);
      setShowForm(false);

      const response = await fetch(
        // "https://threads24.onrender.com/threads/sendotp",
        "threads/sendotp",
        {
          method: "POST",
          body: JSON.stringify({ email: email }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("OTP sent");
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const details = {
      name,
      selectedCollege,
      department,
      email,
      number,
      selectedEvents,
      selectedWorkshops,
      selectedYear,
    };

    const otpVerificationResponse = await fetch(
      // "https://threads24.onrender.com/threads/verifyotp",
      "threads/verifyotp",
      {
        method: "POST",
        body: JSON.stringify({ email: email, otp: otp }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (otpVerificationResponse.status == 200) {
      if (
        details.email.includes("cse@sonatech.ac.in") ||
        details.email.includes("aml@sonatech.ac.in") ||
        details.email.includes("csd@sonatech.ac.in")
      ) {
        console.log("EMail: ", details.email);
        const registrationResponse = await fetch(
          // "https://threads24.onrender.com/threads/registersona",
          "threads/registersona",
          {
            method: "POST",
            body: JSON.stringify(details),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const responseData = await registrationResponse.json();
        console.log(responseData);
        console.log("RESPONSE DATA: ", responseData.mssg);
        if (responseData) {
          alert(responseData.mssg);
        }
        // if (!responseData.flag) {
        //   alert(responseData.msgg);
        // } else {
        //   alert(
        //     "Successfully registered! You will receive a confirmation mail shortly"
        //   );
        // }
        navigate("/");
        // return;
      } else {
        setShowForm(false);
        setShowModal(false);
        setShowPage(true);
      }
    } else {
      alert("Wrong OTP entered");
    }
  };

  const handleSubmit2 = async (e) => {
    e.preventDefault();

    if (UPI.length !== 12 || isNaN(UPI)) {
      alert("You can only enter 12digit transaction ID");
      return;
    }
    const details = {
      name,
      selectedCollege,
      department,
      email,
      number,
      selectedEvents,
      selectedWorkshops,
      selectedYear,
    };
    console.log(email);
    e.preventDefault();
    const UPI_id = UPI;
    console.log(UPI_id);

    const UPIresponse = await fetch(
      // "https://threads24.onrender.com/threads/register",
      "threads/register",
      {
        method: "POST",
        body: JSON.stringify({ details, UPI_id }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    // .then((res) => res.json())
    // .then((data) => {
    //   console.log(data);
    // });
    UPIresponse.json()
      .then((responseJson) => {
        if (responseJson) {
          alert(responseJson.mssg);
          navigate("/");
        } else {
          alert("failed");
        }
      })
      .catch((error) => {
        console.error("Error processing JSON response:", error);
      });
    // console.log("UPI RESP");
    // console.log(UPIresponse);
    // console.log(UPIresponse.mssg);

    // if (UPIresponse) {
    //   alert(UPIresponse.mssg);
    //   navigate("/");
    // } else {
    //   alert("failed");
    // }
  };

  return (
    <div className="register">
      <div className="nav">
        <Navbar1 />
      </div>

      {/* OTP page */}
      {showModal && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          className="modal1"
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
            className="modal-content2"
          >
            <h2 style={{ textAlign: "center" }}>
              Enter OTP sent to your registered mail id:{" "}
            </h2>
            <input
              type="number"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            {/* <button onClick={handleSubmit}>Submit</button> */}
            <a
              className="register_btn btn2 "
              onClick={handleSubmit}
              style={{ cursor: "pointer" }}
              target="_blank"
            >
              <span> </span>
              <span> </span>
              <span> </span>
              <span> </span>
              Submit
            </a>
          </div>
        </div>
      )}

      {/* Form page */}
      {showForm && (
        <div className="workshopsForm">
          <div style={{ paddingLeft: "1em" }} className="hero1">
            <div className="Txt">
              <h1 className="topic">REGISTRATION</h1>
            </div>
            <form
              action="#"
              id="workshopRegis"
              className="workshopRegis"
              onSubmit={sendOTP}
            >
              <label htmlFor="canditateName">Name</label>
              <br />
              <input
                type="text"
                id="canditateName"
                className="inputBox"
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
              />
              <br />
              <p className="hint">
                Note: The details you enter will be reflected in your ID and
                certificates. So, kindly enter correct details
              </p>
              <br />

              <p className="label">College</p>
              <div className="radioBtn">
                <input
                  type="radio"
                  id="sct"
                  name="Colleger"
                  value="Sona College Of Technology"
                  checked={selectedCollege === "Sona College Of Technology"}
                  // checked={false}
                  onClick={handleCollegeChange}
                />
                <label htmlFor="sct" className="workShopTxt" id="workShopTxtid">
                  Sona College Of Technology
                </label>
                <br />
              </div>

              <div className="radioBtn">
                <input
                  type="radio"
                  id="others"
                  name="Colleger"
                  value="Others"
                  checked={selectedCollege !== "Sona College Of Technology"}
                  // onChange={handleOptionChange}
                  onClick={handleCollegeChange}
                />
                <label htmlFor="others" className="workShopTxt">
                  Others (Your college name)
                </label>
                <br />
              </div>
              <br />

              <div
                className="hiddenDiv"
                id="hiddenDiv"
                style={{ display: showHiddenDiv ? "block" : "none" }}
              >
                <label htmlFor="clgName">College Name</label>
                <input
                  type="text"
                  id="clgName"
                  className="inputBox"
                  onChange={(e) => setCollege(e.target.value)}
                  value={college}
                />
              </div>

              <label>Participation</label>
              <br />
              <div className="radioBtn">
                <input
                  type="checkbox"
                  id="event"
                  name="event"
                  value="yes"
                  checked={checked}
                  onClick={revert}
                />
                <label htmlFor="event" className="workShopTxt">
                  Events (24.02.2024)
                </label>
                <br />
              </div>

              {/* <div className="radioBtn">
                <input
                  type="checkbox"
                  id="workshop"
                  name="workshop"
                  value="workshop"
                  className="workselect"
                  checked={checked2}
                  onClick={revert2}
                />
                <label htmlFor="workshop" className="workShopTxt">
                  Workshop (23.02.2024)
                </label>
                <br />
              </div> */}

              <div
                className="hiddenDiv1"
                id="hiddenDiv1"
                style={{ display: showHiddenDiv2 ? "block" : "none" }}
              >
                <br />
                <label>Workshop</label>
                <br />
                <div className="radioBtn">
                  <input
                    type="radio"
                    id="rpa"
                    name="workshop1"
                    value="uiux"
                    checked={selectedWorkshops === "uiux"}
                    onChange={handleWorkshopChange}
                  />
                  <label htmlFor="rpa" className="workShopTxt">
                    UI UX Design
                  </label>
                  <br />
                </div>

                <div className="radioBtn">
                  <input
                    type="radio"
                    id="cyber"
                    name="workshop1"
                    value="cyber_security"
                    checked={selectedWorkshops === "cyber_security"}
                    onChange={handleWorkshopChange}
                  />
                  <label htmlFor="cyber" className="workShopTxt">
                    Cyber Security
                  </label>
                  <br />
                </div>

                <div className="radioBtn">
                  <input
                    type="radio"
                    id="web_development"
                    name="workshop1"
                    value="web_development"
                    checked={selectedWorkshops === "web_development"}
                    onChange={handleWorkshopChange}
                  />
                  <label htmlFor="cyber" className="workShopTxt">
                    Web Development
                  </label>
                  <br />
                </div>

                <div className="radioBtn">
                  <input
                    type="radio"
                    id="web"
                    name="workshop1"
                    value="flutter"
                    checked={selectedWorkshops === "flutter"}
                    onChange={handleWorkshopChange}
                  />
                  <label htmlFor="web" className="workShopTxt">
                    Flutter
                  </label>
                  <br />
                </div>
              </div>

              <br />
              <label htmlFor="dept" className="dept">
                Department
              </label>
              <br />
              <input
                type="text"
                required
                id="dept"
                className="inputBox"
                onChange={(e) => setDepartment(e.target.value)}
                value={department}
              />
              <br />
              <br />

              <p className="label">Year</p>
              <div className="Yrs">
                <div className="YrRadio">
                  <input
                    type="radio"
                    id="firstYr"
                    name="year"
                    value="1"
                    checked={selectedYear === "1"}
                    onChange={handleOptionChange4}
                  />
                  <label htmlFor="firstYr" className="YrTxt">
                    I
                  </label>
                </div>

                <div className="YrRadio">
                  <input
                    type="radio"
                    id="secondYr"
                    name="year"
                    value="2"
                    checked={selectedYear === "2"}
                    onChange={handleOptionChange4}
                  />
                  <label htmlFor="secondYr" className="YrTxt">
                    II
                  </label>
                </div>

                <div className="YrRadio">
                  <input
                    type="radio"
                    id="thirdYr"
                    name="year"
                    value="3"
                    checked={selectedYear === "3"}
                    onChange={handleOptionChange4}
                  />
                  <label htmlFor="thirdYr" className="YrTxt">
                    III
                  </label>
                </div>

                <div className="YrRadio1">
                  <input
                    type="radio"
                    id="fourthYr"
                    name="year"
                    value="4"
                    checked={selectedYear === "4"}
                    onChange={handleOptionChange4}
                  />
                  <label htmlFor="fourthYr" className="YrTxt">
                    IV
                  </label>
                </div>
              </div>

              <label htmlFor="contactNo">Contact Number</label>
              <br />
              <input
                type="tel"
                required
                id="contactNo"
                className="inputBox"
                maxLength="10"
                minLength="10"
                onChange={(e) => setNumber(e.target.value)}
                value={number}
              />
              <br />
              <br />

              <label htmlFor="email">
                Email ID (Note: If you are from Sona College, kindly enter your
                sonatech mail ID)
              </label>
              <br />
              <input
                type="email"
                required
                id="email"
                className="inputBox"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <br />
              <p className="hint">
                Note: If you are from Sona College, kindly enter your sonatech
                mail ID
              </p>
              <br />

              <br />
              <button
                style={{ cursor: "pointer" }}
                className="submitBtn"
                id="nextBtn"
              >
                NEXT
              </button>
              <br />
              <br />
            </form>
          </div>
        </div>
      )}

      {/* payment page */}
      <div>
        {showPage && (
          <div className="whole">
            <div className="payment">
              <div className="payment2">
                <p>
                  Scan and pay through the QR Code or take a screenshot of the
                  QR code and upload it in the UPI app to make the payment.
                  <br />
                  Or else make UPI payment to: <strong>8270202119</strong>
                  <br />
                  Only events: 300rs
                  <br />
                  Only Workshop: 200rs
                  <br />
                  Both events and Workshops: 500rs
                </p>{" "}
                {/* outside clg, events */}
                {selectedEvents &&
                  !selectedWorkshops &&
                  !email.includes("cse@sonatech.ac.in") &&
                  !email.includes("aml@sonatech.ac.in") &&
                  !email.includes("csd@sonatech.ac.in") && (
                    <img className="qr" src={eventQR} alt="" />
                  )}
                {/* outside clg,  workshops events */}
                {selectedEvents &&
                  selectedWorkshops &&
                  !email.includes("cse@sonatech.ac.in") &&
                  !email.includes("aml@sonatech.ac.in") &&
                  !email.includes("csd@sonatech.ac.in") && (
                    <img className="qr" src={workshopEventsQr} alt="" />
                  )}
                {/* outside clg, workshops */}
                {!selectedEvents &&
                  selectedWorkshops &&
                  !email.includes("cse@sonatech.ac.in") &&
                  !email.includes("aml@sonatech.ac.in") &&
                  !email.includes("csd@sonatech.ac.in") && (
                    <img className="qr" src={workshopQR} alt="" />
                  )}
                {/*  inside clg, workshops */}
                {selectedWorkshops &&
                  (email.includes("cse@sonatech.ac.in") ||
                    email.includes("aml@sonatech.ac.in") ||
                    email.includes("csd@sonatech.ac.in")) && (
                    <img className="qr" src={workshopQR} alt="" />
                  )}
                <p>Enter your 12 digit transaction ID: </p>
                <input
                  className="input"
                  maxLength="12"
                  minLength="12"
                  type="text"
                  name=""
                  id=""
                  required
                  onChange={handleUPIchange}
                  placeholder="Enter your 12 digit transaction ID: "
                />
                <button onClick={handleSubmit2}>Submit</button>
                <p className="refer">Refer below images for Transaction id:</p>
                <img src={gpay} className="gpay" alt="" />
                <img src={phonePe} className="gpay" alt="" />
                <img src={paytm} className="gpay" alt="" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;
