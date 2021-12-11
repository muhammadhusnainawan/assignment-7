import React from "react";
import "./Sec4.css";
import ImageOne from "../../assets/Images/taptax.png";
import ImageTwo from "../../assets/Images/accutax.png";
import ImageThree from "../../assets/Images/ssrtax.png";
import ImageFour from "../../assets/Images/taxtime.png";

function Sec4() {
  return (
    <div className="sec4">
      <div className="container sec4__container">
        <div className="row sec4__container__row">
          <div className="col-5 sec4__container__row__h1">
            <h1>Tax Application</h1>
            <h1>Hosting</h1>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
              molestias recusandae voluptatum, tenetur pariatur temporibus amet
              eos iure nihil autem molestiae perspiciatis vero? Distinctio,
              perspiciatis deserunt?
            </p>
          </div>
          <div className="col-7">
            <div className="row">
              <div className="col-6 sec4__container__row__img">
                <img src={ImageOne} alt="" />
              </div>
              <div className="col-6 sec4__container__row__img">
                <img src={ImageTwo} alt="" />
              </div>
            </div>
            <div className="row">
              <div className="col-6 sec4__container__row__img">
                <img src={ImageThree} alt="" />
              </div>
              <div className="col-6 sec4__container__row__img">
                <img src={ImageFour} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sec4;
