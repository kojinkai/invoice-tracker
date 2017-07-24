const defaults = {
  isActive: false
}

const popover = (state = defaults, action) => {
  switch (action.type) {
    case 'SHOW_POPOVER':
      
      return {
        isActive: true
      }

    case 'CLOSE_POPOVER':
      return {
        isActive: false
      }

    default:
      return state
  }
}

export default popover
