import { connect } from 'react-redux'
import { closePopover, saveInvoiceRecipientData } from '../actions'
import Popover from '../components/Popover/Popover'

const mapStateToProps = state => ({
  isActive: state.popover.isActive
})

const mapDispatchToProps = dispatch => ({
  handleCancel: () => {
    dispatch(closePopover())
  },

  handleSubmit: recipientData => {
    dispatch(saveInvoiceRecipientData(recipientData))
    dispatch(closePopover())
  }
})

const ControlPopover = connect(
  mapStateToProps,
  mapDispatchToProps
)(Popover)

export default ControlPopover
