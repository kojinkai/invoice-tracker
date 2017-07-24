import React from 'react'
import { Field, reduxForm } from 'redux-form'

let EditForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={ handleSubmit }>
      <div>
        <label htmlFor="firstname">Name</label>
        <Field name="firstname" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="surname">Surname</label>
        <Field name="surname" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="address">Address</label>
        <Field name="address" component="input" type="address" />
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