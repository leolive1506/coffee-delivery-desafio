import { Card } from '../../components/Card/Default'
import { Intro } from './components/Intro'

import { CoffeListContainer, ContainerCards } from './styles'

import { coffees } from '../../context/CoffeesContext'

export function Home() {
  return (
    <>
      <Intro />
      <CoffeListContainer>
        <h2>Nossos cafés</h2>
        <ContainerCards>
          {coffees.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </ContainerCards>
      </CoffeListContainer>
    </>
  )
}
