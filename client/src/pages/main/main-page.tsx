import React from 'react';
import { Preview } from '@widgets/preview';
import { BetaTestRegistration } from '@widgets/beta-test-registration';

export function MainPage(): JSX.Element {
  return (
    <>
      <Preview />
      <BetaTestRegistration />
    </>
  );
}
