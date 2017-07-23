let nextInvoiceId = 0
export const addInvoice = invoice => {
 console.log('actions addInvoice: ', invoice);
 return {
    type: 'ADD_INVOICE',
    id: nextInvoiceId++,
    invoiceData: invoice
  }
}

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})
