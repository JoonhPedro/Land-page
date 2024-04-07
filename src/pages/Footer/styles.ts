import { BiNavigation } from 'react-icons/bi'
import styled from 'styled-components'

export const FooterContainer = styled.footer`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
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
  padding: 30px 0px;
`

export const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  padding-top: 10px;
`

export const Icon = styled.img`
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    opacity: 0.6;
    transform: scale(1.2);
  }
`
export const Title = styled.h3`
  padding: 20px 0;
  font-size: 1.5rem;
  color: ${(props) => props.theme['neutral-White']};
`

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  width: 120px;
`

export const Link = styled.a`
  color: ${(props) => props.theme['neutral-Silver']};
  padding-bottom: 10px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme['neutral-grey-blue']};
  }
`

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
`
export const IconNavagiton = styled(BiNavigation)`
  position: relative;
  right: 30px;
  cursor: pointer;
  z-index: 3;
`

export const Input = styled.input`
  background-color: ${(props) => props.theme['neutral-D_grey']};
  padding: 10px;
  width: 250px;
  border: none;
  border-radius: 6px;
  color: ${(props) => props.theme['neutral-White']};
`
