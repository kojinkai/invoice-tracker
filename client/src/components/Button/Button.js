import React from 'react';
import './button.css';

const Button = ({ value, onClick }) => (
  <button className="button" onClick={onClick}>
    {value}
  </button>
)
export default Button;