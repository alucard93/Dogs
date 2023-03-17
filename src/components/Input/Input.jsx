import React from 'react'
import { InputContainer } from './style'

export const Input = ({ label, type, name, placeholder, register, defaultValue, errosMessage }) => {
  return (
    <InputContainer>
      <div className='wrapper'>
        <label htmlFor={name}>{label}</label>
        <input
          type={type}
          id={name.toLowerCase()}
          placeholder={placeholder}
          {...register(name)}
          defaultValue={defaultValue}
        />
      </div>
      <p className="error__message">{errosMessage}</p>
    </InputContainer>
  )
}
