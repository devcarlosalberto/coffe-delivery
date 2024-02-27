import styled from 'styled-components'

import headerBackgroundImage from '../../../../assets/header-background.png'

export const HeaderWrapper = styled.div`
  background-image: url(${headerBackgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
`

export const HeaderContainer = styled.header`
  width: 112rem;
  margin-inline: auto;

  display: flex;
  gap: 5.6rem;

  padding-top: 9.2rem;
  padding-bottom: 9.2rem;

  > div:first-child {
    max-width: 58.8rem;

    > h1 {
      font-family: 'Baloo 2', sans-serif;
      font-size: ${(props) => props.theme.fonts['title-xl']};
      line-height: 130%;
    }

    > p {
      font-family: 'Roboto', sans-serif;
      font-size: ${(props) => props.theme.fonts['text-l']};
      color: ${(props) => props.theme.colors['black-600']};
      margin-top: 1.6rem;
    }
  }

  > div:last-child {
    @media (max-width: 1152px) {
      img {
        display: none;
      }
    }
  }
`

export const Details = styled.div`
  margin-top: 6.6rem;

  display: flex;
  gap: 4rem;

  div {
    p {
      font-family: 'Roboto', sans-serif;
      font-size: ${(props) => props.theme.fonts['text-m']};
      color: ${(props) => props.theme.colors['black-400']};

      display: flex;
      align-items: center;
      gap: 6px;
    }

    p + p {
      margin-top: 2rem;
    }

    p:hover {
      opacity: 0.8;
      cursor: default;
    }
  }

  @media (max-width: 1152px) {
    display: none;
  }
`

const BaseBadgeIcon = styled.div`
  line-height: 0;
  padding: 8px;
  border-radius: 9999px;

  svg {
    color: white;
  }
`

export const CartBadge = styled(BaseBadgeIcon)`
  background-color: ${(props) => props.theme.colors['yellow-700']};
`

export const TimerBadge = styled(BaseBadgeIcon)`
  background-color: ${(props) => props.theme.colors['yellow-500']};
`

export const PackageBadge = styled(BaseBadgeIcon)`
  background-color: ${(props) => props.theme.colors['black-400']};
`

export const CoffeBadge = styled(BaseBadgeIcon)`
  background-color: ${(props) => props.theme.colors['purple-500']};
`
