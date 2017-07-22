import React, { Component } from 'react';
import createModifiers      from '../../lib/createModifiers';
import Invoice from '../invoice/invoice';
import Popover from '../popover/popover';
import InvoiceForm from '../invoiceform/invoiceform';
import './invoicelist.css';

class InvoiceList extends Component {

  constructor() {
    super();
    this.recipientDataDefaults = {
      name: '',
      surname: '',
      address: '',
      phone: ''
    };

    this._handleDragEnter = this._handleDragEnter.bind(this);
    this._handleDragLeave = this._handleDragLeave.bind(this);
    this._handleDrop      = this._handleDrop.bind(this);
    this.saveInvoiceRecipientEdits = this.saveInvoiceRecipientEdits.bind(this);
    this._handleCancelInvoiceRecipientEdits = this._handleCancelInvoiceRecipientEdits.bind(this);

    this.state = {
      isDragging: false,
      isEditingRecipient: false,
      invoices: [],
      activeInvoice: {}
    }
  }

  _launchEditInvoicePopover(invoice) {
    this.setState({
      isEditingRecipient: true,
      activeInvoice: invoice
    });
  }

  saveInvoiceRecipientEdits(edits) {

    // @TODO
    // side effects - this.state.activeInvoice
    // pass active invoice down to form and pass in here?

    const updatedInvoices = this.state.invoices.map((invoice) => {
      if (invoice.id === this.state.activeInvoice.id) {
        invoice.recipientData = edits;
        // @TODO - check the edits object and show only non-empty fields
        invoice.hasRecipientData = true;
      }
      return invoice;
    });

    this.setState({
      isEditingRecipient: false,
      invoices: updatedInvoices
    });
    console.log('submitting invoice recipient form: ', edits);
  }

  _handleCancelInvoiceRecipientEdits(event) {
    event.preventDefault();
    this.setState({
      isEditingRecipient: false
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
        invoiceObject.recipientData = Object.assign({}, this.recipientDataDefaults);
        invoiceObject.id = this.state.invoices.length + index;
        return invoiceObject;
      });

    const invoices = this.state.invoices.concat(newInvoiceFiles);

    this.setState({
      isDragging: false,
      invoices: invoices
    });

  }

  render() {

    const invoiceListDropboxModifiers = createModifiers('invoice-list__dropbox', {
      'is-dragging': this.state.isDragging
    });

    const invoices = this.state.invoices.map(invoice => {

      const handleEdit = event => {
        event.preventDefault();
        this._launchEditInvoicePopover(invoice);
      };

      return (<Invoice invoiceData={invoice} key={invoice.id} editRecipient={handleEdit}/>);

    });

    const recipientData = this.state.isEditingRecipient ? 
      this.state.activeInvoice.recipientData 
        : 
      Object.assign({}, this.recipientDataDefaults);

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

        <Popover isActive={this.state.isEditingRecipient} 
                 onCancel={this._handleCancelInvoiceRecipientEdits}>
          <InvoiceForm 
            formData={recipientData}
            onSubmit={this.saveInvoiceRecipientEdits} 
            onCancel={this._handleCancelInvoiceRecipientEdits} />
        </Popover>

      </section>
    );
  }
}

export default InvoiceList;