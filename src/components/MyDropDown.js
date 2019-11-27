import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

class MyDropDown extends Component {
  render() {
    return (
      <React.Fragment>
        <FontAwesomeIcon icon={faExternalLinkAlt} color="#e0a800" style={{marginRight : "5px"}} />
        My links
      </React.Fragment>
    );
  }
}

export default MyDropDown;