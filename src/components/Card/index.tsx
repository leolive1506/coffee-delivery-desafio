import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useState } from 'react'
import {
  ActionsContainer,
  Badge,
  Card as CardContent,
  CartButton,
  ContainerBadges,
  ContainerImg,
  PriceAndActionsContainer,
  QuantityButtonsContainer,
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
  const [amountCoffe, setAmountCoffe] = useState(0)

  function handleIncrementAmountCoffe() {
    setAmountCoffe((state) => state + 1)
  }

  function handleDecrementAmountCoffe() {
    if (amountCoffe > 0) {
      setAmountCoffe((state) => state - 1)
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
          <QuantityButtonsContainer>
            <button type="button" onClick={handleDecrementAmountCoffe}>
              <Minus />
            </button>
            <span>{amountCoffe}</span>
            <button type="button" onClick={handleIncrementAmountCoffe}>
              <Plus />
            </button>
          </QuantityButtonsContainer>
          <CartButton>
            <ShoppingCart weight="fill" />
          </CartButton>
        </ActionsContainer>
      </PriceAndActionsContainer>
    </CardContent>
  )
}
