import React from 'react';
import { Header } from '@shared/styles';
import { Logo } from '@shared/ui';
import { ConnectWallet } from '@features/connect-wallet';

export function HeaderWithConnectionWallet(): JSX.Element {
  return (
    <Header
      justifyContent="space-between"
      alignItems="center"
      padding="14px 70px"
      display="flex">
      <Logo>Logo</Logo>
      <ConnectWallet />
    </Header>
  );
}
