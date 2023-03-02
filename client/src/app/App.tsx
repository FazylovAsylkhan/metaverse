import React from 'react';
import { AppThemeProvider } from './providers';
import { AppRouter } from './router';
import { GlobalStyle } from './styles';

export function App(): JSX.Element {
  return (
    <AppThemeProvider>
      <GlobalStyle />
      <AppRouter />
    </AppThemeProvider>
  );
}
