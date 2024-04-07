import logo from '../../assets/imagens/Footer/Logo.svg'
import basc from '../../assets/imagens/Footer/bas.svg'
import insta from '../../assets/imagens/Footer/insta.svg'
import tww from '../../assets/imagens/Footer/tww.svg'
import you from '../../assets/imagens/Footer/youtube.svg'
import {
  Column,
  FooterContainer,
  Icon,
  IconNavagiton,
  Input,
  InputContainer,
  Link,
  Links,
  Logo,
  SocialIcons,
  Text,
  Title,
} from './styles'

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Column>
        <Logo src={logo} alt="Logo" />
        <Text>
          Copyright © 2020 Nexcent ltd. <span>All rights reserved</span>
        </Text>
        <SocialIcons>
          <Icon src={insta} alt="Logo" />
          <Icon src={basc} alt="Logo" />
          <Icon src={tww} alt="Logo" />
          <Icon src={you} alt="Logo" />
        </SocialIcons>
      </Column>
      <Column>
        <Links>
          <Title>Company</Title>
          <Link href="#">Home</Link>
          <Link href="#Clients">Service</Link>
          <Link href="#Community">Feature</Link>
          <Link href="#Testimonial">Testimonial</Link>
          <Link href="#Product">Product</Link>
          <Link href="https://www.google.com/test">FAQ</Link>
        </Links>
      </Column>
      <Column>
        <Links>
          <Title>Support</Title>
          <Link href="https://www.google.com/test">Central de Ajuda</Link>
          <Link href="https://www.google.com/test">Contato</Link>
        </Links>
      </Column>
      <Column>
        <Title>Stay up to date</Title>
        <InputContainer>
          <Input type="email" placeholder="Digite seu e-mail" />
          <IconNavagiton size={20} color="#fff" />
        </InputContainer>
      </Column>
    </FooterContainer>
  )
}

export default Footer
