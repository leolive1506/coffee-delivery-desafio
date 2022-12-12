import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { IntroContentContainer } from '../../../../components/IntroContentContainer'
import { SelectButton } from '../../../../components/SelectButton'
import { Content, GridCol } from '../../styles'
import { Input, InputsContainer, SelectButtonsContainer } from './styles'

export function AddressCol() {
  return (
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
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
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
  )
}
