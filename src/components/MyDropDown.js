/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

class MyDropDown extends Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    const highlightColor = '#E09E3B';

    return (
      <React.Fragment>
        <FontAwesomeIcon icon={faExternalLinkAlt} color={highlightColor}
          style={{
            marginRight: '5px',
          }} />
        My links
      </React.Fragment>
    );
  }
}

export default MyDropDown;
