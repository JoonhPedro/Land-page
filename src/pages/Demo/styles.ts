import { BiLogInCircle } from 'react-icons/bi'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-self: center;
  justify-content: center;
  background: ${(props) => props.theme['neutral-Silver']};
`
export const Description = styled.div`
  text-align: center;
  width: 600px;
  padding-bottom: 40px;
  button {
    font-size: 0.9rem;
    padding: 5px 20px;
    transition: 0.3s;
    line-height: 2;
    a {
      text-decoration: none;
      color: #fff;
    }
    &:hover {
      text-decoration: none;
      opacity: 0.8;
      transform: scale(1.1);
    }
  }

  @media screen and (max-width: 400px) {
    padding-top: 40px;
    text-align: center;
    h1 {
      font-size: 1rem;
    }
  }
`
export const IconNavagiton = styled(BiLogInCircle)`
  position: relative;
  top: 5px;
  left: 5px;
`
export const Title = styled.h1`
  font-size: 3rem;
  padding: 40px 0;
`
