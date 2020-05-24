/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// eslint-disable-next-line object-curly-newline
import { faProjectDiagram, faFile, faUser, faRocket } from '@fortawesome/free-solid-svg-icons';


export default function Header(props) {
  const iconStyle = {
    color: props.highlightColor,
    paddingRight: '5px',
  };
  const linkData = [
    {
      img: faProjectDiagram,
      title: 'Projects',
      href: '/projects',
      eventkey: '1',
    },
    {
      img: faFile,
      title: 'Resume',
      href: '/resume',
      eventkey: '2',
    },
    {
      img: faUser,
      title: 'About Me',
      href: '/about',
      eventkey: '3',
    },
  ];

  return (
    <Navbar bg='dark' variant='dark' expand='md' collapseOnSelect
      style={{
        width: '100%',
        margin: '0px',
        padding: '7px',
      }}>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <LinkContainer to='/projects'>
          <Navbar.Brand bsPrefix='nav-link-custom'>
            <FontAwesomeIcon
              icon={faRocket}
              // ms edge doesn't like object spread
              // eslint-disable-next-line prefer-object-spread
              style={ Object.assign({}, { fontSize: '35px', paddingTop: '5px' }, iconStyle) } />
          </Navbar.Brand>
        </LinkContainer>
        <Nav>
          {linkData.map((tile) => (
            <Nav.Link key={tile.title} bsPrefix='nav-link-custom' eventKey={tile.eventkey} as={Link} to={tile.href}>
              <FontAwesomeIcon icon={tile.img} style={iconStyle} />
                {tile.title}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
