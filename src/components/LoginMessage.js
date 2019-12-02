import React, { Component } from "react";

class LoginMessage extends Component {

  render() {
    return (
      <p style={{
        color : "white", 
        padding : "8px",
        margin: "0px"
        }}>
          Hi, {this.props.userName}!
        </p>
    );
  }


}

export default LoginMessage;