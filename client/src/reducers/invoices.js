import find from 'lodash.find'

const insertInvoiceAtIndex = (state, index, invoice) => {
  const updatedState = state.concat()
  updatedState.splice(index, 1, invoice)
  return updatedState
}

const getResetEditingState = state => {
  const resetInvoice = Object.assign(find(state, invoice => invoice.isEditing), { isEditing: false })
  return resetInvoice  
}

const invoices = (state = [], action) => {
  switch (action.type) {

    case 'ADD_INVOICE':
      const updatedState = state.concat({
        id: action.id,
        invoiceData: action.invoiceData,
        isValidForSubmission: false
      });
      return updatedState

    case 'SET_ACTIVE_INVOICE':
      const invoiceToActivate = Object.assign(find(state, invoice => invoice.id === action.invoice.id), { isEditing: true })
      const editingInvoice = insertInvoiceAtIndex(state, invoiceToActivate.id, invoiceToActivate)
      return editingInvoice

    case 'RESET_INVOICE_EDITING_STATE':

      const invoiceToReset = getResetEditingState(state)
      const resetState = insertInvoiceAtIndex(state, invoiceToReset.id, invoiceToReset)
      return resetState

    case 'SAVE_INVOICE_RECIPIENT_DATA':

      const invoiceToSave = getResetEditingState(state)
      invoiceToSave.invoiceData.recipientData = action.recipientData

      // run basic validation on the object to see if all fields are complete.
      // Allow partially complete objects to be saved but not submitted
      const recipientDataKeys = Object.keys(invoiceToSave.invoiceData.recipientData);
      const populatedFields = recipientDataKeys.filter(key => {
        return invoiceToSave.invoiceData.recipientData[key] !== ''
      });

      invoiceToSave.isValidForSubmission = populatedFields.length === recipientDataKeys.length
      const savedInvoice = insertInvoiceAtIndex(state, invoiceToSave.id, invoiceToSave)
      return savedInvoice

    default:
      return state
  }
}

export default invoices
