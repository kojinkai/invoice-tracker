const dropbox = (state = { isDragging: false }, action) => {
  switch (action.type) {

    case 'SET_DRAG_ACTIVE':
      const defaultState = Object.assign({}, state);
      defaultState.isDragging = true
      return defaultState

    case 'SET_DRAG_INACTIVE':
      const activeState = Object.assign({}, state);
      activeState.isDragging = false
      return activeState

    default:
      return state
  }
}

export default dropbox
