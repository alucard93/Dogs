import React from 'react'
import { ButtonContainer } from './style'

export const Button = ({ children, ...props }) => {
  return <ButtonContainer {...props}>{children}</ButtonContainer>
}
