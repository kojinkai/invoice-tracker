import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import invoices from './invoices'
import popover from './popover'

const invoiceTracker = combineReducers({
  form: formReducer,
  invoices,
  popover
})

export default invoiceTracker
