import styled from 'styled-components'
import { defaultTheme } from '../../styles/themes/default'

interface ContainerProps {
  backgroundIcon: keyof typeof defaultTheme
}

export const Container = styled.div<ContainerProps>`
  background: ${(props) => props.theme[props.backgroundIcon]};
  color: ${(props) => props.theme.background};

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;

  width: 2rem;
  height: 2rem;
  border-radius: 50%;

  svg {
    width: 1rem;
    height: 1rem;
  }
`
