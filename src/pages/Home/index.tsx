import { Card } from '../../components/Card'
import { Intro } from './components/Intro'

import { CoffeListContainer, ContainerCards } from './styles'
import CoffeAmericano from '../../assets/coffes/americano.png'
import CoffeArabe from '../../assets/coffes/arabe.png'
import CoffeCubano from '../../assets/coffes/cubano.png'

const cards = [
  {
    id: String(new Date().getMilliseconds()),
    url: CoffeAmericano,
    badges: ['Tradicional'],
    title: 'Expresso tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 0.99,
  },
  {
    id: String(new Date().getMilliseconds()),
    url: CoffeArabe,
    badges: ['Especial'],
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 0.99,
  },
  {
    id: String(new Date().getMilliseconds()),
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
