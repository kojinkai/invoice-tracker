import React from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import Button from '../Button/Button'
import './EditForm.css'

let EditForm = ({ handleSubmit, handleCancel, initialValues }) => {

  return (
    <form onSubmit={ handleSubmit }>
      <div className="editform__input-wrap editform__input-wrap--oneline">
        <label className="editform__label editform__label--oneline" htmlFor="firstname">Name</label>
        <Field name="firstname" component="input" type="text" placeholder="first name" />
      </div>
      <div className="editform__input-wrap editform__input-wrap--oneline">
        <label className="editform__label editform__label--oneline" htmlFor="surname">Surname</label>
        <Field name="surname" component="input" type="text" placeholder="surname" />
      </div>
      <div className="editform__input-wrap editform__input-wrap--oneline">
        <label className="editform__label editform__label--oneline" htmlFor="address">Address</label>
        <Field name="address" component="input" type="text" placeholder="address" />
      </div>
      <div className="editform__input-wrap editform__input-wrap--oneline">
        <label className="editform__label editform__label--oneline" htmlFor="phone">Address</label>
        <Field name="phone" component="input" type="text" placeholder="phone" />
      </div>      
      <div className="editform__actions">
        <Button type="submit" value="submit" />
        <Button value="cancel" handleClick={event => {
          event.preventDefault()
          handleCancel()
        }}/>
      </div>
    </form>
  )
}

EditForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
  initialValues: PropTypes.object
}

EditForm = reduxForm({
  form: 'recipientData',
  enableReinitialize: true
})(EditForm)

export default EditForm;