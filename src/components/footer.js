import React, { Component } from "react";
import LikeButton from "../like-button.js";

import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { library } from "@fortawesome/fontawesome-svg-core";
//import fontawesome from "@fortawesome/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faEnvelope,
  faMapMarkedAlt,
  faMapPin,
  faMapMarker
} from "@fortawesome/free-solid-svg-icons";

library.add(faEnvelope);
library.add(faMapMarker);

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
const homeTitles = {
  textAlign: "center",
  paddingTop: "60px",
  fontSize: "40px"
};
const footerPara = {
  textAlign: "left",
  padding: "20px",
  fontSize: "15px"
};
const colorNavLink = {
  color: "#006430",
  fontSize: "27px",
  textAlign: "center",
  paddingLeft: "100px"
};
const secondCol = {
  paddingTop: "40px"
};
const iconStyle = {
  fontColor: "grey"
};
class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <Row>
          <Col class="sectionHeader">
            <img src="./logo-datalogy.png" />
            <p style={footerPara}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </Col>
          <Col>
            <h3 style={secondCol}>Menu</h3>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>#teknoLOGY</li>
              <li>Get Started</li>
            </ul>
          </Col>

          <Col>
            <h3 style={secondCol}>Contact Us</h3>
            <FontAwesomeIcon
              style={iconStyle}
              onClick={this.handleClick}
              icon="envelope"
            />{" "}
            cmiduna@gmail.com <br />
            <FontAwesomeIcon
              style={iconStyle}
              onClick={this.handleClick}
              icon="map-marker"
            />{" "}
            Earth
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}
export default Footer;
