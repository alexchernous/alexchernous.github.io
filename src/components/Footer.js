import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

class Footer extends Component {
  render() {
    return (
      <Nav style={{bottom : "0", position : "fixed", background : "white", width : "100%", borderTop : "1px solid rgb(52, 58, 64, 0.1)"}} justify className="justify-content-center">
        <Nav.Link href="https://github.com/alexchernous" target="_blank">
          <FontAwesomeIcon icon={faGithub} color="#e0a800" style={{marginRight : "5px"}} />
          GitHub
        </Nav.Link>
        <Nav.Link href="https://www.linkedin.com/in/alex-chernous-34482236/" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} color="#e0a800" style={{marginRight : "5px"}} />
          LinkedIn
        </Nav.Link>
      </Nav>
    );
  }
}

export default Footer;