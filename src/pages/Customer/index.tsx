import { ButtonStyle } from '../../components/Button/styles'
import { clientData } from '../Clients/index'
import {
  Container,
  Customers,
  Description,
  IconNavagiton,
  Infos,
  Title,
} from './styles'

export function Customer() {
  return (
    <>
      <Container id="Testimonial">
        <Description>
          <Infos>
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, nec molestie mi blandit. Suspendisse cursus
            tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
            eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
            Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
            Quisque vulputate odio neque, eget efficitur libero condimentum id.
            Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </Infos>
          <Title>Tim Smith</Title>
          <Infos>British Dragon Boat Racing Association</Infos>
          <Customers>
            {clientData.map((client, index) => (
              <div key={index}>
                <img src={client.logo} alt="logo" />
              </div>
            ))}
            <ButtonStyle variant="secondary">
              Meet all customers
              <IconNavagiton size={20} />
            </ButtonStyle>
          </Customers>
        </Description>
      </Container>
    </>
  )
}
