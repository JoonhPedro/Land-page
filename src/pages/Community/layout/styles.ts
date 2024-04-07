import styled from 'styled-components'

export const Container = styled.div`
  padding: 10px;
  text-align: center;
`

export const CommunityDiv = styled.div`
  display: inline;
`

export const Title = styled.h1`
  color: ${(props) => props.theme['neutral-D_grey']};
  padding: 20px;
  padding-top: 60px;
`

export const Text = styled.p`
  color: ${(props) => props.theme['neutral-grey']};
  padding: 5px;
`

export const Cards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  padding: 50px;
`

export const Card = styled.div`
  padding: 30px 50px 0px 50px;
  h1 {
    font-size: 1.8rem;
  }
`
