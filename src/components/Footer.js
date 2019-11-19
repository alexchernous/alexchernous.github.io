import React, { Component } from "react";

class Footer extends Component {
  render() {
    const footerNote = "<<A footer for some credits or extra links>>";
    return (
      <div className="App-footer" style={{bottom: "0", position: "fixed"}}>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
            Learn React
          </a>
          <p className="footer-note">{footerNote}</p>
      </div>
    );
  }
}

export default Footer;