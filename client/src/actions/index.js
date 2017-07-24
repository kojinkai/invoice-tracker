import invoicesApi from '../api/invoices'

let nextInvoiceId = 0

export const setDragActive = () => ({
  type: 'SET_DRAG_ACTIVE'
})

export const setDragInactive = () => ({
  type: 'SET_DRAG_INACTIVE'
})

export const addInvoice = invoice => ({
  type: 'ADD_INVOICE',
  id: nextInvoiceId++,
  invoiceData: invoice
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

const receivePosts = () => ({
  type: 'POST_SUCCESS',
  receivedAt: Date.now()
})

export const postCompletedInvoices = invoices => {
  return (dispatch, getState) => {
    return invoicesApi.postInvoices(invoices)
      .then(
        response => {
          dispatch(receivePosts(response))
        },
        error => dispatch(postFailure(error))
      );
  };
}
