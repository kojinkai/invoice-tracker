import React from 'react'
import Masthead from '../components/Masthead/Masthead'
import AddInvoice from '../containers/AddInvoice'
import CurrentInvoiceList from '../containers/CurrentInvoiceList'
import ControlPopover from '../containers/ControlPopover'
import PostInvoicesPanel from '../containers/PostInvoicesPanel'
import Footer from '../components/Footer/Footer'

const App = () => (
  <div>
    <Masthead />
    <AddInvoice />
    <CurrentInvoiceList />
    <ControlPopover />
    <PostInvoicesPanel />
    <Footer />
  </div>
)

export default App
