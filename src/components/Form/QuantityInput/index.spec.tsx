import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ThemeProvider } from 'styled-components'
import { vi } from 'vitest'
import { QuantityInput } from '.'
import { defaultTheme } from '../../../styles/themes/defaultTheme'

const onIncreaseQuantityCallback = vi.fn()
const onDecreaseQuantityCallback = vi.fn()

describe('QuantityInput', () => {
  beforeEach(() => {
    onIncreaseQuantityCallback.mockClear()
    onDecreaseQuantityCallback.mockClear()
  })

  it('should display right quantity', async () => {
    const wrapper = render(
      <QuantityInput
        onDecreaseQuantity={() => {}}
        onIncreaseQuantity={() => {}}
        quantity={32}
      />,
      {
        wrapper: ({ children }) => {
          return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
        },
      },
    )

    expect(wrapper.getByDisplayValue('32', { exact: true }))
  })

  it('should call increase quantity function if click on increase quantity', async () => {
    const user = await userEvent.setup()

    const wrapper = render(
      <QuantityInput
        onDecreaseQuantity={() => {}}
        onIncreaseQuantity={() =>
          onIncreaseQuantityCallback('increase quantity')
        }
        quantity={0}
      />,
      {
        wrapper: ({ children }) => {
          return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
        },
      },
    )

    const buttonIncreaseQuantity = wrapper.getByTestId('increase')

    await user.click(buttonIncreaseQuantity)

    expect(onIncreaseQuantityCallback).toHaveBeenCalledWith('increase quantity')
  })

  it('should call decrease quantity function if click on increase quantity', async () => {
    const user = await userEvent.setup()

    const wrapper = render(
      <QuantityInput
        onDecreaseQuantity={() =>
          onIncreaseQuantityCallback('decrease quantity')
        }
        onIncreaseQuantity={() => {}}
        quantity={0}
      />,
      {
        wrapper: ({ children }) => {
          return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
        },
      },
    )

    const buttonIncreaseQuantity = wrapper.getByTestId('decrease')

    await user.click(buttonIncreaseQuantity)

    expect(onIncreaseQuantityCallback).toHaveBeenCalledWith('decrease quantity')
  })
})
