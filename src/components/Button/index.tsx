import React from 'react'
import { ButtonStyle } from './styles'
export interface ButtonProps {
  variant: 'primary' | 'secondary'
  children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ variant, children }) => {
  return <ButtonStyle variant={variant}>{children}</ButtonStyle>
}

export default Button
