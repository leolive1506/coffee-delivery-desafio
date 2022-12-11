import Logo from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import {
  HeaderContainer,
  ButtonsContainer,
  LocationButton,
  CartButton,
  CountShoppingCart,
} from './styles'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CoffeesContext } from '../../context/CoffeesContext'

export function Header() {
  const { coffeesSelected } = useContext(CoffeesContext)
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
            {coffeesSelected.length > 0 && (
              <CountShoppingCart>{coffeesSelected.length}</CountShoppingCart>
            )}
          </NavLink>
        </CartButton>
      </ButtonsContainer>
    </HeaderContainer>
  )
}
