let nextInvoiceId = 0
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
