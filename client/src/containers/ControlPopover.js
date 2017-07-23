import { connect } from 'react-redux'
import { closePopoverWithoutSave } from '../actions'
import Popover from '../components/Popover/Popover'

const mapStateToProps = state => ({
  isActive: state.popover.isActive
})

const mapDispatchToProps = dispatch => ({
  handleCancel: () => {
    dispatch(closePopoverWithoutSave())
  }
})

const ControlPopover = connect(
  mapStateToProps,
  mapDispatchToProps
)(Popover)

export default ControlPopover
