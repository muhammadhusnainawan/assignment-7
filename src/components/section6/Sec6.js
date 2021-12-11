import React from "react";
import "./Sec6.css";
import Image from "../../assets/Images/hdots.png";
import ImageTwo from "../../assets/Images/team.png";

function Sec6() {
  return (
    <div className="sec6">
      <div className="container-fluid sec6__container">
        <div className="row">
          <div className="col-10 sec6__hr">
            <hr />
            <p>Why Ace Cloud Hosting?</p>
          </div>
          <div className="col-2 sec6__img">
            <img src={Image} alt="" />
          </div>
        </div>
        <div className="row sec6__row__img">
          <div className="col-2 sec6__img1">
            <img src={Image} alt="" />
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-4 sec6__h3">
              <h4>Always on Support</h4>
              <hr />
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
                quasi, enim facilis at, modi omnis libero quia quidem voluptate
                ipsum fugit veritatis voluptatem expedita sequi.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
              </p>
            </div>
            <div className="col-8 sec6__img3">
                <img src={ImageTwo} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sec6;
