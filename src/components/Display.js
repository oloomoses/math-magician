import React from 'react';
import PropTypes from 'prop-types';

function Display({ result }) {
  return (
    <div>
      <h1>{ result }</h1>
    </div>
  );
}

Display.defaultProps = {
  result: '0',
};

Display.propTypes = {
  result: PropTypes.string,
};

export default Display;