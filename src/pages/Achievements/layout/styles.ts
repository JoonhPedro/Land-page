import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
  padding: 50px;
  background: ${(props) => props.theme['neutral-Silver']};
  flex-wrap: wrap;
  @media screen and (max-width: 933px) {
    h1 {
      font-size: 1.6rem;
    }
  }
`
export const Heading = styled.div`
  width: 470px;
`
export const Title = styled.h1`
  font-size: 3rem;
  color: ${(props) => props.theme['neutral-D_grey']};
  padding-bottom: 30px;
  span {
    color: ${(props) => props.theme.primary};
  }
`
export const Description = styled.p``
export const Counts = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  justify-content: center;
  align-self: center;
`
export const Card = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #f2f2f2;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: right;
  padding: 10px;
  @media screen and (max-width: 933px) {
    padding: 5px 10px;
    p {
      font-size: 0.5rem;
    }
  }
`
export const Cardlogo = styled.div`
  display: flex;
  width: auto;
  justify-content: center;
  align-self: center;
  img {
    height: 50px;
  }
`
export const CardText = styled.div`
  display: block;
  text-align: left;
  p {
    font-size: 1.2rem;
  }
`
