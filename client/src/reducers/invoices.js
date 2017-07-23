const invoices = (state = [], action) => {
  switch (action.type) {
    case 'ADD_INVOICE':
      const updatedState = state.concat({
        id: action.id,
        invoiceData: action.invoiceData
      });
      console.log('updating state with: ', updatedState)

      return updatedState;

    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id) 
          ? {...todo, completed: !todo.completed}
          : todo
      )
    default:
      return state
  }
}

export default invoices
