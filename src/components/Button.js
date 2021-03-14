import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  btnName, clickHandler, color, wide,
}) => (
  <button type="button" className={`${color} ${wide}`} onClick={() => clickHandler(btnName)}>{ btnName }</button>
);

Button.propTypes = {
  btnName: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  wide: PropTypes.bool.isRequired,
};

export default Button;
