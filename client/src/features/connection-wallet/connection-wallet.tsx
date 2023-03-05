import React, { useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useEthers } from '@usedapp/core';
import { Header, Button, H2 } from '@shared/styles';
import { Logo } from '@shared/ui';
import { connected, disconnected } from '@entities/user';

export function ConnectionWallet(): JSX.Element {
  const dispatch = useDispatch();
  const { account, activateBrowserWallet } = useEthers();

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
      {account !== undefined ? (
        <H2 color="primary" fontSize="18px" maxWidth="145px">
          {account}
        </H2>
      ) : (
        <Button onClick={() => activateBrowserWallet()}>Connect</Button>
      )}
    </Header>
  );
}
