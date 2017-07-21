import flatMap from 'lodash.flatmap';
import React, { Component } from 'react';
import Button from '../button/button';
import TextInput from '../textinput/textinput';
import './invoice.css';

class Invoice extends Component {

  render() {

    const fileNames = flatMap(this.props.fileData, file => file.name)
      .map((fileName, index) => (
        <div key={index} className="invoice__file-title-legend">{fileName}</div>)
      );

    return (
      <div className="invoice">
        <form className="invoice__form">
          <TextInput id="invoice__input-amount" placeholder="enter invoice amount" label="Invoice Amount" />
          <TextInput id="invoice__input-target" placeholder="enter payment target" label="Payment Target" />
          <Button value="Add recipient" onClick={this.props.editRecipient}/>
        </form>

        <div className="invoice__files">{fileNames}</div>
      </div>
    );
  }
}

export default Invoice;
