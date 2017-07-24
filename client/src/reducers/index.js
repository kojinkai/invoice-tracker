import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import invoices from './invoices'
import popover from './popover'
import dropbox from './dropbox'
import postInvoices from './postInvoices'

const invoiceTracker = combineReducers({
  form: formReducer,
  invoices,
  popover,
  dropbox,
  postInvoices
})

export default invoiceTracker
