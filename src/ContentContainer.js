import React, { Component } from 'react';
import './App.css';

class ContentContainer extends Component { 
  render () {
    const { list, index } = this.props;
    const text = list[index];
    
    return (
      <div>
        <p>{text}</p>
      </div>
    );
  }
}

export default ContentContainer;