import { ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
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
  const { coffeesSelected, incrementAmountCoffee, decrementAmountCoffe } =
    useContext(CoffeesContext)

  const currentCoffeSelected = coffeesSelected.find(
    (coffee) => coffee.id === id,
  )

  function handleIncrementAmountCoffe(id: string) {
    incrementAmountCoffee(id)
  }

  function handleDecrementAmountCoffe(id: string) {
    decrementAmountCoffe(id)
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
            amount={currentCoffeSelected ? currentCoffeSelected.amount : 0}
          />
          <CartButton>
            <ShoppingCart weight="fill" />
          </CartButton>
        </ActionsContainer>
      </PriceAndActionsContainer>
    </CardContent>
  )
}
