import { ButtonStyle } from '../../../components/Button/styles.ts'
import { cardData } from '../index.ts'
import {
  Card,
  Cards,
  CommunityDiv,
  Container,
  IconNavagiton,
  Text,
  Title,
} from './style.ts'
export function Marketing() {
  return (
    <>
      <Container>
        <CommunityDiv>
          <Title>Caring is the new marketing</Title>
          <Text>
            The Nexcent blog is the best place to read about the latest
            membership insights.
          </Text>
        </CommunityDiv>
        <Cards>
          {cardData.map((card, index) => (
            <Card key={index}>
              <Text>{card.title}</Text>
              <ButtonStyle variant={'secondary'}>
                ReadMore
                <IconNavagiton size={20} />
              </ButtonStyle>
            </Card>
          ))}
        </Cards>
      </Container>
    </>
  )
}
