import { cardData } from '../../PagesDate/AchievementsDTO'
import {
  Card,
  CardText,
  Cardlogo,
  Container,
  Counts,
  Description,
  Heading,
  Title,
} from './styles.ts'

export function Achievements() {
  return (
    <Container>
      <Heading>
        <Title>
          Helping a local <span>business reinvent itself</span>
        </Title>
        <Description>
          We reached here with our hard work and dedication
        </Description>
      </Heading>
      <Counts>
        {cardData.map((card, index) => (
          <Card key={index}>
            <Cardlogo>
              <img src={card.logo} alt="logo" />
            </Cardlogo>
            <CardText>
              <h2> {card.title}</h2>
              <p>{card.description}</p>
            </CardText>
          </Card>
        ))}
      </Counts>
    </Container>
  )
}
