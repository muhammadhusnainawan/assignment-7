import React from "react";
import "./Sec8.css";
import InputGroup from "react-bootstrap/InputGroup";
import { FormControl, Button } from "react-bootstrap";
import Image from "../../assets/Images/arrowicon.png";
function Sec8() {
  return (
    <div className="sec8">
      <div className="container-fluid sec8__container">
        <div className="row sec8-h1row">
          <div className="col-6">
            <h2>Try Our Services</h2>
            <h2>Free for 30 Days</h2>
          </div>
          <div className="col-6 sec8__input">
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Type Your Email"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <Button variant="outline-secondary" id="button-addon2">
                Subscribe <img src={Image} alt="" />
              </Button>
            </InputGroup>
          </div>
        </div>
        
      </div>
            <div className="container-fluid sec8__containerfluid">
            <div className="row">
          <div className="col-12 sec8__footer">
            <p>Footer (refer main website acehosting.com)</p>
          </div>
        </div>
            </div>
    </div>
  );
}

export default Sec8;
