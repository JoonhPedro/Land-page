import { cardData } from '../index'
import { Card, Cards, CommunityDiv, Container, Text, Title } from './styles'
export function Community() {
  return (
    <>
      <Container>
        <CommunityDiv>
          <Title>Manage your entire community in a single system</Title>
          <Text>Who is Nextcent suitable for?</Text>
        </CommunityDiv>
        <Cards>
          {cardData.map((card, index) => (
            <Card key={index}>
              <img src={card.logo} alt="logo" />
              <Title>{card.title}</Title>
              <Text>{card.description}</Text>
            </Card>
          ))}
        </Cards>
      </Container>
    </>
  )
}
