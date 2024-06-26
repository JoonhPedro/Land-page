import illustrationCaler from '../../assets/imagens/Calender/illustrationLogin.svg'
import { ButtonStyle } from '../../components/Button/styles'
import { Container, Conteudo, LoginImg, Text, Title } from './styles'

export function Calender() {
  return (
    <Container>
      <LoginImg src={illustrationCaler} alt="teste" />
      <Conteudo>
        <Title>How to design your site footer like we did</Title>
        <Text>
          Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
          augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
          elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
          habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
          facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet
          urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur
          quis massa. Praesent felis est, finibus et nisi ac, hendrerit
          venenatis libero. Donec consectetur faucibus ipsum id gravida.
        </Text>
        <ButtonStyle variant="primary">
          <a href="https://www.google.com/test"> Learn More</a>
        </ButtonStyle>
      </Conteudo>
    </Container>
  )
}
