import React from 'react';
import PropTypes from 'prop-types'
import './button.css';

const Button = ({ value, handleClick }) => (
  <button className="button" onClick={handleClick}>
    {value}
  </button>
)

Button.propTypes = {
  value: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  type: PropTypes.string
}

export default Button;