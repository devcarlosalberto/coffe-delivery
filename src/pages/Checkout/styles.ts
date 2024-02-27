import styled from 'styled-components'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const CheckoutContainer = styled.div`
  width: 112rem;
  margin-inline: auto;

  display: flex;
  gap: 3.2rem;

  h1,
  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-size: ${(props) => props.theme.fonts['title-xs']};
  }
`

const BaseContainer = styled.div`
  padding: 4rem;
  font-family: 'Roboto', sans-serif;
  border-radius: 6px;
  background-color: ${(props) => props.theme.colors['gray-100']};
`

const Heading = styled.header`
  display: flex;
  gap: 8px;

  span {
    font-size: ${(props) => props.theme.fonts['text-m']};
    color: ${(props) => props.theme.colors['black-600']};
  }

  p {
    display: block;
    margin-top: 4px;
    font-size: ${(props) => props.theme.fonts['text-s']};
    color: ${(props) => props.theme.colors['black-400']};
  }
`

export const AddressShipping = styled(BaseContainer)`
  margin-top: 1.5rem;
`

export const AddressHeading = styled(Heading)``

export const AddressForm = styled.div`
  margin-top: 3.2rem;
  display: grid;
  grid-template-areas:
    'zipcode . . '
    'street street street'
    'number fullAddress fullAddress'
    'neighborhood city state';
  grid-template-columns: 20rem 1fr 6rem;
  grid-gap: 16px 12px;
`

export const TextInput = styled.input`
  font-family: 'Roboto';
  font-size: ${(props) => props.theme.fonts['text-s']};
  color: ${(props) => props.theme.colors['black-400']};
  padding: 1.2rem;
  border: 1px solid ${(props) => props.theme.colors['gray-300']};
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors['gray-200']};

  &:focus {
    outline: 1px solid ${(props) => props.theme.colors['yellow-700']};
  }

  &::placeholder {
    color: ${(props) => props.theme.colors['gray-500']};
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    appearance: none;
    margin: 0;
    display: none;
    visibility: hidden;
  }

  &.error {
    border: 1px solid red;
  }
`

export const PaymentMethod = styled(BaseContainer)`
  margin-top: 1.2rem;
  width: 64rem;

  &.error {
    border: 1px solid red;
  }
`

export const PaymentHeading = styled(Heading)``

export const PaymentOptions = styled(RadioGroup.Root)`
  margin-top: 3.2rem;

  display: flex;
  gap: 1.2rem;
`

export const MethodPaymentButton = styled(RadioGroup.Item)`
  width: 100%;
  font-family: 'Roboto', sans-serif;
  font-size: ${(props) => props.theme.fonts['text-xs']};
  color: ${(props) => props.theme.colors['black-400']};
  text-transform: uppercase;
  padding: 1.6rem;
  border: 1px solid transparent;
  border-radius: 6px;
  background-color: ${(props) => props.theme.colors['gray-300']};
  cursor: pointer;
  transition: background-color 0.2s;

  display: flex;
  align-items: center;
  gap: 1.2rem;

  svg {
    color: ${(props) => props.theme.colors['purple-500']};
  }

  &[data-state='checked'] {
    border: 1px solid ${(props) => props.theme.colors['purple-500']};
    background-color: ${(props) => props.theme.colors['purple-200']};
  }

  &:focus {
    outline: 1px solid ${(props) => props.theme.colors['purple-500']};
  }

  &[data-state='unchecked']:hover {
    background-color: ${(props) => props.theme.colors['gray-400']};
  }
`

export const OrderDetails = styled(BaseContainer)`
  width: 44.8rem;
  margin-top: 1.5rem;
`

export const Product = styled.div`
  display: grid;
  grid-template-columns: auto 2rem auto 5rem auto;
`

export const ProductImage = styled.img`
  width: 6.4rem;
  height: 6.4rem;
  margin: 0 auto;
`

export const ProductTitle = styled.div`
  font-size: ${(props) => props.theme.fonts['text-m']};
  color: ${(props) => props.theme.colors['black-600']};
`

export const ControlQuantityItems = styled.div`
  margin-top: 8px;

  display: flex;
  align-items: center;
  gap: 8px;

  height: 3.2rem;
`

export const RemoveProductButton = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  line-height: 0;

  height: 3.2rem;
  padding: 8px;
  font-family: 'Roboto', sans-serif;
  font-size: ${(props) => props.theme.fonts['text-xs']};
  color: ${(props) => props.theme.colors['black-400']};
  text-transform: uppercase;
  border: none;
  border-radius: 6px;
  background-color: ${(props) => props.theme.colors['gray-300']};
  cursor: pointer;
  transition: background-color 0.2s;

  > svg {
    color: ${(props) => props.theme.colors['purple-500']};
  }

  &:hover {
    background-color: ${(props) => props.theme.colors['gray-400']};
  }
`

export const ProductPrice = styled.span`
  font-family: 'Roboto', sans-serif;
  font-size: ${(props) => props.theme.fonts['text-m']};
  font-weight: bold;
  color: ${(props) => props.theme.colors['black-400']};
`

export const Separator = styled.div`
  width: 100%;
  height: 1px;
  margin: 24px 0;
  background-color: ${(props) => props.theme.colors['gray-300']};
`

export const OrderFooter = styled.div`
  table {
    width: 100%;

    font-family: 'Roboto', sans-serif;
    font-size: ${(props) => props.theme.fonts['text-s']};
    color: ${(props) => props.theme.colors['black-400']};

    border-collapse: collapse;

    td {
      padding-top: 6px;
      padding-bottom: 6px;
    }

    tr td:last-child {
      text-align: right;
    }

    tr:last-child {
      font-size: ${(props) => props.theme.fonts['text-l']};
      font-weight: bold;
      color: ${(props) => props.theme.colors['black-600']};
    }
  }

  button {
    width: 100%;
    margin-top: 2.4rem;
    padding-top: 12px;
    padding-bottom: 12px;
    font-family: 'Roboto', sans-serif;
    font-size: ${(props) => props.theme.fonts['text-s']};
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.white};
    cursor: pointer;
    border-radius: 6px;
    border: none;
    background-color: ${(props) => props.theme.colors['yellow-500']};
    transition: background-color 0.2s;
  }

  button:hover {
    background-color: ${(props) => props.theme.colors['yellow-700']};
  }
`
