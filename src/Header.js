import React, { Component } from "react";
import logo from "./logo.png";

class Header extends Component {

  render() {
    const headerMessage1 = "<<Large header for all your large header needs>>"
    const headerMessage2 = "<<Click some buttons, resize screen>>"
    return (
      <div className="App-header">
        <p>{headerMessage1}</p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome{this.props.welcomeMessage}
        </p>
        <p>{headerMessage2}</p>
      </div>
    );
  }
}

export default Header;