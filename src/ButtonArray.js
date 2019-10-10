import React, { Component } from 'react';
import Button from './Button';
import './Button'

// const buttons = {
//   about : 'About',
//   resume : 'Resume'
// };

class ButtonArray extends Component {
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

export default ButtonArray;