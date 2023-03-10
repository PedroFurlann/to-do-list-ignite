import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px #262626;
  }  

  body {
    background-color: #262626;
    color: #fff;
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400, 1rem, 'Robot', sans-serif;
    --webkit-font-smoothing: antialiased;
  }
`
