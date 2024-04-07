import styled from 'styled-components'

export const FooterContainer = styled.footer`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 5rem;
  background-color: ${(props) => props.theme['neutral-black']};
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`

export const Logo = styled.img`
  width: 200px;
  height: 70px;
`

export const Text = styled.p`
  color: ${(props) => props.theme['neutral-Silver']};
  width: 12rem;
  padding: 20px 0px;
`

export const SocialIcons = styled.div`
  display: flex;
  gap: 10px;
`

export const Icon = styled.img`
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    opacity: 0.6;
  }
`

export const Links = styled.div`
  display: flex;
  flex-direction: column;

  a {
    margin-bottom: 5px;
  }
`

export const Support = styled.div`
  display: flex;
  flex-direction: column;

  a {
    margin-bottom: 5px;
  }
`

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Title = styled.h3`
  margin-bottom: 10px;
`

export const Input = styled.input`
  padding: 5px;
  margin-right: 10px;
`
