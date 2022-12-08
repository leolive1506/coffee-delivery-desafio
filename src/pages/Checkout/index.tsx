import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { CheckoutCard } from '../../components/Card/CheckoutCard'
import { SelectButton } from '../../components/SelectButton'
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
          <CheckoutCard />
          <CheckoutCard />
          <DescriptionListContainer>
            <DescriptionListItem>
              <Dt>Total de itens</Dt>
              <Dd>R$ 29,70</Dd>
            </DescriptionListItem>
            <DescriptionListItem>
              <Dt>Entrega</Dt>
              <Dd>R$ 3,50</Dd>
            </DescriptionListItem>
            <DescriptionListItem>
              <DtBold>Total</DtBold>
              <DdBold>R$ 33,20</DdBold>
            </DescriptionListItem>
          </DescriptionListContainer>

          <FinalizeButton>Confirmar pedido</FinalizeButton>
        </ContentCoffes>
      </GridCol>
    </GridContainer>
  )
}
