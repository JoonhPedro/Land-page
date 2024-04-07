import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 200px;
  @media screen and (max-width: 933px) {
    img {
      display: none;
    }
    h1 {
      font-size: 1.7rem;
    }
    padding: 50px;
  }
`
export const LoginImg = styled.img``

export const Conteudo = styled.div`
  height: auto;
  width: 500px;
  padding-bottom: 20px;
  button {
    padding: 15px 20px;
    transition: 0.3s ease;
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
`

export const Title = styled.h1`
  color: white;
  font-size: 3rem;
  color: ${(props) => props.theme['neutral-D_grey']};
  padding: 30px 0px;
`

export const Text = styled.p`
  color: ${(props) => props.theme['neutral-grey']};
  padding-bottom: 15px;
`

export const RegisterButton = styled.button`
  padding: 15px 20px 15px 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.primary};
`
