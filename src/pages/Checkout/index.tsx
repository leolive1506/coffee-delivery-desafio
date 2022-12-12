import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm, FormProvider } from 'react-hook-form'
import { CheckoutCard } from '../../components/Card/CheckoutCard'
import { CoffeesContext } from '../../context/CoffeesContext'
import { formatCurrency } from '../../helpers'
import { AddressCol } from './components/AddressCol'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'react-toastify'
import * as zod from 'zod'

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
import { PaymentContext, UserAddress } from '../../context/PaymentContext'

const finishOrderValidationSchema = zod.object({
  'zip-code': zod.string().min(8).max(9),
  road: zod.string().min(3),
  number: zod.number(),
  complement: zod.string().nullable(),
  neighborhood: zod.string().min(3),
  city: zod.string().min(3),
  state: zod.string().min(2).max(2),
})

export function Checkout() {
  const { coffeesSelected } = useContext(CoffeesContext)
  const {
    changeUserAddress,
    changePaymentMethod,
    userAddress,
    paymentMethod: contextPaymentMethod,
  } = useContext(PaymentContext)

  const [paymentMethod, setPaymentMethod] = useState<
    'credit-card' | 'debit-card' | 'money'
  >(contextPaymentMethod)

  const navigate = useNavigate()

  const finishOrderForm = useForm({
    resolver: zodResolver(finishOrderValidationSchema),
    defaultValues: userAddress,
  })

  const totalAmountCoffees = coffeesSelected.reduce((acc, coffee) => {
    acc += coffee.price * coffee.amount
    return acc
  }, 0)

  const {
    handleSubmit,
    formState: { errors },
  } = finishOrderForm

  const deliveryFee = 0.35

  function handleFisishOrder(data: UserAddress) {
    changeUserAddress(data)
    changePaymentMethod(paymentMethod)
    return navigate('/finished-order')
  }

  function changeStatePaymentMethod(
    paymentMethod: 'credit-card' | 'debit-card' | 'money',
  ) {
    setPaymentMethod(paymentMethod)
  }

  useEffect(() => {
    const keyErrors = Object.keys(errors)
    keyErrors.forEach((key) => toast.warning(`${key}: ${errors[key].message}`))
  }, [errors])

  return (
    <GridContainer onSubmit={handleSubmit(handleFisishOrder)}>
      <FormProvider {...finishOrderForm}>
        <AddressCol
          onChangeStatePaymentMethod={changeStatePaymentMethod}
          paymentMethod={paymentMethod}
        />
      </FormProvider>
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
