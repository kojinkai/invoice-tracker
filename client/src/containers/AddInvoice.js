import React from 'react'
import { connect } from 'react-redux'
import { addInvoice } from '../actions'

const recipientDataDefaults = {
  name: '',
  surname: '',
  address: '',
  phone: ''
};

const handleDragOver = event => {
  event.stopPropagation();
  event.preventDefault();
  event.dataTransfer.dropEffect = 'copy';
};

const handleDragEnter = event => {
  event.stopPropagation();
  event.preventDefault();
};

const handleDragLeave = event => {
  event.stopPropagation();
  event.preventDefault();    
};

let AddInvoice = ({ dispatch }) => {

  const styles = {'minHeight': '200px', 'background': 'tomato'}
  return (
    <div style={styles}
         onDragEnter={handleDragEnter} 
         onDragLeave={handleDragLeave} 
         onDragOver={handleDragOver} 
         onDrop={event => {
          event.stopPropagation()
          event.preventDefault()

          const data  = event.dataTransfer
          const files = data.files

          const newInvoiceUploads = Object.keys(files)
            .map(key => files[key])
            .map(file => {
              const invoiceObject = {}
              invoiceObject.files = [file]
              invoiceObject.recipientData = Object.assign({}, recipientDataDefaults)
              return invoiceObject
            });

          newInvoiceUploads.forEach(invoice => dispatch(addInvoice(invoice)))

    }}>
      Drag to upload an invoice
    </div>
  )
}
AddInvoice = connect()(AddInvoice)

export default AddInvoice
