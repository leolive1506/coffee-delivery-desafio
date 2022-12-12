import styled from 'styled-components'

export const InputsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  width: 100%;
  gap: 0.75rem;
`

interface InputProps {
  col?: 1 | 2 | 3 | 4 | 5 | 6
}

export const Input = styled.input<InputProps>`
  grid-column: span ${(props) => props.col || 1} / span
    ${(props) => props.col || 1};

  padding: 0.75rem;
  gap: 0.25rem;

  background: ${(props) => props.theme['base-input']};

  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 4px;

  ::placeholder {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-label']};
  }

  font-size: 0.875rem;
  /* Base/Text */
  color: ${(props) => props.theme['base-text']};
`

export const SelectButtonsContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  width: 100%;
`
