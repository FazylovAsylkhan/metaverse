import React from 'react';
import {
  AppDappProvider,
  AppThemeProvider,
  AppStoreProvider,
  AppRouterProvider,
} from './providers';
import { GlobalStyle } from './styles';

export function App(): JSX.Element {
  return (
    <AppThemeProvider>
      <AppDappProvider>
        <AppStoreProvider>
          <GlobalStyle />
          <AppRouterProvider />
        </AppStoreProvider>
      </AppDappProvider>
    </AppThemeProvider>
  );
}
