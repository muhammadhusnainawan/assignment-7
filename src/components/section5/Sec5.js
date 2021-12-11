import React from "react";
import "./Sec5.css";
import Button from "react-bootstrap/Button";

function Sec5() {
  return (
    <div className="sec5">
      <div className="container sec5__container">
        <div className="row sec5__container__row">
          <div className="col-8 sec5__container__row__h2">
            <h2>Have Questions?</h2>
            <h2>Ask our Solutions Consultant</h2>
            <hr />
            <p>Call Us +1 (XXX) XXX-XXXX </p>
          </div>
          <div className="col-4 sec5__container__row__col4">
            <Button className="btn__lgg" variant="primary" size="lg">
              Get a Call Back
            </Button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sec5;
