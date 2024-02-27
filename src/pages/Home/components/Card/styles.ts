import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 25.6rem;
  border-top-right-radius: 36px;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 36px;
  border-top-left-radius: 6px;

  padding-bottom: 2rem;

  text-align: center;

  background-color: ${(props) => props.theme.colors['gray-100']};
`

export const CardImage = styled.div`
  margin-top: -2rem;
  line-height: 0;
`

export const Tags = styled.div`
  margin-top: 1.2rem;

  > span {
    font-family: 'Roboto', sans-serif;
    font-size: ${(props) => props.theme.fonts['text-xxs']};
    font-weight: bold;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors['yellow-700']};
    background-color: ${(props) => props.theme.colors['yellow-200']};
    border-radius: 100px;
    padding: 4px 8px;
  }

  > span + span {
    margin-left: 4px;
  }
`

export const Title = styled.h1`
  margin-top: 1.6rem;
  font-family: 'Baloo 2', sans-serif;
  font-size: ${(props) => props.theme.fonts['title-s']};
  color: ${(props) => props.theme.colors['black-600']};
`

export const Description = styled.p`
  width: 21.6rem;
  margin-inline: auto;
  margin-top: 8px;
  font-family: 'Roboto', sans-serif;
  font-size: ${(props) => props.theme.fonts['text-s']};
  color: ${(props) => props.theme.colors['gray-500']};
`

export const Controls = styled.footer`
  margin-top: 3.3rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.3rem;

  > div {
    display: flex;
    gap: 8px;

    height: 3.8rem;
  }
`

export const Price = styled.span`
  font-family: 'Baloo 2', sans-serif;
  font-size: ${(props) => props.theme.fonts['title-m']};
  font-weight: bold;
  color: ${(props) => props.theme.colors['black-400']};

  small {
    font-family: 'Roboto', sans-serif;
    font-size: ${(props) => props.theme.fonts['text-s']};
    font-weight: normal;
    color: ${(props) => props.theme.colors['black-400']};
  }
`

export const CartButton = styled.button`
  padding: 8px;
  border-radius: 6px;
  border: none;
  background-color: ${(props) => props.theme.colors['purple-700']};
  line-height: 0;
  transition: background-color 0.2s;

  > svg {
    color: ${(props) => props.theme.colors['gray-100']};
  }

  &:not(:disabled):hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors['purple-500']};
  }
`
