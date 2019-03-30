import React, { Component } from "react";
import LikeButton from "../like-button.js";

import { Container, Row, Col } from "react-bootstrap";
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
class LogyType extends Component {
  render() {
    return (
      <React.Fragment>
        <Row>
          <Col className="col-sm-6 col-md-3" />
          <Col />
          <Col class="sectionHeader">
            <h2 style={homeTitles} className="sectionTitle textCenter">
              {this.props.logyTitle}
            </h2>
            <p style={homePara}> {this.props.logyPara}</p>
          </Col>
          <Col />
        </Row>
      </React.Fragment>
    );
  }
}
export default LogyType;
