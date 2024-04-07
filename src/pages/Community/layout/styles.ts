import styled from 'styled-components'

export const Container = styled.div`
  padding: 10px;
  text-align: center;
  @media screen and (max-width: 768px) {
    h1 {
      font-size: 1.3rem;
    }
  }
`

export const CommunityDiv = styled.div`
  display: inline;
`

export const Title = styled.h1`
  color: ${(props) => props.theme['neutral-D_grey']};
  padding: 20px 0px;
`

export const Text = styled.p`
  color: ${(props) => props.theme['neutral-grey']};
  padding: 5px;
`

export const Cards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding-top: 20px;
  flex-wrap: wrap;
`

export const Card = styled.div`
  padding: 30px 30px;
  background-color: #f2f2f2;
  width: 250px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  h1 {
    font-size: 1.8rem;
  }
`
