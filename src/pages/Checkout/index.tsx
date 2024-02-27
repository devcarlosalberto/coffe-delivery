import { useContext } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from 'phosphor-react'
import { useTheme } from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../contexts/cart'

import { QuantityInput } from '../../components/Form/QuantityInput'

import { priceFormatter } from '../../utils/formatter'

import {
  CheckoutContainer,
  AddressShipping,
  AddressHeading,
  AddressForm,
  TextInput,
  PaymentMethod,
  PaymentHeading,
  PaymentOptions,
  MethodPaymentButton,
  OrderDetails,
  Product,
  ProductImage,
  ProductTitle,
  ControlQuantityItems,
  RemoveProductButton,
  ProductPrice,
  OrderFooter,
  Separator,
} from './styles'

const errorMessages = {
  zipcodeInvalid: 'CEP inválido.',
  streetInvalid: 'Rua inválida.',
  numberInvalid: 'Número inválido.',
  neighborhoodInvalid: 'Bairro inválido.',
  cityInvalid: 'Cidade inválida.',
  stateInvalid: 'Estado inválido.',
  countryInvalid: 'País inválido.',
  paymentMethodInvalid: 'É obrigatório selecionar um método de pagamento.',
}

const newOrderValidationSchema = zod.object({
  zipcode: zod
    .string()
    .min(8, errorMessages.zipcodeInvalid)
    .max(8, errorMessages.zipcodeInvalid),
  street: zod.string().min(2, errorMessages.streetInvalid),
  number: zod.string().min(1, errorMessages.numberInvalid),
  fullAddress: zod.string().optional(),
  neighborhood: zod.string().min(3, errorMessages.neighborhoodInvalid),
  city: zod.string().min(3, errorMessages.cityInvalid),
  state: zod
    .string()
    .min(2, errorMessages.stateInvalid)
    .max(2, errorMessages.stateInvalid),
  paymentMethod: zod.enum(['credit', 'debit', 'dinner']),
})

type OrderValidationSchema = zod.infer<typeof newOrderValidationSchema>

export function Checkout() {
  const theme = useTheme()
  const {
    order,
    totalPrice,
    increaseQuantityProduct,
    decreaseQuantityProduct,
    deleteProduct,
    setAddressForShipping,
    changePaymentMethod,
  } = useContext(CartContext)
  const navigate = useNavigate()

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OrderValidationSchema>({
    resolver: zodResolver(newOrderValidationSchema),
  })

  function handleCreateOrder(data: OrderValidationSchema) {
    setAddressForShipping({
      zipcode: data.zipcode,
      state: data.state,
      city: data.city,
      street: data.street,
      neighborhood: data.neighborhood,
      number: data.number,
    })

    changePaymentMethod(data.paymentMethod)

    navigate('/success')
  }

  function handleIncreaseQuantityProduct(productId: number) {
    increaseQuantityProduct(productId)
  }

  function handleDecreaseQuantityProduct(productId: number) {
    decreaseQuantityProduct(productId)
  }

  function handleDeleteProduct(productId: number) {
    deleteProduct(productId)
  }

  if (order.length <= 0) {
    navigate('/')
    return
  }

  return (
    <CheckoutContainer>
      <div>
        <h1>Complete seu pedido</h1>

        <form onSubmit={handleSubmit(handleCreateOrder)} id="checkoutForm">
          <AddressShipping>
            <AddressHeading>
              <div>
                <MapPinLine size={22} color={theme.colors['yellow-700']} />
              </div>
              <div>
                <span>Endereço de Entrega</span>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </AddressHeading>

            <AddressForm>
              <TextInput
                type="number"
                placeholder="CEP"
                className={errors.zipcode && 'error'}
                style={{ gridArea: 'zipcode' }}
                {...register('zipcode')}
                required
              />

              <TextInput
                type="text"
                placeholder="Rua"
                className={errors.street && 'error'}
                style={{ gridArea: 'street ' }}
                {...register('street')}
                required
              />

              <TextInput
                type="number"
                placeholder="Número"
                className={errors.number && 'error'}
                style={{ gridArea: 'number' }}
                {...register('number')}
                required
              />

              <TextInput
                type="text"
                placeholder="Complemento"
                style={{ gridArea: 'fullAddress' }}
                {...register('fullAddress')}
              />

              <TextInput
                type="text"
                placeholder="Bairro"
                className={errors.neighborhood && 'error'}
                style={{ gridArea: 'neighborhood' }}
                {...register('neighborhood')}
                required
              />

              <TextInput
                type="text"
                placeholder="Cidade"
                className={errors.city && 'error'}
                style={{ gridArea: 'city' }}
                {...register('city')}
                required
              />

              <TextInput
                type="text"
                placeholder="RS"
                className={errors.state && 'error'}
                style={{ gridArea: 'state' }}
                {...register('state')}
                required
              />
            </AddressForm>
          </AddressShipping>

          <PaymentMethod className={errors.paymentMethod && 'error'}>
            <PaymentHeading>
              <div>
                <CurrencyDollar size={22} color={theme.colors['purple-500']} />
              </div>
              <div>
                <span>Pagamento</span>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </PaymentHeading>

            <Controller
              name="paymentMethod"
              control={control}
              render={({ field }) => (
                <PaymentOptions
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <MethodPaymentButton value="credit">
                    <CreditCard size={16} /> Cartão de Crédito
                  </MethodPaymentButton>

                  <MethodPaymentButton value="debit">
                    <Bank size={16} />
                    Cartão de Débito
                  </MethodPaymentButton>

                  <MethodPaymentButton value="dinner">
                    <Money size={16} /> Dinheiro
                  </MethodPaymentButton>
                </PaymentOptions>
              )}
            />
          </PaymentMethod>
        </form>
      </div>

      <div>
        <h2>Cafés selecionados</h2>

        <OrderDetails>
          {order.map((product) => (
            <div key={product.id}>
              <Product>
                <ProductImage
                  src={product.image}
                  alt={`Imagem de um café do tipo: ${product.title}`}
                  style={{ gridColumn: '1' }}
                />

                <div style={{ gridColumn: '3' }}>
                  <ProductTitle>{product.title}</ProductTitle>

                  <ControlQuantityItems>
                    <QuantityInput
                      quantity={product.quantity}
                      onDecreaseQuantity={() =>
                        handleDecreaseQuantityProduct(product.id)
                      }
                      onIncreaseQuantity={() =>
                        handleIncreaseQuantityProduct(product.id)
                      }
                    />
                    <RemoveProductButton
                      onClick={() => handleDeleteProduct(product.id)}
                    >
                      <Trash /> Remover
                    </RemoveProductButton>
                  </ControlQuantityItems>
                </div>

                <ProductPrice style={{ gridColumn: '5' }}>
                  R$ {priceFormatter(product.price)}
                </ProductPrice>
              </Product>
              <Separator />
            </div>
          ))}

          <OrderFooter>
            <table>
              <tr>
                <td>Total de itens</td>
                <td>R$ {priceFormatter(totalPrice)}</td>
              </tr>
              <tr>
                <td>Entrega</td>
                <td>R$ 3,50</td>
              </tr>
              <tr>
                <td>Total</td>
                <td>R$ {priceFormatter(totalPrice + 3.5)}</td>
              </tr>
            </table>

            <button type="submit" form="checkoutForm">
              Confirmar pedido
            </button>
          </OrderFooter>
        </OrderDetails>
      </div>
    </CheckoutContainer>
  )
}
