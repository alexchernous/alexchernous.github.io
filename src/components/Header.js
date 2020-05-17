/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// eslint-disable-next-line object-curly-newline
import { faHome, faProjectDiagram, faFile, faUser, faRocket } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import MyDropDown from './MyDropDown';

class Header extends Component {
  // consider using map() to create the nav links and fontawesome icons
  render() {
    const highlightColor = '#E09E3B';

    return (
      <Navbar
        bg='dark' variant='dark' expand='md' collapseOnSelect
        style={{
          width: '100%',
        }}>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <LinkContainer to='/projects'>
            <Navbar.Brand>
              <FontAwesomeIcon
                icon={faRocket}
                color={highlightColor}
                style={{
                  fontSize: '35px',
                }} />
            </Navbar.Brand>
          </LinkContainer>
          <Nav className='mr-auto'>
            <Nav.Link eventKey='1' as={Link} to='/projects'>
              <FontAwesomeIcon icon={faProjectDiagram} color={highlightColor}
                style={{
                  marginRight: '5px',
                }} />
                Projects
            </Nav.Link>
            <Nav.Link eventKey='2' as={Link} to='/resume'>
              <FontAwesomeIcon icon={faFile} color={highlightColor}
                style={{
                  marginRight: '5px',
                }} />
                Resume
            </Nav.Link>
            <NavDropdown title={<MyDropDown />}>
              <Nav.Link bsPrefix='drop-down-link' href='https://github.com/alexchernous' target='_blank'>
                <FontAwesomeIcon icon={faGithub} color={highlightColor}
                  style={{
                    marginRight: '5px',
                  }} />
                  GitHub
              </Nav.Link>
              <Nav.Link bsPrefix='drop-down-link' href='https://www.linkedin.com/in/alexchernous/' target='_blank'>
                <FontAwesomeIcon icon={faLinkedin} color={highlightColor}
                  style={{
                    marginRight: '5px',
                  }} />
                  LinkedIn
              </Nav.Link>
            </NavDropdown>
            <Nav.Link eventKey='3' as={Link} to='/about'>
              <FontAwesomeIcon icon={faUser} color={highlightColor}
                style={{
                  marginRight: '5px',
                }} />
                About me
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
