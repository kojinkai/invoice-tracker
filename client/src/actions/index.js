let nextInvoiceId = 0
export const addInvoice = invoice => ({
  type: 'ADD_INVOICE',
  id: nextInvoiceId++,
  invoiceData: invoice
})

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const showInvoiceEditPopover = invoice => ({
  type: 'SHOW_POPOVER',
  invoice
})
