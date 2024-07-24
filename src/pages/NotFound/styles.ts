import { Link as LinkComponent } from 'react-router-dom'
import styled from 'styled-components'

export const NotFoundContainer = styled.main`
  width: fit-content;
  margin: 0 auto;
  padding-top: 4.8rem;

  font-family: 'Baloo 2', sans-serif;

  text-align: center;
`

export const Link = styled(LinkComponent)`
  color: ${({ theme }) => theme.colors['purple-500']};
  text-decoration: none;

  display: block;

  margin-top: 1.8rem;

  &:hover {
    opacity: 0.8;
  }
`
