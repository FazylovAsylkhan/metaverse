import { createGlobalStyle } from 'styled-components';

export const StyledApp = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Roboto:ital,wght@0,400;1,700&display=swap');
  body {
    background-color: ${(props) => props.theme.palette.contrast};
    color: ${(props) => props.theme.palette.secondary.default};
  }
  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.palette.primary.default};
    border-radius: ${(props) => props.theme.common.borderRadius};
  }
  ::-webkit-scrollbar {
    position: absolute;
    width: 4px;
    height: 4px;
    background: ${(props) => props.theme.palette.secondary.default}
  }
`;
