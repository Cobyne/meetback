import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  body {
    font-family: 'Arial', monospace;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    background: ${({ theme }) => theme.background};
  }

  p {
    margin: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 0;
  }

  a, button {
    outline: none;
  }
`
