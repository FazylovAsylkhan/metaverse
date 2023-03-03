import { DefaultTheme } from 'styled-components';

export const defaultTheme: DefaultTheme = {
  common: {
    borderRadius: '30px',
  },
  palette: {
    primary: {
      default: '#E75626',
      hover: '#BE3B10',
      inactive: '#7F3720',
    },
    secondary: {
      default: '#FFFFFF',
      inactive: '#8B8B8C',
    },
    contrast: '#171719',
    additional: '#C7C7C7',
  },
  fonts: {
    family: {
      secondary: 'Open Sans, sans-serif',
      primary: 'Roboto, sans-serif',
    },
    height: '120%',
  },
};
