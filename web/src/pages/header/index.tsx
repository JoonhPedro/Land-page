import React from 'react'
import LogoNexcent from '../../assets/imagens/Logo.svg'
import Button from '../../components/Button'
import { Container, Logo, Nav, NavLink } from './styles'

export interface HeaderProps {
  navLinks: { title: string; href: string }[]
}

export const Header: React.FC<HeaderProps> = () => {
  const navLinks = [
    { title: 'Home', href: '#' },
    { title: 'Service', href: '#' },
    { title: 'Feature', href: '#' },
    { title: 'Product', href: '#' },
    { title: 'Testimonial', href: '#' },
    { title: 'FAQ', href: '#' },
  ]

  return (
    <Container>
      <Logo src={LogoNexcent} alt="Logo" />
      <Nav>
        {navLinks.map((link, index) => (
          <NavLink key={index} href={link.href}>
            {link.title}
          </NavLink>
        ))}
      </Nav>
      <Button />
    </Container>
  )
}

export default Header
