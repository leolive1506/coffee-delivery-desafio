import styled from 'styled-components'

export const HeaderContainer = styled.header`
  max-width: 1120px;
  margin: 0 auto;
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

const BaseButton = styled.button`
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
`

export const LocationButton = styled(BaseButton)`
  background: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme.purple};
`
export const CartButton = styled(BaseButton)`
  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme.yellow};
`
