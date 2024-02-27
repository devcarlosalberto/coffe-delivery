import { ReactNode, createContext, useEffect, useState } from 'react'

interface Product {
  id: number
  title: string
  description: string
  tags: string[]
  price: number
  image: string
  quantity: number
}

interface AddressShipping {
  street: string
  number: string
  city: string
  neighborhood: string
  fullAddress?: string
  state: string
  zipcode: string
}

type PaymentMethods = 'credit' | 'debit' | 'dinner'

interface CartContextProps {
  order: Product[]
  totalPrice: number
  paymentMethod: PaymentMethods
  addressShipping: AddressShipping
  addProduct: (product: Product) => void
  deleteProduct: (productId: number) => void
  increaseQuantityProduct: (productId: number) => void
  decreaseQuantityProduct: (productId: number) => void
  changePaymentMethod: (newPaymentMethod: PaymentMethods) => void
  setAddressForShipping: (address: AddressShipping) => void
}

interface CartProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextProps)

export function CartProvider({ children }: CartProviderProps) {
  const [order, setOrder] = useState<Product[]>([])
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethods>('credit')
  const [addressShipping, setAddressShipping] = useState<AddressShipping>(
    {} as AddressShipping,
  )

  const totalPrice = order.reduce((acc, item) => {
    return acc + item.price * item.quantity
  }, 0)

  function addProduct(product: Product) {
    const productAlreadyAdded = order.find((item) => item.id === product.id)

    if (productAlreadyAdded) {
      increaseQuantityProduct(product.id, product.quantity)
    } else {
      setOrder((prevState) => [...prevState, product])
    }
  }

  function deleteProduct(productId: number) {
    setOrder((prevState) => prevState.filter((item) => item.id !== productId))
  }

  function increaseQuantityProduct(productId: number, quantity: number = 1) {
    setOrder((prevState) =>
      prevState.map((item) => {
        if (item.id === productId) {
          return {
            ...item,
            quantity: item.quantity + quantity,
          }
        }

        return item
      }),
    )
  }

  function decreaseQuantityProduct(productId: number) {
    setOrder((prevState) =>
      prevState.map((item) => {
        if (item.id === productId) {
          if (item.quantity > 1) {
            return {
              ...item,
              quantity: item.quantity - 1,
            }
          } else {
            return {
              ...item,
            }
          }
        }

        return item
      }),
    )
  }

  function changePaymentMethod(newPaymentMethod: PaymentMethods) {
    setPaymentMethod(newPaymentMethod)
  }

  function setAddressForShipping(address: AddressShipping) {
    setAddressShipping(address)
  }

  return (
    <CartContext.Provider
      value={{
        order,
        totalPrice,
        paymentMethod,
        addressShipping,
        addProduct,
        deleteProduct,
        increaseQuantityProduct,
        decreaseQuantityProduct,
        changePaymentMethod,
        setAddressForShipping,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
