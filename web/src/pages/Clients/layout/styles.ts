import styled from 'styled-components'

export const Container = styled.div`
  padding: 10px;
  text-align: center;
`
export const ClientTitle = styled.h1`
  color: ${(props) => props.theme['neutral-D_grey']};
`
export const ClientText = styled.p`
  color: ${(props) => props.theme['neutral-grey']};
`
export const ClientsDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 150px;
  padding: 40px 0px 40px 10px;
`
