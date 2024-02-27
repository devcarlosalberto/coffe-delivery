import { useState, useContext } from 'react'
import { Check, ShoppingCart } from 'phosphor-react'

import { CartContext } from '../../../../contexts/cart'

import { QuantityInput } from '../../../../components/Form/QuantityInput'

import {
  CardImage,
  Description,
  Controls,
  CardContainer,
  Tags,
  Title,
  Price,
  CartButton,
} from './styles'

import { priceFormatter } from '../../../../utils/formatter'

interface CardProps {
  id: number
  title: string
  description: string
  tags: string[]
  price: number
  image: string
}

export function Card({
  id,
  title,
  description,
  tags,
  price,
  image,
}: CardProps) {
  const { addProduct } = useContext(CartContext)
  const [quantity, setQuantity] = useState(0)

  const isItemAdded = quantity > 0

  function handleAddItem() {
    addProduct({
      title,
      description,
      id,
      image,
      price,
      tags,
      quantity,
    })
    setQuantity(0)
  }

  function increaseQuantity() {
    setQuantity((prevQuantity) => prevQuantity + 1)
  }

  function decreaseQuantity() {
    setQuantity((prevQuantity) => {
      if (prevQuantity === 0) return prevQuantity

      return prevQuantity - 1
    })
  }

  return (
    <CardContainer>
      <CardImage>
        <img src={image} alt="" />
      </CardImage>

      <Tags>
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </Tags>

      <Title>{title}</Title>

      <Description>{description}</Description>

      <Controls>
        <Price>
          <small>R$ </small>
          {priceFormatter(price)}
        </Price>

        <div>
          <QuantityInput
            quantity={quantity}
            onIncreaseQuantity={increaseQuantity}
            onDecreaseQuantity={decreaseQuantity}
          />

          <CartButton disabled={!isItemAdded} onClick={handleAddItem}>
            {isItemAdded ? (
              <Check size={22} weight="bold" />
            ) : (
              <ShoppingCart size={22} weight="fill" />
            )}
          </CartButton>
        </div>
      </Controls>
    </CardContainer>
  )
}
