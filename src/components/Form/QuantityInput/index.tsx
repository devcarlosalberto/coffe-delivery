import { Minus, Plus } from 'phosphor-react'
import { QuantityInputContainer } from './styles'

interface QuantityInputProps {
  quantity: number
  onDecreaseQuantity: () => void
  onIncreaseQuantity: () => void
}

export function QuantityInput({
  quantity,
  onDecreaseQuantity,
  onIncreaseQuantity,
}: QuantityInputProps) {
  function handleDecreaseQuantity() {
    onDecreaseQuantity()
  }

  function handleIncreaseQuantity() {
    onIncreaseQuantity()
  }

  return (
    <QuantityInputContainer>
      <button data-testid="decrease" onClick={handleDecreaseQuantity}>
        <Minus size={14} weight="bold" />
      </button>
      <input name="quantity" type="text" value={quantity} readOnly />
      <button data-testid="increase" onClick={handleIncreaseQuantity}>
        <Plus size={14} weight="bold" />
      </button>
    </QuantityInputContainer>
  )
}
