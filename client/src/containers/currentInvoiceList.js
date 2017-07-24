import { connect } from 'react-redux'
import { showPopover, setActiveInvoice } from '../actions'
import InvoiceList from '../components/InvoiceList/InvoiceList'

const mapStateToProps = state => ({
  invoices: state.invoices
})

const mapDispatchToProps = dispatch => ({
  handleEditInvoice: invoice => {
    dispatch(showPopover())
    dispatch(setActiveInvoice(invoice))
  }
})

const CurrentInvoiceList = connect(
  mapStateToProps,
  mapDispatchToProps
)(InvoiceList)

export default CurrentInvoiceList

