import styled from 'styled-components'

export const WrapperNavbar = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  background-color: ${(props) => props.theme.colors.white};
`

export const NavbarContainer = styled.div`
  width: 112rem;
  margin-inline: auto;
  padding-block: 3.2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: auto;
    height: auto;
  }
`

export const Buttons = styled.div`
  display: flex;
  gap: 1.2rem;
`

export const Location = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: ${(props) => props.theme.fonts['text-s']};
  color: ${(props) => props.theme.colors['purple-700']};
  background-color: ${(props) => props.theme.colors['purple-200']};
  border-radius: 6px;
  padding: 8px;

  display: flex;
  align-items: center;
  gap: 4px;

  svg {
    color: ${(props) => props.theme.colors['purple-500']};
  }
`

export const CartButton = styled.button`
  position: relative;
  padding: 8px;
  background-color: ${(props) => props.theme.colors['yellow-200']};
  border-radius: 6px;
  line-height: 0;
  border: none;
  cursor: pointer;

  svg {
    color: ${(props) => props.theme.colors['yellow-700']};
  }
`

export const BadgeCountProducts = styled.span`
  position: absolute;

  top: -25%;
  right: -25%;

  width: 2rem;
  height: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: ${(props) => props.theme.fonts['text-xs']};
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors['yellow-700']};
  border-radius: 9999px;
`

export const Fill = styled.div`
  height: 108px;
`
