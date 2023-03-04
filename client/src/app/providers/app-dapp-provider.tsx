import React from 'react';
import { DAppProvider } from '@usedapp/core';
import { configDapp } from '@shared/config';

interface IProps {
  children: React.ReactNode;
}

export function AppDappProvider(props: IProps): JSX.Element {
  const { children } = props;

  return <DAppProvider config={configDapp}>{children}</DAppProvider>;
}
