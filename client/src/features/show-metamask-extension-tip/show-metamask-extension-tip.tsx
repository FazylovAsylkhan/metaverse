import React from 'react';
import { useAppDispatch } from '@shared/hooks';
import {
  MetamaskExtensionConfirmation,
  shownTip,
} from '@entities/metamask-extension';

export function ShowMetamaskExtensionTip(): JSX.Element | null {
  const dispatch = useAppDispatch();

  return (
    <MetamaskExtensionConfirmation
      buttonText="Skip this step"
      title="Metamask extension"
      description="To work with our application, you have to install the"
      link={{
        text: 'Metamask browser extension',
        href: 'https://metamask.io/',
      }}
      onConfirm={() => dispatch(shownTip())}
    />
  );
}
