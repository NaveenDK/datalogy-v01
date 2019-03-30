import React, { Component } from "react";
import LikeButton from "../like-button.js";

import {
  Button,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl
} from "react-bootstrap";
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
  paddingLeft: "50px"
};
class NavbarCustom extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">
            <img src="./logo-datalogy.png" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link style={colorNavLink} href="#home">
                #talkoLOGY
              </Nav.Link>
              <Nav.Link style={colorNavLink} href="#link">
                #healthoLOGY
              </Nav.Link>
              <Nav.Link style={colorNavLink} href="#link">
                #teknoLOGY
              </Nav.Link>
              <Nav.Link style={colorNavLink} href="#link">
                #earthoLOGY
              </Nav.Link>
              <NavDropdown
                style={colorNavLink}
                title="#More"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </React.Fragment>
    );
  }
}
export default NavbarCustom;
