import React from 'react';
import PropTypes from 'prop-types';

function Button({ buttonName }) {
  return (
    <div>
      <h1>{ buttonName }</h1>
    </div>
  );
}

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
};

export default Button;
