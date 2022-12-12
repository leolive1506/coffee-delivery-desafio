import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import { IntroContentContainer } from '../../../../components/IntroContentContainer'
import { SelectButton } from '../../../../components/SelectButton'
import { Content, GridCol } from '../../styles'
import { Input, InputsContainer, SelectButtonsContainer } from './styles'

interface AddressColProps {
  onChangeStatePaymentMethod: (
    paymentMethod: 'credit-card' | 'debit-card' | 'money',
  ) => void
  paymentMethod: 'credit-card' | 'debit-card' | 'money'
}

export function AddressCol({
  onChangeStatePaymentMethod,
  paymentMethod,
}: AddressColProps) {
  const { register } = useFormContext()

  function handleChangePaymentMethod(
    newPaymentMethod: 'credit-card' | 'debit-card' | 'money',
  ) {
    onChangeStatePaymentMethod(newPaymentMethod)
  }

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
            <Input placeholder="CEP" col={2} {...register('zip-code')} />
            <Input placeholder="Rua" col={6} {...register('road')} />
            <Input
              placeholder="Número"
              col={2}
              {...register('number', { valueAsNumber: true })}
            />
            <Input
              placeholder="Complemento"
              col={4}
              {...register('complement')}
            />
            <Input placeholder="Bairro" col={2} {...register('neighborhood')} />
            <Input placeholder="Cidade" col={3} {...register('city')} />
            <Input placeholder="UF" {...register('state')} />
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
              isActive={paymentMethod === 'credit-card'}
              icon={<CreditCard />}
              title="Cartão de crédito"
              onClick={() => handleChangePaymentMethod('credit-card')}
            />
            <SelectButton
              isActive={paymentMethod === 'debit-card'}
              icon={<Bank />}
              title="Cartão de débito"
              onClick={() => handleChangePaymentMethod('debit-card')}
            />
            <SelectButton
              isActive={paymentMethod === 'money'}
              icon={<Money />}
              title="Dinheiro"
              onClick={() => handleChangePaymentMethod('money')}
            />
          </SelectButtonsContainer>
        </Content>
      </div>
    </GridCol>
  )
}
