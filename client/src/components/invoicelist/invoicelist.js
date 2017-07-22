import React, { Component } from 'react';
import createModifiers      from '../../lib/createModifiers';
import Invoice from '../invoice/invoice';
import Popover from '../popover/popover';
import './invoicelist.css';

class InvoiceList extends Component {

  constructor() {
    super();
    this._handleDragEnter = this._handleDragEnter.bind(this);
    this._handleDragLeave = this._handleDragLeave.bind(this);
    this._handleDrop      = this._handleDrop.bind(this);
    this._cancelInvoiceRecipientEdits = this._cancelInvoiceRecipientEdits.bind(this);

    this.state = {
      isDragging: false,
      isEditingRecipient: false,
      invoices: []
    }
  }

  _editInvoice(invoice) {
    this.setState({
      isEditingRecipient: true
    });
  }

  _handleDragEnter(event) {
    event.stopPropagation();
    event.preventDefault();    
    this.setState({
      isDragging: true
    });
  }

  _handleDragLeave(event) {
    event.stopPropagation();
    event.preventDefault();    
    this.setState({
      isDragging: false
    });
  }

  _handleDragOver(event) {
    event.stopPropagation();
    event.preventDefault();
    event.dataTransfer.dropEffect = 'copy';
  }

  _handleDrop(event) {
    event.stopPropagation(); 
    event.preventDefault();

    const data  = event.dataTransfer;
    const files = data.files;
    const newInvoiceFiles = Object.keys(files)
      .map(key => files[key])
      .map((file, index) => {
        const invoiceObject = {};
        invoiceObject.files = [file];
        invoiceObject.recipientData = {};
        invoiceObject.id = index;
        return invoiceObject;
      });

    const invoices = this.state.invoices.concat(newInvoiceFiles);

    this.setState({
      isDragging: false,
      invoices: invoices
    });
  }

  _submitInvoiceRecipientEdits(event) {
    event.preventDefault();
    console.log('submitting invoice recipient form');
  }

  _cancelInvoiceRecipientEdits(event) {
    event.preventDefault();
    this.setState({
      isEditingRecipient: false
    });
  }

  render() {

    const invoiceListDropboxModifiers = createModifiers('invoice-list__dropbox', {
      'is-dragging': this.state.isDragging
    });

    const invoices = this.state.invoices.map(invoice => {

      const handleEdit = (event) => {
        event.preventDefault();
        this._editInvoice(invoice);
      };

      return (<Invoice fileData={invoice.files} key={invoice.id} editRecipient={handleEdit}/>);

    });

    return (
      <section className="invoice-list">
        <div className="invoice-list__container">
          <div className="invoice-list__pending">{invoices}</div>

          <div className={invoiceListDropboxModifiers}
               onDragEnter={this._handleDragEnter}
               onDragLeave={this._handleDragLeave}
               onDragOver={this._handleDragOver}
               onDrop={this._handleDrop}>
            Drag your files here
          </div>
        </div>
        <Popover isActive={this.state.isEditingRecipient} onCancel={this._cancelInvoiceRecipientEdits} onSubmit={this._submitInvoiceRecipientEdits}/>
      </section>
    );
  }
}

export default InvoiceList;