import React, { Component } from "react";
import Radium from "radium";
import {ThemeContext} from './theme-context';


class Button extends Component {
  static contextType = ThemeContext;

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
          style={
            [this.context["buttonBase"], this.context["menu"]]
          }
          value={this.props.name}
          onClick={this.handleButtonPress}
        >
          {this.props.name}
        </button>
        
      </div>
      
    );
  }
}
Button.contextType = ThemeContext;

export default Radium(Button);