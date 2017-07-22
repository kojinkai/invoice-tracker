import React, { Component } from 'react';
import createModifiers      from '../../lib/createModifiers';
import Button               from '../button/button';
import './popover.css';

class Popover extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.formData;
  }

  render() {

    const popoverModifiers = createModifiers('popover', {
      'is-active': this.props.isActive
    });

    return (
      <div className={popoverModifiers}>
        <div className="popover__header">{this.props.title}</div>
        <div className="popover__content">
          {this.props.children}
        </div>
        <div className="popover__actions">
          <Button value="Cancel" onClick={this.props.onCancel} />
          <Button value="Submit" onClick={this.props.onSubmit} />
        </div>
      </div>
    )
  }
}
export default Popover;
