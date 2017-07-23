import React from 'react'
import { connect } from 'react-redux'
import { addInvoice } from '../actions'

const handleDragOver = event => {
  event.stopPropagation();
  event.preventDefault();
  event.dataTransfer.dropEffect = 'copy';
};

const handleDragEnter = event => {
  event.stopPropagation();
  event.preventDefault();    
  console.log('handling dragEnter');
};

const handleDragLeave = event => {
  event.stopPropagation();
  event.preventDefault();    
  console.log('handling dragLeave');
};

let AddInvoice = ({ dispatch }) => {

  const styles = {'minHeight': '200px', 'background': 'tomato'}
  return (
    <div>
      <div style={styles} onDragEnter={handleDragEnter} 
           onDragLeave={handleDragLeave} 
           onDragOver={handleDragOver} 
           onDrop={event => {
            event.stopPropagation(); 
            event.preventDefault();

            const data  = event.dataTransfer;
            const files = data.files;

            const invoiceObject = {};
            invoiceObject.files = files;
            invoiceObject.recipientData = {
              name: '',
              surname: '',
              address: '',
              phone: ''
            };

            dispatch(addInvoice(invoiceObject));

      }}>
        Drag to upload an invoice
      </div>
    </div>
  )
}
AddInvoice = connect()(AddInvoice)

export default AddInvoice
