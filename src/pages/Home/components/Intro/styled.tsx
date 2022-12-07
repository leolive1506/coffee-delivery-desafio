import styled from 'styled-components'
import { defaultTheme } from '../../../../styles/themes/default'

export const IntroContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  padding: 5.75rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const TitlesContainer = styled.div`
  h1 {
    width: 588px;
    height: 124px;

    /* Title/Title XL */
    font-family: 'Baloo 2';
    /* font-style: normal; */
    font-weight: 800;
    font-size: 3rem;

    color: ${(props) => props.theme['base-title']};
  }

  p {
    margin-top: 1rem;
    width: 588px;
    height: 52px;
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const CompanyFeatureContainer = styled.div`
  margin-top: 4.125rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

interface CompanyFeatureProps {
  backgroundIcon: keyof typeof defaultTheme
}

export const CompanyFeature = styled.div<CompanyFeatureProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  > div {
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
  }

  > span {
    /* width: 187px;
    height: 21px; */

    font-size: 1rem;

    /* Base/Text */
    color: ${(props) => props.theme['base-text']};
  }
`

export const CoffeDeliveryContainer = styled.div`
  justify-self: end;

  img {
    width: 476px;
    height: 360px;
  }

  @media (max-width: 768px) {
    order: -1;
    justify-self: center;
  }
`
