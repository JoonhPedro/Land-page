import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  padding: 50px;
  background: ${(props) => props.theme['neutral-Silver']};
`

export const Infos = styled.div`
  height: auto;
  width: 500px;
`
export const InfosTitle = styled.h1`
  color: white;
  font-size: 3rem;
  color: ${(props) => props.theme['neutral-D_grey']};
  span {
    color: ${(props) => props.theme.primary};
  }
`
export const InfosText = styled.p`
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

export const Illustration = styled.img``
