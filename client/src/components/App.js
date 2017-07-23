import React from 'react'
import Footer from './Footer'
import AddInvoice from '../containers/AddInvoice'
import CurrentInvoiceList from '../containers/currentInvoiceList'

const App = () => (
  <div>
    <AddInvoice />
    <CurrentInvoiceList />
    <Footer />
  </div>
)

export default App
