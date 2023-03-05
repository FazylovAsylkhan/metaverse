import { createGlobalStyle } from 'styled-components';

export const ResetStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }
  a {
    color: inherit;
    text-decoration: none;
    font-family: inherit;
    font-weight: inherit;
    font-size: inherit;
    line-height: inherit;
  }
  ul,
  li {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  button,
  iframe {
    outline: none;
    border: none;
    padding: 0;
    background: transparent;
  }
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  img {
    font-family: inherit;
    margin: 0;
    padding: 0;
  }
`;
