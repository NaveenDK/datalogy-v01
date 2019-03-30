import React, { Component } from "react";
import LikeButton from "../like-button.js";

import { Carousel } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { library } from "@fortawesome/fontawesome-svg-core";
//import fontawesome from "@fortawesome/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

library.add(faThumbsUp);

const divWrapper = {
  width: "%100",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center"
};
const divStyle = {
  textAlign: "center",
  position: "absolute",
  width: "100%",
  left: "0",
  top: "0",
  margin: "auto",
  padding: "0"
};
const itemStyle = {
  color: "red"
};
const divMenuItems = {
  textAlign: "center",
  position: "absolute",
  width: "100%",
  left: "0",
  top: "0",
  margin: "auto",
  padding: "0"
};
const colorNavLink = {
  color: "#006430",
  fontSize: "27px",
  textAlign: "center",
  paddingLeft: "100px"
};
class Slider extends Component {
  render() {
    return (
      <React.Fragment>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./images/slide-volcano.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h1>#EarthoLOGY</h1>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./images/slide-computer.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h1>#teknoLOGY</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./images/slide-coffe.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h1>#healthoLOGY</h1>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </React.Fragment>
    );
  }
}
export default Slider;
