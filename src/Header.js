import React, { Component } from 'react';
import Button from './Button';
import './Button.css';


class Header extends Component {
  constructor() {
    super();

    this.updateKeyHelp = this.updateKeyHelp.bind(this);
  }

  updateKeyHelp(label) {
    const { updateKey } = this.props;
    updateKey(label);
  }

  render() {
    return (
      <div className='buttonHeader'>
        <Button name='Welcome' updateKeyHelp={this.updateKeyHelp}/>
        <Button name='About' updateKeyHelp={this.updateKeyHelp}/>
        <Button name='Resume' updateKeyHelp={this.updateKeyHelp}/>
        
      </div>
    ); 
  }
}

export default Header;