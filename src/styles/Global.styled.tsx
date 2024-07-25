import { createGlobalStyle } from "styled-components";
import { theme } from './Theme';


export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: Nunito, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${theme.colors.font.major};
    background-color: ${theme.colors.primaryBg};
  }
  
  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    text-align: center;
  }

  a:visited, a:link {
    color: ${theme.colors.font.major}
  }

  button {
    background-color: unset;
    border: none;
    color: ${theme.colors.font.major}
  }

  a, button {
    height: 43px;
  }

  section {
    margin-top: 144px;

    @media ${theme.media.mobile} {
      margin-top: 80px;
    }
  }
  
`
