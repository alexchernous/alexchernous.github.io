/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faProjectDiagram,
  faFile,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import constants from '../constants';

const NavBar = () => {
  const iconStyle = {
    color: constants.colors.orange,
    paddingRight: '5px',
  };
  const linkData = [{
    img: faProjectDiagram,
    title: 'Projects',
    href: '/projects',
    eventkey: '1',
  }, {
    img: faFile,
    title: 'Resume',
    href: '/resume',
    eventkey: '2',
  }, {
    img: faUser,
    title: 'About Me',
    href: '/about',
    eventkey: '3',
  }];

  return (
    <Navbar bg='dark'
      style={{
        width: '100%',
        padding: '5px',
      }}>
      <Nav>
        {linkData.map((tile) => (
          <Nav.Link
            key={tile.title}
            bsPrefix='nav-link-custom'
            eventKey={tile.eventkey}
            as={Link}
            to={tile.href}
          >
            <FontAwesomeIcon icon={tile.img} style={iconStyle} />
              {tile.title}
          </Nav.Link>
        ))}
      </Nav>
    </Navbar>
  );
};

export default NavBar;
