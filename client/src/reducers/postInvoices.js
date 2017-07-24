const defaults = {
  isFetching: false,
  response: ''
};

function postInvoices(state = defaults, action) {

  switch (action.type) {
    case 'POST_INVOICES':
      return Object.assign({}, state, {
        isFetching: true
      })
    case 'POST_SUCCESS':
      return Object.assign({}, state, {
        isFetching: false,
        response: '',
        lastUpdated: action.receivedAt
      })
    case 'POST_INVOICES_FAIL':
      return Object.assign({}, state, {
        isFetching: false,
        response: '',
        lastUpdated: action.receivedAt
      })      
    default:
      return state
  }
}

export default postInvoices