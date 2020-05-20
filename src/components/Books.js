/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader';
import americaBefore from '../content/images/america_before.jpg';
import cavesSteel from '../content/images/caves_of_steel.jpg';
import crimePunishment from '../content/images/crime_and_punishment.jpg';
import fingerprints from '../content/images/fingerprints_of_gods.jpg';
import foundation from '../content/images/foundation.jpg';
import foundationEarth from '../content/images/foundation_and_earth.jpg';
import foundationEmpire from '../content/images/foundation_and_empire.jpg';
import foundationsEdge from '../content/images/foundations_edge.jpg';
import magicians from '../content/images/magicians_of_gods.jpg';
import nakedSun from '../content/images/naked_sun.jpg';
import robotsEmpire from '../content/images/robots_and_empire.jpg';
import robotsDawn from '../content/images/robots_of_dawn.jpg';
import secondFoundation from '../content/images/second_foundation.jpg';
import go1984 from '../content/images/1984.jpg';
import tuesdays from '../content/images/tuesdays.jpg';


const bookStyle = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    overflow: 'hidden',
    backgroundColor: '#d7d8d9',
    padding: '8px',
    width: '100%',
    paddingTop: '8px',
    paddingBottom: '8px',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
  },
};

const bookData = [
  {
    img: cavesSteel,
    title: 'Caves',
  },
  {
    img: nakedSun,
    title: 'Sun',
  },
  {
    img: robotsDawn,
    title: 'Dawn',
  },
  {
    img: robotsEmpire,
    title: 'RobotEmpire',
  },
  {
    img: foundation,
    title: 'Foundation',
  },
  {
    img: foundationEmpire,
    title: 'FoundationEmpire',
  },
  {
    img: secondFoundation,
    title: 'SecondFoundation',
  },
  {
    img: foundationsEdge,
    title: 'Edge',
  },
  {
    img: foundationEarth,
    title: 'Earth',
  },
  {
    img: fingerprints,
    title: 'Fingerprints',
  },
  {
    img: magicians,
    title: 'magicians',
  },
  {
    img: americaBefore,
    title: 'America',
  },
  {
    img: crimePunishment,
    title: 'Crime',
  },
  {
    img: go1984,
    title: '1984',
  },
  {
    img: tuesdays,
    title: 'Tuesdays',
  },
];

export default function Books() {
  return (
    <React.Fragment>
      <h4 style={{
        textAlign: 'left',
        paddingTop: '8px',
        paddingBottom: '8px',
        margin: '0px',
      }}>Books I like to read</h4>
      <div id='book-parent-div' style={bookStyle.root}>
        {/* <GridList cellHeight={300} className={classes.gridList} cols={4}>
          <GridListTile key="Subheader" cols={4} style={{ height: 'auto' }}>
            <ListSubheader component="div"></ListSubheader>
          </GridListTile> */}
          {bookData.map((tile) => (
            // <GridListTile key={tile.img} cols={tile.cols || 1}>
              <img key={tile.title} src={tile.img} alt={tile.title} width='187' height='300px' style={{ padding: '8px' }} />
            // </GridListTile>
          ))}
        {/* </GridList> */}
      </div>
    </React.Fragment>
  );
}
