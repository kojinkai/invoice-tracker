import { connect } from 'react-redux'
import { showInvoiceEditPopover } from '../actions'
import InvoiceList from '../components/InvoiceList/InvoiceList'

const mapStateToProps = state => ({
  invoices: state.invoices
})

const mapDispatchToProps = dispatch => ({
  handleEditInvoice: invoice => {
    dispatch(showInvoiceEditPopover(invoice))
  }
})

const CurrentInvoiceList = connect(
  mapStateToProps,
  mapDispatchToProps
)(InvoiceList)

export default CurrentInvoiceList

