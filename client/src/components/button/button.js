import React, { Component } from 'react';
import './button.css';

class Button extends Component {
  render() {
    return (
      <button className="button" onClick={this.props.onClick}>{this.props.value}</button>
    )
  }
}
export default Button;