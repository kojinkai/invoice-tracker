import React from 'react'
import PropTypes from 'prop-types'
import createModifiers from '../../lib/createModifiers';
import EditForm from '../EditForm/EditForm'
import './Popover.css';

const Popover = ({ handleCancel, handleSubmit, isActive }) => {

  const popoverModifiers = createModifiers('popover', {
    'is-active': isActive
  })

  return (
    <div className={popoverModifiers}>
      <div className="popover__content">
        <EditForm onSubmit={handleSubmit} handleCancel={handleCancel} />
      </div>
    </div>
  )
}

Popover.propTypes = {
  handleCancel: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired
}


export default Popover

