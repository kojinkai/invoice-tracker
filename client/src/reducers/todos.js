const todos = (state = [], action) => {
  console.log('reducer: ', state, action)
  switch (action.type) {
    case 'ADD_INVOICE':
      return [
        ...state,
        {
          id: action.id,
          payload: action.payload
        }
      ]
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

export default todos
