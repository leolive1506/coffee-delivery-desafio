import { Trash } from 'phosphor-react'
import { useContext } from 'react'
import { CoffeesContext } from '../../../context/CoffeesContext'
import { formatCurrency } from '../../../helpers'
import { ButtonsAmount } from '../../ButtonsAmount'
import {
  CheckoutCardContainer,
  Content,
  PriceContainer,
  RemoveButton,
} from './styles'

interface ICard {
  id: string
  url: string
  badges: Array<string>
  title: string
  description: string
  price: number
}

interface CheckoutCardProps {
  card: ICard
}

export function CheckoutCard({ card }: CheckoutCardProps) {
  const { id, url, title, price } = card
  const {
    incrementAmountCoffee,
    decrementAmountCoffe,
    coffeesSelected,
    removeCoffeeSelected,
  } = useContext(CoffeesContext)

  const currentCoffeSelected = coffeesSelected.find(
    (coffee) => coffee.id === id,
  )
  const currentAmountCoffeeSeleted = currentCoffeSelected
    ? currentCoffeSelected.amount
    : 0

  function handleIncrementAmountCoffe(id: string) {
    incrementAmountCoffee(id)
  }

  function handleDecrementAmountCoffe(id: string) {
    decrementAmountCoffe(id)
  }

  function handleDeleteCoffeeSeleted(id: string) {
    removeCoffeeSelected(id)
  }

  return (
    <CheckoutCardContainer>
      <div>
        <img src={url} alt={`Foto ${title}`} />
        <Content>
          <h3>{title}</h3>
          <div>
            <ButtonsAmount
              onIncrement={() => handleIncrementAmountCoffe(id)}
              onDecrement={() => handleDecrementAmountCoffe(id)}
              amount={currentAmountCoffeeSeleted}
            />
            <RemoveButton onClick={() => handleDeleteCoffeeSeleted(id)}>
              <Trash />
              Remover
            </RemoveButton>
          </div>
        </Content>
      </div>
      <PriceContainer>
        <strong>{formatCurrency(price)}</strong>
      </PriceContainer>
    </CheckoutCardContainer>
  )
}
