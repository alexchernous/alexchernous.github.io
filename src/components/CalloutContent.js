import React, { Component } from "react";
import red_x from "../img/red-x.png";

class CalloutContent extends Component {
  constructor(props) {
    super(props);

    this.closeCallout = this.closeCallout.bind(this);
  }

  closeCallout() {
    this.props.closeCallout();
  }

  render() {
    return (
      <React.Fragment>
        <span style={{color: "white", }}>
          {this.props.content}
        </span>
        <img 
          src={red_x} 
          alt="logo" 
          style={{padding: "5px", height: "25px", width: "25px", cursor: "pointer"}}onClick={this.closeCallout}
        />
      </React.Fragment>
    );
  }
}

export default CalloutContent;