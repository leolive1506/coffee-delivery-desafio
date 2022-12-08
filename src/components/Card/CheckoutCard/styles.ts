import styled from 'styled-components'

export const CheckoutCardContainer = styled.div`
  display: flex;
  /* justify-content: space-between; */
  align-items: flex-start;
  padding: 0.5rem 0.25rem;
  gap: 3.125rem;

  img {
    width: 4rem;
    height: 4rem;
  }

  > div {
    display: flex;
    gap: 1.25rem;
  }
`

export const Content = styled.div`
  h3 {
    font-family: 'Roboto';
    font-size: 1rem;
    font-weight: normal;
    color: ${(props) => props.theme['base-subtitle']};
  }

  > div {
    margin-top: 0.5rem;
    display: flex;
    gap: 0.5rem;
  }
`
export const RemoveButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  padding: 0 0.5rem;
  border-radius: 6px;
  text-transform: uppercase;
  font-size: 0.75rem;
  color: ${(props) => props.theme['base-text']};
  background: ${(props) => props.theme['base-button']};

  svg {
    width: 1rem;
    height: 1rem;
    color: ${(props) => props.theme.purple};
  }
`

export const PriceContainer = styled.div`
  flex: 1;
  width: 100%;

  strong {
    /* Text/Bold M */
    font-family: 'Roboto';
    font-weight: bold;
    font-size: 1rem;
    /* identical to box height, or 21px */
    text-align: right;

    /* Base/Text */
    color: ${(props) => props.theme['base-text']};
  }
`
