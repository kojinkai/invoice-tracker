import React from 'react'
import Masthead from '../components/Masthead/Masthead'
import AddInvoice from '../containers/AddInvoice'
import CurrentInvoiceList from '../containers/CurrentInvoiceList'
import ControlPopover from '../containers/ControlPopover'
import PostInvoicesPanel from '../containers/PostInvoicesPanel'

const App = () => (
  <div>
    <Masthead />
    <AddInvoice />
    <CurrentInvoiceList />
    <ControlPopover />
    <PostInvoicesPanel />
  </div>
)

export default App
