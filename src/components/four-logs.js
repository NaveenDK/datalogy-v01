import React, { Component } from "react";
import LikeButton from "../like-button.js";
import LogyType from "./logy-type.js";
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
class FourLogs extends Component {
  render() {
    return (
      <React.Fragment>
        <Row>
          <Col>
            <LogyType
              logyTitle="#talkoLOGY"
              logyPara="this is the paragraph nndasdd this is the paragraph nndasdd "
            />
          </Col>
          <Col>
            <LogyType
              logyTitle="#healthoLOGY"
              logyPara="this is the paragraph nndasdd this is the paragraph nndasdd "
            />
          </Col>
          <Col>
            <LogyType
              logyTitle="#teknoLOGY"
              logyPara="this is the paragraph nndasdd this is the paragraph nndasdd "
            />
          </Col>
          <Col>
            <LogyType
              logyTitle="#earthoLOGY"
              logyPara="this is the paragraph nndasdd this is the paragraph nndasdd "
            />
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}
export default FourLogs;
