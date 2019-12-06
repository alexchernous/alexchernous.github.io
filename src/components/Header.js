import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faProjectDiagram, faFile, faUser, faRocket } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import MyDropDown from "./MyDropDown";
import LoginStatus from "./LoginStatus";

class Header extends Component {
  //consider using map() to create the nav links and fontawesome icons
  render() {
    return (
      <div style={{
        display: "flex",
        width: "100%"
        }}>

        <Navbar
          bg="dark"
          variant="dark"
          expand="md"
          collapseOnSelect
          style={{
            width: "100%"
            }}>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <LinkContainer to="/">
              <Navbar.Brand>
                <FontAwesomeIcon
                  icon={faRocket}
                  color="#e0a800"
                  style={{
                    fontSize: "35px"
                    }} />

              </Navbar.Brand>
            </LinkContainer>
            <Nav className="mr-auto">
              <Nav.Link
                eventKey="1"
                as={Link}
                to="/home"
                style={{
                  transition: "0.15s",
                  whiteSpace: "nowrap"
                  }}>

                <FontAwesomeIcon
                  icon={faHome}
                  color="#e0a800"
                  style={{
                    marginRight: "5px"
                    }} />

                Home
              </Nav.Link>
              <Nav.Link
                eventKey="2"
                as={Link}
                to="/projects"
                style={{
                  transition: "0.15s",
                  whiteSpace: "nowrap"
                  }}>

                <FontAwesomeIcon
                  icon={faProjectDiagram}
                  color="#e0a800"
                  style={{
                    marginRight: "5px"
                    }} />

                Projects
              </Nav.Link>
              <Nav.Link
                eventKey="3"
                as={Link}
                to="/resume"
                style={{
                  transition: "0.15s",
                  whiteSpace: "nowrap"
                  }}>

                <FontAwesomeIcon
                  icon={faFile}
                  color="#e0a800"
                  style={{
                    marginRight: "5px"
                    }} />

                Resume
              </Nav.Link>

              <NavDropdown title={<MyDropDown />}>
                <Nav.Link
                  bsPrefix="drop-down-link"
                  href="https://github.com/alexchernous"
                  target="_blank"
                  style={{
                    transition: "0.15s",
                    whiteSpace: "nowrap"
                    }}>

                  <FontAwesomeIcon
                    icon={faGithub}
                    color="#e0a800"
                    style={{
                      marginRight: "5px"
                      }} />

                  GitHub
                </Nav.Link>
                <Nav.Link
                  bsPrefix="drop-down-link"
                  href="https://www.linkedin.com/in/alex-chernous-34482236/"
                  target="_blank"
                  style={{
                    transition: "0.15s",
                    whiteSpace: "nowrap"
                    }}>

                  <FontAwesomeIcon
                    icon={faLinkedin}
                    color="#e0a800"
                    style={{
                      marginRight: "5px"
                      }} />

                  LinkedIn
                </Nav.Link>
              </NavDropdown>
              <Nav.Link
                eventKey="4"
                as={Link}
                to="/about"
                style={{
                  transition: "0.15s",
                  whiteSpace: "nowrap"
                  }}>

                <FontAwesomeIcon
                  icon={faUser}
                  color="#e0a800"
                  style={{
                    marginRight: "5px"
                    }} />

                About me
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <LoginStatus isLoggedIn={this.props.isLoggedIn} userName={this.props.userName} />
      </div>
    );
  }
}

export default Header;