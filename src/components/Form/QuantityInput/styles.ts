import styled from 'styled-components'

export const QuantityInputContainer = styled.div`
  display: flex;
  align-items: center;

  height: auto;

  border-radius: 6px;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors['gray-300']};

  button:first-child,
  button:last-child {
    line-height: 0;
    border: 0;
    background-color: transparent;
    cursor: pointer;
    outline: 0;

    svg {
      color: ${(props) => props.theme.colors['purple-500']};
      transition: color 0.3s;

      &:hover {
        color: ${(props) => props.theme.colors['purple-700']};
      }
    }
  }

  button:first-child {
    padding-top: 8px;
    padding-right: 4px;
    padding-bottom: 8px;
    padding-left: 12px;
  }

  button:last-child {
    padding-top: 8px;
    padding-right: 12px;
    padding-bottom: 8px;
    padding-left: 4px;
  }

  > input {
    width: 2rem;
    border: none;
    background-color: transparent;
    text-align: center;
    cursor: default;

    &:focus {
      outline: 0;
    }
  }
`
