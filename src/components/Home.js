/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
// import mdfile from '../content/Home.md';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
// import tileData from './tileData';
// eslint-disable-next-line object-curly-newline
import { faProjectDiagram, faFile, faUser, faRocket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    background: 'linear-gradient(70deg, #2d2d2d 100%, #484848 20%)',
    paddingTop: '2px',
    margin: '0px',
  },
  gridList: {
    width: '100%',
    height: '100%',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

const tileData = [
  {
    img: faProjectDiagram,
    title: 'Projects',
    author: 'author1',
    href: '/projects',
    eventkey: '1',
  },
  {
    img: faFile,
    title: 'Resume',
    author: 'author2',
    href: '/resume',
    eventkey: '2',
  },
  {
    img: faUser,
    title: 'About Me',
    author: 'author3',
    href: '/about',
    eventkey: '3',
  },
];

export default function Home() {
  const classes = useStyles();
  const highlightColor = '#E09E3B';
  const cellHeight = document.getElementById('root').clientHeight / 2 - 4;

  return (
    <div className={classes.root}>
      <GridList cellHeight={cellHeight} className={classes.gridList}>
        {/* <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">December</ListSubheader>
        </GridListTile> */}
        {tileData.map((tile) => (
          // <Nav.Link eventKey={tile.eventkey} as={Link} to={tile.href}
          //   style={{
          //     transition: '0.15s',
          //     whiteSpace: 'nowrap',
          //   }}>
            <GridListTile key={tile.img}>
              <FontAwesomeIcon icon={tile.img} color={highlightColor}
                style={{ fontSize: cellHeight }} />
              {/* <img src={tile.img} alt={tile.title} /> */}
              <GridListTileBar
                title={tile.title}
                subtitle={<span>by: {tile.author}</span>}
                actionIcon={
                  <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                    <InfoIcon />
                  </IconButton>
                }
              />
            </GridListTile>
          // </Nav.Link>
        ))}
      </GridList>
    </div>
  );
}
