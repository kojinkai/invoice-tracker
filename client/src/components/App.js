import React from 'react'
import Masthead from '../components/Masthead/Masthead'
import AddInvoice from '../containers/AddInvoice'
import CurrentInvoiceList from '../containers/CurrentInvoiceList'
import ControlPopover from '../containers/ControlPopover'

const App = () => (
  <div>
    <Masthead />
    <AddInvoice />
    <CurrentInvoiceList />
    <ControlPopover />
  </div>
)

export default App
