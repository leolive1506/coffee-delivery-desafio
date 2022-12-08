import styled from 'styled-components'
import { CheckoutCardContainer } from '../../components/Card/CheckoutCard/styles'
import { defaultTheme } from '../../styles/themes/default'

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(640px, auto) minmax(448px, auto);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const GridCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.9375rem;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  padding: 2.5rem;

  /* Base/Card */
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;
`

export const ContentCoffes = styled(Content)`
  gap: 0;
  > .${CheckoutCardContainer.styledComponentId} {
    padding-bottom: 1.5rem;
  }

  .${CheckoutCardContainer.styledComponentId} {
    border-bottom: 1px solid ${(props) => props.theme['base-button']};
  }

  .${CheckoutCardContainer.styledComponentId}
    + .${CheckoutCardContainer.styledComponentId} {
    padding: 1.5rem 0;
    border-top: 1px solid ${(props) => props.theme['base-button']};
  }
`

interface IntroContentContainerProps {
  svgColor: keyof typeof defaultTheme
}

export const IntroContentContainer = styled.div<IntroContentContainerProps>`
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

export const DescriptionListContainer = styled.dl`
  width: 100%;
  padding-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const DescriptionListItem = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Dt = styled.dt`
  font-size: 0.875rem;
  color: ${(props) => props.theme['base-text']};
`

export const Dd = styled.dd`
  font-size: 1rem;
  color: ${(props) => props.theme['base-text']};
`

export const DtBold = styled(Dt)`
  font-weight: bold;
  font-size: 1.25rem;
`

export const DdBold = styled(Dd)`
  font-weight: bold;
  font-size: 1.25rem;
`

export const FinalizeButton = styled.button`
  margin-top: 1.5rem;
  width: 100%;
  padding: 0.75rem 0.5rem;
  gap: 0.25rem;

  border-radius: 6px;
  font-weight: bold;
  font-size: 0.875rem;
  line-height: 160%;
  /* or 22px */

  text-transform: uppercase;
  background: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};
  font-stretch: 100;
  transition: backgroud-color 1s ease-out;

  :hover {
    background: ${(props) => props.theme['yellow-dark']};
  }
`
