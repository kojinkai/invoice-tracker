import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import invoices from './invoices'
import popover from './popover'
import dropbox from './dropbox'

const invoiceTracker = combineReducers({
  form: formReducer,
  invoices,
  popover,
  dropbox
})

export default invoiceTracker
