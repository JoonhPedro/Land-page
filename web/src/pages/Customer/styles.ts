import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 200px;
  padding: 50px;
`
export const Description = styled.div`
  height: auto;
  width: 600px;
`
export const Infos = styled.p`
  color: ${(props) => props.theme['neutral-D_grey']};
`

export const Title = styled.h2`
  font-size: 1.3rem;
  color: ${(props) => props.theme.primary};
`

export const Customers = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  img {
    height: 30px;
  }
  Button {
    height: 30px;
  }
  span {
    position: relative;
    left: 73px;
    bottom: 22px;
  }
`
