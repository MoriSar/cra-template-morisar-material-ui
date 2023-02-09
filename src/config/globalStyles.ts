import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle` 
  html,
  body,
  #root {
    height: 100%;
    margin: 0;
    display: flex;
    flex: 1;
    font-size: 12px;
    max-width: 100%;
  }

  #root > div {
    flex: 1 1 100%;
    width: 100%;
  }

  div {
    box-sizing: border-box;
  }
  a {
  text-decoration: none;
  }
`
