import { createGlobalStyle } from "styled-components";
import {
  themeColors,
  themeFontsSize,
  themeTypography,
} from "./themes/mainTheme";

const GlobalStyle = createGlobalStyle`
  *,
  ::after,
  ::before {
  box-sizing: border-box;
  }

  html {
    font-family: ${themeTypography.primary};
  }
  
  body,
  h1,
  h2,
  p {
    margin: 0;
  }
  
  body {
    background-color: ${themeColors.mainBackground};
    min-height: 100vh;
    color: ${themeColors.darkGrey};
    font-size: ${themeFontsSize.small};
  }

  ul,
  li {
    list-style: none;
    padding-left: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  input,
  select {
    font: inherit;
  }

  button {
    cursor: pointer;
    font: inherit;
    color: inherit;
    background: none;
    border: none;
  }

  img {
    max-width: 100%;
  }
`;

export default GlobalStyle;
