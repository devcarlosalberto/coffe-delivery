import { useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'

import { CartContext } from '../../contexts/cart'

import {
  WrapperNavbar,
  NavbarContainer,
  Buttons,
  Location,
  CartButton,
  BadgeCountProducts,
  Fill,
} from './styles'

import logoSvg from '../../assets/logo.svg'

export function Navbar() {
  const { order } = useContext(CartContext)

  const navigate = useNavigate()

  const productsOnCart = order.length

  function handleClickForCheckout() {
    if (order.length > 0) navigate('/checkout')
  }

  return (
    <>
      <WrapperNavbar>
        <NavbarContainer>
          <Link to="/">
            <img src={logoSvg} alt="" />
          </Link>

          <Buttons>
            <Location>
              <MapPin size={22} weight="fill" />
              Porto Alegre, RS
            </Location>

            <CartButton onClick={handleClickForCheckout}>
              {productsOnCart > 0 && (
                <BadgeCountProducts>{productsOnCart}</BadgeCountProducts>
              )}
              <ShoppingCart size={22} weight="fill" />
            </CartButton>
          </Buttons>
        </NavbarContainer>
      </WrapperNavbar>
      <Fill />
    </>
  )
}
