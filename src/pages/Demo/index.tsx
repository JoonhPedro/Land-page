import { ButtonStyle } from '../../components/Button/styles'
import { Container, Description, IconNavagiton, Title } from './styles'
export function Demo() {
  return (
    <Container id="Product">
      <Description>
        <Title>Pellentesque suscipit fringilla libero eu.</Title>
        <ButtonStyle variant="primary">
          <a href="https://www.google.com/test"> Get a Demo</a>
          <IconNavagiton size={20} />
        </ButtonStyle>
      </Description>
    </Container>
  )
}
