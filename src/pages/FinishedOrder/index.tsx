import { DeliveryIllustration } from './components/DeliveryIllustration'
import {
  GridContainer,
  IntroContainer,
  ListContainer,
  ListItem,
  Gradient,
} from './styles'

export function FinishedOrder() {
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
              <p>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              </p>
              <p>Farrapos - Porto Alegre, RS</p>
            </ListItem>
            <ListItem>
              <p>Previsão de entrega</p>
              <strong>20 min - 30 min</strong>
            </ListItem>
            <ListItem>
              <p>Pagamento na entrega</p>
              <strong>Cartão de Crédito</strong>
            </ListItem>
          </ListContainer>
        </Gradient>
        <DeliveryIllustration />
      </GridContainer>
    </div>
  )
}
