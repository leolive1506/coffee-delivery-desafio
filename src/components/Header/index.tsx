import Logo from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import {
  HeaderContainer,
  ButtonsContainer,
  LocationButton,
  CartButton,
} from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="Logo" />
      <ButtonsContainer>
        <LocationButton>
          <MapPin weight="fill" />
          Porto Alegre, RS
        </LocationButton>
        <CartButton>
          <ShoppingCart weight="fill" />
        </CartButton>
      </ButtonsContainer>
    </HeaderContainer>
  )
}
