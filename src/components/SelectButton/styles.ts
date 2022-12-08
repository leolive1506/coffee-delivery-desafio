import styled from 'styled-components'

interface SelectButtonProps {
  isActive: boolean
}

export const SelectButton = styled.button<SelectButtonProps>`
  display: flex;
  padding: 1rem;
  flex: 1;
  align-items: center;
  gap: 0.75rem;
  border-radius: 6px;
  font-size: 0.75rem;
  text-transform: uppercase;
  background: ${(props) =>
    props.theme[props.isActive ? 'purple-light' : 'base-button']};
  color: ${(props) => props.theme['base-text']};
  border: ${(props) => (props.isActive ? '1px' : 0)} solid
    ${(props) => props.theme.purple};

  svg {
    width: 1rem;
    height: 1rem;
    color: ${(props) => props.theme.purple};
  }

  :hover {
    background: ${(props) => props.theme['base-hover']};
    color: ${(props) => props.theme['base-subtitle']};
  }
`
