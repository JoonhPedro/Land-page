import React, { useEffect, useState } from 'react'
import LogoNexcent from '../../assets/imagens/Header/Logo.svg'
import LogoScrolled from '../../assets/imagens/Header/logowhite.svg'
import { Container, Logo, Nav, NavLink } from './styles'
import { MenuIcon } from './styles' // Importe o MenuIcon

export interface HeaderProps {
  navLinks: { title: string; href: string }[]
}

export const Header: React.FC<HeaderProps> = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { title: 'Home', href: '' },
    { title: 'Service', href: '#Clients' },
    { title: 'Feature', href: '#Community' },
    { title: 'Testimonial', href: '#Testimonial' },
    { title: 'Product', href: '#Product' },
    { title: 'FAQ', href: 'https://www.google.com/test' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const scrolledBackground = {
    backgroundColor: scrolled ? '#263238' : '#F5F7FA',
  }

  return (
    <Container id="navbar" style={scrolledBackground}>
      <Logo src={scrolled ? LogoScrolled : LogoNexcent} alt="Logo" />
      <MenuIcon
        onClick={toggleMenu}
        style={{ color: scrolled ? '#ffffff' : '#000000' }}
      />
      <Nav style={{ display: menuOpen ? 'none' : 'flex' }}>
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
    </Container>
  )
}

export default Header
