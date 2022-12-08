import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    border: 0;
    box-sizing: border-box
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-dark']}
  }

  body {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme['base-text']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;

    font-weight: 400;
    font-size: 0.8rem;
    line-height: 130%;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-family: 'Baloo 2';
    font-weight: 800;
    line-height: 130%;
	}

  p, span {
    line-height: 130%;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`
