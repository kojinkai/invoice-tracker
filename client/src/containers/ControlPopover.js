import { connect } from 'react-redux'
import { closePopoverWithoutSave, updateInvoiceRecipientData, saveInvoiceRecipientData } from '../actions'
import Popover from '../components/Popover/Popover'

const mapStateToProps = state => ({
  isActive: state.popover.isActive,
  data: state.popover.data
})

const mapDispatchToProps = dispatch => ({
  handleCancel: () => {
    dispatch(closePopoverWithoutSave())
  },

  handleInputChange: () => {
    dispatch(updateInvoiceRecipientData())
  },

  handleSubmit: invoice => {
    dispatch(saveInvoiceRecipientData(invoice))
  }
})

const ControlPopover = connect(
  mapStateToProps,
  mapDispatchToProps
)(Popover)

export default ControlPopover
