import React, { Component } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import Radium from "radium";
import { Link } from "react-router-dom";

class Menu extends Component {
  
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Alex Chernous</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="mr-auto">
              <Link to="/" className="links">Home</Link>
              <Link to="/projects" className="links">Projects</Link>
              <Link to="/resume" className="links">Resume</Link>
              <Link to="/about" className="links">About me</Link>
          </Nav>
        
        
          <Button variant="outline-info" href="/login">Login</Button>
        </Navbar.Collapse>
      </Navbar>
    ); 
  }
}

export default Radium(Menu);