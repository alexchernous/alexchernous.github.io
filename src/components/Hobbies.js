/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// eslint-disable-next-line object-curly-newline
import { faUmbrellaBeach, faRocket, faMountain, faGamepad, faGlobeAmericas, faBook } from '@fortawesome/free-solid-svg-icons';

const hobbiesData = [
  {
    img: faUmbrellaBeach,
    title: 'Travel',
  },
  {
    img: faRocket,
    title: 'Space',
  },
  {
    img: faMountain,
    title: 'Rock Climbing',
  },
  {
    img: faGamepad,
    title: 'Games',
  },
  {
    img: faGlobeAmericas,
    title: 'Maps',
  },
  {
    img: faBook,
    title: 'Reading',
  },
];

export default function Hobbies(props) {
  const iconStyle = {
    color: '#343a40',
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
      }}>Stuff I like to do and learn about</h4>
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
}
