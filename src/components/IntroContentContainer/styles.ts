import styled from 'styled-components'
import { defaultTheme } from '../../styles/themes/default'

interface ContainerProps {
  svgColor: keyof typeof defaultTheme
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  gap: 0.5rem;

  svg {
    width: 1.375rem;
    height: 1.375rem;
    color: ${(props) => props.theme[props.svgColor]};
  }

  h3 {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 1rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    width: 530px;
    height: 21px;

    font-size: 0.875rem;

    display: flex;
    align-items: center;
    color: ${(props) => props.theme['base-text']};
  }
`
