import React, { Component } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import Radium from "radium";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import LoginMessage from "./LoginMessage";
import logo from "../img/logo192.png";

class Menu extends Component {

  constructor(props) {
    super(props);

    this.state = {
      open : true
    };

    this.handleLogout = this.handleLogout.bind(this);
    this.collapseBar = this.collapseBar.bind(this);
  }

  handleLogout() {
    this.props.logOut();
  }

  collapseBar() {
    this.setState({open : false})
  }
  
  render() {
    return (
      <div style={{display : "flex"}}>
        
        <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect style={{width : "100%"}}>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <LinkContainer to="/">
              <Navbar.Brand>
                <img
                  src={logo}
                  width="30"
                  height="30"
                  alt="React Logo"
                />
              </Navbar.Brand>
            </LinkContainer>
            <Nav className="mr-auto">
              <Nav.Link eventKey="1" as={Link} to="/home" style={{transition : "0.15s"}}>Home</Nav.Link>
              <Nav.Link eventKey="2" as={Link} to="/projects" style={{transition : "0.15s"}}>Projects</Nav.Link>
              <Nav.Link eventKey="3" as={Link} to="/resume" style={{transition : "0.15s"}}>Resume</Nav.Link>
              <Nav.Link eventKey="4" as={Link} to="/about" style={{transition : "0.15s"}}>About me</Nav.Link>

              {/* <Link to="/" className="links">Home</Link>
              <Link to="/projects" className="links">Projects</Link>
              <Link to="/resume" className="links">Resume</Link>
              <Link to="/about" className="links">About me</Link> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div style={{padding : "0px 16px 0px 0px", background : "rgb(52, 58, 64)", display : "flex", alignItems : "center", justifyContent : "right", width : "100%"}}>
          <LoginMessage userName={this.props.userName} />
          {this.props.isLoggedIn && 
              <LinkContainer to="/logout">
                <Button variant="danger" onClick={this.handleLogout}>Logout</Button>
              </LinkContainer>
          }
          {!this.props.isLoggedIn && 
            <LinkContainer to="/login">
              <Button variant="warning">Login</Button>
            </LinkContainer>
          }
        </div>
      
      </div>
    ); 
  }
}

export default Radium(Menu);