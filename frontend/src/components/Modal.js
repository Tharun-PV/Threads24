import React from "react";
import { Navbar1 } from "./Navbar1";

function Modal() {
  return (
    <div className="modal-container">
      <Navbar1></Navbar1>
      <div className="modal1">
        <div className="modal-content2">
          <span className="close">&times;</span>
          <h2>Enter OTP sent to your registered mail Id: </h2>
          <input type="number" />
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
