import React, { useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useEthers } from '@usedapp/core';
import { Header } from '@shared/styles';
import { Button, Logo } from '@shared/ui';
import { connected, disconnected, selectWallet } from '@entities/wallet';
import { useAppSelector } from '@shared/hooks';

export function ConnectionWallet(): JSX.Element {
  const dispatch = useDispatch();
  const { account, deactivate, activateBrowserWallet } = useEthers();
  const wallet = useAppSelector(selectWallet);

  useLayoutEffect(() => {
    if (account !== undefined) {
      dispatch(connected(account));
    } else {
      dispatch(disconnected());
    }
  }, [account, dispatch]);

  return (
    <Header
      justifyContent="space-between"
      alignItems="center"
      padding="14px 70px"
      display="flex">
      <Logo>Logo</Logo>
      {account !== undefined && wallet !== undefined ? (
        <Button onClick={() => deactivate()}>{account}</Button>
      ) : (
        <Button onClick={() => activateBrowserWallet()}>Connect</Button>
      )}
    </Header>
  );
}
