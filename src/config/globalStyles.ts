import { createGlobalStyle } from 'styled-components';
import type { Theme } from '@mui/material/styles';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    shadows: string[];
  }
}

export default createGlobalStyle`
  html,
  body,
  #root {
    height: 100%;
    margin: 0;
    display: flex;
    flex: 1;
    max-width: 100%;
    font-family: ${({ theme }) => theme.typography.fontFamily};
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
`;
