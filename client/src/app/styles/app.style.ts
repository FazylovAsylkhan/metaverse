import { createGlobalStyle } from 'styled-components';

export const StyledApp = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto+Mono&display=swap');
  body {
    background-color: ${(props) => props.theme.palette.contrast};
  }
  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.palette.primary};
    border-radius: ${(props) => props.theme.common.borderRadius};
  }
  ::-webkit-scrollbar {
    position: absolute;
    width: 4px;
    height: 4px;
    background: ${(props) => props.theme.palette.secondary}
  }
`;
