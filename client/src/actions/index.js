let nextInvoiceId = 0
export const addInvoice = invoice => ({
  type: 'ADD_INVOICE',
  id: nextInvoiceId++,
  invoiceData: invoice
})

export const updateInvoiceRecipientData = recipientData => ({
  type: 'UPDATE_INVOICE_RECIPIENT_DATA',
  recipientData
})

export const saveInvoiceRecipientData = recipientData => ({
  type: 'SAVE_INVOICE_RECIPIENT_DATA',
  recipientData
})

export const showInvoiceEditPopover = invoice => ({
  type: 'SHOW_POPOVER',
  invoice
})

export const closePopoverWithoutSave = () => ({
  type: 'CLOSE_POPOVER_WITHOUT_SAVING'
})
