import find from 'lodash.find'

const insertInvoiceAtIndex = (state, invoice) => {
  const updatedState = state.concat()
  updatedState.splice(invoice.id, 1, invoice)
  return updatedState
}

const resetInvoiceEditingState = state => {
  const resetInvoice = find(state, invoice => invoice.isEditing)
  resetInvoice.isEditing = false
  return resetInvoice  
}

const invoices = (state = [], action) => {
  switch (action.type) {

    case 'ADD_INVOICE':
      const updatedState = state.concat({
        id: action.id,
        invoiceData: action.invoiceData
      });
      return updatedState

    case 'SET_ACTIVE_INVOICE':

      const invoiceToActivate = find(state, invoice => invoice.id === action.invoice.id)
      invoiceToActivate.isEditing = true
      const editingInvoice = insertInvoiceAtIndex(state, invoiceToActivate)
      return editingInvoice

    case 'RESET_INVOICE_EDITING_STATE':

      const resettingInvoice = resetInvoiceEditingState(state)
      const resetState = insertInvoiceAtIndex(state, resettingInvoice)
      return resetState

    case 'SAVE_INVOICE_RECIPIENT_DATA':

      const invoiceToSave = resetInvoiceEditingState(state)
      invoiceToSave.invoiceData.recipientData = action.recipientData
      const savingInvoice = insertInvoiceAtIndex(state, invoiceToSave)
      return savingInvoice

    default:
      return state
  }
}

export default invoices
