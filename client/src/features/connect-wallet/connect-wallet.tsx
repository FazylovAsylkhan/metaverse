import React, { useLayoutEffect } from 'react';
import { useEthers } from '@usedapp/core';
import { useAppDispatch } from '@shared/hooks';
import {
  ConnectionWallet,
  walletConnected,
  walletDisconnected,
} from '@entities/connection-wallet';

export function ConnectWallet(): JSX.Element {
  const dispatch = useAppDispatch();
  const { account, activateBrowserWallet } = useEthers();

  useLayoutEffect(() => {
    if (account !== undefined) {
      dispatch(walletConnected(account));
    } else {
      dispatch(walletDisconnected());
    }
  }, [account, dispatch]);

  return (
    <ConnectionWallet
      addressOfWallet={account}
      textButton="Connect metamask"
      onConnect={() => activateBrowserWallet()}
    />
  );
}
