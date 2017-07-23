import React from 'react'
import PropTypes from 'prop-types'
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import createModifiers from '../../lib/createModifiers';
import './Popover.css';

const Popover = ({ handleCancel, handleInputChange, handleSubmit, isActive, data }) => {

  const popoverModifiers = createModifiers('popover', {
    'is-active': isActive
  })

  return (
    <div className={popoverModifiers}>
      <div className="popover__header">
        <button onClick={handleCancel}>x</button>
      </div>
      <div className="popover__content">
        
        <form className="popover__form" onSubmit={handleSubmit}>
          <TextInput onChange={handleInputChange} value="name" id="invoice__input-name" placeholder="enter name" label="name" name="name" display="oneline" />
          <TextInput onChange={handleInputChange} value="surname" id="invoice__input-surname" placeholder="enter surname" label="surname" name="surname" display="oneline" />
          <TextInput onChange={handleInputChange} value="address" id="invoice__input-address" placeholder="enter address" label="address" name="address" display="oneline" />
          <TextInput onChange={handleInputChange} value="phone" id="invoice__input-phone" placeholder="enter phone" label="phone number" name="phone" display="oneline" />

          <div className="popover__actions">
            <input type="submit" value="Submit" className="popover__submit-button" />
            <Button value="Cancel" onClick={handleCancel} />
          </div>

        </form>
      </div>
    </div>
  )
}

Popover.propTypes = {
  handleCancel: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired
}

export default Popover

