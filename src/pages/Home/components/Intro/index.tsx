import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import CoffeDelivery from '../../../../assets/coffe-delivery-intro.png'
import { IconRounded } from '../../../../components/IconRounded'
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
          <CompanyFeature>
            <IconRounded
              icon={<ShoppingCart weight="fill" />}
              backgroundIcon="yellow-dark"
            />
            <span>Compra simples e segura</span>
          </CompanyFeature>
          <CompanyFeature>
            <IconRounded
              icon={<Package weight="fill" />}
              backgroundIcon="base-text"
            />
            <span>Embalagem mantém o café intacto</span>
          </CompanyFeature>
          <CompanyFeature>
            <IconRounded
              icon={<Timer weight="fill" />}
              backgroundIcon="yellow"
            />
            <span>Entrega rápida e rastreada</span>
          </CompanyFeature>
          <CompanyFeature>
            <IconRounded
              icon={<Coffee weight="fill" />}
              backgroundIcon="purple"
            />
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
