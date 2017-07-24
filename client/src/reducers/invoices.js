const find = require('lodash.find');

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

      const newState = state.concat()
      newState.splice(invoiceToActivate.id, 1, invoiceToActivate)
      return newState

    case 'SAVE_INVOICE_RECIPIENT_DATA':
      const invoiceToSave = find(state, invoice => invoice.isEditing)
      invoiceToSave.isEditing = false

      const newerState = state.concat()
      newerState.splice(invoiceToSave.id, 1, invoiceToSave)      
      return newerState

    default:
      return state
  }
}

export default invoices
