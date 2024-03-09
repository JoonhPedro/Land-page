import { clientData } from '../../pagesDTO/ClientDTO'
import { ClientText, ClientTitle, ClientsDiv, Container } from './styles'

export function Clients() {
  return (
    <Container>
      <ClientTitle>Our Clients</ClientTitle>
      <ClientText>
        We have been working with some Fortune 500+ clients
      </ClientText>

      <ClientsDiv>
        {clientData.map((client, index) => (
          <div key={index}>
            <img src={client.logo} alt="logo" />
          </div>
        ))}
      </ClientsDiv>
    </Container>
  )
}
