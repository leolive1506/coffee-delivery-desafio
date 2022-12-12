import styled from 'styled-components'

export const IntroContainer = styled.div`
  margin-top: 5rem;

  h1 {
    font-size: 2rem;
    color: ${(props) => props.theme['yellow-dark']};
  }

  p {
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const GridContainer = styled.div`
  margin-top: 2.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export const Gradient = styled.div`
  position: relative;
  border-radius: 6px 36px;
  background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  padding: 1px;
`
export const ListContainer = styled.ul`
  height: 100%;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  position: relative;
  border-radius: 6px 36px;
  background: ${(props) => props.theme.background};

  list-style: none;
  font-size: 1rem;
  color: ${(props) => props.theme['base-text']};

  strong {
    font-weight: bold;
  }
`
export const ListItem = styled.li``
