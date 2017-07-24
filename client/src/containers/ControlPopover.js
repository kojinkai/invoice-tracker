import find from 'lodash.find'
import isUndefined from 'lodash.isundefined'
import { connect } from 'react-redux'
import { closePopover, saveInvoiceRecipientData, resetInvoiceEditingState } from '../actions'
import Popover from '../components/Popover/Popover'

const mapStateToProps = state => {

  const activeInvoiceData = find(state.invoices, invoice => invoice.isEditing)
  const activeInvoiceRecipientData = !isUndefined(activeInvoiceData)
    ? activeInvoiceData.invoiceData.recipientData 
    : {}
  console.log('popver container intiial value: ', activeInvoiceRecipientData);
  return {
    isActive: state.popover.isActive,
    initialValues: activeInvoiceRecipientData
  }
}

const mapDispatchToProps = dispatch => ({
  handleCancel: () => {
    dispatch(closePopover())
    dispatch(resetInvoiceEditingState())
  },

  handleSubmit: recipientData => {
    dispatch(saveInvoiceRecipientData(recipientData))
    dispatch(closePopover())
  }
})

const ControlPopover = connect(
  mapStateToProps,
  mapDispatchToProps
)(Popover)

export default ControlPopover
