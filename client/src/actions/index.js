import invoicesApi from '../api/invoices'

export const setDragActive = () => ({
  type: 'SET_DRAG_ACTIVE'
})

export const setDragInactive = () => ({
  type: 'SET_DRAG_INACTIVE'
})

export const addInvoice = invoice => ({
  type: 'ADD_INVOICE',
  invoice
})

export const setActiveInvoice = invoice => ({
  type: 'SET_ACTIVE_INVOICE',
  invoice
})

export const saveInvoiceRecipientData = recipientData => ({
  type: 'SAVE_INVOICE_RECIPIENT_DATA',
  recipientData
})

export const resetInvoiceEditingState = () => ({
  type: 'RESET_INVOICE_EDITING_STATE'
})

export const showPopover = () => ({
  type: 'SHOW_POPOVER'
})

export const closePopover = () => ({
  type: 'CLOSE_POPOVER'
})

export const postingInvoices = () => ({
  type: 'POST_INVOICES',
})

export const postFailure = () => ({
  type: 'POST_INVOICES_FAIL'
})

const receivePostResponse = response => ({
  type: 'POST_SUCCESS',
  receivedAt: Date.now(),
  response
})

const removeSavedInvoices = () => ({
  type: 'REMOVE_SAVED_INVOICES'
})

export const postCompletedInvoices = invoices => {
  return (dispatch, getState) => {
    return invoicesApi.postInvoices(invoices)
      .then(response => response.text())
      .then(response => {
        dispatch(receivePostResponse(response))
        dispatch(removeSavedInvoices())
      })
      .catch(error => dispatch(postFailure(error)))
  }
}
