import React from "react";
import "./Sec2.css";
import Image from "../../assets/Images/microsoft.png";
import ImageTwo from "../../assets/Images/veeam.png";
import ImageThree from "../../assets/Images/salesforce.png";
import ImageFour from "../../assets/Images/vmware.png";
import ImageFive from "../../assets/Images/hdots.png";

function Sec2() {
  return (
    <div className="sec2">
      <div className="container">
        <div className="row sec2__p">
          <p>Trusted By</p>
        </div>
        <div className="row">
          <div className="col-2 sec2_img">
            <img className="img" src={Image} alt="" />
          </div>
          <div className="col-2 sec2_img">
            <img className="img" src={ImageTwo} alt="" />
          </div>
          <div className="col-2 sec2_img">
            <img className="img" src={ImageFour} alt="" />
          </div>
          <div className="col-2 sec2_img">
            <img className="img" src={Image} alt="" />
          </div>
          <div className="col-2 sec2_img">
            <img className="img" src={ImageThree} alt="" />
          </div>
          <div className="col-2 sec2_img">
            <img className="img" src={ImageTwo} alt="" />
          </div>
        </div>
        <div className="row sec2__hr">
          <hr />
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 sec2__p">
            <p>
              Our Applications <span>Hosting Services</span>
            </p>
            <p>
              We host any application on our secured cloud at nominal prices.
            </p>
          </div>
          <div className="col-2 sec2__img">
            <img className="img" src={ImageFive} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Sec2;
