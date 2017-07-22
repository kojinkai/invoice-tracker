import React, { Component } from 'react';
import createModifiers from '../../lib/createModifiers';
import './textinput.css';

class TextInput extends Component {

  render() {

    const isOneLine = this.props.display === 'oneline';

    // @TODO factor createModifiers into one call
    const inputWrapModifiers = createModifiers('textinput__input-wrap', {
      'oneline': isOneLine
    });
    
    // @TODO factor createModifiers into one call 
    const labelModifiers = createModifiers('textinput__label', {
      'oneline': isOneLine
    });

    return (
      <div className={inputWrapModifiers}>
        <label htmlFor={this.props.id} className={labelModifiers}>{this.props.label}</label>
        <input 
          name={this.props.name} 
          value={this.props.value}
          onChange={this.props.onChange} 
          className="textinput__input" 
          type="text" 
          placeholder={this.props.placeholder} 
          id="{this.props.id}"
        />
      </div>
    );
  }
}
export default TextInput;
