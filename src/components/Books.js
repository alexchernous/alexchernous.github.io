/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import cavesSteel from '../content/images/caves_of_steel.jpg';
import crimePunishment from '../content/images/crime_and_punishment.jpg';
import fingerprints from '../content/images/fingerprints_of_gods.jpg';
import foundation from '../content/images/foundation.jpg';
import go1984 from '../content/images/1984.jpg';
import tuesdays from '../content/images/tuesdays.jpg';
import constants from '../constants';

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

const bookData = [{
  img: cavesSteel,
  title: 'Caves',
}, {
  img: foundation,
  title: 'Foundation',
}, {
  img: fingerprints,
  title: 'Fingerprints',
}, {
  img: crimePunishment,
  title: 'Crime',
}, {
  img: go1984,
  title: '1984',
}, {
  img: tuesdays,
  title: 'Tuesdays',
}];

const Books = () => (
  <React.Fragment>
    <h4 style={{
      textAlign: 'left',
      paddingTop: '8px',
      paddingBottom: '8px',
      margin: '0px',
    }}>
      {constants.content.books.heading}
    </h4>
    <div id='book-parent-div' style={bookStyle.root}>
        {bookData.map((tile) => (
          <img
            key={tile.title}
            src={tile.img}
            alt={tile.title}
            width='187'
            height='300px'
            style={{ padding: '8px' }}
          />
        ))}
    </div>
  </React.Fragment>
);

export default Books;
