import React from 'react'
import PropTypes from 'prop-types'

const Invoice = ({ invoice, onClick }) => {

  const fileNames = invoice.files.map((file, index) => {
    return (<div key={index} className="invoice__file-title-legend">{file.name}</div>);
  });

  return (
    <div className="invoice">
      <form className="invoice__form">
        another invoice
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
