import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'

import {
  HeaderWrapper,
  HeaderContainer,
  CartBadge,
  TimerBadge,
  PackageBadge,
  CoffeBadge,
  Details,
} from './styles'

import coffeImage from '../../../../assets/header-image.svg'

export function Header() {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <Details>
            <div>
              <p>
                <CartBadge>
                  <ShoppingCart weight="fill" size={16} />
                </CartBadge>
                Compra simples e segura
              </p>
              <p>
                <TimerBadge>
                  <Timer weight="fill" size={16} />
                </TimerBadge>
                Entrega rápida e rastreada
              </p>
            </div>
            <div>
              <p>
                <PackageBadge>
                  <Package weight="fill" size={16} />
                </PackageBadge>
                Embalagem mantém o café intacto
              </p>
              <p>
                <CoffeBadge>
                  <Coffee weight="fill" size={16} />
                </CoffeBadge>
                O café chega fresquinho até você
              </p>
            </div>
          </Details>
        </div>
        <div>
          <img src={coffeImage} alt="" />
        </div>
      </HeaderContainer>
    </HeaderWrapper>
  )
}
