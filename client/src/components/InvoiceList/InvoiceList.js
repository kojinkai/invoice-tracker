import React from 'react'
import PropTypes from 'prop-types'
import Invoice from '../Invoice/Invoice'

const InvoiceList = ({ invoices, handleEditInvoice }) => (
  <div>
    {invoices.map(invoice =>
      <Invoice
        key={invoice.id}
        invoice={invoice.invoiceData}
        onClick={event => {
          event.preventDefault()
          handleEditInvoice(invoice)
        }}
      />
    )}
  </div>
)

InvoiceList.propTypes = {
  invoices: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    invoiceData: PropTypes.object
  }).isRequired).isRequired,
  handleEditInvoice: PropTypes.func.isRequired
}

export default InvoiceList
