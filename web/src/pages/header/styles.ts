import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: ${(props) => props.theme['neutral-Silver']};
`
export const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 40px;
  height: 100%;
  width: 300px;
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
  &:hover {
    text-decoration: underline;
  }
`
