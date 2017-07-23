import { combineReducers } from 'redux'
import invoices from './invoices'
import visibilityFilter from './visibilityFilter'

const invoiceTracker = combineReducers({
  invoices,
  visibilityFilter
})

export default invoiceTracker
