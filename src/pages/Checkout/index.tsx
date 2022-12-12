import { useContext } from 'react'
import { CheckoutCard } from '../../components/Card/CheckoutCard'
import { CoffeesContext } from '../../context/CoffeesContext'
import { formatCurrency } from '../../helpers'
import { AddressCol } from './components/AddressCol'

import {
  GridCol,
  GridContainer,
  ContentCoffes,
  DescriptionListItem,
  DescriptionListContainer,
  Dt,
  Dd,
  DtBold,
  DdBold,
  FinalizeButton,
} from './styles'

export function Checkout() {
  const { coffeesSelected } = useContext(CoffeesContext)
  const totalAmountCoffees = coffeesSelected.reduce((acc, coffee) => {
    acc += coffee.price * coffee.amount
    return acc
  }, 0)

  const deliveryFee = 0.35

  return (
    <GridContainer>
      <AddressCol />
      <GridCol>
        <h2>Cafés selecionados</h2>
        <ContentCoffes>
          {coffeesSelected.map((card) => (
            <CheckoutCard key={card.id} card={card} />
          ))}
          <DescriptionListContainer>
            <DescriptionListItem>
              <Dt>Total de itens</Dt>
              <Dd>{formatCurrency(totalAmountCoffees)}</Dd>
            </DescriptionListItem>
            <DescriptionListItem>
              <Dt>Entrega</Dt>
              <Dd>{formatCurrency(deliveryFee)}</Dd>
            </DescriptionListItem>
            <DescriptionListItem>
              <DtBold>Total</DtBold>
              <DdBold>
                {formatCurrency(totalAmountCoffees + deliveryFee)}
              </DdBold>
            </DescriptionListItem>
          </DescriptionListContainer>

          <FinalizeButton>Confirmar pedido</FinalizeButton>
        </ContentCoffes>
      </GridCol>
    </GridContainer>
  )
}
