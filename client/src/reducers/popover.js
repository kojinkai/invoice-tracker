const defaults = {
  isActive: false
}

const popover = (state = defaults, action) => {
  switch (action.type) {
    case 'SHOW_POPOVER':
      const popoverState = {}
      popoverState.isActive = true
      popoverState.data = action.invoice
      return popoverState

    case 'CLOSE_POPOVER_WITHOUT_SAVING':
      const inactiveState = {}
      inactiveState.isActive = false
      inactiveState.data = {}
      return inactiveState;
    default:
      return state
  }
}

export default popover
