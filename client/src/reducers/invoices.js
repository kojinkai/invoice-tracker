const invoices = (state = [], action) => {
  switch (action.type) {
    case 'ADD_INVOICE':
      const updatedState = state.concat({
        id: action.id,
        invoiceData: action.invoiceData
      });

      return updatedState;

    default:
      return state
  }
}

export default invoices
