import { Trash } from 'phosphor-react'
import CoffeAmericano from '../../../assets/coffes/americano.png'
import { ButtonsAmount } from '../../ButtonsAmount'
import {
  CheckoutCardContainer,
  Content,
  PriceContainer,
  RemoveButton,
} from './styles'

export function CheckoutCard() {
  return (
    <CheckoutCardContainer>
      <div>
        <img src={CoffeAmericano} alt="Café americano" />
        <Content>
          <h3>Expresso tradicional</h3>
          <div>
            <ButtonsAmount
              onDecrement={() => console.log('decrement')}
              onIncrement={() => console.log('increment')}
              amount={1}
            />
            <RemoveButton>
              <Trash />
              Remover
            </RemoveButton>
          </div>
        </Content>
      </div>
      <PriceContainer>
        <strong>R$ 9,90</strong>
      </PriceContainer>
    </CheckoutCardContainer>
  )
}
