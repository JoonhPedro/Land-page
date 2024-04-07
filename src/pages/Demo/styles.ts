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
  button {
    font-size: 1rem;
    padding: 1rem;
  }
  span {
    position: relative;
    left: 7px;
    top: 2.4px;
  }
`
export const Title = styled.h1`
  font-size: 3rem;
  padding: 40px 0px;
`
