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
      <form onSubmit={this.props.onSubmit} className={popoverModifiers}>
        <div className="popover__header">{this.props.title}</div>
        <div className="popover__content">
          <TextInput id="invoice__input-amount" placeholder="enter name" label="name" display="oneline" />
          <TextInput id="invoice__input-amount" placeholder="enter surname" label="surname" display="oneline" />
          <TextInput id="invoice__input-amount" placeholder="enter address" label="address" display="oneline" />
          <TextInput id="invoice__input-amount" placeholder="enter phone" label="phone number" display="oneline" />
        </div>
        <div className="popover__actions">
          <Button value="Cancel" />
          <input className="popover__submit" type="submit" value="Submit" />
        </div>
      </form>
    )
  }
}
export default Popover;
