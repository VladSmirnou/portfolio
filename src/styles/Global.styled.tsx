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
    /* line-height: 1.2; */
    background-color: ${theme.colors.primaryBg};
  }
  
  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    text-align: center;
  }

  a:visited {
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

  section > div > h2 {
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    font-size: 48px;
    line-height: 72px;

    position: relative;

    &::before {
      content: "";
      display: inline-block;
      left: calc(50% - 50px);
      right: calc(50% - 50px);
      height: 4px;
      border-radius: 2px;
      bottom: -8px;
      background-color: ${theme.colors.brand};

      position: absolute;
    }
  }
`
