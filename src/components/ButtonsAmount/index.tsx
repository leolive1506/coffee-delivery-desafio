import { Minus, Plus } from 'phosphor-react'
import { QuantityButtonsContainer } from './styles'

interface ButtonsAmountProps {
  onDecrement: () => void
  onIncrement: () => void
  amount: number
  isDecrementDisabled?: boolean
}

export function ButtonsAmount({
  onDecrement,
  onIncrement,
  amount,
  isDecrementDisabled = false,
}: ButtonsAmountProps) {
  return (
    <QuantityButtonsContainer>
      <button
        type="button"
        onClick={onDecrement}
        disabled={isDecrementDisabled}
      >
        <Minus />
      </button>
      <span>{amount}</span>
      <button type="button" onClick={onIncrement}>
        <Plus />
      </button>
    </QuantityButtonsContainer>
  )
}
