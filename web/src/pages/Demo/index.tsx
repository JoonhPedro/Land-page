import icon from '../../assets/imagens/Demo/icon.svg'
import { ButtonStyle } from '../../components/Button/styles'
import { Container, Description, Title } from './styles'
export function Demo() {
  return (
    <Container>
      <Description>
        <Title>Pellentesque suscipit fringilla libero eu.</Title>
        <ButtonStyle variant="primary">
          Get a Demo
          <span>
            <img src={icon} alt="icon" />
          </span>
        </ButtonStyle>
      </Description>
    </Container>
  )
}
