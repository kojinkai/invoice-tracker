import { combineReducers } from 'redux'
import invoices from './invoices'
import popover from './popover'
import visibilityFilter from './visibilityFilter'

const invoiceTracker = combineReducers({
  invoices,
  popover,
  visibilityFilter
})

export default invoiceTracker
