import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useContext } from 'react'
import { CheckoutCard } from '../../components/Card/CheckoutCard'
import { SelectButton } from '../../components/SelectButton'
import { CoffeesContext } from '../../context/CoffeesContext'
import { formatCurrency } from '../../helpers'

import {
  IntroContentContainer,
  GridCol,
  GridContainer,
  Content,
  InputsContainer,
  Input,
  SelectButtonsContainer,
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
      <GridCol>
        <h2>Complete seu pedido</h2>
        <div>
          <Content>
            <IntroContentContainer svgColor="yellow-dark">
              <MapPinLine />
              <div>
                <h3>Endereço de entrega</h3>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </IntroContentContainer>
            <InputsContainer>
              <Input placeholder="CEP" col={2} />
              <Input placeholder="Rua" col={6} />
              <Input placeholder="Número" col={2} />
              <Input placeholder="Complemento" col={4} />
              <Input placeholder="Bairro" col={2} />
              <Input placeholder="Cidade" col={3} />
              <Input placeholder="UF" />
            </InputsContainer>
          </Content>
          <Content>
            <IntroContentContainer svgColor="purple">
              <CurrencyDollar />
              <div>
                <h3>Pagamento</h3>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </IntroContentContainer>
            <SelectButtonsContainer>
              <SelectButton
                isActive
                icon={<CreditCard />}
                title="Cartão de crédito"
              />
              <SelectButton icon={<Bank />} title="Cartão de débito" />
              <SelectButton icon={<Money />} title="Dinheiro" />
            </SelectButtonsContainer>
          </Content>
        </div>
      </GridCol>
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
