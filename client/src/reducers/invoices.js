const invoices = (state = [], action) => {
  switch (action.type) {
    case 'ADD_INVOICE':
      const updatedState = state.concat({
        id: action.id,
        invoiceData: action.invoiceData
      });

      return updatedState;

    case 'UPDATE_INVOICE_RECIPIENT_DATA':
      console.log('updating recipient data in reducer -')
      return state;

    case 'SAVE_INVOICE_RECIPIENT_DATA':
      console.log('saving recipient data in reducer')
      return state;

    default:
      return state
  }
}

export default invoices
