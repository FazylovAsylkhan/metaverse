import React from 'react';
import { Preview } from '@widgets/preview';
import { BetaTestRegistration } from '@widgets/beta-test-registration';
import { ErrorBoundary } from '@shared/ui';

export function MainPage(): JSX.Element {
  return (
    <ErrorBoundary>
      <Preview />
      <BetaTestRegistration />
    </ErrorBoundary>
  );
}
