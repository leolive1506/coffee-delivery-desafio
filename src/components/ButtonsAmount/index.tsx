import { Minus, Plus } from 'phosphor-react'
import { QuantityButtonsContainer } from './styles'

interface ButtonsAmountProps {
  onDecrement: () => void
  onIncrement: () => void
  amount: number
}

export function ButtonsAmount({
  onDecrement,
  onIncrement,
  amount,
}: ButtonsAmountProps) {
  return (
    <QuantityButtonsContainer>
      <button type="button" onClick={onDecrement}>
        <Minus />
      </button>
      <span>{amount}</span>
      <button type="button" onClick={onIncrement}>
        <Plus />
      </button>
    </QuantityButtonsContainer>
  )
}
