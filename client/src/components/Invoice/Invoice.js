import React from 'react'
import PropTypes from 'prop-types'
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import './invoice.css'

const Invoice = ({ invoice, handleClick }) => {

  const fileNames = invoice.files.map((file, index) => {
    return (<div key={index} className="invoice__file-title-legend">{file.name}</div>)
  });

  const recipientData = Object.keys(invoice.recipientData).map((key, index) => {
    if (invoice.recipientData[key] !== '') {
      return (<div key={index} className="invoice__recipient-data">{key} : {invoice.recipientData[key]}</div>)
    } else {
      return (<div key={index}></div>)
    }
  });

  return (
    <div className="invoice">
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
