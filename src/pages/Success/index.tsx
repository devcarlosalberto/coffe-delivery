import { useContext } from 'react'
import { useTheme } from 'styled-components'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { CartContext } from '../../contexts/cart'
import motoboyIllustration from '../../assets/motoboy-illustration.svg'
import {
  SuccessContainer,
  Order,
  WrapperPurchaseDetails,
  PurchaseDetails,
  Detail,
} from './styles'

export function Success() {
  const theme = useTheme()

  const { addressShipping, paymentMethod } = useContext(CartContext)

  const paymentTypes = {
    credit: 'Cartão de Crédito',
    debit: 'Cartão de Débito',
    dinner: 'Dinheiro',
  }

  return (
    <SuccessContainer>
      <Order>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>

        <WrapperPurchaseDetails>
          <PurchaseDetails>
            <Detail>
              <MapPin
                size={16}
                weight="fill"
                style={{ backgroundColor: theme.colors['purple-500'] }}
              />
              <div>
                <span>
                  Entrega em{' '}
                  <b>
                    {addressShipping.street}, {addressShipping.number}
                  </b>
                </span>{' '}
                <br />
                <span>
                  {addressShipping.neighborhood} - {addressShipping.city},{' '}
                  {addressShipping.state}
                </span>
              </div>
            </Detail>

            <Detail>
              <Timer
                size={16}
                weight="fill"
                style={{ backgroundColor: theme.colors['yellow-500'] }}
              />
              <div>
                <span>Previsão de entrega</span>
                <br />
                <span>
                  <b>20 min - 30 min</b>
                </span>
              </div>
            </Detail>

            <Detail>
              <CurrencyDollar
                size={16}
                weight="fill"
                style={{ backgroundColor: theme.colors['yellow-700'] }}
              />
              <div>
                <span>Pagamento na entrega</span>
                <br />
                <span>
                  <b>{paymentTypes[paymentMethod]}</b>
                </span>
              </div>
            </Detail>
          </PurchaseDetails>
        </WrapperPurchaseDetails>
      </Order>

      <img src={motoboyIllustration} alt="" />
    </SuccessContainer>
  )
}
