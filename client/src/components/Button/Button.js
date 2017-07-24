import React from 'react';
import PropTypes from 'prop-types'
import './button.css';

const Button = ({ value, type, handleClick }) => (
  <button className="button" type={type} onClick={handleClick}>
    {value}
  </button>
)

Button.propTypes = {
  value: PropTypes.string.isRequired,
  type: PropTypes.string,  
  handleClick: PropTypes.func
}

export default Button;