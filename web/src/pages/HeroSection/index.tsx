import Illustrationimg from '../../assets/imagens/Illustrations.svg'
import {
  Container,
  Illustration,
  Infos,
  InfosText,
  InfosTitle,
  RegisterButton,
} from './styles'

export function HeroSection() {
  return (
    <>
      <Container>
        <Infos>
          <InfosTitle>
            Lessons and insights <span>from 8 years</span>
          </InfosTitle>
          <InfosText>
            Where to grow your business as a photographer: site or social media?
          </InfosText>
          <RegisterButton>Register</RegisterButton>
        </Infos>
        <Illustration src={Illustrationimg} />
      </Container>
    </>
  )
}
