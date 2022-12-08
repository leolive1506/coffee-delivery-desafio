import styled from 'styled-components'

export const CoffeListContainer = styled.div`
  h2 {
    font-size: 2rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`
export const ContainerCards = styled.div`
  margin-top: 3.375rem;

  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 2rem;
`
