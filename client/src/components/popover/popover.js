import React, { Component } from 'react';
import createModifiers      from '../../lib/createModifiers';
import './popover.css';

class Popover extends Component {

  render() {

    const popoverModifiers = createModifiers('popover', {
      'is-active': this.props.isActive
    });

    return (
      <div className={popoverModifiers}>
        <div className="popover__header">
          <button onClick={this.props.onCancel}>x</button>
        </div>
        <div className="popover__content">
          {this.props.children}
        </div>
      </div>
    )
  }
}
export default Popover;
