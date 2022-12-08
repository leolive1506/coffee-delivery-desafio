import styled from 'styled-components'

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
