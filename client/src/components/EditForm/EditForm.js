import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Button from '../Button/Button'
import './EditForm.css'

let EditForm = ({ handleSubmit }) => {

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
        <Button value="cancel" />
      </div>
    </form>
  )
}

EditForm = reduxForm({
  // a unique name for the form
  form: 'recipientData'
})(EditForm)

export default EditForm;