import React, { Component } from 'react';
import Button from '../button/button';
import TextInput from '../textinput/textinput';
import createModifiers from '../../lib/createModifiers';
import './invoice.css';

class Invoice extends Component {

  render() {

    const fileNames = this.props.invoiceData.files.map((file, index) => {
      return (<div key={index} className="invoice__file-title-legend">{file.name}</div>);
    });

    const recipientData = Object.keys(this.props.invoiceData.recipientData).map((key, index) => {
      return (<div key={index} className="invoice__recipient-data">{key} : {this.props.invoiceData.recipientData[key]}</div>);
    });

    const invoiceRecipientModifiers = createModifiers('invoice__recipient', {
      'is-populated': this.props.invoiceData.hasRecipientData
    });

    return (
      <div className="invoice">
        <form className="invoice__form">
          <TextInput id="invoice__input-amount" placeholder="enter invoice amount" label="Invoice Amount" />
          <TextInput id="invoice__input-target" placeholder="enter payment target" label="Payment Target" />
          <Button value="Add recipient" onClick={this.props.editRecipient}/>
        </form>

        <div className="invoice__files">{fileNames}</div>
        <div className={invoiceRecipientModifiers}>{recipientData}</div>
      </div>
    );
  }
}

export default Invoice;
