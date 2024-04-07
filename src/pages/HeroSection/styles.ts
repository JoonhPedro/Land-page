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

  button {
    font-size: 0.8rem;
    padding: 0.8rem;
    transition: 0.3s;
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
  span {
    position: relative;
    left: 7px;
    top: 2.4px;
  }

  @media screen and (max-width: 795px) {
    padding-top: 40px;
    text-align: center;
    h1 {
      font-size: 1.8rem;
    }
  }
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
  padding: 30px 0px 20px;
`

export const Illustration = styled.img`
  @media screen and (max-width: 1500px) {
    height: 200px;
  }
  @media screen and (max-width: 795px) {
    display: none;
  }
`
