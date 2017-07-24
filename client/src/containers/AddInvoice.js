import { connect } from 'react-redux'
import { addInvoice, setDragActive, setDragInactive } from '../actions'
import Dropbox from '../components/Dropbox/Dropbox'

const recipientDataDefaults = {
  name: '',
  surname: '',
  address: '',
  phone: ''
}

const mapStateToProps = state => ({
  isDragging: state.dropbox.isDragging
})

const mapDispatchToProps = dispatch => ({
  handleDragOver: event => {
    event.stopPropagation()
    event.preventDefault()
    event.dataTransfer.dropEffect = 'copy'
  },

  handleDragEnter: event => {
    event.stopPropagation()
    event.preventDefault()
    dispatch(setDragActive())
  },

  handleDragLeave: event => {
    event.stopPropagation()
    event.preventDefault()
    dispatch(setDragInactive())
  },

  handleDrop: event => {
    event.stopPropagation()
    event.preventDefault()
    dispatch(setDragInactive())

    const data  = event.dataTransfer
    const files = data.files

    const newInvoiceUploads = Object.keys(files)
      .map(key => files[key])
      .map(file => {
        const invoiceObject = {}
        invoiceObject.files = [file]
        invoiceObject.recipientData = Object.assign({}, recipientDataDefaults)
        return invoiceObject
      })

    newInvoiceUploads.forEach(invoice => dispatch(addInvoice(invoice)))

  }
})

const AddInvoice = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dropbox)

export default AddInvoice
