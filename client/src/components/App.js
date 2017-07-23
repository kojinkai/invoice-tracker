import React from 'react'
import Footer from './Footer'
import AddInvoice from '../containers/AddInvoice'
import InvoiceList from '../containers/InvoiceList'

const App = () => (
  <div>
    <AddInvoice />
    <InvoiceList />
    <Footer />
  </div>
)

export default App
