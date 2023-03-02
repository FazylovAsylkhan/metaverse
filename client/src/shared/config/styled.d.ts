import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    common: {
      borderRadius: string;
    };
    palette: {
      primary: {
        hover: string;
        default: string;
        inactive: string;
      };
      secondary: {
        default: string;
        inactive: string;
      };
      contrast: string;
      additional: string;
    };
    fonts: {
      primary: string;
      secondary: string;
    };
  }
}
