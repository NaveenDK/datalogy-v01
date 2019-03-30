import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { Card, Button } from "react-bootstrap";
library.add(faThumbsUp);

const likeStyle = {
  color: "#0000A0"
};
class LikeButton extends Component {
  handleClick = () => {
    this.props.onClickFunction(this.props.incrementValue);
  };

  render() {
    return (
      <FontAwesomeIcon
        style={likeStyle}
        onClick={this.handleClick}
        icon="thumbs-up"
      />
    );
  }
}

export default LikeButton;
