const popover = (state = [], action) => {
  switch (action.type) {
    case 'SHOW_POPOVER':
      console.log('handling popover toggle: ', state, action);
      return state.concat(action);
    default:
      return state
  }
}

export default popover
