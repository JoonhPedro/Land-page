import logo from '../../assets/imagens/Footer/Logo.svg'
import basc from '../../assets/imagens/Footer/bas.svg'
import insta from '../../assets/imagens/Footer/insta.svg'
import tww from '../../assets/imagens/Footer/tww.svg'
import you from '../../assets/imagens/Footer/youtube.svg'
import {
  Column,
  FooterContainer,
  Icon,
  Input,
  InputContainer,
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
          <a href="#">Sobre</a>
          <a href="#">Produtos</a>
          <a href="#">Serviços</a>
        </Links>
      </Column>
      <Column>
        <Links>
          <Title>Support</Title>
          <a href="#">Central de Ajuda</a>
          <a href="#">Contato</a>
        </Links>
      </Column>
      <Column>
        <Title>Stay up to date</Title>
        <InputContainer>
          <Input type="email" placeholder="Digite seu e-mail" />
          <button>Assinar</button>
        </InputContainer>
      </Column>
    </FooterContainer>
  )
}

export default Footer
