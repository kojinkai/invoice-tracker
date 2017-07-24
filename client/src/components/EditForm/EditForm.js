import React from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import Button from '../Button/Button'
import './EditForm.css'

let EditForm = ({ handleSubmit, handleCancel }) => {

  return (
    <form onSubmit={ handleSubmit }>
      <div className="editform__input-wrap editform__input-wrap--oneline">
        <label className="editform__label editform__label--oneline" htmlFor="firstname">Name</label>
        <Field name="firstname" component="input" type="text" />
      </div>
      <div className="editform__input-wrap editform__input-wrap--oneline">
        <label className="editform__label editform__label--oneline" htmlFor="surname">Surname</label>
        <Field name="surname" component="input" type="text" />
      </div>
      <div className="editform__input-wrap editform__input-wrap--oneline">
        <label className="editform__label editform__label--oneline" htmlFor="address">Address</label>
        <Field name="address" component="input" type="text" />
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
  handleCancel: PropTypes.func.isRequired
}

EditForm = reduxForm({
  // a unique name for the form
  form: 'recipientData'
})(EditForm)

export default EditForm;