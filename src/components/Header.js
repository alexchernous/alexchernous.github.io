import React, { Component } from "react";
import { Navbar, Nav, Button, NavDropdown } from "react-bootstrap";
import Radium from "radium";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import LoginMessage from "./LoginMessage";
import MyDropDown from "./MyDropDown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faProjectDiagram, faFile, faUser, faRocket } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

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
  // reactive resizing makes the icons and link to stack on top of each other
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
              <Nav.Link eventKey="1" as={Link} to="/home" style={{transition : "0.15s", whiteSpace: "nowrap"}}>
                <FontAwesomeIcon icon={faHome} color="#e0a800" style={{marginRight : "5px"}} />
                Home
              </Nav.Link>
              <Nav.Link eventKey="2" as={Link} to="/projects" style={{transition : "0.15s", whiteSpace: "nowrap"}}>
                <FontAwesomeIcon icon={faProjectDiagram} color="#e0a800" style={{marginRight : "5px"}} />
                Projects
              </Nav.Link>
              <Nav.Link eventKey="3" as={Link} to="/resume" style={{transition : "0.15s", whiteSpace: "nowrap"}}>
                <FontAwesomeIcon icon={faFile} color="#e0a800" style={{marginRight : "5px"}} />
                Resume
              </Nav.Link>
            
              <NavDropdown 
                title={<MyDropDown />}
              >
                <Nav.Link bsPrefix="drop-down-link" href="https://github.com/alexchernous" target="_blank" style={{transition : "0.15s", whiteSpace: "nowrap"}}>
                  <FontAwesomeIcon icon={faGithub} color="#e0a800" style={{marginRight : "5px"}} />
                  GitHub
                </Nav.Link>
                <Nav.Link bsPrefix="drop-down-link" href="https://www.linkedin.com/in/alex-chernous-34482236/" target="_blank" style={{transition : "0.15s", whiteSpace: "nowrap"}}>
                  <FontAwesomeIcon icon={faLinkedin} color="#e0a800" style={{marginRight : "5px"}} />
                  LinkedIn
                </Nav.Link>
              </NavDropdown>

              <Nav.Link eventKey="4" as={Link} to="/about" style={{transition : "0.15s", whiteSpace: "nowrap"}}>
                <FontAwesomeIcon icon={faUser} color="#e0a800" style={{marginRight : "5px"}} />
                About me
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        {/* make into its own component */}
        <div style={{padding : "0px 16px 0px 0px", background : "rgb(52, 58, 64)", display : "flex", alignItems : "center", flexDirection : "row-reverse", width : "100%"}}>
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
          <LoginMessage userName={this.props.userName} />
        </div>
      
      </div>
    ); 
  }
}

export default Radium(Header);