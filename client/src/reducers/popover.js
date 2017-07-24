const defaults = {
  isActive: false
}

const popover = (state = defaults, action) => {
  switch (action.type) {
    case 'SHOW_POPOVER':
      const isShowing = {}
      isShowing.isActive = true
      return isShowing      

    case 'CLOSE_POPOVER':
      const isHiding = {}
      isHiding.isActive = false    
      return isHiding;

    default:
      return state
  }
}

export default popover
