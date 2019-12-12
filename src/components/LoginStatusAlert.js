import React, { Component } from "react";
import { Alert } from "react-bootstrap";

class LoginStatusAlert extends Component {
  render(){
    const contentMap = {
      1: ["success", "You \"logged in\"!", "Even though there's no backend to this website (aside from GitHub magic) the state of the app has changed. If we wanted, we could implement a state based context to this website and have it follow us around the components to unlock features or content."],
      0: ["warning", "You \"logged out\".", "The state is reset (can be seen by pressing 'Go Back'). In a hypothetical state based context, any features or content that was exclusive to logged in users is now gone."],
    };

    return (
      <Alert
        variant={contentMap[+this.props.isLoggedIn][0]}
        dismissible
        onClose={() => this.props.closeAlert()}
      >
        <Alert.Heading>{contentMap[+this.props.isLoggedIn][1]}</Alert.Heading>
        <p>{contentMap[+this.props.isLoggedIn][2]}</p>
      </Alert>
    );
  }
}

export default LoginStatusAlert;