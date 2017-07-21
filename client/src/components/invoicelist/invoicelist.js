import React, { Component } from 'react';
import Invoice from '../invoice/invoice';
import Popover from '../popover/popover';
import './invoicelist.css';

class InvoiceList extends Component {

  constructor() {
    super();
    this._handleDragEnter = this._handleDragEnter.bind(this);
    this._handleDragLeave = this._handleDragLeave.bind(this);
    this._handleDrop      = this._handleDrop.bind(this);

    this.state = {
      isDragging: false,
      isEditingRecipient: false,
      invoices: []
    }
  }

  _editInvoiceByID(id) {
    return function editInvoice(event) {
      event.preventDefault();

      this.setState({
        isEditingRecipient: true
      });
    }.bind(this);
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

    const data = event.dataTransfer;
    const file = data.files;
    const id   = this.state.invoices.length;

    const invoices = this.state.invoices.concat(<Invoice fileData={file} key={id} editRecipient={this._editInvoiceByID(id)}/>);

    this.setState({
      isDragging: false,
      invoices: invoices
    });
  }

  render() {

    const classList = ['invoice-list__dropbox'];

    if (this.state.isDragging) {
      classList.push('invoice-list__dropbox--is-dragging');
    }

    return (
      <section className="invoice-list">
        <div className="invoice-list__container">
          <div className="invoice-list__pending">{this.state.invoices}</div>

          <div className={classList.join(' ')}
               onDragEnter={this._handleDragEnter}
               onDragLeave={this._handleDragLeave}
               onDragOver={this._handleDragOver}
               onDrop={this._handleDrop}>
            Drag your files here
          </div>
        </div>
        <Popover isActive={this.state.isEditingRecipient} />
      </section>
    );
  }
}

export default InvoiceList;