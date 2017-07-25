import React from 'react'
import PropTypes from 'prop-types'
import TextInput from '../TextInput/TextInput';
import createModifiers from '../../lib/createModifiers';
import Button from '../Button/Button';
import './invoice.css'

const Invoice = ({ invoice, handleClick }) => {
  const { invoiceData } = invoice

  const fileNames = invoiceData.files.map((file, index) => {
    return (<div key={index} className="invoice__file-title-legend">{file.name}</div>)
  });

  const recipientData = Object.keys(invoiceData.recipientData).map((key, index) => {
    
    const recipientDataModifiers = createModifiers('invoice__recipient-datum', {
      'is-populated': invoiceData.recipientData[key] !== ''
    })  
    return (<div key={index} className={recipientDataModifiers}>{key} : {invoiceData.recipientData[key]}</div>)
  });

  const invoiceModifiers = createModifiers('invoice', {
    'is-valid': invoice.isValidForSubmission
  })

  return (
    <div className={invoiceModifiers}>
      <form className="invoice__form">
        <TextInput id="invoice__input-amount" placeholder="enter invoice amount" label="Invoice Amount" />
        <TextInput id="invoice__input-target" placeholder="enter payment target" label="Payment Target" />
        <Button value="edit" handleClick={handleClick} />
      </form>

      <div className="invoice__files">{fileNames}</div>
      <div className='invoice__recipient'>{recipientData}</div>
    </div>
  )
}

Invoice.propTypes = {
  handleClick: PropTypes.func.isRequired,
  invoice: PropTypes.object
}

export default Invoice
