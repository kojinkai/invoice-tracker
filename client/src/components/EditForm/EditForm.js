import React from 'react'
import { Field, reduxForm } from 'redux-form'
import './EditForm.css'

let EditForm = props => {
  const { handleSubmit } = props
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
      <button type="submit">Submit</button>
    </form>
  )
}

EditForm = reduxForm({
  // a unique name for the form
  form: 'recipientData'
})(EditForm)

export default EditForm;