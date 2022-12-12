import { Clock, CurrencyDollar, MapPin } from 'phosphor-react'
import { useContext } from 'react'
import { IconRounded } from '../../components/IconRounded'
import { PaymentContext } from '../../context/PaymentContext'
import { DeliveryIllustration } from './components/DeliveryIllustration'
import {
  GridContainer,
  IntroContainer,
  ListContainer,
  ListItem,
  Gradient,
} from './styles'

export function FinishedOrder() {
  const { userAddress, paymentMethod } = useContext(PaymentContext)

  const PAYMENT_METHOD = {
    'credit-card': 'Cartão de crédito',
    'debit-card': 'Cartão de débito',
    money: 'dinheiro',
  }

  return (
    <div>
      <IntroContainer>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </IntroContainer>
      <GridContainer>
        <Gradient>
          <ListContainer>
            <ListItem>
              <IconRounded backgroundIcon="purple" icon={<MapPin />} />
              <div>
                <p>
                  Entrega em{' '}
                  <strong>{`${userAddress.road}, ${userAddress.number}`}</strong>
                </p>
                <p>Farrapos - Porto Alegre, RS</p>
              </div>
            </ListItem>
            <ListItem>
              <IconRounded backgroundIcon="yellow" icon={<Clock />} />
              <div>
                <p>Previsão de entrega</p>
                <strong>20 min - 30 min</strong>
              </div>
            </ListItem>
            <ListItem>
              <IconRounded
                backgroundIcon="yellow-dark"
                icon={<CurrencyDollar />}
              />
              <div>
                <p>Pagamento na entrega</p>
                <strong>{PAYMENT_METHOD[paymentMethod]}</strong>
              </div>
            </ListItem>
          </ListContainer>
        </Gradient>
        <DeliveryIllustration />
      </GridContainer>
    </div>
  )
}
