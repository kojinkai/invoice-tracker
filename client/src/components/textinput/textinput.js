import React, { Component } from 'react';
import './textinput.css';

class TextInput extends Component {
  render() {
    return (
      <div className="textinput__input-wrap">
        <label htmlFor="{this.props.id}" className="textinput__label">{this.props.label}</label>
        <input className="textinput__input" type="text" placeholder={this.props.placeholder} id="{this.props.id}" />
      </div>
    )
  }
}
export default TextInput;
