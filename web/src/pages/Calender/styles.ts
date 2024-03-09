import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  padding: 50px;
  background: ${(props) => props.theme['neutral-Silver']};
  border: 1px solid red;
`
export const LoginImg = styled.img``

export const Conteudo = styled.div`
  height: auto;
  width: 500px;

  button {
    padding: 15px 20px 15px 20px;
  }
`
export const Title = styled.h1`
  color: white;
  font-size: 3rem;
  color: ${(props) => props.theme['neutral-D_grey']};
`
export const Text = styled.p`
  color: ${(props) => props.theme['neutral-grey']};
`
export const RegisterButton = styled.button`
  padding: 15px 20px 15px 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.primary};
`
