import styled from 'styled-components'

export const SuccessContainer = styled.div`
  width: 112rem;
  margin-top: 8rem;
  margin-inline: auto;

  display: flex;
  justify-content: space-between;
`

export const Order = styled.div`
  width: 52.6rem;

  > h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: ${(props) => props.theme.fonts['title-l']};
    font-weight: bold;
    color: ${(props) => props.theme.colors['yellow-700']};
  }

  > p {
    font-family: 'Roboto', sans-serif;
    font-size: ${(props) => props.theme.fonts['text-l']};
    color: ${(props) => props.theme.colors['black-600']};
  }
`

export const WrapperPurchaseDetails = styled.div`
  margin-top: 4rem;
  border: 1px solid transparent;
  border-radius: 6px 36px;

  background-origin: border-box;
  background-image: ${({ theme }) =>
    `linear-gradient(to bottom right, ${theme.colors['yellow-500']}, ${theme.colors['purple-500']})`};
`

export const PurchaseDetails = styled.div`
  padding: 4rem;
  border-radius: 6px 36px;
  background-color: ${(props) => props.theme.colors.white};

  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  > div {
    display: flex;
    gap: 1.2rem;

    span {
      font-family: 'Roboto', sans-serif;
      font-size: ${(props) => props.theme.fonts['text-m']};
      color: ${(props) => props.theme.colors['black-400']};
    }
  }
`

export const Detail = styled.div`
  display: flex;
  align-items: center;

  svg {
    box-sizing: content-box;
    border-radius: 9999px;
    padding: 8px;
    color: ${(props) => props.theme.colors.white};
  }
`
