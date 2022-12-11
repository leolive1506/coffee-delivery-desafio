export function formatCurrency(number: number) {
  return new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
  }).format(number * 10)
}
