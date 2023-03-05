import React from 'react';
import { AppDappProvider, AppThemeProvider } from './providers';
import { AppStore } from './providers/app-store-provider';
import { AppRouter } from './router';
import { GlobalStyle } from './styles';

export function App(): JSX.Element {
  return (
    <AppThemeProvider>
      <AppDappProvider>
        <AppStore>
          <GlobalStyle />
          <AppRouter />
        </AppStore>
      </AppDappProvider>
    </AppThemeProvider>
  );
}
