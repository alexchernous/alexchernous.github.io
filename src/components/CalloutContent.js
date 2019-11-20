import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

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
        <div style={{display : "flex", alignItems : "center"}}>
          <span style={{color: "white"}}>
            {this.props.content}
          </span>
          <FontAwesomeIcon icon={faTimesCircle} color="#ff6e6e" onClick={this.closeCallout} style={{margin: "5px"}} />
        </div>
    );
  }
}

export default CalloutContent;