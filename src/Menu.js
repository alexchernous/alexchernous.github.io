import React, { Component } from "react";
import Button from "./Button";
import "./Button.css";
import arrow from "./arrow-left.png";


class Menu extends Component {
  constructor() {
    super();

    this.state = {
      buttonHover: false
    }

    this.updateKeyHelp = this.updateKeyHelp.bind(this);
  }

  updateKeyHelp(label) {
    const { updateKey } = this.props;
    this.setState({buttonHover: true});
    updateKey(label);
  }

  render() {
    return (
      <div className="headerAndTooltip">
        <div className="menu">
          <Button name="Welcome" updateKeyHelp={this.updateKeyHelp}/>
          <Button name="About" updateKeyHelp={this.updateKeyHelp}/>
          <Button name="Resume" updateKeyHelp={this.updateKeyHelp}/>
        </div>

        {
          this.state.buttonHover &&
          <div style={{
            margin: "0px 10px", 
            padding: "0px",
            flexDirection: "row",
            justifyContent: "left"}}
            className="tooltip">

            <img src={arrow} />
            <p style={{width: "50%"}} className="tooltip-message">
              Demonstration of state & prop usage, conditional rendering (like in login page), and inline JSX styling for this explanation
            </p>
          </div>
        }
      </div>
      
    ); 
  }
}

export default Menu;