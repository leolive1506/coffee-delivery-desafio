import { ShoppingCart } from 'phosphor-react'
import { useContext, useState } from 'react'
import { CoffeesContext } from '../../../context/CoffeesContext'
import { ButtonsAmount } from '../../ButtonsAmount'
import {
  ActionsContainer,
  Badge,
  Card as CardContent,
  CartButton,
  ContainerBadges,
  ContainerImg,
  PriceAndActionsContainer,
} from './styles'

interface ICard {
  id: string
  url: string
  badges: Array<string>
  title: string
  description: string
  price: number
}

interface CardProps {
  card: ICard
}
export function Card({ card }: CardProps) {
  const { id, url, badges, title, description, price } = card
  const { coffeesSelected, setAmountCoffee } = useContext(CoffeesContext)

  const currentCoffeSelected = coffeesSelected.find(
    (coffee) => coffee.id === id,
  )

  const currentAmountCoffeeSeleted = currentCoffeSelected
    ? currentCoffeSelected.amount
    : 0

  const [amountCoffeeSeleted, setAmountCoffeeSeleted] = useState(
    currentAmountCoffeeSeleted,
  )

  function handleIncrementAmountCoffe(id: string) {
    setAmountCoffeeSeleted((state) => state + 1)
  }

  function handleDecrementAmountCoffe(id: string) {
    if (amountCoffeeSeleted > 0) {
      setAmountCoffeeSeleted((state) => state - 1)
    }
  }

  function handleAddCoffeeToCart(id: string) {
    if (amountCoffeeSeleted > 0) {
      setAmountCoffee(id, amountCoffeeSeleted)
    }
  }

  return (
    <CardContent>
      <ContainerImg>
        <img src={url} alt={`Foto ${title}`} />
      </ContainerImg>
      <ContainerBadges>
        {badges.map((badge) => (
          <Badge key={`${badge}_${id}`}>{badge}</Badge>
        ))}
      </ContainerBadges>
      <strong>{title}</strong>
      <p>{description}</p>

      <PriceAndActionsContainer>
        <span>
          R$
          <strong>{(price * 10).toFixed(2).replace('.', ',')}</strong>
        </span>

        <ActionsContainer>
          <ButtonsAmount
            onIncrement={() => handleIncrementAmountCoffe(id)}
            onDecrement={() => handleDecrementAmountCoffe(id)}
            amount={amountCoffeeSeleted}
          />
          <CartButton onClick={() => handleAddCoffeeToCart(id)}>
            <ShoppingCart weight="fill" />
          </CartButton>
        </ActionsContainer>
      </PriceAndActionsContainer>
    </CardContent>
  )
}
