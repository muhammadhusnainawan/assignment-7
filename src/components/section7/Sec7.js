import React from "react";
import "./Sec7.css";
import Image from '../../assets/Images/cards.png'
import ImageTwo from '../../assets/Images/ratings.png'

function Sec7() {
  return (
    <div className="sec7">
      <div className="container sec7__container">
        <div className="row">
          <div className="col-12 sec7__hr">
            <hr />
            <p>Customer Testimonials</p>
          </div>
        </div>
        <div className="row">
            <div className="col-12 sec7__img">
                <img src={Image} alt="" />
            </div>
        </div>
        <div className="row sec7__rowratings">
            <div className="col-12 sec7__ratings">
                <img src={ImageTwo} alt="" />
            </div>
        </div>
      </div>
    </div>
  );
}

export default Sec7;
