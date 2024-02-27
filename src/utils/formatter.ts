export const priceFormatter = (price: number): string => {
  return price.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
  })
}
