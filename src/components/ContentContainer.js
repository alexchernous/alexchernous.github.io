import React, { Component } from "react";

class ContentContainer extends Component { 
  render () {
    const { list, index } = this.props;
    const text = list[index];
    
    return (
      <div className="content">
        <p>{text}</p>
        <p className="responsive-content">
          Hidden content to show media query responsiveness
        </p>
      </div>
    );
  }
}

export default ContentContainer;