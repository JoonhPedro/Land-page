import styled from 'styled-components'
import { FaBars } from 'react-icons/fa'

export const Container = styled.header`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: ${(props) => props.theme['neutral-Silver']};
  position: fixed;
  z-index: 1;
  transition: background-color 0.5s ease-in-out;
  top: 0;
  left: 0;

  @media screen and (max-width: 768px) {
    justify-content: space-between;
    padding: 20px;
  }
`

export const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 40px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 50px;
    right: 0;
    background: ${(props) => props.theme['neutral-Silver']};
    width: 100%;
    padding: 10px;
    gap: 20px;
    background-color: #263238;
    backdrop-filter: blur(5px);
  }
`

export const Logo = styled.img`
  height: 20px;
`

export const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  color: black;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    text-decoration: none;
    opacity: 0.7;
    transform: scale(1.2);
  }
`

export const MenuIcon = styled(FaBars)`
  display: none;
  color: black;
  font-size: 1.5rem;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: block;
  }
`
