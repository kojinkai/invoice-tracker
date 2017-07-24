import React from 'react';
import PropTypes from 'prop-types'
import Button from '../Button/Button';
import './PostInvoices.css';

const PostInvoices = ({ invoices, handlePostInvoices }) => {
  const validInvoicesForSubmission = invoices.filter(invoice => {
    return invoice.isValidForSubmission
  });

  const isSubmissionBlocked = validInvoicesForSubmission.length < 1;

  return (
    <div className="post-invoices">
      <div className="post-invoices__container">
        <Button handleClick={event => {
            event.preventDefault()
            handlePostInvoices(validInvoicesForSubmission)
        }}
        value="Post Invoices"
        disabled={isSubmissionBlocked} />
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