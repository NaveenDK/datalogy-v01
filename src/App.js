import React, { Component } from "react";
import LikeButton from "./like-button.js";
import NavbarCustom from "./components/navbar";
import Slider from "./components/slider";
import AboutUs from "./components/about-us";
import FourLogs from "./components/four-logs";
import ContactForm from "./components/contact-form";
import DescriptionImage from "./components/description-over-image";
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
  color: "red",
  fontSize: "27px",
  textAlign: "center",
  paddingLeft: "100px"
};
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavbarCustom />
        <Slider />
        <AboutUs />
        <FourLogs />
        <DescriptionImage
          titleOnImage="Let's get started!"
          descriptionImage="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
          btnText="Get Started!"
        />
      </React.Fragment>
    );
  }
}
export default App;
