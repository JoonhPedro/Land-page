import Illustrationimg from '../../assets/imagens/Header/Illustrations.svg'
import { ButtonStyle } from '../../components/Button/styles'
import { Container, Illustration, Infos, InfosText, InfosTitle } from './styles'

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
          <ButtonStyle variant="primary">
          <a href="https://dt-money-topaz-two.vercel.app">Register</a>
          </ButtonStyle>
        </Infos>
        <Illustration src={Illustrationimg} />
      </Container>
    </>
  )
}
