import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import {
  participationListingTableReducer,
  participationListingApi,
} from '@entities/participation-listing';
import { metamaskExtensionReducer } from '@entities/metamask-extension';
import { registrationReducer } from '@entities/registration';
import { walletReducer } from '@entities/connection-wallet';

const store = configureStore({
  reducer: {
    metamaskExtension: metamaskExtensionReducer,
    participationListingTable: participationListingTableReducer,
    registration: registrationReducer,
    wallet: walletReducer,
    [participationListingApi.reducerPath]: participationListingApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(participationListingApi.middleware),
});

interface IProps {
  children: React.ReactNode;
}

export function AppStoreProvider(props: IProps): JSX.Element {
  const { children } = props;

  return <Provider store={store}>{children}</Provider>;
}

export type IRootState = ReturnType<typeof store.getState>;
export type IAppDispatch = typeof store.dispatch;
