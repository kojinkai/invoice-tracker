import React, { Component } from 'react';
import Button from '../button/button';
import './invoice.css';

class Invoice extends Component {
  render() {

    // const fileNames = this.props.fileData
    //   .map(file => (<span className="invoice__filetitle">{file.name}</span>));

    return (
      <div className="invoice">
        <form className="invoice__form">
          <div className="invoice__input-wrap">
            <label htmlFor="invoice__input-amount" className="invoice__label">Invoice Amount</label>
            <input className="invoice__input" type="text" placeholder="enter invoice amount" id="invoice__input-amount" />
          </div>
          <div className="invoice__input-wrap">
            <label htmlFor="invoice__input-target" className="invoice__label">Payment Target</label>
            <input className="invoice__input" type="text" placeholder="enter payment target" id="invoice__input-target" />
          </div>
          <Button value="Add recipient" />
        </form>

        <div className="invoice__files"></div>
      </div>
    );
  }
}

export default Invoice;