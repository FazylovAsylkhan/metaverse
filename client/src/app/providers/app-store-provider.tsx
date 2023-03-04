import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { user } from '@entities/user';
import { wallet } from '@entities/wallet';

const store = configureStore({
  reducer: { user, wallet },
});

interface IProps {
  children: React.ReactNode;
}

export function AppStore(props: IProps): JSX.Element {
  const { children } = props;

  return <Provider store={store}>{children}</Provider>;
}

export type IRootState = ReturnType<typeof store.getState>;
export type IAppDispatch = typeof store.dispatch;
