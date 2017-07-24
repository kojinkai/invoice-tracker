import { connect } from 'react-redux'
import { postCompletedInvoices } from '../actions'
import PostInvoices from '../components/PostInvoices/PostInvoices'

const mapStateToProps = state => ({
  invoices: state.invoices
})

const mapDispatchToProps = dispatch => ({
  handlePostInvoices: invoices => {
    dispatch(postCompletedInvoices(invoices))
  }
})

const PostInvoicesPanel = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostInvoices)

export default PostInvoicesPanel

