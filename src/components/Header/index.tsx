import Logo from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import {
  HeaderContainer,
  ButtonsContainer,
  LocationButton,
  CartButton,
} from './styles'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/" title="Página inicial">
        <img src={Logo} alt="Logo" />
      </NavLink>
      <ButtonsContainer>
        <LocationButton>
          <MapPin weight="fill" />
          Porto Alegre, RS
        </LocationButton>
        <CartButton>
          <NavLink to="/checkout" title="Pagamento">
            <ShoppingCart weight="fill" />
          </NavLink>
        </CartButton>
      </ButtonsContainer>
    </HeaderContainer>
  )
}
