import React, { Component } from "react";
import LikeButton from "../like-button.js";
import ContactForm from "./contact-form";
import { Container, Row, Col, Button } from "react-bootstrap";
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
const homeTitles = {
  textAlign: "center",
  paddingTop: "60px",
  fontSize: "40px"
};
const homePara = {
  textAlign: "center",
  paddingTop: "20px",
  fontSize: "20px"
};
const colorNavLink = {
  color: "#006430",
  fontSize: "27px",
  textAlign: "center",
  paddingLeft: "100px"
};
const imageAndText = {
  marginTop: "60px",
  padding: "100px 0 70px",

  color: "#fff",
  textAlign: "center"
};
const wrapper = {
  background: "#132125 url(./images/background-image.jpg) no-repeat 0 0",
  backgroundSize: "cover"
};
const backgroundDescription = {
  color: "black",
  fontSize: "30px",
  paddingLeft: "70px",
  paddingRight: "70px"
};
const mainDiv = {
  textAlign: "center"
};
const subDiv = {
  textAlign: "left"
};
const wrapContact = {
  marginLeft: "0",
  paddingTop: "30px",
  paddingBottom: "40px",
  backgroundColor: "rgba(0,0,0,0.2)"
};
const backgroundTitle = { color: "#006430" };
class DescriptionImage extends Component {
  render() {
    return (
      <React.Fragment>
        <div style={wrapper}>
          <div style={imageAndText}>
            <h1 style={backgroundTitle}>{this.props.titleOnImage}</h1>
            <p style={backgroundDescription}>{this.props.descriptionImage}</p>
            <Button>{this.props.btnText}</Button>
          </div>
          <Row style={wrapContact}>
            <Col />
            <Col>
              <ContactForm />
            </Col>
            <Col />
          </Row>
        </div>
      </React.Fragment>
    );
  }
}
export default DescriptionImage;
