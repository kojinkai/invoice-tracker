import React from 'react'
import PropTypes from 'prop-types'
import createModifiers      from '../../lib/createModifiers';
import './Popover.css';

const Popover = ({ handleCancel, isActive }) => {

  const popoverModifiers = createModifiers('popover', {
    'is-active': isActive
  })

  return (
    <div className={popoverModifiers}>
      <div className="popover__header">
        <button onClick={handleCancel}>x</button>
      </div>
      <div className="popover__content">
        Yaw
      </div>
    </div>
  )
}

Popover.propTypes = {
  handleCancel: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired
}

export default Popover

