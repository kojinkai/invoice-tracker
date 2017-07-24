import React from 'react'
import PropTypes from 'prop-types'
import Invoice from '../Invoice/Invoice'
import './InvoiceList.css'

const InvoiceList = ({ invoices, handleEditInvoice }) => {

  return (
    <section className="invoice-list">
      <div className="invoice-list__container">
        {invoices.map(invoice =>
          <Invoice
            key={invoice.id}
            invoice={invoice.invoiceData}
            handleClick={event => {
              event.preventDefault()
              handleEditInvoice(invoice)
            }}
          />
        )}
      </div>
    </section>
  )
}

InvoiceList.propTypes = {
  invoices: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    invoiceData: PropTypes.object
  }).isRequired).isRequired,
  handleEditInvoice: PropTypes.func.isRequired
}

export default InvoiceList
