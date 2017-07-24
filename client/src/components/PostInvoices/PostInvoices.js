import React from 'react';
import PropTypes from 'prop-types'
import Button from '../Button/Button';
import './PostInvoices.css';

const PostInvoices = ({ invoices, handlePostInvoices }) => {
  return (
    <div className="post-invoices">
      <div className="post-invoices__container">
        <Button handleClick={event => {
            console.log('handling button click')
            event.preventDefault()
            handlePostInvoices(invoices)
        }}
        value="Post Invoices" />
      </div>
    </div>
  )
}

PostInvoices.propTypes = {
  invoices: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    invoiceData: PropTypes.object,
    isEditing: PropTypes.bool
  }).isRequired).isRequired,
  handlePostInvoices: PropTypes.func.isRequired
}

export default PostInvoices;