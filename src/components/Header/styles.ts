import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 2rem 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 1.3rem;
  justify-content: space-between;
  align-items: center;
`

export const LocationButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  border: 0;
  padding: 0.5rem;

  border-radius: 6px;

  svg {
    width: 1.375rem;
    height: 1.375rem;
  }
  background: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme.purple};
`
export const CartButton = styled.div`
  a {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;

    border: 0;
    padding: 0.5rem;

    border-radius: 6px;
    background: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme.yellow};

    svg {
      width: 1.375rem;
      height: 1.375rem;
    }
  }
`

export const CountShoppingCart = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  width: 1.25rem;
  height: 1.25rem;
  right: -0.521875rem;
  top: -0.5rem;

  background: ${(props) => props.theme['yellow-dark']};
  border-radius: 1000px;

  font-weight: bold;
  font-size: 0.75rem;
  /* identical to box height, or 16px */
  text-align: center;

  /* Base/White */
  color: ${(props) => props.theme.white};
`
