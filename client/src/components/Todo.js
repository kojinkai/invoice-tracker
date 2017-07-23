import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, files, recipientData }) => (
  <li onClick={onClick}>
    Here is an invoice
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  files: PropTypes.array,
  recipientData: PropTypes.object
}

export default Todo
