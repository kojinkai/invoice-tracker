import React from 'react'
import PropTypes from 'prop-types'
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import './invoice.css'

const Invoice = ({ invoice, onClick }) => {

  const fileNames = invoice.files.map((file, index) => {
    return (<div key={index} className="invoice__file-title-legend">{file.name}</div>);
  });

  return (
    <div className="invoice">
      <form className="invoice__form">
        <TextInput id="invoice__input-amount" placeholder="enter invoice amount" label="Invoice Amount" />
        <TextInput id="invoice__input-target" placeholder="enter payment target" label="Payment Target" />
        <Button value="Add recipient" onClick={onClick} />
      </form>

      <div className="invoice__files">{fileNames}</div>
    </div>
  )
}

Invoice.propTypes = {
  onClick: PropTypes.func.isRequired,
  invoice: PropTypes.object
}

export default Invoice
