import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { defaultTheme } from './styles/themes/defaultTheme'
import { GlobalStyles } from './styles/global'

import { CartProvider } from './contexts/cart'

import { Router } from './routes'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartProvider>
          <Router />
        </CartProvider>
      </BrowserRouter>
      <GlobalStyles />
    </ThemeProvider>
  )
}
