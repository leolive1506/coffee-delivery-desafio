import { Trash } from 'phosphor-react'
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
  const { url, title, price } = card

  return (
    <CheckoutCardContainer>
      <div>
        <img src={url} alt={`Foto ${title}`} />
        <Content>
          <h3>{title}</h3>
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
        <strong>
          {new Intl.NumberFormat('pt-br', {
            style: 'currency',
            currency: 'BRL',
          }).format(price * 10)}
        </strong>
      </PriceContainer>
    </CheckoutCardContainer>
  )
}
