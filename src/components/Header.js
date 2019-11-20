import React, { Component } from "react";
import { Navbar, Nav, Button, Overlay, Tooltip } from "react-bootstrap";
import Radium from "radium";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import LoginMessage from "./LoginMessage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faProjectDiagram, faFile, faUser, faRocket } from '@fortawesome/free-solid-svg-icons'

class Header extends Component {

  constructor(props) {
    super(props);

    this.state = {
      open : true,
      login : null,
    };
    this.loginRef = React.createRef();

    this.handleLogout = this.handleLogout.bind(this);
    this.collapseBar = this.collapseBar.bind(this);
  }

  componentDidMount() {
    this._isMounted = true;

    if (this._isMounted) {
      this.setState({
        login: this.loginRef.current
      });
    }
  }

  handleLogout() {
    this.props.logOut();
  }

  collapseBar() {
    this.setState({open : false})
  }
  
  // consider using map() to create the nav links and fontawesome icons
  render() {
    return (
      <div style={{display : "flex", width : "100%"}}>
        
        <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect style={{width : "100%"}}>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <LinkContainer to="/">
              <Navbar.Brand>
                <FontAwesomeIcon icon={faRocket} color="#e0a800" style={{fontSize : "35px"}} />
              </Navbar.Brand>
            </LinkContainer>
            <Nav className="mr-auto">
              <Nav.Link eventKey="1" as={Link} to="/home" style={{transition : "0.15s"}}>
                <FontAwesomeIcon icon={faHome} color="#e0a800" style={{marginRight : "5px"}} />
                Home
              </Nav.Link>
              <Nav.Link eventKey="2" as={Link} to="/projects" style={{transition : "0.15s"}}>
                <FontAwesomeIcon icon={faProjectDiagram} color="#e0a800" style={{marginRight : "5px"}} />
                Projects
              </Nav.Link>
              <Nav.Link eventKey="3" as={Link} to="/resume" style={{transition : "0.15s"}}>
                <FontAwesomeIcon icon={faFile} color="#e0a800" style={{marginRight : "5px"}} />
                Resume
              </Nav.Link>
              <Nav.Link eventKey="4" as={Link} to="/about" style={{transition : "0.15s"}}>
                <FontAwesomeIcon icon={faUser} color="#e0a800" style={{marginRight : "5px"}} />
                About me
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        {/* make into its own component */}
        <div style={{padding : "0px 16px 0px 0px", background : "rgb(52, 58, 64)", display : "flex", alignItems : "center", justifyContent : "right", width : "100%"}}>
          <LoginMessage userName={this.props.userName} />
          {this.props.isLoggedIn && 
              <LinkContainer to="/logout">
                <Button variant="danger" onClick={this.handleLogout}>Logout</Button>
              </LinkContainer>
          }
          {!this.props.isLoggedIn && 
            <LinkContainer to="/login">
              <Button variant="warning" ref={this.loginRef}>Login</Button>
            </LinkContainer>
          }
          <Overlay target={this.state.login} placement="bottom" show={!this.props.isLoggedIn} >
            <Tooltip id="overlay-example">
              Try logging in!
            </Tooltip>
          </Overlay>
        </div>
      
      </div>
    ); 
  }
}

export default Radium(Header);