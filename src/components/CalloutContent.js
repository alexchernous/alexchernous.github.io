import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

class CalloutContent extends Component {
  render() {
    return (
      <div style={{
        display: "flex",
        alignItems: "center"
        }}>

        <span style={{
          color: "white"
          }}>

          {this.props.content}
        </span>
        <FontAwesomeIcon
          icon={faTimesCircle}
          color="#ff6e6e"
          onClick={() => this.props.closeCallout()}
          style={{
            margin: "5px"
            }} />
      </div>
    );
  }
}

export default CalloutContent;