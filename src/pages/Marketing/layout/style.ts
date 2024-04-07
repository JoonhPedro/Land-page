import { BiLogInCircle } from 'react-icons/bi'
import styled from 'styled-components'

export const Container = styled.div`
  text-align: center;
`

export const CommunityDiv = styled.div`
  display: inline;
`

export const Title = styled.h1`
  color: ${(props) => props.theme['neutral-D_grey']};
  padding: 20px;
`

export const Text = styled.p`
  color: ${(props) => props.theme['neutral-grey']};
`

export const Cards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  padding: 70px;
  font-weight: bold;
`
export const IconNavagiton = styled(BiLogInCircle)`
  position: relative;
  top: 5px;
  left: 5px;
`

export const Card = styled.div`
  padding: 30px;
  width: 260px;
  background-color: #f2f2f2;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  button {
    &:hover {
      text-decoration: none;
      color: ${(props) => props.theme['neutral-D_grey']};
    }
  }

  h1 {
    font-size: 1.8rem;
  }
`
