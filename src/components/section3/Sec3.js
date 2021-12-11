import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Image from "../../assets/Images/book.png";
import ImageTwo from "../../assets/Images/arrowimg.png";
import ImageThree from "../../assets/Images/laptopImg.png"
import "./Sec3.css";

function Sec3() {
  return (
    <div className="sec3">
      <div className="container sec3__container1">
        <div className="row sec3__container1__row1">
          <div className="col-3 sec3__card">
            <Card style={{ width: "16.5rem" }}>
              <Card.Img variant="top" src={Image} />
              <Card.Body>
                <Card.Title>Quick Books</Card.Title>
                <Card.Text className ="sec3__container1__row1__p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quidem dolor vitae accusamus deserunt quod nisi, repellat
                  error minima nesciunt magni a maxime quia architecto
                  consectetur officiis dolorem voluptatem.
                </Card.Text>
                <Button>Book Now</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-9 sec3__tab">
            <div className="row">
              <div className="col-3 sec3__tab__btn1">
                <Button variant="primary" size="lg">
                  Cloud Hosting
                </Button>{" "}
              </div>
              <div className="col-3 sec3__tab__btn2">
                <Button variant="primary" size="lg">
                  Buy Licence
                </Button>{" "}
              </div>
            </div>
            <div className="container sec3__container2">
              <div className="row sec3__container2__row1">
                <div className="col-12 sec3__container2__row1__img">
                  <img src={ImageTwo} alt="" />
                </div>
              </div>
              <div className="row sec3__container2__row2">
                <div className="col-6 sec3__container2__row2__h1">
                  <h1>Heading One</h1>
                  <hr />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sint iure officia vel eveniet debitis corrupti assumenda
                    velit aliquid! Facere reiciendis sapiente accusantium vitae
                    saepe impedit?
                  </p>
                  <Button className="btn__lg" variant="primary" size="lg">
                  Compare Plans
                </Button>{" "}
                  <Button className="btn__xl" variant="primary" size="lg">
                  Explore QuickBooks Hosting
                </Button>{" "}
                </div>
                <div className="col-6 sec3__container2__row2__img">
                <img src={ImageThree} alt="" />
               
                </div>
              </div>
            </div>
            <div className="container sec3__container3">

            <div className="row sec3__container3__row">
                  <div className="col-12 sec3__container3__row1__p">
                    <p>Unlimited Add-Ons, Integrations and Application can be hosted along with QuickBooks</p>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sec3;
