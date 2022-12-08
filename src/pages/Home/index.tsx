import { v4 as uuidv4 } from 'uuid'

import { Card } from '../../components/Card'
import { Intro } from './components/Intro'

import { CoffeListContainer, ContainerCards } from './styles'
import CoffeAmericano from '../../assets/coffes/americano.png'
import CoffeArabe from '../../assets/coffes/arabe.png'
import CoffeCubano from '../../assets/coffes/cubano.png'

const cards = [
  {
    id: uuidv4(),
    url: CoffeAmericano,
    badges: ['Tradicional'],
    title: 'Expresso tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 0.99,
  },
  {
    id: uuidv4(),
    url: CoffeArabe,
    badges: ['Especial'],
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 0.99,
  },
  {
    id: uuidv4(),
    url: CoffeCubano,
    badges: ['Especial', 'Gelado', 'Alcoólico'],
    title: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 0.99,
  },
]

export function Home() {
  return (
    <>
      <Intro />
      <CoffeListContainer>
        <h2>Nossos cafés</h2>
        <ContainerCards>
          {cards.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </ContainerCards>
      </CoffeListContainer>
    </>
  )
}
