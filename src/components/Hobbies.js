/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUmbrellaBeach,
  faRocket,
  faMountain,
  faGamepad,
  faGlobeAmericas,
  faBook,
} from '@fortawesome/free-solid-svg-icons';
import constants from '../constants';

const hobbiesData = [{
  img: faUmbrellaBeach,
  title: 'Travel',
}, {
  img: faRocket,
  title: 'Space',
}, {
  img: faMountain,
  title: 'Rock Climbing',
}, {
  img: faGamepad,
  title: 'Games',
}, {
  img: faGlobeAmericas,
  title: 'Maps',
}, {
  img: faBook,
  title: 'Reading',
}];

const Hobbies = () => {
  const iconStyle = {
    color: constants.colors.navy,
    padding: '5px',
    fontSize: '70px',
  };

  return (
    <React.Fragment>
      <h4 style={{
        textAlign: 'left',
        paddingTop: '8px',
        paddingBottom: '8px',
        margin: '0px',
      }}>
        {constants.content.hobbies.heading}
      </h4>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        paddingTop: '8px',
        margin: '0px',
        paddingBottom: '8px',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}>
        {hobbiesData.map((tile) => (
          <div key={tile.title} style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '8px',
          }}>
            <FontAwesomeIcon icon={tile.img} style={iconStyle} />
            {tile.title}
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Hobbies;
