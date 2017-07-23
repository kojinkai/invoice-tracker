import { connect } from 'react-redux'
import { showInvoiceEditPopover } from '../actions'
import InvoiceList from '../components/InvoiceList/InvoiceList'

const mapStateToProps = (state) => {
 console.log('invoices in CurrentInvoiceList container: ', state.invoices);
  return {
    invoices: state.invoices
  }
}

const mapDispatchToProps = {
  handleEditInvoice: showInvoiceEditPopover
}

const CurrentInvoiceList = connect(
  mapStateToProps,
  mapDispatchToProps
)(InvoiceList)

export default CurrentInvoiceList

