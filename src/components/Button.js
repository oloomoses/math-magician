import React from 'react';
import PropTypes from 'prop-types';

function Button({ btnName, clickHandler }) {
  return (
    <div>
      <button type="button" onClick={() => clickHandler(btnName)}>{ btnName }</button>
    </div>
  );
}

Button.propTypes = {
  btnName: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
