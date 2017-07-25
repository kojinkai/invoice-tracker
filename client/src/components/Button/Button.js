import React from 'react'
import PropTypes from 'prop-types'
import './button.css'

const Button = ({ value, type, disabled, handleClick }) => (
  <button className="button" type={type} disabled={disabled} onClick={handleClick}>
    {value}
  </button>
)

Button.propTypes = {
  value: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  type: PropTypes.string,  
  handleClick: PropTypes.func
}

export default Button