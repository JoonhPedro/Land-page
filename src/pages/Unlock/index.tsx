import unclockIllustration from '../../assets/imagens/Unlock/unclockIllustration.svg'
import { ButtonStyle } from '../../components/Button/styles'
import { Container, Conteudo, LoginImg, Text, Title } from './styles'

export function Unlock() {
  return (
    <Container>
      <LoginImg src={unclockIllustration} alt="teste" />
      <Conteudo>
        <Title>The unseen of spending three years at Pixelgrade</Title>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          justo ipsum. Sed accumsan quam vitae est varius fringilla.
          Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
          tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
          Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
          elementum pulvinar odio.
        </Text>
        <ButtonStyle variant="primary">
          <a href="https://www.google.com/test"> Learn More</a>
        </ButtonStyle>
      </Conteudo>
    </Container>
  )
}
