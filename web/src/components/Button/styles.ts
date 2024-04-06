import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 11px;
`
export const ButtonLogin = styled.button`
  height: auto;
  border: none;
  background-color: transparent;
  color: ${(props) => props.theme.primary};
  cursor: pointer;
`
export const ButtonSignUp = styled.button`
  padding: 10px;
  border: none;
  border-radius: 6px;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.primary};
  cursor: pointer;
`
