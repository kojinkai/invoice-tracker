import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const InvoiceList = ({ invoices, onInvoiceClick }) => (
  <div>
    {invoices.map(invoice =>
      <Todo
        key={invoice.id}
        invoice={invoice.invoiceData}
        onClick={() => onInvoiceClick(invoice.id)}
      />
    )}
  </div>
)

InvoiceList.propTypes = {
  invoices: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    invoiceData: PropTypes.object
  }).isRequired).isRequired,
  onInvoiceClick: PropTypes.func.isRequired
}

export default InvoiceList
