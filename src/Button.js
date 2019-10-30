import React, { Component } from "react";

class Button extends Component {

  constructor(props) {
    super(props);
    this.handleButtonPress = this.handleButtonPress.bind(this);
  }

  handleButtonPress(event){
    event.preventDefault();
    this.props.updateKeyHelp(event.target.value);
  }

  render () {
    return (
      <div>
        <button 
          value={this.props.name}
          onClick={this.handleButtonPress}
        >
          {this.props.name}
        </button>
        
      </div>
      
    );
  }
}

export default Button;