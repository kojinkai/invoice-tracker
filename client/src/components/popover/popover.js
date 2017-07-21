import React, { Component } from 'react';
import createModifiers      from '../../lib/createModifiers';
import TextInput            from '../textinput/textinput';
import Button               from '../button/button';
import './popover.css';

class Popover extends Component {
  render() {

    const popoverModifiers = createModifiers('popover', {
      'is-active': this.props.isActive
    });    

    return (
      <div className={popoverModifiers}>
        <div className="popover__header">{this.props.title}</div>
        <div className="popover__content">
          <TextInput id="invoice__input-amount" placeholder="enter invoice amount" label="Invoice Amount" display="oneline" />
          <TextInput id="invoice__input-amount" placeholder="enter invoice amount" label="Invoice Amount" display="oneline" />
          <TextInput id="invoice__input-amount" placeholder="enter invoice amount" label="Invoice Amount" display="oneline" />
          <TextInput id="invoice__input-amount" placeholder="enter invoice amount" label="Invoice Amount" display="oneline" />
        </div>
        <div className="popover__actions">
          <Button value="Cancel" />
          <Button value="Save" />
        </div>
      </div>
    )
  }
}
export default Popover;
