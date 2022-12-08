import styled from 'styled-components'

export const Card = styled.div`
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;
  padding-bottom: 1.25rem;

  > strong {
    margin-top: 1rem;
    font-weight: bold;
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
    display: flex;
    justify-content: center;
  }

  p {
    margin-top: 0.5rem;
    font-size: 0.875rem;
    text-align: center;
    color: ${(props) => props.theme['base-label']};
  }
`

export const ContainerImg = styled.div`
  display: flex;
  justify-content: center;

  img {
    margin-top: -1.25rem;
    width: 7.5rem;
    height: 7.5rem;
    object-fit: cover;
  }
`

export const ContainerBadges = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  margin-top: 0.75rem;
`

export const Badge = styled.span`
  padding: 4px 8px;
  /* Brand/Yellow Light */

  background: ${(props) => props.theme['yellow-light']};
  border-radius: 100px;

  font-weight: bold;
  font-size: 0.625rem;

  text-transform: uppercase;

  color: ${(props) => props.theme['yellow-dark']};
`

export const PriceAndActionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.4375rem;
  padding: 0 1.5rem;
  margin-top: 2.0625rem;

  span {
    strong {
      margin-left: 5px;
      font-size: 1.5rem;
      /* or 31px */
      text-align: right;

      /* Base/Text */
      color: ${(props) => props.theme['base-text']};
    }
  }
`

export const ActionsContainer = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  gap: 0.5rem;
`

export const QuantityButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 0.25rem;

  width: 72px;
  height: 38px;

  /* Base/Button */
  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;

  button {
    border: 0;
    background: none;

    color: ${(props) => props.theme.purple};
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;

    :focus {
      box-shadow: 0 0 0 0px;
    }
  }

  span {
    font-size: 1rem;
    color: ${(props) => props.theme['base-title']};
  }
`

export const CartButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 0.5rem;

  width: 2.375rem;
  height: 2.375rem;

  background: ${(props) => props.theme['purple-dark']};
  border-radius: 6px;

  svg {
    color: ${(props) => props.theme['base-card']};
    width: 100%;
    height: 100%;
  }
`
