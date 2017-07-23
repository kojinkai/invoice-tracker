import { combineReducers } from 'redux'
import invoices from './invoices'
import popover from './popover'

const invoiceTracker = combineReducers({
  invoices,
  popover
})

export default invoiceTracker
