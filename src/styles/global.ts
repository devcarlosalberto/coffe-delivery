import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, input, textarea, select {
    font-size: 1.6rem;
    font-family: 'Roboto', sans-serif;
    background-color: ${(props) => props.theme.colors.white};
  }
`
