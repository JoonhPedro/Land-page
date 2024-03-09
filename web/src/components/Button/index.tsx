import React from 'react'
import { ButtonLogin, ButtonSignUp, Container } from './styles'

interface ButtonProps {
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <Container>
      <ButtonLogin onClick={onClick}>Login</ButtonLogin>
      <ButtonSignUp onClick={onClick}>Sign Up</ButtonSignUp>
    </Container>
  )
}

export default Button
