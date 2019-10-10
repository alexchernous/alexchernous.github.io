import React, { Component } from 'react';
import'./Button.css';

class Button extends Component {

  constructor(props) {
    super(props);

    this.handleButtonPress = this.handleButtonPress.bind(this);
  }

  handleButtonPress(evt){
    evt.preventDefault();
    this.props.updateKeyHelp(evt.target.value);
  }

  render () {
    return (
      <div>
        <button 
          className='button' 
          name={this.props.name} 
          value={this.props.name}
          onClick={this.handleButtonPress}
        >{this.props.name}</button>
      </div>
      
    );
  }
}

export default Button;