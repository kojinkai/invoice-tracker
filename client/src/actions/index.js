let nextInvoiceId = 0
export const addInvoice = invoice => ({
  type: 'ADD_INVOICE',
  id: nextInvoiceId++,
  invoiceData: invoice
})

export const saveInvoiceRecipientData = invoice => ({
  type: 'UPDATE_INVOICE_RECIPIENT_DATA',
  invoiceData: invoice
})

export const showInvoiceEditPopover = invoice => ({
  type: 'SHOW_POPOVER',
  invoice
})

export const closePopoverWithoutSave = () => ({
  type: 'CLOSE_POPOVER_WITHOUT_SAVING'
})
