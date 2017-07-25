import React from 'react'
import PropTypes from 'prop-types'
import createModifiers from '../../lib/createModifiers'

import './TextInput.css'

const TextInput = ({ display, id, placeholder, label, name, value, onChange }) => {

  const isOneLine = display === 'oneline'

  const inputWrapModifiers = createModifiers('textinput__input-wrap', {
    'oneline': isOneLine
  })
  
  const labelModifiers = createModifiers('textinput__label', {
    'oneline': isOneLine
  })

  return (
    <div className={inputWrapModifiers}>
      <label htmlFor={id} className={labelModifiers}>{label}</label>
      <input 
        name={name} 
        value={value}
        onChange={onChange} 
        className="textinput__input" 
        type="text" 
        placeholder={placeholder} 
        id="{id}"
      />
    </div>
  )
}

TextInput.propTypes = {
  display: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
}

export default TextInput

