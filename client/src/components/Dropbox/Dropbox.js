import React from 'react'
import PropTypes from 'prop-types'
import createModifiers from '../../lib/createModifiers';
import './Dropbox.css'

const Dropbox = ({ handleDragEnter, handleDragLeave, handleDragOver, handleDrop, isDragging }) => {

  const dropboxModifiers = createModifiers('dropbox__droparea', {
    'is-dragging': isDragging
  });

  const dropboxInstructionText = isDragging ? 'Drop your files here' : 'Drag your files here'

  return (
    <section className="dropbox">
      <div className="dropbox__container">
        <div className={dropboxModifiers}
             onDragEnter={handleDragEnter}
             onDragLeave={handleDragLeave}
             onDragOver={handleDragOver}
             onDrop={handleDrop}>
          {dropboxInstructionText}
        </div>
      </div>
    </section>
  )
}

Dropbox.propTypes = {
  handleDragEnter: PropTypes.func.isRequired,
  handleDragLeave: PropTypes.func.isRequired,
  handleDragOver: PropTypes.func.isRequired,
  handleDrop: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired 
}

export default Dropbox
