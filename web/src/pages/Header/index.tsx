import React, { useEffect, useState } from 'react'
import LogoNexcent from '../../assets/imagens/Header/Logo.svg'
import LogoScrolled from '../../assets/imagens/Header/logowhite.svg'
import ButtonStyle from '../../components/Button'
import { Container, Logo, Nav, NavLink } from './styles'

export interface HeaderProps {
  navLinks: { title: string; href: string }[]
}

export const Header: React.FC<HeaderProps> = () => {
  const [scrolled, setScrolled] = useState(false) // Estado para controlar o scroll

  const navLinks = [
    { title: 'Home', href: '#' },
    { title: 'Service', href: '#' },
    { title: 'Feature', href: '#' },
    { title: 'Product', href: '#' },
    { title: 'Testimonial', href: '#' },
    { title: 'FAQ', href: '#' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  const scrolledBackground = {
    backgroundColor: scrolled ? '#263238' : '#F5F7FA',
  }

  return (
    <Container id="navbar" style={scrolledBackground}>
      <Logo src={scrolled ? LogoScrolled : LogoNexcent} alt="Logo" />{' '}
      <Nav>
        {navLinks.map((link, index) => (
          <NavLink
            key={index}
            href={link.href}
            style={{ color: scrolled ? '#ffffff' : '#000000' }}
          >
            {link.title}
          </NavLink>
        ))}
      </Nav>
      <div>
        <ButtonStyle variant="secondary"> Login </ButtonStyle>
        <ButtonStyle variant="primary"> Register </ButtonStyle>
      </div>
    </Container>
  )
}

export default Header
