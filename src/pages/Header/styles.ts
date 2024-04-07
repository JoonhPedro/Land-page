import styled from 'styled-components'

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
  button:hover {
    opacity: 0.9;
  }
`
export const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 40px;
  height: 100%;
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
export const Colordefault = styled.div`
  background: blue;
`
