import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import CoffeDelivery from '../../../../assets/coffe-delivery-intro.png'
import {
  IntroContainer,
  CoffeDeliveryContainer,
  TitlesContainer,
  CompanyFeature,
  CompanyFeatureContainer,
} from './styled'

export function Intro() {
  return (
    <IntroContainer>
      <div>
        <TitlesContainer>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </TitlesContainer>

        <CompanyFeatureContainer>
          <CompanyFeature backgroundIcon="yellow-dark">
            <div>
              <ShoppingCart weight="fill" />
            </div>
            <span>Compra simples e segura</span>
          </CompanyFeature>
          <CompanyFeature backgroundIcon="base-text">
            <div>
              <Package weight="fill" />
            </div>
            <span>Embalagem mantém o café intacto</span>
          </CompanyFeature>
          <CompanyFeature backgroundIcon="yellow">
            <div>
              <Timer weight="fill" />
            </div>
            <span>Entrega rápida e rastreada</span>
          </CompanyFeature>
          <CompanyFeature backgroundIcon="purple">
            <div>
              <Coffee weight="fill" />
            </div>
            <span>O café chega fresquinho até você</span>
          </CompanyFeature>
        </CompanyFeatureContainer>
      </div>

      <CoffeDeliveryContainer>
        <img src={CoffeDelivery} alt="Imagem com café" />
      </CoffeDeliveryContainer>
    </IntroContainer>
  )
}
