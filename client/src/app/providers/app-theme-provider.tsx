import React from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '@shared/themes';

interface IProps {
  children: React.ReactNode;
}

export function AppThemeProvider(props: IProps): JSX.Element {
  const { children } = props;
  return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>;
}
