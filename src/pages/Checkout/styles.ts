import styled from 'styled-components'
import { CheckoutCardContainer } from '../../components/Card/CheckoutCard/styles'

export const GridContainer = styled.form`
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
