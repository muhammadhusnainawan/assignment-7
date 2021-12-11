import React from "react";
import { Container } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HeaderSec2.css";
import Image from "../../assets/Images/dots2.png";

function HeaderSec2() {
  return (
    <div className="headerSec2">
      <div className="row">
        <div className="col-10 headerSec2__bg">
          <Navbar>
            <Container>
              <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#link">Link</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <div className="container">
            <div className="row headerSec2__bg__p1">
              <p>It's Time To Give Your Business</p>
            </div>
          </div>
          <div className="row">
            <div className="col-2 headerSec2__bg__img">
              <img className="img" src={Image} alt="" />
            </div>
            <div className="col-10 headerSec2__bg__p2">
              <h1>A Futuristic Spin</h1>
              <p>Host Any Software On Our Secured Cloud Now</p>
              <div className="row ">
                <div className="col-3 ">
                  <Button className="headerSec2__bg__btn" size="sm">
                    Try for Free
                  </Button>
                </div>
                <div className="col-3">
                  <Button className="headerSec2__bg__btn2" size="sm">
                    See Plans Offers
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-2 headerSec2__right">
          <Button size="sm">Try for Free</Button>
        </div>
      </div>
    </div>
  );
}
export default HeaderSec2;
