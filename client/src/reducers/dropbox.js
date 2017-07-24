const dropbox = (state = { isDragging: false }, action) => {
  switch (action.type) {

    case 'SET_DRAG_ACTIVE':
    case 'SET_DRAG_INACTIVE':
      const activeState = Object.assign({}, state);
      activeState.isDragging = !state.isDragging 
      return activeState

    default:
      return state
  }
}

export default dropbox
