import React from 'react'
import AddInvoice from '../containers/AddInvoice'
import CurrentInvoiceList from '../containers/CurrentInvoiceList'
import ControlPopover from '../containers/ControlPopover'

const App = () => (
  <div>
    <AddInvoice />
    <CurrentInvoiceList />
    <ControlPopover />
  </div>
)

export default App
